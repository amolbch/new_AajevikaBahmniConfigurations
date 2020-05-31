Bahmni.ConceptSet.FormConditions.rules = {
    
    //-----------------------------------------------------------------------
    //2_month_to_5_year_child_care
    //-----------------------------------------------------------------------
    '2MT5Y_Difficulty_Coughing_Breathing' : function (formName, formFieldValues) {
        var bre = formFieldValues['2MT5Y_Difficulty_Coughing_Breathing'];
        if (bre ==  "Ans_option_yes_hindi") {
            return {
                show: ["2MT5Y_How_Many_Days","2MT5Y_Fast_Breath","2MT5Y_Ribs_Fall"]
            }
        } else {
            return {
                hide: ["2MT5Y_How_Many_Days","2MT5Y_Fast_Breath","2MT5Y_Ribs_Fall"]
            }
        }
     },
    '2MT5Y_Does_Child _Have_Diarrhea' : function (formName, formFieldValues) {
        var dia = formFieldValues['2MT5Y_Does_Child _Have_Diarrhea'];
        if (dia ==  "Ans_option_yes_hindi") {
            return {
                show: ["2MT5Y_How_Many_Days","2MT5Y_Dehydration_Symptoms"]
            }
        } else {
            return {
                hide: ["2MT5Y_How_Many_Days","2MT5Y_Dehydration_Symptoms"]
            }
        }
     },
    '2MT5Y_Does_Baby_Have_Fever' : function (formName, formFieldValues) {
        var fev = formFieldValues['2MT5Y_Does_Baby_Have_Fever'];
        if (fev ==  "Ans_option_yes_hindi") {
            return {
                show: ["2MT5Y_From_How_many_Days","2MT5Y_Any_Of_These_Symptoms","2MT5Y_RDK","2MT5Y_Fever_Classification"]
            }
        } else {
            return {
                hide: ["2MT5Y_From_How_many_Days","2MT5Y_Any_Of_These_Symptoms","2MT5Y_RDK","2MT5Y_Fever_Classification"]
            }
        }
     },
     
      '2MT5Y_Does_Child_Have_Severe_Malnutrition' : function (formName, formFieldValues) {
        var fev = formFieldValues['2MT5Y_Does_Child_Have_Severe_Malnutrition'];
        if (fev ==  "Ans_option_yes_hindi") {
            return {
                show: ["2MT5Y_Treatment_Of_Severe_Malnutrition","2MT5Y_Any_Disease_Condition","2MT5Y_Appetite_Test","2MT5Y_Peanut_Allergy","2MT5Y_Is_SAM_complications","2MT5Y_Mantoux_Test"]
            }
        } else {
            return {
                hide: ["2MT5Y_Treatment_Of_Severe_Malnutrition","2MT5Y_Any_Disease_Condition","2MT5Y_Appetite_Test","2MT5Y_Peanut_Allergy","2MT5Y_Is_SAM_complications","2MT5Y_Mantoux_Test"]
            }
        }
     },


     '2MT5Y_Treatment_Of_Severe_Malnutrition' : function (formName, formFieldValues) {
        var fev1 = formFieldValues['2MT5Y_Treatment_Of_Severe_Malnutrition'];
       
       if (fev1 ==  "Ans_option_no_hindi") {
            return {
                show: ["2MT5Y_TB_History","2MT5Y_Any_Disease_Condition","2MT5Y_Is_SAM_complications","2MT5Y_If_Other_Specify"],
                hide: ["2MT5Y_Number_Of_RUTF_Packets","2MT5Y_Child_Recovery_From_SAM"]
            }
        }
         else {
            return {
                hide: ["2MT5Y_TB_History","2MT5Y_Any_Disease_Condition","2MT5Y_Is_SAM_complications","2MT5Y_If_Other_Specify"],
                show: ["2MT5Y_Number_Of_RUTF_Packets","2MT5Y_Child_Recovery_From_SAM"]
            }
        }
     },


    //------------------------------------------------------------------------
      
    //----------------------------------------------------------------------
    // 2MonthInfant
    //----------------------------------------------------------------------

    '2M_Have_Diarihea' : function (formName, formFieldValues) {
        var yes = formFieldValues['2M_Have_Diarihea'];
        if(yes == 'Ans_option_yes_hindi') {
            return {
                show: ["2M_Any_Symp"]
            }

        } else {
            return {
                hide: ["2M_Any_Symp"]
            }
        }
    },
    
    //--------------------------------------------------------------------------------------

    //-----------------------------------
    //ADULT-Case-Sheet
    //-----------------------------------

    /*'ACS_CF_General': function(formName, formFieldValues) {
        var gen = formFieldValues['ACS_CF_General'];
        if (gen == 'ACS_Enlarged lymph node') {
            return {
                show: ["ACS_Lymph_nodes"]
            }
        } else {
            return {
                hide: ["ADULTCaseSheet_General_Duration","ADULTCaseSheet_Grade"]
            }
        }
     },
     
   */

    //-----------------------------------------------------------------------
    //Tuberculosis Intake Form
    //-----------------------------------------------------------------------

    'TB_Intake_Received_Treatment' :  function (formName, formFieldValues) {
        var resv = formFieldValues['TB_Intake_Received_Treatment'];
         if (resv == true) {
            return {
                enable: ["TB_Intake_When",
                        "TB_Intake_For_How_long",
                        "TB_Intake_Past_Treatment"]
            }
        } else {
            return {
                disable: ["TB_Intake_When",
                        "TB_Intake_For_How_long",
                        "TB_Intake_Past_Treatment"]
            }
        }
     },
     'TB_Intake_Primary Site' :  function (formName, formFieldValues) {
        var prima = formFieldValues['TB_Intake_Primary Site'];
         if (prima == 'TB_Intake_Extrapulmonary') {
            return {
                enable: ["TB_Intake_Location_Extrapulmonary"]
            }
        } else {
            return {
                disable: ["TB_Intake_Location_Extrapulmonary"]
            }
        }
     },


    //----------------------------ANC Form-------------------------------------

  'ANC_Any_Bad_OH':  function (formName, formFieldValues) {
          var Val = formFieldValues['ANC_Any_Bad_OH'];
           if (Val == true) {
              return {
                  enable: ["ANC_Bad_OH_Specify"]
              }
          } else {
              return {
                  disable: ["ANC_Bad_OH_Specify"]

              }
          }
      },
      
 //----------------------------MTP Followup Form-------------------------------------

  'MTP_FollowUp_Started_Bleeding':  function (formName, formFieldValues) {
          var Val = formFieldValues['MTP_FollowUp_Started_Bleeding'];
           if (Val == true) {
              return {
                  enable: ["MTP_FollowUp_Bleeding_Excessive"]
              }
          } else {
              return {
                  disable: ["MTP_FollowUp_Bleeding_Excessive"]

              }
          }
      },

 //----------------------------------Delivery form------------------------------------------------------------------------------------------------------

  'Del_Outcome' :  function (formName, formFieldValues) {
        var out = formFieldValues['Del_Outcome'];
         if (out == 'Del_Outcome_Delivered_in_Clinic') {
            return {
                enable: ["Del_complications_in_delivery","Del_Outcome_Delivery","Del_Date_of_Delivery"],
                disable: ["Del_specify_reason"]
            }
        } if (out == 'Del_Outcome_Referred') {
            return {
                enable: ["Del_specify_reason"],
                disable: ["Del_complications_in_delivery","Del_Outcome_Delivery","Del_Date_of_Delivery"]
            }
        } else {
            return {
                disable: ["Del_specify_reason","Del_complications_in_delivery","Del_Outcome_Delivery","Del_Date_of_Delivery"]
            }
        }
    },

    'Del_complications_in_delivery' :  function (formName, formFieldValues) {
        var del = formFieldValues['Del_complications_in_delivery'];
         if (del == true) {
            return {
                enable: ["Del_Specify_complications"]
            }
        } else {
            return {
                disable: ["Del_Specify_complications"]
            }
        }
    },

    'Del_Outcome_Delivery' :  function (formName, formFieldValues) {
        var del = formFieldValues['Del_Outcome_Delivery'];
         if (del == 'Del_OD_Live_birth') {
            return {
                enable: ["Del_Newborn_Weight"]
            }
        } else {
            return {
                disable: ["Del_Newborn_Weight"]
            }
        }
    },

    'Del_ANY_Newborn_Compli' :  function (formName, formFieldValues) {
        var del = formFieldValues['Del_ANY_Newborn_Compli'];
         if (del == true) {
            return {
                enable: ["Del_Newborn_complication"]
            }
        } else {
            return {
                disable: ["Del_Newborn_complication"]
            }
        }
    },


    //-----------------------------------------------------------------------

    //-----------------------------------------------------------------------
    //TB_FollowUP_Form
    //-----------------------------------------------------------------------
    'TB_FollowUP_Treatment_Compliance' :  function (formName, formFieldValues) {
        var adh = formFieldValues['TB_FollowUP_Treatment_Compliance'];
         if (adh == 'TB_FollowUP_TC_Poor') {
            return {
                enable: ["TB_FollowUP_Reason_For_Not_Adhering"]
            }
        } else {
            return {
                disable: ["TB_FollowUP_Reason_For_Not_Adhering"]
            }
        }
    },

    //-----------------------------------------------------------------------
    //Referral Form
    //-----------------------------------------------------------------------

    'RF_Type_Of_Referral' :  function (formName, formFieldValues) {
        var ref = formFieldValues['RF_Type_Of_Referral'];
         if (ref == 'RF_Scheduled') {
            return {
                enable: ["RF_Date_Of_Scheduled"],
                disable: ["RF_Outcome_Section"]
            }
        } if (ref == 'RF_Emergency') {
            return {
                enable: ["RF_Outcome_Section"],
                disable: ["RF_Date_Of_Scheduled"]
            }
        } else {
            return {
                disable: ["RF_Outcome_Section","RF_Date_Of_Scheduled"]
            }
        }
    },
    'RF_Institute_Name' :  function (formName, formFieldValues) {
        var inst = formFieldValues['RF_Institute_Name'];
         if (inst == 'RF_Inst_Others') {
            return {
                enable: ["RF_Other_Institution"]
            }
        } else {
            return {
                disable: ["RF_Other_Institution"]
            }
        }
    }

    //-----------------------------------------------------------------------

    

};

