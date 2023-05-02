import HomePageLayout from "../Layouts/HomePageLayout";
import CRUDbuttonsCard from "../Components/CRUDbuttonsCard";
import InvoiceDetailsCard from "../Components/InvoiceDetailsCard";
import InvoiceDetailsHeader from "../Components/InvoiceDetailsHeader";
import EditInvoice from "../Components/EditInvoice";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";

const InvoiceDetailsPage = (props) => {
  let location = useLocation();
  let { invoice } = location.state;
  const [displayInvoiceForm, setDisplayInvoiceForm] = useState(false);
  
  let invoiceDetails = props.invoices.filter(
    (invoiceInfo) => {  
      return invoiceInfo.id === invoice.id
    }
  );

  const handleDisplayInvoiceForm = (statusBoolean) => {
    return setDisplayInvoiceForm(statusBoolean);
  };
  return (
    <>
      <HomePageLayout>
        <InvoiceDetailsHeader
          invoiceData={invoiceDetails[0]}
          displayInvoiceForm={handleDisplayInvoiceForm}
        />
        <InvoiceDetailsCard invoiceData={invoiceDetails[0]} />
      </HomePageLayout>
      {displayInvoiceForm === true ? (
        <EditInvoice
          invoiceData={invoiceDetails[0]}
          displayInvoiceForm={handleDisplayInvoiceForm}
        />
      ) : (
        ""
      )}

      <CRUDbuttonsCard
        styles={
          " bg-invoiceItem_light_background dark:bg-invoiceItem_dark_background w-full py-4 md:hidden"
        }
        invoiceData={invoiceDetails[0]}
        displayInvoiceForm={handleDisplayInvoiceForm}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    invoices: state,
  };
};

export default connect(mapStateToProps)(InvoiceDetailsPage);
