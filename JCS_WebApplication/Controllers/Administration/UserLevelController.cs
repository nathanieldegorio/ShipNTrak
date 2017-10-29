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
    public class UserLevelController : Controller
    {
       private static string connectionstring_global = JCS_DataInterface.Directory.ConnectionStrings.production;
        private static JCS_DataInterface.Interface.Administration.iUserLevel userLevel = new JCS_DataInterface.Interface.Administration.iUserLevel(connectionstring_global);

        [HttpPost("List")]
        public JsonResult listUserLevel([FromBody]string paramobject)
        {
          return Json(userLevel.dbSearch(paramobject));
        }

        [HttpPost("")]
        public List<JCS_DataInterface.Models.Administration.UserLevel> getUserLevel([FromForm]string _object)
        {
          return userLevel.dbSearch(_object);
        }

        [HttpPost("New")]
        public string newUserLevel([FromBody]iUserLevel parser)
        {
          parser._userLevelCode = "0";
          parser.setConnectionString(connectionstring_global);
          return parser.dbInsert();
        }

        [HttpPost("Edit")]
        public string editUserLevel([FromBody]iUserLevel parser)
        {
          parser.setConnectionString(connectionstring_global);
          return parser.dbUpdate();
        }

        [HttpPost("Remove")]
        public string removeUserLevel([FromBody]iUserLevel parser)
        {
          parser.setConnectionString(connectionstring_global);
          return parser.dbDelete();
        }


  }
}
