using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Text;

namespace JCS_DataInterface.Interface.Customer
{
    public class iCustomerAccount : Models.Customer.CustomerAccount
    {
        private DataOpt.MSSQLConnection _sqlConn;

        public iCustomerAccount(string connectionString)
        {
            _sqlConn = new DataOpt.MSSQLConnection(connectionString);
        }

        public void setConnectionString(string connectionString)
        {
            _sqlConn = new DataOpt.MSSQLConnection(connectionString);
        }

        public iCustomerAccount()
        {

        }

        public string dbInsert()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("CustomerID", this._customerID));
            parameters.Add(_sqlConn.GetParameter("FirstName", this._firstname));
            parameters.Add(_sqlConn.GetParameter("MiddleName", this._middlename));
            parameters.Add(_sqlConn.GetParameter("LastName", this._lastname));
            parameters.Add(_sqlConn.GetParameter("Address", this._address));
            parameters.Add(_sqlConn.GetParameter("Company", this._company));
            parameters.Add(_sqlConn.GetParameter("ClosestBranch", this._closestBranch));
            parameters.Add(_sqlConn.GetParameter("PhoneNumber", this._phoneNumber));
            parameters.Add(_sqlConn.GetParameter("BusinessPhone", this._businessPhone));
            parameters.Add(_sqlConn.GetParameter("Email", this._email));
            parameters.Add(_sqlConn.GetParameter("isVIP", this._isVIP));
            parameters.Add(_sqlConn.GetParameter("AccountNumber", this._accountNumber));
            parameters.Add(_sqlConn.GetParameter("Type", "1"));

            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeleteCustomerAccount", parameters);

