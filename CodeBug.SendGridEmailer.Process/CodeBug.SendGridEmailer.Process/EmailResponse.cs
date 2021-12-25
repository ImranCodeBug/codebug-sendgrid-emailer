namespace CodeBug.SendGridEmailer.Process
{
    public class EmailResponse
    {
        public int HttpStatusCode { get; set; }
        public string ErrorDetails { get; set; }
    }
}
