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
    public class SystemBranchController : Controller
    {
       private static string connectionstring_global = JCS_DataInterface.Directory.ConnectionStrings.production;
        private static JCS_DataInterface.Interface.Administration.iSystemBranch systemBranch = new JCS_DataInterface.Interface.Administration.iSystemBranch(connectionstring_global);

        [HttpPost("List")]
        public JsonResult listSystemBranch([FromBody]string paramobject)
        {
          return Json(systemBranch.dbSearch(paramobject));
        }

        [HttpPost("")]
        public List<JCS_DataInterface.Models.Administration.SystemBranch> getSystemBranch([FromForm]string _object)
        {
          return systemBranch.dbSearch(_object);
        }

        [HttpPost("New")]
        public string newSystemBranch([FromBody]iSystemBranch parser)
        {
          parser._branchID = "0";
          parser.setConnectionString(connectionstring_global);
          return parser.dbInsert();
        }

        [HttpPost("Edit")]
        public string editSystemBranch([FromBody]iSystemBranch parser)
        {
          parser.setConnectionString(connectionstring_global);
          return parser.dbUpdate();
        }

        [HttpPost("Remove")]
        public string removeSystemBranch([FromBody]iSystemBranch parser)
        {
          parser.setConnectionString(connectionstring_global);
          return parser.dbDelete();
        }
  }
}
