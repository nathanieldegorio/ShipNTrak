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
    public class CargoTypeController : Controller
  {
    private static string connectionstring_global = JCS_DataInterface.Directory.ConnectionStrings.production; 

        private static JCS_DataInterface.Interface.Administration.iCargoType collectionType = new JCS_DataInterface.Interface.Administration.iCargoType(connectionstring_global);

          [HttpPost("List")]
          public JsonResult listCollectionType([FromBody]string paramobject)
          {
            return Json(collectionType.dbSearch(paramobject));
          }

          [HttpPost("")]
          public List<JCS_DataInterface.Models.Administration.CargoType> getCollectionType([FromForm]string _object)
          {
            return collectionType.dbSearch(_object);
          }

          [HttpPost("New")]
          public string newCollectionType([FromBody]iCargoType parser)
          {
          parser._cargoID = "0";
            parser.setConnectionString(connectionstring_global);
            return parser.dbInsert();
          }

          [HttpPost("Edit")]
          public string editCollectionType([FromBody]iCargoType parser)
          {
            parser.setConnectionString(connectionstring_global);
            return parser.dbUpdate();
          }

          [HttpPost("Remove")]
          public string removeCollectionType([FromBody]iCargoType parser)
          {
            parser.setConnectionString(connectionstring_global);
            return parser.dbDelete();
          }

  }
}
