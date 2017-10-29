using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Text;

namespace JCS_DataInterface.Interface.Administration
{
    public class iCargoType: Models.Administration.CargoType
    {
        private DataOpt.MSSQLConnection _sqlConn;

        public iCargoType(string connectionString)
        {
            _sqlConn = new DataOpt.MSSQLConnection(connectionString);
        }

        public void setConnectionString(string connectionString)
        {
            _sqlConn = new DataOpt.MSSQLConnection(connectionString);
        }

        public iCargoType()
        {
            
        }

        public string dbInsert()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("cargo_id", this._cargoID));
            parameters.Add(_sqlConn.GetParameter("cargo_code", this._cargoCode));
            parameters.Add(_sqlConn.GetParameter("cargo_name", this._cargoName));
            parameters.Add(_sqlConn.GetParameter("cargo_description", this._cargoDescription));
            parameters.Add(_sqlConn.GetParameter("Type", "1"));

            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeleteCargoType", parameters);
                return "Ok";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iCargoType.dbInsert :=> " + ex.Message.ToString();
            }
            
        }

        public string dbUpdate()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("cargo_id", this._cargoID));
            parameters.Add(_sqlConn.GetParameter("cargo_code", this._cargoCode));
            parameters.Add(_sqlConn.GetParameter("cargo_name", this._cargoName));
            parameters.Add(_sqlConn.GetParameter("cargo_description", this._cargoDescription));
            parameters.Add(_sqlConn.GetParameter("Type", "2"));

            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeleteCargoType", parameters);
                return "OK";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iCargoType.dbUpdate :=> " + ex.Message.ToString();
            }

        }

        public string dbDelete()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("cargo_id", this._cargoID));
            parameters.Add(_sqlConn.GetParameter("cargo_code", this._cargoCode));
            parameters.Add(_sqlConn.GetParameter("cargo_name", this._cargoName));
            parameters.Add(_sqlConn.GetParameter("cargo_description", this._cargoDescription));
            parameters.Add(_sqlConn.GetParameter("Type", "3"));

            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeleteCargoType", parameters);
                return "OK";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iCargoType.dbDelete :=> " + ex.Message.ToString();
            }

        }

        public JCS_DataInterface.Models.Administration.CargoType dbGet(string collection_type_code)
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("cargo_id", this._cargoID));
            JCS_DataInterface.Models.Administration.CargoType result = new JCS_DataInterface.Models.Administration.CargoType();


            try
            {
                using (DbDataReader dataReader = _sqlConn.GetDataReader("SELECT  cargoID ,cargoCode ,cargoName,cargoDescription  FROM cargo_types WHERE cargoID = @cargo_id", parameters, System.Data.CommandType.Text))
                {
                    while (dataReader.Read())
                    {
                        result._cargoID = (string)dataReader["cargoID"];
                        result._cargoCode = (string)dataReader["cargoCode"];
                        result._cargoName = (string)dataReader["cargoName"];
                        result._cargoDescription = (string)dataReader["cargoDescription"];
                     
                        return result;
                    }


                }

                
            }
            catch (Exception ex)
            {
                result._cargoDescription = "Error on JCS_DataInterface.iCargoType.dbGet :=> " + ex.Message.ToString();
                return result;
            }


            result._cargoDescription = "No Records Found";
            return result;

        }

        public List<JCS_DataInterface.Models.Administration.CargoType> dbSearch(string searchKey)
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("searchkey", searchKey));
        

            List<JCS_DataInterface.Models.Administration.CargoType> result = new List<JCS_DataInterface.Models.Administration.CargoType>();
            JCS_DataInterface.Models.Administration.CargoType resultItem = new JCS_DataInterface.Models.Administration.CargoType();


            try
            {
                using (DbDataReader dataReader = _sqlConn.GetDataReader("SELECT  cargoID ,cargoCode ,cargoName,cargoDescription  FROM cargo_types WHERE cargoCode like '%'+@searchkey+'%' OR cargoName   LIKE '%'+@searchkey+'%' OR cargoDescription  LIKE '%'+@searchkey+'%' ", parameters, System.Data.CommandType.Text))
                {
                    while (dataReader.Read())
                    {
                        resultItem = new JCS_DataInterface.Models.Administration.CargoType();

                        resultItem._cargoID = dataReader["cargoID"].ToString();
                        resultItem._cargoCode = (string)dataReader["cargoCode"];
                        resultItem._cargoName = (string)dataReader["cargoName"];
                        resultItem._cargoDescription = (string)dataReader["cargoDescription"];


                        result.Add(resultItem);
                    }

                    return result;
                }


            }
            catch (Exception ex)
            {
                resultItem._cargoDescription = "Error on JCS_DataInterface.iCargoType.dbSearch :=> " + ex.Message.ToString();
                result.Add(resultItem);
                return result;
            }


        }

    }
}
