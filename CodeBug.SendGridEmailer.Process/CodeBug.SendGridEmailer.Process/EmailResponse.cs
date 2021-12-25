using System.Net;

namespace CodeBug.SendGridEmailer.Process
{
    public class EmailResponse
    {
        public HttpStatusCode HttpStatusCode { get; set; }
        public string ErrorDetails { get; set; }
    }
}
