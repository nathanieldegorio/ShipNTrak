using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Text;

namespace JCS_DataInterface.Interface.Administration
{
    public class iShipmentType : Models.Administration.ShipmentType
    {
        private DataOpt.MSSQLConnection _sqlConn;

        public iShipmentType(string connectionString)
        {
            _sqlConn = new DataOpt.MSSQLConnection(connectionString);
        }

        public void setConnectionString(string connectionString)
        {
            _sqlConn = new DataOpt.MSSQLConnection(connectionString);
        }

        public iShipmentType()
        {

        }

        public string dbInsert()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("shipment_type", this._shipmentType));
            parameters.Add(_sqlConn.GetParameter("description", this._description));
            parameters.Add(_sqlConn.GetParameter("isTransaction", this._isTransaction));
            parameters.Add(_sqlConn.GetParameter("Type", "1"));

            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeleteShipmentType", parameters);
                return "Ok";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iShipmentType.dbInsert :=> " + ex.Message.ToString();
            }

        }

        public string dbUpdate()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("shipment_type", this._shipmentType));
            parameters.Add(_sqlConn.GetParameter("description", this._description));
            parameters.Add(_sqlConn.GetParameter("isTransaction", this._isTransaction));
            parameters.Add(_sqlConn.GetParameter("Type", "2"));
            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeleteShipmentType", parameters);
                return "OK";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iShipmentType.dbUpdate :=> " + ex.Message.ToString();
            }

        }

        public string dbDelete()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("shipment_type", this._shipmentType));
            parameters.Add(_sqlConn.GetParameter("description", this._description));
            parameters.Add(_sqlConn.GetParameter("isTransaction", this._isTransaction));
            parameters.Add(_sqlConn.GetParameter("Type", "3"));
            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeleteShipmentType", parameters);
                return "OK";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iShipmentType.dbDelete :=> " + ex.Message.ToString();
            }

        }

        public JCS_DataInterface.Models.Administration.ShipmentType dbGet(string collection_type_code)
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("shipment_type", this._shipmentType));
            JCS_DataInterface.Models.Administration.ShipmentType result = new JCS_DataInterface.Models.Administration.ShipmentType();


            try
            {
                using (DbDataReader dataReader = _sqlConn.GetDataReader("SELECT  ShipmentType,Description,isTransaction FROM Shipment_Type where ShipmentType =@shipment_type;", parameters, System.Data.CommandType.Text))
                {
                    while (dataReader.Read())
                    {
                        result._shipmentType = (string)dataReader["ShipmentType"];
                        result._description = (string)dataReader["Description"];
                        result._isTransaction = (string)dataReader["isTransaction"];
                      

                        return result;
                    }


                }


            }
            catch (Exception ex)
            {
                result._description = "Error on JCS_DataInterface.iPaymentType.dbGet :=> " + ex.Message.ToString();
                return result;
            }


            result._description = "No Records Found";
            return result;

        }

        public List<JCS_DataInterface.Models.Administration.ShipmentType> dbSearch(string searchKey)
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("description", searchKey));
       

            List<JCS_DataInterface.Models.Administration.ShipmentType> result = new List<JCS_DataInterface.Models.Administration.ShipmentType>();
            JCS_DataInterface.Models.Administration.ShipmentType resultItem = new JCS_DataInterface.Models.Administration.ShipmentType();


            try
            {


                using (DbDataReader dataReader = _sqlConn.GetDataReader("SELECT  ShipmentType,Description,isTransaction FROM Shipment_Type  where Description like '%'+@description+'%' ", parameters, System.Data.CommandType.Text))
                {
                    while (dataReader.Read())
                    {
                        resultItem = new Models.Administration.ShipmentType();
                        resultItem._shipmentType = dataReader["ShipmentType"].ToString();
                        resultItem._description = dataReader["Description"].ToString();
                        resultItem._isTransaction = dataReader["isTransaction"].ToString();
            
                        result.Add(resultItem);
                    }
                    return result;

                }



            }
            catch (Exception ex)
            {
                resultItem._description = "Error on JCS_DataInterface.iPaymentType.dbSearch :=> " + ex.Message.ToString();
                result.Add(resultItem);
                return result;
            }


        }
    }
}
