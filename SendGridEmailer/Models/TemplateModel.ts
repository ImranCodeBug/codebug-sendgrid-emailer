export type templateModel = {
    id: string,
    name : string,
    updatedAt : string,
    htmlContent? : string,
    subject? : string,
    testData? : sendGridTestData[] 
    thumbnailUrl? : string 
}

export type sendGridTestData = {
    substitutionKey : string,
    exampleValue : string
}