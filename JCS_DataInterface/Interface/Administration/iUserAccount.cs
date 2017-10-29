using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Text;

namespace JCS_DataInterface.Interface.Administration
{
    public class iUserAccount : Models.Administration.UserAccount
    {
        private DataOpt.MSSQLConnection _sqlConn;

        public iUserAccount(string connectionString)
        {
            _sqlConn = new DataOpt.MSSQLConnection(connectionString);
        }

        public void setConnectionString(string connectionString)
        {
            _sqlConn = new DataOpt.MSSQLConnection(connectionString);
        }

        public iUserAccount()
        {

        }

        public string dbInsert()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            this._userAccessKey = Guid.NewGuid().ToString().Replace("-", "").Substring(0, 6);
            parameters.Add(_sqlConn.GetParameter("user_account_id", this._userAccountID));
            parameters.Add(_sqlConn.GetParameter("user_level", this._userLevel));
            parameters.Add(_sqlConn.GetParameter("user_branch", this._userBranch));
            parameters.Add(_sqlConn.GetParameter("user_login", this._userLogin));
            parameters.Add(_sqlConn.GetParameter("user_accesskey", this._userAccessKey));
            parameters.Add(_sqlConn.GetParameter("user_status", this._userStatus));
            parameters.Add(_sqlConn.GetParameter("firstname", this._firstname));
            parameters.Add(_sqlConn.GetParameter("middlename", this._middlename));
            parameters.Add(_sqlConn.GetParameter("lastname", this._lastname));
            parameters.Add(_sqlConn.GetParameter("address", this._address));
            parameters.Add(_sqlConn.GetParameter("created_on", this._createdOn));
            parameters.Add(_sqlConn.GetParameter("updated_on", this._updatedOn));
            parameters.Add(_sqlConn.GetParameter("created_by", this._createdBy));
            parameters.Add(_sqlConn.GetParameter("employee_reference", this._employeeReference));
            parameters.Add(_sqlConn.GetParameter("password_reset", this._passwordReset));
            parameters.Add(_sqlConn.GetParameter("isAir", this._isAir));
            parameters.Add(_sqlConn.GetParameter("isBranch", this._isBranch));
            parameters.Add(_sqlConn.GetParameter("isSea", this._isSea));
            parameters.Add(_sqlConn.GetParameter("phone", this._phoneNumber));
            parameters.Add(_sqlConn.GetParameter("Type", "1"));

            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeleteUserAccount", parameters);

