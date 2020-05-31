select distinct sq.Patient_Id, sq.Patient_Name, sq.Age, sq.Hamlet, sq.Village, sq.Panchayat , sq.Follow_up_date from  (

select 
 distinct(pi.identifier )               AS 'Patient_Id',
  CONCAT(pn.given_name, " ", pn.family_name)                    AS 'Patient_Name',
concat(TIMESTAMPDIFF( YEAR, birthdate, o.date_created),'.',TIMESTAMPDIFF( MONTH, birthdate, o.date_created ) % 12) as 'Age',
  paddress.address1 AS Hamlet,
  paddress.address2 AS Village,
  paddress.city_village AS Panchayat,
  DATE_FORMAT(o.value_datetime, "%d-%b-%Y")      AS 'Follow_up_date'

from obs o 

inner join concept_name cn on cn.concept_id=o.concept_id 
and cn.concept_name_type like '%fully%' and cn.name in ('TB_Intake_Follow_Up','TB_Follow_Up') and o.voided=0 and cn.voided=0
inner join person p on p.person_id=o.person_id AND p.voided =0
inner join patient_identifier pi on p.person_id=pi.patient_id AND pi.voided is false
inner join patient_identifier_type PIT on pi.identifier_type=PIT.patient_identifier_type_id and PIT.name = 'Patient Identifier'
inner JOIN person_name pn ON pn.person_id = p.person_id AND pn.voided is false
inner JOIN person_address paddress ON p.person_id = paddress.person_id AND paddress.voided is false 
inner join encounter e on e.encounter_id=o.encounter_id and e.voided=0 
and cast(o.value_datetime AS DATE) between '#startDate#'AND '#endDate#'
inner join location l ON e.location_id = l.location_id AND l.retired is false and l.name like '%Bedawal%'
order by o.value_datetime desc
) as sq
group by sq.Patient_Id 
;