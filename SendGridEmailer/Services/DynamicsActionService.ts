export const executeSendEmailAction = async (dynamicsUrl: string, apiKey: string, payload: string) => {
    const apiUrl = constructApiUrl(dynamicsUrl);

    const actionParameters = {
        ApiKey: apiKey,
        MessageBody: payload
    }

    await fetch(apiUrl, {
        method : 'POST',        
        headers : dynamicsHeader,
        //method : 'POST',
        body : JSON.stringify(actionParameters)
    })
    .then(response  => {
        console.log(response);
        return response.json()
    })
    .then(response => {
        console.log(response)
    })
}

const constructApiUrl = (dynamicsUrl: string) => {
    return `${dynamicsUrl}/api/data/v9.2/cb_SendEmailViaSendgrid`;
}

const dynamicsHeader = {
    'OData-MaxVersion': '4.0',
    'OData-Version': '4.0',
    'Accept': 'application/json',
    'Content-Type' : 'application/json'
}