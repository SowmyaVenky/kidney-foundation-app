export const questions = {
  "title": "Kidney Foundation Questionnaire",
  "logo": "https://www.kidney.org/sites/default/files/nkf_metatag_logo_v1-01.jpg",
  "logoWidth": "auto",
  "logoHeight": "80px",
  "logoFit": "cover",
  "completedHtmlOnCondition": [
    {
      "expression": "{nps-score} <= 6 or {rebuy} = false",
      "html": "Thanks for your feedback! We highly value all ideas and suggestions from our customers, whether they're positive or critical. In the future, our team might reach out to you to learn more about how we can further improve our product so that it exceeds your expectations."
    },
    {
      "expression": "{nps-score} = 6 or {nps-score} = 7",
      "html": "Thanks for your feedback. Our goal is to create the best possible product, and your thoughts, ideas, and suggestions play a major role in helping us identify opportunities to improve."
    },
    {
      "expression": "{nps-score} >= 8",
      "html": "Thanks for your feedback. It's great to hear that you're a fan of our product. Your feedback helps us discover new opportunities to improve it and make sure you have the best possible experience."
    }
  ],
  "pages": [
    {
      "name": "personalinfo",
      "title": "Personal Information",
      elements: [
        {
          name: "FirstName",
          title: "Enter your first name (5-50 chars):",
          type: "text",
          "isRequired": true,
          "validators": [{
            "type": "text",
            "minLength": 5,
            "maxLength": 50
          }]
        }, {
          name: "LastName",
          title: "Enter your last name (5-50 chars):",
          type: "text",
          "isRequired": true,
          "validators": [{
            "type": "text",
            "minLength": 5,
            "maxLength": 50
          }]
        }, {
          name: "Age",
          title: "Enter your age (0 - 100 years):",
          type: "text",
          "isRequired": true,
          "validators": [{
            "type": "numeric",
            "text": "Value must be within the range of 0 to 100",
            "minValue": 0,
            "maxValue": 100
          }]
        },
        {
          "name": "email",
          "type": "text",
          "title": "E-mail Validator",
          "description": "Enter an e-mail address",
          "isRequired": true,
          "validators": [
            { "type": "email" }
          ]
        }
      ]
    },
    {
      "name": "ckdpage",
      "title": "CKD Questionnaire",
      elements: [
        {
          "type": "dropdown",
          "name": "ckdq1",
          "title": "How long have you experienced fatigue and swelling?",
          "isRequired": true,
          "showNoneItem": true,
          "showOtherItem": false,
          "choices": ["I have had symptoms recently."]
        },
        {
          "type": "dropdown",
          "name": "ckdq2",
          "title": "Do you have a history of high blood pressure?",
          "isRequired": true,
          "showNoneItem": true,
          "showOtherItem": false,
          "choices": ["I have a history of high blood pressure."]
        },
        {
          "type": "dropdown",
          "name": "ckdq3",
          "title": "Do you have a history of diabetes?",
          "isRequired": true,
          "showNoneItem": true,
          "showOtherItem": false,
          "choices": ["Father's side", "Mother's side", "Both the sides"]
        },
        {
          "type": "dropdown",
          "name": "ckdq4",
          "title": "Have you had recent kidney function tests?",
          "isRequired": true,
          "showNoneItem": true,
          "showOtherItem": false,
          "choices": ["I had a GFR test last month, and the results showed that it was low."]
        }
      ]
    },
    {
      "name": "kidneystones",
      "title": "Kidney Stones Questionnaire",
      elements: [
        //Kidney Stones.
        {
          "type": "dropdown",
          "name": "ks1",
          "title": "Have you recently experienced severe pain in your back or side?",
          "isRequired": true,
          "showNoneItem": true,
          "showOtherItem": false,
          "choices": ["I had severe back pain recently."]
        },
        {
          "type": "dropdown",
          "name": "ks2",
          "title": "Have you noticed blood when urinating?",
          "isRequired": true,
          "showNoneItem": true,
          "showOtherItem": false,
          "choices": ["I had a bloody urine recently."]
        },
        {
          "type": "dropdown",
          "name": "ks3",
          "title": "Do you have any family history of kidney stones?",
          "isRequired": true,
          "showNoneItem": false,
          "showOtherItem": false,
          "choices": ["Yes.", "No."]
        }
      ]
    },
    {
      "name": "pkdpage",
      "title": "PKD Questionnaire",
      elements: [
        //PKD Questions.  
        {
          "type": "dropdown",
          "name": "pkd1",
          "title": "Do you have a family history of PKD disease?",
          "isRequired": true,
          "showNoneItem": false,
          "showOtherItem": false,
          "choices": ["PKD runs in my family.", "No."]
        },
        {
          "type": "dropdown",
          "name": "pkd2",
          "title": "Have you experienced recurring kidney infections?",
          "isRequired": true,
          "showNoneItem": false,
          "showOtherItem": false,
          "choices": ["I've had multiple kidney infections.", "No."]
        },
        {
          "type": "dropdown",
          "name": "pkd3",
          "title": "Have you noticed abdominal swelling?",
          "isRequired": true,
          "showNoneItem": false,
          "showOtherItem": false,
          "choices": ["I've had abdominal swelling.", "No."]
        }
      ]
    },
    {
      "name": "glompage",
      "title": "Glomerulosclerosis Questionnaire",
      elements: [
        //GLOM Questions
        {
          "type": "dropdown",
          "name": "glom1",
          "title": "Have you had recent respiratory infections?",
          "isRequired": true,
          "showNoneItem": false,
          "showOtherItem": false,
          "choices": ["I had a respiratory infection recently.", "No."]
        },
        {
          "type": "dropdown",
          "name": "glom2",
          "title": "Do you have high blood pressure?",
          "isRequired": true,
          "showNoneItem": false,
          "showOtherItem": false,
          "choices": ["I've high blood pressure.", "No."]
        },
        {
          "type": "dropdown",
          "name": "glom3",
          "title": "Have you noticed foamy urine?",
          "isRequired": true,
          "showNoneItem": false,
          "showOtherItem": false,
          "choices": ["Yes, my urine appears foamy.", "No."]
        }
      ]
    },
    {
      "name": "utipage",
      "title": "UTI Questionnaire",
      elements: [
        //UTI Questions       
        {
          "type": "dropdown",
          "name": "uti1",
          "title": "Are you experiencing a burning sensation while you urinate?",
          "isRequired": true,
          "showNoneItem": false,
          "showOtherItem": false,
          "choices": ["I have a burning sensation.", "No."]
        },
        {
          "type": "dropdown",
          "name": "uti2",
          "title": "Have you noticed frequent urination?",
          "isRequired": true,
          "showNoneItem": false,
          "showOtherItem": false,
          "choices": ["I have been urinating frequently.", "No."]
        },
        {
          "type": "dropdown",
          "name": "uti3",
          "title": "Is there a strong odor in your urine?",
          "isRequired": true,
          "showNoneItem": false,
          "showOtherItem": false,
          "choices": ["My urine has a foul odor.", "No."]
        }
      ]
    }
  ]
};