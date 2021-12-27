export type functionResponse = {
    responseType : responseType,
    responseDetails? : string | null
}

export enum responseType {
    FunctionError, SendGridError, Success
}

export type sendGridResponse = { 
    status : responseType
    errorDetails? : any | null
}

