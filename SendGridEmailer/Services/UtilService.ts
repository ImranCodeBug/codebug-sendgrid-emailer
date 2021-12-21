import { templateModel } from "../Models/TemplateModel";

export const isTemplateModel = (toBeDetermined : templateModel | void) => {
    return toBeDetermined as templateModel 
}