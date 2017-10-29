using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Text;

namespace JCS_DataInterface.Interface.Administration
{
    public class iUnit: Models.Administration.Unit
    {
        private DataOpt.MSSQLConnection _sqlConn;

        public iUnit(string connectionString)
        {
            _sqlConn = new DataOpt.MSSQLConnection(connectionString);
        }

        public void setConnectionString(string connectionString)
        {
            _sqlConn = new DataOpt.MSSQLConnection(connectionString);
        }

        public iUnit()
        {
            
        }

        public string dbInsert()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("unit_code", this._unitCode));
            parameters.Add(_sqlConn.GetParameter("unit_name", this._unitName));
            parameters.Add(_sqlConn.GetParameter("unit_description", this._unitDescription));
           
            parameters.Add(_sqlConn.GetParameter("Type", "1"));

            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeleteUnit", parameters);
                return "Ok";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iUnit.dbInsert :=> " + ex.Message.ToString();
            }
            
        }

        public string dbUpdate()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("unit_code", this._unitCode));
            parameters.Add(_sqlConn.GetParameter("unit_name", this._unitName));
            parameters.Add(_sqlConn.GetParameter("unit_description", this._unitDescription));
            parameters.Add(_sqlConn.GetParameter("Type", "2"));

            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeleteUnit", parameters);
                return "OK";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iUnit.dbUpdate :=> " + ex.Message.ToString();
            }

        }

        public string dbDelete()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("unit_code", this._unitCode));
            parameters.Add(_sqlConn.GetParameter("unit_name", this._unitName));
            parameters.Add(_sqlConn.GetParameter("unit_description", this._unitDescription));
            parameters.Add(_sqlConn.GetParameter("Type", "3"));

            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeleteUnit", parameters);
                return "OK";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iUnit.dbDelete :=> " + ex.Message.ToString();
            }

        }

        public JCS_DataInterface.Models.Administration.Unit dbGet(string collection_type_code)
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("unit_code", this._unitCode));
            JCS_DataInterface.Models.Administration.Unit result = new JCS_DataInterface.Models.Administration.Unit();


            try
            {
                using (DbDataReader dataReader = _sqlConn.GetDataReader("SELECT unitCode, unitName, unitDescription FROM dbo.system_units WHERE unitCode = @unit_code", parameters, System.Data.CommandType.Text))
                {
                    while (dataReader.Read())
                    {
                        result._unitCode = (string)dataReader["unitCode"];
                        result._unitName = (string)dataReader["unitName"];
                        result._unitDescription = (string)dataReader["unitDescription"];
                    
                        return result;
                    }


                }

                
            }
            catch (Exception ex)
            {
                result._unitDescription = "Error on JCS_DataInterface.iUnit.dbGet :=> " + ex.Message.ToString();
                return result;
            }


            result._unitDescription = "No Records Found";
            return result;

        }

        public List<JCS_DataInterface.Models.Administration.Unit> dbSearch(string searchKey)
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("searchKey", searchKey));
    

            List<JCS_DataInterface.Models.Administration.Unit> result = new List<JCS_DataInterface.Models.Administration.Unit>();
            JCS_DataInterface.Models.Administration.Unit resultItem = new JCS_DataInterface.Models.Administration.Unit();


            try
            {
                using (DbDataReader dataReader = _sqlConn.GetDataReader("SELECT unitCode, unitName, unitDescription FROM dbo.system_units WHERE unitName like '%'+@searchKey+'%' OR unitDescription   LIKE '%'+@searchKey+'%' ", parameters, System.Data.CommandType.Text))
                {
                    while (dataReader.Read())
                    {
                        resultItem = new JCS_DataInterface.Models.Administration.Unit();

                        resultItem._unitCode = dataReader["unitCode"].ToString();
                        resultItem._unitName = (string)dataReader["unitName"];
                        resultItem._unitDescription = (string)dataReader["unitDescription"];


                        result.Add(resultItem);
                    }

                    return result;
                }


            }
            catch (Exception ex)
            {
                resultItem._unitDescription = "Error on JCS_DataInterface.iUnit.dbSearch :=> " + ex.Message.ToString();
                result.Add(resultItem);
                return result;
            }


         
        }

    }
}
