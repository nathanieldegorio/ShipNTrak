using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Text;

namespace JCS_DataInterface.Interface.Administration
{
    public class iUserStatus: Models.Administration.UserStatus
    {
        private DataOpt.MSSQLConnection _sqlConn;

        public iUserStatus(string connectionString)
        {
            _sqlConn = new DataOpt.MSSQLConnection(connectionString);
        }

        public void setConnectionString(string connectionString)
        {
            _sqlConn = new DataOpt.MSSQLConnection(connectionString);
        }

        public iUserStatus()
        {

        }

        public string dbInsert()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("user_status_code", 0));
            parameters.Add(_sqlConn.GetParameter("us_description", this._usDescription));
            parameters.Add(_sqlConn.GetParameter("us_display", this._usDisplay));
            parameters.Add(_sqlConn.GetParameter("disable_features_flag", this._disableFeaturesFlag));
            parameters.Add(_sqlConn.GetParameter("Type", "1"));

            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeleteUserStatus", parameters);
                return "Ok";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iUserStatus.dbInsert :=> " + ex.Message.ToString();
            }

        }

        public string dbUpdate()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("user_status_code", this._userStatusCode));
            parameters.Add(_sqlConn.GetParameter("us_description", this._usDescription));
            parameters.Add(_sqlConn.GetParameter("us_display", this._usDisplay));
            parameters.Add(_sqlConn.GetParameter("disable_features_flag", this._disableFeaturesFlag));
            parameters.Add(_sqlConn.GetParameter("Type", "2"));
            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeleteUserStatus", parameters);
                return "OK";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iUserStatus.dbUpdate :=> " + ex.Message.ToString();
            }

        }

        public string dbDelete()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("user_status_code", this._userStatusCode));
            parameters.Add(_sqlConn.GetParameter("us_description", this._usDescription));
            parameters.Add(_sqlConn.GetParameter("us_display", this._usDisplay));
            parameters.Add(_sqlConn.GetParameter("disable_features_flag", this._disableFeaturesFlag));
            parameters.Add(_sqlConn.GetParameter("Type", "3"));
            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeleteUserStatus", parameters);
                return "OK";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iUserStatus.dbDelete :=> " + ex.Message.ToString();
            }

        }

        public JCS_DataInterface.Models.Administration.UserStatus dbGet(string collection_type_code)
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("user_status_code", this._userStatusCode));
            JCS_DataInterface.Models.Administration.UserStatus result = new JCS_DataInterface.Models.Administration.UserStatus();


            try
            {
                using (DbDataReader dataReader = _sqlConn.GetDataReader("SELECT  user_status_code  ,us_description ,us_display ,disable_features_flag  FROM User_Status where user_status_code = @user_status_code", parameters, System.Data.CommandType.Text))
                {
                    while (dataReader.Read())
                    {
                        result._userStatusCode = dataReader["user_status_code"].ToString();
                        result._usDescription = dataReader["us_description"].ToString();
                        result._usDisplay = dataReader["us_display"].ToString();
                        result._disableFeaturesFlag = dataReader["disable_features_flag"].ToString();
                      

                        return result;
                    }


                }


            }
            catch (Exception ex)
            {
                result._usDescription = "Error on JCS_DataInterface.iUserStatus.dbGet :=> " + ex.Message.ToString();
                return result;
            }


            result._usDescription = "No Records Found";
            return result;

        }

        public List<JCS_DataInterface.Models.Administration.UserStatus> dbSearch(string searchKey)
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("us_description", searchKey));
            parameters.Add(_sqlConn.GetParameter("us_display", searchKey));
            
            List<JCS_DataInterface.Models.Administration.UserStatus> result = new List<JCS_DataInterface.Models.Administration.UserStatus>();
            JCS_DataInterface.Models.Administration.UserStatus resultItem = new JCS_DataInterface.Models.Administration.UserStatus();


            try
            {


                using (DbDataReader dataReader = _sqlConn.GetDataReader("SELECT  user_status_code  ,us_description ,us_display ,disable_features_flag  FROM User_Status  WHERE us_description like '%'+@us_description+'%' OR us_display like '%'+@us_display+'%' ", parameters, System.Data.CommandType.Text))
                {
                    while (dataReader.Read())
                    {
                        resultItem = new Models.Administration.UserStatus();
                        resultItem._userStatusCode = dataReader["user_status_code"].ToString();
                        resultItem._usDescription = dataReader["us_description"].ToString();
                        resultItem._usDisplay = dataReader["us_display"].ToString();
                        resultItem._disableFeaturesFlag = dataReader["disable_features_flag"].ToString();


                        result.Add(resultItem);
                    }
                    return result;

                }



            }
            catch (Exception ex)
            {
                resultItem._usDisplay = "Error on JCS_DataInterface.iUserStatus.dbSearch :=> " + ex.Message.ToString();
                result.Add(resultItem);
                return result;
            }


        }
    }
}
