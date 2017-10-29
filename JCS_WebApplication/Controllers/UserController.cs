using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using JCS_DataInterface.Models.Administration;
using JCS_DataInterface.Interface.Administration;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace JCS_WebApplication.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
       private static string connectionstring_global = JCS_DataInterface.Directory.ConnectionStrings.production;
        private static JCS_DataInterface.Interface.Administration.iUserAccount userAccount = new JCS_DataInterface.Interface.Administration.iUserAccount(connectionstring_global);

        // GET: api/values
        [HttpPost("LoggedIn")]
        public string LoggedIn()
        {
            
            return HttpContext.Session.Keys.Contains("UserID").ToString();
        }

        // POST api/values
        [HttpPost("Login")]
        public UserAccount Login([FromBody]UserAccount account)
        {
            foreach(UserAccount user in userAccount.dbSearch(""))
            {
              if(account._userLogin == user._userLogin && account._userAccessKey == user._userAccessKey)
              {
                user._userAccessKey = "******";
                if(user._passwordReset == "1" || user._passwordReset =="True")
                {
                    return user;
                }
                HttpContext.Session.SetString("UserID", user._userAccountID);
                return user;
              }
            }
          account._userAccountID="Invalid Username/Password";
          return account;
           
        }

        [HttpPost("Logout")]
        public void Logout()
        {
            HttpContext.Session.Clear();
        }

      
    }
}
