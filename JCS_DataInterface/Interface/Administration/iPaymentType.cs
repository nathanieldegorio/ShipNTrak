using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Text;

namespace JCS_DataInterface.Interface.Administration
{
    public class iPaymentType : Models.Administration.PaymentType
    {

        private DataOpt.MSSQLConnection _sqlConn;

        public iPaymentType(string connectionString)
        {
            _sqlConn = new DataOpt.MSSQLConnection(connectionString);
        }

        public void setConnectionString(string connectionString)
        {
            _sqlConn = new DataOpt.MSSQLConnection(connectionString);
        }

        public iPaymentType()
        {

        }

        public string dbInsert()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("payment_type_code", this._paymentTypeCode));
            parameters.Add(_sqlConn.GetParameter("pt_display_name", this._ptDisplayName));
            parameters.Add(_sqlConn.GetParameter("pt_description", this._ptDescription));
            parameters.Add(_sqlConn.GetParameter("check_flag", this._checkFlag));
            parameters.Add(_sqlConn.GetParameter("added_by", this._addedBy));
            parameters.Add(_sqlConn.GetParameter("Type", "1"));

            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeletePaymentType", parameters);
                return "Ok";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iPaymentType.dbInsert :=> " + ex.Message.ToString();
            }

        }

        public string dbUpdate()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("payment_type_code", this._paymentTypeCode));
            parameters.Add(_sqlConn.GetParameter("pt_display_name", this._ptDisplayName));
            parameters.Add(_sqlConn.GetParameter("pt_description", this._ptDescription));
            parameters.Add(_sqlConn.GetParameter("check_flag", this._checkFlag));
            parameters.Add(_sqlConn.GetParameter("added_by", this._addedBy));
            parameters.Add(_sqlConn.GetParameter("Type", "2"));
            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeletePaymentType", parameters);
                return "OK";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iPaymentType.dbUpdate :=> " + ex.Message.ToString();
            }

        }

        public string dbDelete()
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("payment_type_code", this._paymentTypeCode));
            parameters.Add(_sqlConn.GetParameter("pt_display_name", this._ptDisplayName));
            parameters.Add(_sqlConn.GetParameter("pt_description", this._ptDescription));
            parameters.Add(_sqlConn.GetParameter("check_flag", this._checkFlag));
            parameters.Add(_sqlConn.GetParameter("added_by", this._addedBy));
            parameters.Add(_sqlConn.GetParameter("Type", "3"));
            try
            {
                _sqlConn.ExecuteNonQuery("InsertUpdateDeletePaymentType", parameters);
                return "OK";
            }
            catch (Exception ex)
            {
                return "Error on JCS_DataInterface.iPaymentType.dbDelete :=> " + ex.Message.ToString();
            }

        }

        public JCS_DataInterface.Models.Administration.PaymentType dbGet(string collection_type_code)
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("payment_type_code", this._paymentTypeCode));
            JCS_DataInterface.Models.Administration.PaymentType result = new JCS_DataInterface.Models.Administration.PaymentType();


            try
            {
                using (DbDataReader dataReader = _sqlConn.GetDataReader("SELECT payment_type_code,pt_display_name ,pt_description ,check_flag ,added_by FROM payment_type where payment_type_code =@payment_type_code;", parameters, System.Data.CommandType.Text))
                {
                    while (dataReader.Read())
                    {
                        result._paymentTypeCode = (string)dataReader["payment_type_code"];
                        result._ptDisplayName = (string)dataReader["pt_display_name"];
                        result._ptDescription = (string)dataReader["pt_description"];
                        result._checkFlag = (string)dataReader["check_flag"];
                        result._addedBy = (string)dataReader["added_by"];
                      

                        return result;
                    }


                }


            }
            catch (Exception ex)
            {
                result._ptDisplayName = "Error on JCS_DataInterface.iPaymentType.dbGet :=> " + ex.Message.ToString();
                return result;
            }


            result._ptDisplayName = "No Records Found";
            return result;

        }

        public List<JCS_DataInterface.Models.Administration.PaymentType> dbSearch(string searchKey)
        {
            List<DbParameter> parameters = new List<DbParameter>();
            parameters.Add(_sqlConn.GetParameter("pt_display_name", searchKey));
            parameters.Add(_sqlConn.GetParameter("pt_description", searchKey));


            List<JCS_DataInterface.Models.Administration.PaymentType> result = new List<JCS_DataInterface.Models.Administration.PaymentType>();
            JCS_DataInterface.Models.Administration.PaymentType resultItem = new JCS_DataInterface.Models.Administration.PaymentType();


            try
            {
               

                using (DbDataReader dataReader = _sqlConn.GetDataReader("SELECT payment_type_code,pt_display_name ,pt_description ,check_flag ,added_by FROM payment_type where pt_display_name like '%'+@pt_display_name+'%' or pt_description like '%'+@pt_description+'%'", parameters, System.Data.CommandType.Text))
                {
                    while (dataReader.Read())
                    {
                        resultItem = new Models.Administration.PaymentType();
                        resultItem._paymentTypeCode = dataReader["payment_type_code"].ToString();
                        resultItem._ptDisplayName = dataReader["pt_display_name"].ToString();
                        resultItem._ptDescription = dataReader["pt_description"].ToString();
                        resultItem._checkFlag = dataReader["check_flag"].ToString();
                        resultItem._addedBy = dataReader["added_by"].ToString();


                        result.Add(resultItem);
                    }
                    return result;

                }



            }
            catch (Exception ex)
            {
                resultItem._ptDisplayName = "Error on JCS_DataInterface.iPaymentType.dbSearch :=> " + ex.Message.ToString();
                result.Add(resultItem);
                return result;
            }


        }

    }
}
