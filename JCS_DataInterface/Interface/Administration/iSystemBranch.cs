using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Text;

namespace JCS_DataInterface.Interface.Administration
{
    public class iSystemBranch : Models.Administration.SystemBranch
    {
        private DataOpt.MSSQLConnection _sqlConn;

        public iSystemBranch(string connectionString)
        {
            _sqlConn = new DataOpt.MSSQLConnection(connectionString);
        }

        public void setConnectionString(string connectionString)
        {
            _sqlConn = new DataOpt.MSSQLConnection(connectionString);
        }

        public iSystemBranch()
        {

        }

        public string dbInsert()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("Branch_ID", this._branchID));
            parameters.Add(_sqlConn.GetParameter("Branch_Name", this._branchName));
            parameters.Add(_sqlConn.GetParameter("Parent_Branch", this._parentBranch));
            parameters.Add(_sqlConn.GetParameter("Route_Display", this._routeDisplay));
            parameters.Add(_sqlConn.GetParameter("Short_Code", this._shortCode));
            parameters.Add(_sqlConn.GetParameter("Manager", this._manager));
            parameters.Add(_sqlConn.GetParameter("Type", "1"));

            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeleteSystemBranch", parameters);
                return "Ok";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iSystemBranch.dbInsert :=> " + ex.Message.ToString();
            }

        }

        public string dbUpdate()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("Branch_ID", this._branchID));
            parameters.Add(_sqlConn.GetParameter("Branch_Name", this._branchName));
            parameters.Add(_sqlConn.GetParameter("Parent_Branch", this._parentBranch));
            parameters.Add(_sqlConn.GetParameter("Route_Display", this._routeDisplay));
            parameters.Add(_sqlConn.GetParameter("Short_Code", this._shortCode));
            parameters.Add(_sqlConn.GetParameter("Manager", this._manager));
            parameters.Add(_sqlConn.GetParameter("Type", "2"));
            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeleteSystemBranch", parameters);
                return "OK";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iSystemBranch.dbUpdate :=> " + ex.Message.ToString();
            }

        }

        public string dbDelete()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("Branch_ID", this._branchID));
            parameters.Add(_sqlConn.GetParameter("Branch_Name", this._branchName));
            parameters.Add(_sqlConn.GetParameter("Parent_Branch", this._parentBranch));
            parameters.Add(_sqlConn.GetParameter("Route_Display", this._routeDisplay));
            parameters.Add(_sqlConn.GetParameter("Short_Code", this._shortCode));
            parameters.Add(_sqlConn.GetParameter("Manager", this._manager));
            parameters.Add(_sqlConn.GetParameter("Type", "3"));
            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeleteSystemBranch", parameters);
                return "OK";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iSystemBranch.dbDelete :=> " + ex.Message.ToString();
            }

        }

        public JCS_DataInterface.Models.Administration.SystemBranch dbGet(string collection_type_code)
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("branchid", this._branchID));
            JCS_DataInterface.Models.Administration.SystemBranch result = new JCS_DataInterface.Models.Administration.SystemBranch();


            try
            {
                using (DbDataReader dataReader = _sqlConn.GetDataReader("SELECT   Branch_ID,Branch_Name,Parent_Branch  ,Route_Display,Short_Code ,Manager  FROM System_Branch where Branch_ID = @branchid", parameters, System.Data.CommandType.Text))
                {
                    while (dataReader.Read())
                    {
                        result._branchID = dataReader["Branch_ID"].ToString();
                        result._branchName = dataReader["Branch_Name"].ToString();
                        result._parentBranch = dataReader["Parent_Branch"].ToString();
                        result._routeDisplay = dataReader["Route_Display"].ToString();
                        result._shortCode = dataReader["Short_Code"].ToString();
                        result._manager = dataReader["Manager"].ToString();

                        return result;
                    }


                }


            }
            catch (Exception ex)
            {
                result._branchName = "Error on JCS_DataInterface.iSystemBranch.dbGet :=> " + ex.Message.ToString();
                return result;
            }


            result._branchName = "No Records Found";
            return result;

        }

        public List<JCS_DataInterface.Models.Administration.SystemBranch> dbSearch(string searchKey)
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("Branch_Name", searchKey));
            parameters.Add(_sqlConn.GetParameter("Route_Display", searchKey));
            parameters.Add(_sqlConn.GetParameter("Short_Code", searchKey));

            List<JCS_DataInterface.Models.Administration.SystemBranch> result = new List<JCS_DataInterface.Models.Administration.SystemBranch>();
            JCS_DataInterface.Models.Administration.SystemBranch resultItem = new JCS_DataInterface.Models.Administration.SystemBranch();


            try
            {


                using (DbDataReader dataReader = _sqlConn.GetDataReader("SELECT   Branch_ID,Branch_Name,Parent_Branch  ,Route_Display,Short_Code ,Manager  FROM System_Branch WHERE Branch_Name like '%'+@Branch_Name+'%' OR Route_Display like '%'+@Route_Display+'%' OR Short_Code like '%'+@Short_Code+'%' ", parameters, System.Data.CommandType.Text))
                {
                    while (dataReader.Read())
                    {
                        resultItem = new Models.Administration.SystemBranch();
                        resultItem._branchID = dataReader["Branch_ID"].ToString();
                        resultItem._branchName = dataReader["Branch_Name"].ToString();
                        resultItem._parentBranch = dataReader["Parent_Branch"].ToString();
                        resultItem._routeDisplay = dataReader["Route_Display"].ToString();
                        resultItem._shortCode = dataReader["Short_Code"].ToString();
                        resultItem._manager = dataReader["Manager"].ToString();


                        result.Add(resultItem);
                    }
                    return result;

                }



            }
            catch (Exception ex)
            {
                resultItem._branchName = "Error on JCS_DataInterface.iSystemBranch.dbSearch :=> " + ex.Message.ToString();
                result.Add(resultItem);
                return result;
            }


          
        }
    }
}
