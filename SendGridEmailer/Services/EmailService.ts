import { sendGridTestData } from "../Models/TemplateModel";
import { executeSendEmailAction } from "./DynamicsActionService";

export const sendEmail = async(dynamicsUrl : string, apiKey : string, templateId : string, 
    recipient : string, from: string, subject : string | null, 
    dynamicData : sendGridTestData[] | null) =>{
    const dynamicTemplateData = convertTemplateDataToDynamicsTemplate(dynamicData);
    
    const emailDetails = createEmailDetails(templateId, recipient, from, subject,dynamicTemplateData);

    var response = await executeSendEmailAction(dynamicsUrl, apiKey, emailDetails);

    




    // await fetch(emailUrl, {
    //     method : 'POST',
    //     headers : {
    //         Authorization : `Bearer ${apiKey}`
    //     },
    //     body : JSON.stringify(createEmailDetails(dynamicsTemplateData))
    // })
    // .then(response => {
    //     console.log(response);
    //     return response.json()
    // })
}

const createEmailDetails = (templateId : string, recipient : string, from: string,
    subject : string | null, dynamicData : any | null) => { 
    const emailDetails : any =   {
    personalizations : [
      {
        to: [
          {
            email: recipient
          }
        ]
      }      
    ],
    from: {
      email: from
    },    
    template_id : templateId    
  }

  if(subject){
      emailDetails.subject = subject!
  }

  if(dynamicData){
      emailDetails.personalizations[0].dynamic_template_data = dynamicData
  }
  return JSON.stringify(emailDetails);
}

const convertTemplateDataToDynamicsTemplate = (dynamicData : sendGridTestData[] | null) =>{
    if(!dynamicData){
        return null;
    }
    const map = new Map();
    dynamicData!.map((t:sendGridTestData) => {
        map.set(t.substitutionKey, t.exampleValue)
        return null;
    })
    return Object.fromEntries(map);
}
