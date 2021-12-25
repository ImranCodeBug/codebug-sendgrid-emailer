using System.Collections.Generic;

namespace CodeBug.SendGridEmailer.Process.Tests.Generators
{
    public static class SendGrid
    {
        public static Dictionary<string, object> WorkflowParams
            = new Dictionary<string, object>() {
                { "ApiKey", "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" },
                { "MessageBody", "{\"personalizations\":[{\"to\":[{\"email\":\"dca.solution1212@gmail.com\"}],\"dynamic_template_data\":{\"LoginLink\":\"https://member.doctorcareanywhere.com/Profile\",\"FirstName\":\"Imran\",\"GetYourPrescriptionLink\":\"http://lorem.ipsum.com\"}}],\"from\":{\"email\":\"orders@example.com\"},\"subject\":\"Your Example Order Confirmation\",\"template_id\":\"d-2b9709ba0a7f49aea02e84831aea3f55\"}" }
            };
    }
}
