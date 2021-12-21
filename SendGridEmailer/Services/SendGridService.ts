import { sendGridTestData, templateModel } from "../Models/TemplateModel";

export const searchByTemplateId = async (templateId: string, apiKey: string) => {
    const requestUrl = `${sendGridUrl}templates/${templateId}`
    const headers = ConstructHeaders(apiKey);

    const response = await fetch(requestUrl, { headers: headers })
        .then(response => response.json())
        .then(response => {
            return convertSuccessResponseToTemplateModel(response);
        })
        .catch(error => console.error('Error occurred'));

    console.log(response);

    return response;
}

const convertSuccessResponseToTemplateModel = (response: any) => {
    let template: any = {}

    template.id = response.id;
    template.name = response.name;
    template.updatedAt = response["updated_at"];

    if (response.versions && Array.isArray(response.versions)) {
        const allVersions = response.versions;
        for (const index in allVersions) {
            if (allVersions[index].active === 1) {
                if (allVersions[index].html_content) {
                    template.htmlContent = allVersions[index].html_content;
                }                

                if (allVersions[index].subject) {
                    template.subject = allVersions[index].subject;
                }

                if (allVersions[index].test_data) {
                    const testDataRaw = JSON.parse(allVersions[index].test_data);
                    
                    template.testData =  Object.keys(testDataRaw).map(k => {
                        const testDataItem : sendGridTestData = {
                            substitutionKey : k,
                            exampleValue : testDataRaw![k]
                        }
                        return testDataItem
                    }) 
                }

                if (allVersions[index].thumbnail_url) {
                    template.thumbnailUrl = allVersions[index].thumbnail_url;
                }                
            }
        }
    }
    return template as templateModel
}

const sendGridUrl = 'https://api.sendgrid.com/v3/'

const ConstructHeaders = (apiKey: string) => {
    return {
        "authorization": `Bearer ${apiKey}`,
        "content-type": "application/json"
    }
}
