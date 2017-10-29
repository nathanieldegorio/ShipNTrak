using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JCS_WebApplication.Modle
{
    public class UserView : JCS_DataInterface.Models.Administration.UserAccount
    {
          public JCS_DataInterface.Models.Administration.SystemBranch branch = new JCS_DataInterface.Models.Administration.SystemBranch();
          public UserView(JCS_DataInterface.Models.Administration.UserAccount ua)
          {
                 branch = new JCS_DataInterface.Interface.Administration.iSystemBranch("").dbGet(ua._userBranch);
          }


          public void sample()
          {
            UserView na = new UserView(new JCS_DataInterface.Models.Administration.UserAccount());
            string test = na.branch._routeDisplay;
          }
          
          
    }


    
}
