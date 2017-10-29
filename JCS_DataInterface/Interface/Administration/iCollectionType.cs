using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Text;

namespace JCS_DataInterface.Interface.Administration
{
    public class iCollectionType: Models.Administration.CollectionType
    {
        private DataOpt.MSSQLConnection _sqlConn;

        public iCollectionType(string connectionString)
        {
            _sqlConn = new DataOpt.MSSQLConnection(connectionString);
        }

        public void setConnectionString(string connectionString)
        {
            _sqlConn = new DataOpt.MSSQLConnection(connectionString);
        }

        public iCollectionType()
        {
            
        }

        public string dbInsert()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("collection_type_code", this._collectionTypeCode));
            parameters.Add(_sqlConn.GetParameter("ct_display_name", this._ctDisplayName));
            parameters.Add(_sqlConn.GetParameter("ct_description", this._ctDescription));
            parameters.Add(_sqlConn.GetParameter("ct_billed_to", this._ctBilledTo));
            parameters.Add(_sqlConn.GetParameter("collectable_flag", this._collectableFlag));
            parameters.Add(_sqlConn.GetParameter("collect_on_delivery_flag", this._collectOnDeliveryFlag));
            parameters.Add(_sqlConn.GetParameter("added_by", this._addedBy));
            parameters.Add(_sqlConn.GetParameter("Type", "1"));

            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeleteCollectionType", parameters);
                return "Ok";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iCollectionType.dbInsert :=> " + ex.Message.ToString();
            }
            
        }

        public string dbUpdate()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("collection_type_code", this._collectionTypeCode));
            parameters.Add(_sqlConn.GetParameter("ct_display_name", this._ctDisplayName));
            parameters.Add(_sqlConn.GetParameter("ct_description", this._ctDescription));
            parameters.Add(_sqlConn.GetParameter("ct_billed_to", this._ctBilledTo));
            parameters.Add(_sqlConn.GetParameter("collectable_flag", this._collectableFlag));
            parameters.Add(_sqlConn.GetParameter("collect_on_delivery_flag", this._collectOnDeliveryFlag));
            parameters.Add(_sqlConn.GetParameter("added_by", this._addedBy));
            parameters.Add(_sqlConn.GetParameter("Type", "2"));

            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeleteCollectionType", parameters);
                return "OK";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iCollectionType.dbUpdate :=> " + ex.Message.ToString();
            }

        }

        public string dbDelete()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("collection_type_code", this._collectionTypeCode));
            parameters.Add(_sqlConn.GetParameter("ct_display_name", this._ctDisplayName));
            parameters.Add(_sqlConn.GetParameter("ct_description", this._ctDescription));
            parameters.Add(_sqlConn.GetParameter("ct_billed_to", this._ctBilledTo));
            parameters.Add(_sqlConn.GetParameter("collectable_flag", this._collectableFlag));
            parameters.Add(_sqlConn.GetParameter("collect_on_delivery_flag", this._collectOnDeliveryFlag));
            parameters.Add(_sqlConn.GetParameter("added_by", this._addedBy));
            parameters.Add(_sqlConn.GetParameter("Type", "3"));

            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeleteCollectionType", parameters);
                return "OK";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iCollectionType.dbDelete :=> " + ex.Message.ToString();
            }

        }

        public JCS_DataInterface.Models.Administration.CollectionType dbGet(string collection_type_code)
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("collection_type_code", this._collectionTypeCode));
            JCS_DataInterface.Models.Administration.CollectionType result = new JCS_DataInterface.Models.Administration.CollectionType();


            try
            {
                using (DbDataReader dataReader = _sqlConn.GetDataReader("SELECT collection_type_code ,ct_display_name  ,ct_description   ,ct_billed_to,collectable_flag ,collect_on_delivery_flag  ,added_by FROM dbo.collection_type WHERE Collection_Type_Code = @collection_type_code", parameters, System.Data.CommandType.Text))
                {
                    while (dataReader.Read())
                    {
                        result._collectionTypeCode = (string)dataReader["collection_type_code"];
                        result._ctDisplayName = (string)dataReader["ct_display_name"];
                        result._ctDescription = (string)dataReader["ct_description"];
                        result._ctBilledTo = (string)dataReader["ct_billed_to"];
                        result._collectableFlag = (string)dataReader["collectable_flag"];
                        result._collectOnDeliveryFlag = (string)dataReader["collect_on_delivery_flag"];
                        result._addedBy = (string)dataReader["added_by"];


                        return result;
                    }


                }

                
            }
            catch (Exception ex)
            {
                result._ctDisplayName = "Error on JCS_DataInterface.iCollectionType.dbGet :=> " + ex.Message.ToString();
                return result;
            }


            result._ctDisplayName = "No Records Found";
            return result;

        }

        public List<JCS_DataInterface.Models.Administration.CollectionType> dbSearch(string searchKey)
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("ct_display_name", searchKey));
            parameters.Add(_sqlConn.GetParameter("ct_description", searchKey));


            List<JCS_DataInterface.Models.Administration.CollectionType> result = new List<JCS_DataInterface.Models.Administration.CollectionType>();
            JCS_DataInterface.Models.Administration.CollectionType resultItem = new JCS_DataInterface.Models.Administration.CollectionType();


            try
            {
                using (DbDataReader dataReader = _sqlConn.GetDataReader("SELECT collection_type_code ,ct_display_name  ,ct_description   ,ct_billed_to,collectable_flag ,collect_on_delivery_flag  ,added_by FROM dbo.collection_type WHERE ct_display_name like '%'+@ct_display_name+'%' OR ct_description   LIKE '%'+@ct_description+'%' ", parameters, System.Data.CommandType.Text))
                {
                    while (dataReader.Read())
                    {
                        resultItem = new JCS_DataInterface.Models.Administration.CollectionType();

                        resultItem._collectionTypeCode = dataReader["collection_type_code"].ToString();
                        resultItem._ctDisplayName = dataReader["ct_display_name"].ToString();
                        resultItem._ctDescription = dataReader["ct_description"].ToString();
                        resultItem._ctBilledTo = dataReader["ct_billed_to"].ToString();
                        resultItem._collectableFlag = dataReader["collectable_flag"].ToString();
                        resultItem._collectOnDeliveryFlag = dataReader["collect_on_delivery_flag"].ToString();
                        resultItem._addedBy = dataReader["added_by"].ToString();


                        result.Add(resultItem);
                    }

                    return result;
                }


            }
            catch (Exception ex)
            {
                resultItem._ctDisplayName = "Error on JCS_DataInterface.iCollectionType.dbSearch :=> " + ex.Message.ToString();
                result.Add(resultItem);
                return result;
            }


            
        }

    }
}
