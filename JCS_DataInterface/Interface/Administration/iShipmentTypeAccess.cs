using System;
using System.Collections.Generic;
using System.Text;
using System.Data.Common;

namespace JCS_DataInterface.Interface.Administration
{
    public class iShipmentTypeAccess : JCS_DataInterface.Models.Administration.ShipmentTypeAccess
    {
        private DataOpt.MSSQLConnection _sqlConn;

        public iShipmentTypeAccess(string connectionString)
        {
            _sqlConn = new DataOpt.MSSQLConnection(connectionString);
        }

        public void setConnectionString(string connectionString)
        {
            _sqlConn = new DataOpt.MSSQLConnection(connectionString);
        }

        public iShipmentTypeAccess()
        {

        }

        public string dbInsert()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("@shipmentType", this._shipmentType));
            parameters.Add(_sqlConn.GetParameter("@userAccountID", this._userAccountID));
            parameters.Add(_sqlConn.GetParameter("@hasAccess", this._hasAccess));
            parameters.Add(_sqlConn.GetParameter("Type", "1"));
           
            try
            {
                _sqlConn.ExecuteNonQuery("DELETE FROM Shipment_Type_Access where userAccountID=@userAccountID and shipmentType=@shipmentType; INSERT INTO Shipment_Type_Access(ShipmentType,UserAccountID,hasAccess) VALUES( @shipmentType,@userAccountID,@hasAccess)", parameters, System.Data.CommandType.Text);
                return "Ok";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iShipmentTypeAccess.dbInsert :=> " + ex.Message.ToString();
            }

        }

        public string dbUpdate()
        {
            return "Disable";
        }

        public string dbDelete()
        {
            return "Disable";  
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

        public List<JCS_DataInterface.Models.Administration.ShipmentTypeAccess> dbSearch(string searchKey)
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("@userAccountID", searchKey));
            

            List<JCS_DataInterface.Models.Administration.ShipmentTypeAccess> result = new List<JCS_DataInterface.Models.Administration.ShipmentTypeAccess>();
            JCS_DataInterface.Models.Administration.ShipmentTypeAccess resultItem = new JCS_DataInterface.Models.Administration.ShipmentTypeAccess();


            try
            {


                using (DbDataReader dataReader = _sqlConn.GetDataReader("SELECT sp.ShipmentType, sp.Description as ShipmentDescription, ISNULL(sa.user_account_id,@userAccountID) as  UserAccountID, ISNULL(st.hasAccess,0) as hasAccess from Shipment_Type sp left join Shipment_Type_Access st on st.ShipmentType=sp.ShipmentType left join User_Account sa on sa.user_account_id=st.UserAccountID "
                                                                    + " where sa.user_account_id = @userAccountID "
                                                                    + " UNION ALL "
                                                                    + " SELECT sp.ShipmentType,sp.Description ,ISNULL(sa.user_account_id, @userAccountID), ISNULL(st.hasAccess, 0) from Shipment_Type sp left  "
                                                                            + "                                                                                     join Shipment_Type_Access st on st.ShipmentType = sp.ShipmentType left "
                                                                        + "                                                                                         join User_Account sa on sa.user_account_id = st.UserAccountID "
                                                                    + " where sp.ShipmentType not in (SELECT sp.ShipmentType from Shipment_Type sp left "
                                                                        + "                                                  join Shipment_Type_Access st on st.ShipmentType = sp.ShipmentType left "
                                                                    + "                                                      join User_Account sa on sa.user_account_id = st.UserAccountID "
                                                                    + " where sa.user_account_id = @userAccountID) ", parameters, System.Data.CommandType.Text))
                {
                    while (dataReader.Read())
                    {
                        resultItem = new Models.Administration.ShipmentTypeAccess();
                        resultItem._shipmentType = dataReader["ShipmentType"].ToString();
                        resultItem._userAccountID = dataReader["userAccountID"].ToString();
                        resultItem._hasAccess = dataReader["hasAccess"].ToString();
                        resultItem._shipmentDescription = dataReader["ShipmentDescription"].ToString();

                        result.Add(resultItem);
                    }
                    return result;

                }



            }
            catch (Exception ex)
            {
                resultItem._shipmentType = "Error on JCS_DataInterface.iShipmentTypeAccess.dbSearch :=> " + ex.Message.ToString();
                result.Add(resultItem);
                return result;
            }


        
        }
    }
}
