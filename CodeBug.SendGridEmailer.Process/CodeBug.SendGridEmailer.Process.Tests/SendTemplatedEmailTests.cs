using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using CodeBug.SendGridEmailer.Process.Tests.Generators;
using FakeXrmEasy;
using NUnit.Framework;

namespace CodeBug.SendGridEmailer.Process.Tests
{
    public class SendTemplatedEmailTests
    {
        private XrmFakedContext _fakedContext;
        [SetUp]
        public void SetUp()
        {
            _fakedContext = new XrmFakedContext();
        }

        [Test]
        public void SendTemapatedEmail_Success()
        {
            var inputs = SendGrid.WorkflowParams;

            var result = _fakedContext.ExecuteCodeActivity<SendTemplatedEmail>(inputs);

            var responseStatus = Convert.ToInt32(result["StatusCode"]);
            Assert.True(responseStatus == (int)HttpStatusCode.Accepted);
        }
    }
}
