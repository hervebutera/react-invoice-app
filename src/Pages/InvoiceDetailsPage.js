import HomePageLayout from "../Layouts/HomePageLayout";
import CRUDbuttonsCard from "../Components/CRUDbuttonsCard";
import InvoiceDetailsCard from "../Components/InvoiceDetailsCard";
import InvoiceDetailsHeader from "../Components/InvoiceDetailsHeader";
import EditInvoice from "../Components/EditInvoice";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const InvoiceDetailsPage = () => {
  let location = useLocation();
  let { invoice } = location.state;
  const [displayInvoiceForm, setDisplayInvoiceForm] = useState(false);

  const handleDisplayInvoiceForm = (statusBoolean) => {
    return setDisplayInvoiceForm(statusBoolean);
  };
  return (
    <>
      <HomePageLayout>
        <InvoiceDetailsHeader invoiceData={invoice} displayInvoiceForm={handleDisplayInvoiceForm} />
        <InvoiceDetailsCard invoiceData={invoice} />
      </HomePageLayout>
      {displayInvoiceForm === true ? (
        <EditInvoice invoiceData={invoice} displayInvoiceForm={handleDisplayInvoiceForm} />
      ) : (
        ""
      )}
        
      <CRUDbuttonsCard
        styles={
          " bg-invoiceItem_light_background dark:bg-invoiceItem_dark_background w-full py-4 md:hidden"
        }
      />
    </>
  );
};

export default InvoiceDetailsPage;
