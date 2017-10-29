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
    public class UserStatusController : Controller
    {
   private static string connectionstring_global = JCS_DataInterface.Directory.ConnectionStrings.production;

    private static JCS_DataInterface.Interface.Administration.iUserStatus userStatus = new JCS_DataInterface.Interface.Administration.iUserStatus(connectionstring_global);
       
        [HttpPost("List")]
        public JsonResult listUserStatus([FromBody]string paramobject)
        {
          return Json(userStatus.dbSearch(paramobject));
        }

        [HttpPost("")]
        public List<JCS_DataInterface.Models.Administration.UserStatus> getUserStatus([FromForm]string _object)
        {
          return userStatus.dbSearch(_object);
        }

        [HttpPost("New")]
        public string newUserStatus([FromBody]iUserStatus parser)
        {
          parser._userStatusCode = Guid.NewGuid().ToString();
          parser.setConnectionString(connectionstring_global);
          return parser.dbInsert();
        }

        [HttpPost("Edit")]
        public string editUserStatus([FromBody]iUserStatus parser)
        {
          parser.setConnectionString(connectionstring_global);
          return parser.dbUpdate();
        }

        [HttpPost("Remove")]
        public string removeUserStatus([FromBody]iUserStatus parser)
        {
          parser.setConnectionString(connectionstring_global);
          return parser.dbDelete();
        }
  }
}
