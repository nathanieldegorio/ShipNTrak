using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Text;

namespace JCS_DataInterface.Interface.Administration
{
    public class iUserLevel : Models.Administration.UserLevel
    {
        private DataOpt.MSSQLConnection _sqlConn;

        public iUserLevel(string connectionString)
        {
            _sqlConn = new DataOpt.MSSQLConnection(connectionString);
        }

        public void setConnectionString(string connectionString)
        {
            _sqlConn = new DataOpt.MSSQLConnection(connectionString);
        }

        public iUserLevel()
        {

        }

        public string dbInsert()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("user_level_code", this._userLevelCode));
            parameters.Add(_sqlConn.GetParameter("ul_description", this._ulDescription));
            parameters.Add(_sqlConn.GetParameter("ul_display_name", this._ulDisplayName));
            parameters.Add(_sqlConn.GetParameter("isAdmin", this._isAdmin));
            parameters.Add(_sqlConn.GetParameter("Type", "1"));

            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeleteUserLevel", parameters);
                return "Ok";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iUserLevel.dbInsert :=> " + ex.Message.ToString();
            }

        }

        public string dbUpdate()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("user_level_code", this._userLevelCode));
            parameters.Add(_sqlConn.GetParameter("ul_description", this._ulDescription));
            parameters.Add(_sqlConn.GetParameter("ul_display_name", this._ulDisplayName));
            parameters.Add(_sqlConn.GetParameter("isAdmin", this._isAdmin));
            parameters.Add(_sqlConn.GetParameter("Type", "2"));
            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeleteUserLevel", parameters);
                return "OK";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iUserLevel.dbUpdate :=> " + ex.Message.ToString();
            }

        }

        public string dbDelete()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("user_level_code", this._userLevelCode));
            parameters.Add(_sqlConn.GetParameter("ul_description", this._ulDescription));
            parameters.Add(_sqlConn.GetParameter("ul_display_name", this._ulDisplayName));
            parameters.Add(_sqlConn.GetParameter("isAdmin", this._isAdmin));
            parameters.Add(_sqlConn.GetParameter("Type", "3"));
            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeleteUserLevel", parameters);
                return "OK";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iUserLevel.dbDelete :=> " + ex.Message.ToString();
            }

        }

        public JCS_DataInterface.Models.Administration.UserLevel dbGet(string collection_type_code)
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("user_level_code", this._userLevelCode));
            JCS_DataInterface.Models.Administration.UserLevel result = new JCS_DataInterface.Models.Administration.UserLevel();


            try
            {
                using (DbDataReader dataReader = _sqlConn.GetDataReader("SELECT user_level_code    ,ul_description   ,ul_display_name     ,isAdmin  FROM  User_Level  WHERE user_level_code = @user_level_code", parameters, System.Data.CommandType.Text))
                {
                    while (dataReader.Read())
                    {
                        result._userLevelCode = dataReader["user_level_code"].ToString();
                        result._ulDescription = dataReader["ul_description"].ToString();
                        result._ulDisplayName = dataReader["ul_display_name"].ToString();
                        result._isAdmin = dataReader["isAdmin"].ToString();


                        return result;
                    }


                }


            }
            catch (Exception ex)
            {
                result._ulDisplayName = "Error on JCS_DataInterface.iUserLevel.dbGet :=> " + ex.Message.ToString();
                return result;
            }


            result._ulDisplayName = "No Records Found";
            return result;

        }

        public List<JCS_DataInterface.Models.Administration.UserLevel> dbSearch(string searchKey)
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("ul_display_name", searchKey));
            parameters.Add(_sqlConn.GetParameter("ul_description", searchKey));

            List<JCS_DataInterface.Models.Administration.UserLevel> result = new List<JCS_DataInterface.Models.Administration.UserLevel>();
            JCS_DataInterface.Models.Administration.UserLevel resultItem = new JCS_DataInterface.Models.Administration.UserLevel();


            try
            {


                using (DbDataReader dataReader = _sqlConn.GetDataReader("SELECT user_level_code    ,ul_description   ,ul_display_name     ,isAdmin  FROM  User_Level  WHERE ul_description like '%'+@ul_description+'%' OR ul_display_name like '%'+@ul_display_name+'%' ", parameters, System.Data.CommandType.Text))
                {
                    while (dataReader.Read())
                    {
                        resultItem = new Models.Administration.UserLevel();
                        resultItem._userLevelCode = dataReader["user_level_code"].ToString();
                        resultItem._ulDescription = dataReader["ul_description"].ToString();
                        resultItem._ulDisplayName = dataReader["ul_display_name"].ToString();
                        resultItem._isAdmin = dataReader["isAdmin"].ToString();


                        result.Add(resultItem);
                    }
                    return result;

                }



            }
            catch (Exception ex)
            {
                resultItem._ulDisplayName = "Error on JCS_DataInterface.iUserLevel.dbSearch :=> " + ex.Message.ToString();
                result.Add(resultItem);
                return result;
            }


        }
    }
}
