# Codebug Sendgrid Emailer
This is a Power App Component Framework that sends template based emails via [Sendgrid](https://sendgrid.com/). The PCF also gives the user template search capability and once the template is found it will show a small image of the template from Sendgrid store so that the user know the what the content will look like when the email is reached the customer. Some template in Send grid might have some Dynamic field. this PCF will display the dynamic field and will let the user set the dynamic fields before sending the email.

## Configuration
### Installation 
Download the soution for the release location of this Github repository. We recommend dowloading the combined solution but if you want then you can install the solution separately. if you have chosen the individual deployment, please intall the `CodebugSendgridEmailerAction` solution first.

### Setting up the control
> This control is bound to an email field. Please make sure the field that you are binding the control to is a single line of text with the type of email. if the field is not en email the control will not show in the controls list.
* Open the form in which you want to add the control
* Find the email field which the control is replacing.
* Set the following property
| Field Name | Type of data  | Comments                                                                                                                                    |
|---------|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Email   | Email (bound)      | This is the field to which the control is bound                                                                                           |
| Api Key | String             | ApiKey from send grid. to learn how to generate api key, check out this [link](https://docs.sendgrid.com/ui/account-and-settings/api-keys)|
| DynamicsUrl | string | Url of the dataverse/dynamics instance. An example is https://YOUR-ORG.crm11.dynamics.com. make sure the there is not trailing `/` at the end of 
|             the url. For more information as to why do you need it. see below|
| DefaultSenderAddress | string | Email address of the sender | 



