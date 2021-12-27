import { json } from "stream/consumers";
import { functionResponse, responseType, sendGridResponse } from "../Models/FunctionResponse";

export const executeSendEmailAction = async (dynamicsUrl: string, apiKey: string, payload: string) => {
    const apiUrl = constructApiUrl(dynamicsUrl);

    const actionParameters = {
        ApiKey: apiKey,
        MessageBody: payload
    }

    return await fetch(apiUrl, {
        method: 'POST',
        headers: dynamicsHeader,
        body: JSON.stringify(actionParameters)
    })
        .then((response: Response) => {
            if (response.ok) {
                return response.json()
            }
            console.error(response)
            const functionResponse: functionResponse = {
            responseType: responseType.FunctionError
            }
            return functionResponse
        })
        .then((response: functionResponse | any) => {            
            if (!isFunctionResponse(response)) {
                const sendGridResponse: sendGridResponse = {
                    status: response.HttpStatusCode === 202 
                        ? responseType.Success 
                        : responseType.SendGridError,
                    errorDetails: JSON.parse(response.ErrorDetails)
                }
                return sendGridResponse;
            }
            
            console.error(response);
            const sendGridResponse: sendGridResponse = {
                status: responseType.FunctionError
            }
            return sendGridResponse
        })
}

const isFunctionResponse = (res: functionResponse | any): res is functionResponse => {
    return (<functionResponse>res).responseType !== undefined
}

const constructApiUrl = (dynamicsUrl: string) => {
    return `${dynamicsUrl}/api/data/v9.2/cb_SendEmailViaSendgrid`;
}

const dynamicsHeader = {
    'OData-MaxVersion': '4.0',
    'OData-Version': '4.0',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}