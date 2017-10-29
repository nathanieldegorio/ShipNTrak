using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using JCS_DataInterface.Interface.Customer;
using Microsoft.AspNetCore.Http;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace JCS_WebApplication.Controllers.Customer
{
  [Route("api/customer/[controller]")]
  public class CustomerProfileController : Controller
  {
    private static string connectionstring_global = JCS_DataInterface.Directory.ConnectionStrings.production;
    private static JCS_DataInterface.Interface.Customer.iCustomerAccount CustomerAccount = new JCS_DataInterface.Interface.Customer.iCustomerAccount(connectionstring_global);
   
    [HttpPost("List")]
    public List<JCS_DataInterface.Models.Customer.CustomerAccount> listCustomerAccount([FromBody]string paramobject)
    {
      return CustomerAccount.dbSearch(paramobject);
    }

    [HttpPost("")]
    public List<JCS_DataInterface.Models.Customer.CustomerAccount> getCustomerAccount([FromForm]string _object)
    {
      return CustomerAccount.dbSearch(_object);
    }

    [HttpPost("New")]
    public string newCustomerAccount([FromBody]iCustomerAccount parser)
    {
      parser._customerID = "0";
      parser.setConnectionString(connectionstring_global);
      return parser.dbInsert();
    }
    

    [HttpPost("Edit")]
    public string editCustomerAccount([FromBody]iCustomerAccount parser)
    {
      parser.setConnectionString(connectionstring_global);
      return parser.dbUpdate();
    }

    [HttpPost("Remove")]
    public string removeCustomerAccount([FromBody]iCustomerAccount parser)
    {
      parser.setConnectionString(connectionstring_global);
      return parser.dbDelete();
    }
  }
}
