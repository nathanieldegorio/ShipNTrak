using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using JCS_DataInterface.Interface.Administration;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace JCS_WebApplication.Controllers.Administration
{
    [Route("api/administration/[controller]")]
    public class PaymentTypeController : Controller
    {
       private static string connectionstring_global = JCS_DataInterface.Directory.ConnectionStrings.production;
        private static JCS_DataInterface.Interface.Administration.iPaymentType paymentType = new JCS_DataInterface.Interface.Administration.iPaymentType(connectionstring_global);

        [HttpPost("List")]
        public JsonResult listPaymentType([FromBody]string paramobject)
        {
          return Json(paymentType.dbSearch(paramobject));
        }

        [HttpPost("")]
        public List<JCS_DataInterface.Models.Administration.PaymentType> getPaymentType([FromForm]string _object)
        {
          return paymentType.dbSearch(_object);
        }

        [HttpPost("New")]
        public string newPaymentType([FromBody]iPaymentType parser)
        {
          parser._paymentTypeCode = Guid.NewGuid().ToString();
          parser._addedBy = "0";
          parser.setConnectionString(connectionstring_global);
          return parser.dbInsert();
        }

        [HttpPost("Edit")]
        public string editPaymentType([FromBody]iPaymentType parser)
        {
          parser._addedBy = "0";
          parser.setConnectionString(connectionstring_global);
          return parser.dbUpdate();
        }

        [HttpPost("Remove")]
        public string removePaymentType([FromBody]iPaymentType parser)
        {
          parser.setConnectionString(connectionstring_global);
          return parser.dbDelete();
        }
  }
}
