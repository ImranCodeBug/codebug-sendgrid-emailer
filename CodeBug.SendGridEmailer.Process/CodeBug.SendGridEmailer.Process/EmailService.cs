using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;

namespace CodeBug.SendGridEmailer.Process
{
    public class EmailService
    {
        private const string SendGirdV3EndPoint = "https://api.sendgrid.com/v3/mail/send";
        private readonly ITracingService _tracingService;
        private readonly string _apiKey;

        public EmailService(ITracingService tracingService, string apiKey)
        {
            _tracingService = tracingService ?? throw new ArgumentNullException(nameof(tracingService));
            _apiKey = !string.IsNullOrEmpty(apiKey) ? apiKey : throw new ArgumentNullException(nameof(apiKey));
        }

        public async Task<EmailResponse> SendEmail(string messageBody)
        {
            _tracingService.Trace("Trying to send the email");

            var emailResponse = new EmailResponse();
            using(var httpClient = new HttpClient())
            {
                httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {_apiKey}");
                httpClient.DefaultRequestHeaders
                        .Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));


                var resposne = await httpClient.PostAsync(SendGirdV3EndPoint, new StringContent(messageBody, Encoding.UTF8, "application/json"));
                
                emailResponse.HttpStatusCode = (int)resposne.StatusCode;

                if (!resposne.IsSuccessStatusCode)
                {
                    emailResponse.ErrorDetails = await resposne.Content.ReadAsStringAsync();
                }
            }

            return emailResponse;
        }
    }
}