                return "User Account Successfully created. <br/> Default Password is "+this._userAccessKey;
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iUserAccount.dbInsert :=> " + ex.Message.ToString();
            }

        }

        public string dbUpdate()
        {
            if (this._passwordReset == "1")
            {
                this._userAccessKey = Guid.NewGuid().ToString().Replace("-", "").Substring(0, 6);

            }
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("user_account_id", this._userAccountID));
            parameters.Add(_sqlConn.GetParameter("user_level", this._userLevel));
            parameters.Add(_sqlConn.GetParameter("user_branch", this._userBranch));
            parameters.Add(_sqlConn.GetParameter("user_login", this._userLogin));
            parameters.Add(_sqlConn.GetParameter("user_accesskey", this._userAccessKey));
            parameters.Add(_sqlConn.GetParameter("user_status", this._userStatus));
            parameters.Add(_sqlConn.GetParameter("firstname", this._firstname));
            parameters.Add(_sqlConn.GetParameter("middlename", this._middlename));
            parameters.Add(_sqlConn.GetParameter("lastname", this._lastname));
            parameters.Add(_sqlConn.GetParameter("address", this._address));
            parameters.Add(_sqlConn.GetParameter("created_on", this._createdOn));
            parameters.Add(_sqlConn.GetParameter("updated_on", this._updatedOn));
            parameters.Add(_sqlConn.GetParameter("created_by", this._createdBy));
            parameters.Add(_sqlConn.GetParameter("employee_reference", this._employeeReference));
            parameters.Add(_sqlConn.GetParameter("password_reset", this._passwordReset));
            parameters.Add(_sqlConn.GetParameter("isAir", this._isAir));
            parameters.Add(_sqlConn.GetParameter("isBranch", this._isBranch));
            parameters.Add(_sqlConn.GetParameter("isSea", this._isSea));
            parameters.Add(_sqlConn.GetParameter("phone", this._phoneNumber));
            parameters.Add(_sqlConn.GetParameter("Type", "2"));
            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeleteUserAccount", parameters);
                if(this._passwordReset == "1")
                {
                    return "User account succesfully reset his/her password. <br/> Default Password is " + this._userAccessKey;

                }
                return "OK";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iUserAccount.dbUpdate :=> " + ex.Message.ToString();
            }

        }

        public string dbDelete()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("user_account_id", this._userAccountID));
            parameters.Add(_sqlConn.GetParameter("user_level", this._userLevel));
            parameters.Add(_sqlConn.GetParameter("user_branch", this._userBranch));
            parameters.Add(_sqlConn.GetParameter("user_login", this._userLogin));
            parameters.Add(_sqlConn.GetParameter("user_accesskey", this._userAccessKey));
            parameters.Add(_sqlConn.GetParameter("user_status", this._userStatus));
            parameters.Add(_sqlConn.GetParameter("firstname", this._firstname));
            parameters.Add(_sqlConn.GetParameter("middlename", this._middlename));
            parameters.Add(_sqlConn.GetParameter("lastname", this._lastname));
            parameters.Add(_sqlConn.GetParameter("address", this._address));
            parameters.Add(_sqlConn.GetParameter("created_on", this._createdOn));
            parameters.Add(_sqlConn.GetParameter("updated_on", this._updatedOn));
            parameters.Add(_sqlConn.GetParameter("created_by", this._createdBy));
            parameters.Add(_sqlConn.GetParameter("employee_reference", this._employeeReference));
            parameters.Add(_sqlConn.GetParameter("password_reset", this._passwordReset));
            parameters.Add(_sqlConn.GetParameter("isAir", this._isAir));
            parameters.Add(_sqlConn.GetParameter("isBranch", this._isBranch));
            parameters.Add(_sqlConn.GetParameter("isSea", this._isSea));
            parameters.Add(_sqlConn.GetParameter("phone", this._phoneNumber));
            parameters.Add(_sqlConn.GetParameter("Type", "3"));
            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeleteUserAccount", parameters);
                return "OK";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iUserAccount.dbDelete :=> " + ex.Message.ToString();
            }

        }

        public JCS_DataInterface.Models.Administration.UserAccount dbGet(string collection_type_code)
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("user_account_id", this._userAccountID));
            JCS_DataInterface.Models.Administration.UserAccount result = new JCS_DataInterface.Models.Administration.UserAccount();


            try
            {
                using (DbDataReader dataReader = _sqlConn.GetDataReader("SELECT user_account_id      ,user_level      ,user_branch      ,user_login      ,user_accesskey      ,user_status      ,firstname    " +
                    "  ,middlename      ,lastname      ,address      ,created_on      ,updated_on      ,created_by      ,updated_by      ,employee_reference, password_reset,phone, isAir, isSea, isBranch  FROM  User_Account WHERE user_account_id = @user_account_id", parameters, System.Data.CommandType.Text))
                {
                    while (dataReader.Read())
                    {
                        result = new Models.Administration.UserAccount();
                        result._userAccountID = dataReader["user_account_id"].ToString();
                        result._userLevel = dataReader["user_level"].ToString();
                        result._userBranch = dataReader["user_branch"].ToString();
                        result._userLogin = dataReader["user_login"].ToString();
                        result._userAccessKey = dataReader["user_accesskey"].ToString();
                        result._userStatus = dataReader["user_status"].ToString();
                        result._firstname = dataReader["firstname"].ToString();
                        result._middlename = dataReader["middlename"].ToString();
                        result._lastname = dataReader["lastname"].ToString();
                        result._address = dataReader["address"].ToString();
                        result._createdOn = dataReader["created_on"].ToString();
                        result._updatedOn = dataReader["updated_on"].ToString();
                        result._createdBy = dataReader["created_by"].ToString();
                        result._updatedBy = dataReader["employee_reference"].ToString();
                        result._passwordReset = dataReader["password_reset"].ToString();
                        result._phoneNumber = dataReader["phone"].ToString();
                        result._isAir = dataReader["isAir"].ToString();
                        result._isSea = dataReader["isSea"].ToString();
                        result._isBranch = dataReader["isBranch"].ToString();

                        return result;
                    }


                }


            }
            catch (Exception ex)
            {
                result._firstname = "Error on JCS_DataInterface.iUserAccount.dbGet :=> " + ex.Message.ToString();
                return result;
            }


            result._firstname = "No Records Found";
            return result;

        }

        public List<JCS_DataInterface.Models.Administration.UserAccount> dbSearch(string searchKey)
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("middlename", searchKey));
            parameters.Add(_sqlConn.GetParameter("lastname", searchKey));
            parameters.Add(_sqlConn.GetParameter("firstname", searchKey));

            List<JCS_DataInterface.Models.Administration.UserAccount> result = new List<JCS_DataInterface.Models.Administration.UserAccount>();
            JCS_DataInterface.Models.Administration.UserAccount resultItem = new JCS_DataInterface.Models.Administration.UserAccount();


            try
            {


                using (DbDataReader dataReader = _sqlConn.GetDataReader("SELECT user_account_id      ,user_level      ,user_branch      ,user_login      ,user_accesskey      ,user_status      ,firstname    " +
                    "  ,middlename      ,lastname      ,address      ,created_on      ,updated_on      ,created_by      ,updated_by      ,employee_reference, password_reset,phone, isAir, isSea, isBranch  FROM  User_Account WHERE middlename LIKE '%'+@middlename+'%' OR firstname LIKE '%'+@firstname+'%' OR lastname LIKE '%'+@lastname+'%'", parameters, System.Data.CommandType.Text))
                {
                    while (dataReader.Read())
                    {
                        resultItem = new Models.Administration.UserAccount();
                        resultItem._userAccountID = dataReader["user_account_id"].ToString();
                        resultItem._userLevel = dataReader["user_level"].ToString();
                        resultItem._userBranch = dataReader["user_branch"].ToString();
                        resultItem._userLogin = dataReader["user_login"].ToString();
                        resultItem._userAccessKey = dataReader["user_accesskey"].ToString();
                        resultItem._userStatus = dataReader["user_status"].ToString();
                        resultItem._firstname = dataReader["firstname"].ToString();
                        resultItem._middlename = dataReader["middlename"].ToString();
                        resultItem._lastname = dataReader["lastname"].ToString();
                        resultItem._address = dataReader["address"].ToString();
                        resultItem._createdOn = dataReader["created_on"].ToString();
                        resultItem._updatedOn = dataReader["updated_on"].ToString();
                        resultItem._createdBy = dataReader["created_by"].ToString();
                        resultItem._updatedBy = dataReader["employee_reference"].ToString();
                        resultItem._passwordReset = dataReader["password_reset"].ToString();
                        resultItem._phoneNumber = dataReader["phone"].ToString();
                        resultItem._isAir = dataReader["isAir"].ToString();
                        resultItem._isSea = dataReader["isSea"].ToString();
                        resultItem._isBranch = dataReader["isBranch"].ToString();

                        result.Add(resultItem);
                    }
                    return result;

                }



            }
            catch (Exception ex)
            {
                resultItem._firstname = "Error on JCS_DataInterface.iUserAccount.dbSearch :=> " + ex.Message.ToString();
                result.Add(resultItem);
                return result;
            }


        }
    }
}