                return "Ok";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iCustomerAccount.dbInsert :=> " + ex.Message.ToString();
            }

        }

        public string dbUpdate()
        {
            
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("CustomerID", this._customerID));
            parameters.Add(_sqlConn.GetParameter("FirstName", this._firstname));
            parameters.Add(_sqlConn.GetParameter("MiddleName", this._middlename));
            parameters.Add(_sqlConn.GetParameter("LastName", this._lastname));
            parameters.Add(_sqlConn.GetParameter("Address", this._address));
            parameters.Add(_sqlConn.GetParameter("Company", this._company));
            parameters.Add(_sqlConn.GetParameter("ClosestBranch", this._closestBranch));
            parameters.Add(_sqlConn.GetParameter("PhoneNumber", this._phoneNumber));
            parameters.Add(_sqlConn.GetParameter("BusinessPhone", this._businessPhone));
            parameters.Add(_sqlConn.GetParameter("Email", this._email));
            parameters.Add(_sqlConn.GetParameter("isVIP", this._isVIP));
            parameters.Add(_sqlConn.GetParameter("AccountNumber", this._accountNumber));

            parameters.Add(_sqlConn.GetParameter("Type", "2"));
            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeleteCustomerAccount", parameters);
               
                return "OK";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iCustomerAccount.dbUpdate :=> " + ex.Message.ToString();
            }

        }

        public string dbDelete()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("CustomerID", this._customerID));
            parameters.Add(_sqlConn.GetParameter("FirstName", this._firstname));
            parameters.Add(_sqlConn.GetParameter("MiddleName", this._middlename));
            parameters.Add(_sqlConn.GetParameter("LastName", this._lastname));
            parameters.Add(_sqlConn.GetParameter("Address", this._address));
            parameters.Add(_sqlConn.GetParameter("Company", this._company));
            parameters.Add(_sqlConn.GetParameter("ClosestBranch", this._closestBranch));
            parameters.Add(_sqlConn.GetParameter("PhoneNumber", this._phoneNumber));
            parameters.Add(_sqlConn.GetParameter("BusinessPhone", this._businessPhone));
            parameters.Add(_sqlConn.GetParameter("Email", this._email));
            parameters.Add(_sqlConn.GetParameter("isVIP", this._isVIP));
            parameters.Add(_sqlConn.GetParameter("AccountNumber", this._accountNumber));

            parameters.Add(_sqlConn.GetParameter("Type", "3"));
            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeleteCustomerAccount", parameters);
                return "OK";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iCustomerAccount.dbDelete :=> " + ex.Message.ToString();
            }

        }

        public JCS_DataInterface.Models.Customer.CustomerAccount dbGet(string collection_type_code)
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("CustomerID", this._customerID));
            JCS_DataInterface.Models.Customer.CustomerAccount result = new JCS_DataInterface.Models.Customer.CustomerAccount();


            try
            {
                using (DbDataReader dataReader = _sqlConn.GetDataReader("SELECT SELECT CustomerID ,FirstName ,MiddleName  ,LastName ,Address ,Company ,ClosestBranch ,PhoneNumber  ,BusinessPhone  ,Email ,isVIP ,AccountNumber  FROM Customer_Accounts WHERE CustomerID = @CustomerID", parameters, System.Data.CommandType.Text))
                {
                    while (dataReader.Read())
                    {
                        result = new Models.Customer.CustomerAccount();
                        result._customerID = dataReader["CustomerID"].ToString();
                        result._firstname = dataReader["FirstName"].ToString();
                        result._middlename = dataReader["MiddleName"].ToString();
                        result._lastname = dataReader["LastName"].ToString();
                        result._address = dataReader["Address"].ToString();
                        result._company = dataReader["Company"].ToString();
                        result._closestBranch = dataReader["ClosestBranch"].ToString();
                        result._phoneNumber = dataReader["PhoneNumber"].ToString();
                        result._businessPhone = dataReader["BusinessPhone"].ToString();
                        result._email = dataReader["Email"].ToString();
                        result._isVIP = dataReader["isVIP"].ToString();
                        result._accountNumber = dataReader["AccountNumber"].ToString();
                    
                        return result;
                    }


                }


            }
            catch (Exception ex)
            {
                result._firstname = "Error on JCS_DataInterface.iCustomerAccount.dbGet :=> " + ex.Message.ToString();
                return result;
            }


            result._firstname = "No Records Found";
            return result;

        }

        public List<JCS_DataInterface.Models.Customer.CustomerAccount> dbSearch(string searchKey)
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("middlename", searchKey));
            parameters.Add(_sqlConn.GetParameter("lastname", searchKey));
            parameters.Add(_sqlConn.GetParameter("firstname", searchKey));
            parameters.Add(_sqlConn.GetParameter("company", searchKey));

            List<JCS_DataInterface.Models.Customer.CustomerAccount> result = new List<JCS_DataInterface.Models.Customer.CustomerAccount>();
            JCS_DataInterface.Models.Customer.CustomerAccount resultItem = new JCS_DataInterface.Models.Customer.CustomerAccount();


            try
            {


                using (DbDataReader dataReader = _sqlConn.GetDataReader("SELECT CustomerID ,FirstName ,MiddleName  ,LastName ,Address ,Company ,ClosestBranch ,PhoneNumber  ,BusinessPhone  ,Email ,isVIP ,AccountNumber  FROM Customer_Accounts wHERE middlename LIKE '%'+@middlename+'%' OR firstname LIKE '%'+@firstname+'%' OR lastname LIKE '%'+@lastname+'%' OR company LIKE '%'+@company+'%'", parameters, System.Data.CommandType.Text))
                {
                    while (dataReader.Read())
                    {
                        resultItem = new Models.Customer.CustomerAccount();
                        resultItem._customerID = dataReader["CustomerID"].ToString();
                        resultItem._firstname = dataReader["FirstName"].ToString();
                        resultItem._middlename = dataReader["MiddleName"].ToString();
                        resultItem._lastname = dataReader["LastName"].ToString();
                        resultItem._address = dataReader["Address"].ToString();
                        resultItem._company = dataReader["Company"].ToString();
                        resultItem._closestBranch = dataReader["ClosestBranch"].ToString();
                        resultItem._phoneNumber = dataReader["PhoneNumber"].ToString();
                        resultItem._businessPhone = dataReader["BusinessPhone"].ToString();
                        resultItem._email = dataReader["Email"].ToString();
                        resultItem._isVIP = dataReader["isVIP"].ToString();
                        resultItem._accountNumber = dataReader["AccountNumber"].ToString();

                        result.Add(resultItem);
                    }
                    return result;

                }



            }
            catch (Exception ex)
            {
                resultItem._firstname = "Error on JCS_DataInterface.iCustomerAccount.dbSearch :=> " + ex.Message.ToString();
                result.Add(resultItem);
                return result;
            }


          
        }
    }
}
