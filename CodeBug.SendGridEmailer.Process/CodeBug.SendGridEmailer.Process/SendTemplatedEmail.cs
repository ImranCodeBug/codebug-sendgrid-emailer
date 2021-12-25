using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;
using System.Activities;

namespace CodeBug.SendGridEmailer.Process
{
    public class SendTemplatedEmail : CodeActivity
    {
        [RequiredArgument][Input("Api Key")] public InArgument<string> ApiKey { get; set; }
        [RequiredArgument] [Input("Message Body")] public InArgument<string> MessageBody { get; set; }

        [Output("HttpStatusCode")] public OutArgument<string> StatusCode { get; set; }
        [Output("ErrorText")] public OutArgument<string> ErrorText { get; set; }
        protected override void Execute(CodeActivityContext context)
        {
            var tracingService = context.GetExtension<ITracingService>();
            var apiKey = ApiKey.Get(context);
            var messageBody = MessageBody.Get(context);

            tracingService.Trace("All variable initialized. now running the logic");

            var emailService = new EmailService(tracingService, apiKey);

            var response = emailService.SendEmail(messageBody).Result;
            tracingService.Trace(response.ToString());
        }
    }

    
}
