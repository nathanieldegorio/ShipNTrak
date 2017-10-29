using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using JCS_DataInterface.Interface.Administration;
using Microsoft.AspNetCore.Http;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace JCS_WebApplication.Controllers.Administration
{
    [Route("api/administration/[controller]")]
    public class UserAccountController : Controller
    {
   private static string connectionstring_global = JCS_DataInterface.Directory.ConnectionStrings.production;
    private static JCS_DataInterface.Interface.Administration.iUserAccount userAccount = new JCS_DataInterface.Interface.Administration.iUserAccount(connectionstring_global);
    private static JCS_DataInterface.Interface.Administration.iShipmentTypeAccess userAccess = new JCS_DataInterface.Interface.Administration.iShipmentTypeAccess(connectionstring_global);

    [HttpPost("List")]
    public List<JCS_DataInterface.Models.Administration.UserAccount> listUserAccount([FromBody]string paramobject)
    {
      return userAccount.dbSearch(paramobject);
    }

    [HttpPost("")]
    public List<JCS_DataInterface.Models.Administration.UserAccount> getUserAccount([FromForm]string _object)
    {
      return userAccount.dbSearch(_object);
    }

    [HttpPost("New")]
    public string newUserAccount([FromBody]iUserAccount parser)
    {
      parser._userAccountID = "0";
      parser.setConnectionString(connectionstring_global);
      return parser.dbInsert();
    }

    [HttpPost("ListAccess")]
    public List<JCS_DataInterface.Models.Administration.ShipmentTypeAccess> UpdateAccess(string acc)
    {

      return userAccess.dbSearch(acc);
    }

    [HttpPost("UpdateAccess")]
    public string UpdateAccess([FromBody]List<JCS_DataInterface.Interface.Administration.iShipmentTypeAccess> accs)
    {
       foreach(iShipmentTypeAccess acc in accs)
        {
          acc.setConnectionString(connectionstring_global);
          acc.dbInsert();
        }
      return "Ok";
    }


    [HttpPost("Edit")]
    public string editUserAccount([FromBody]iUserAccount parser)
    {
      parser.setConnectionString(connectionstring_global);
      return parser.dbUpdate();
    }

    [HttpPost("Remove")]
    public string removeUserAccount([FromBody]iUserAccount parser)
    {
      parser.setConnectionString(connectionstring_global);
      return parser.dbDelete();
    }
  }
}
