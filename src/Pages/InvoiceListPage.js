import HomePageLayout from "../Layouts/HomePageLayout";
import HomeHeader from "../Components/HomeHeader";
import InvoicesList from "../Components/InvoicesList";
import NewInvoice from "../Components/NewInvoice";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

const InvoiceListPage = (props) => {
  const [displayedInvoices, setDisplayedInvoices] = useState(props.invoices);
  const [displayInvoiceForm, setDisplayInvoiceForm] = useState(false);

  const filterInvoicesByStatus = (status) => {
    if (status === "Filter by status" || status === "All") {
      setDisplayedInvoices(props.invoices);
    } else {
      setDisplayedInvoices(() => {
        return props.invoices.filter(
          (invoice) => invoice.invoiceStatus === status
        );
      });
    }
  };

  const handleDisplayInvoiceForm = (statusBoolean) => {
    return setDisplayInvoiceForm(statusBoolean);
  };

  useEffect(() => {
    setDisplayedInvoices(() => {
      return props.invoices;
    });
  }, [props.invoices.length]);

  return (
    <>
      <HomePageLayout>
        <HomeHeader
          filterByStatus={filterInvoicesByStatus}
          displayInvoiceForm={handleDisplayInvoiceForm}
        />
        <InvoicesList invoices={displayedInvoices} />
      </HomePageLayout>
      {displayInvoiceForm === true ? (
        <NewInvoice displayInvoiceForm={handleDisplayInvoiceForm} />
      ) : (
        ""
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    invoices: state,
  };
};

export default connect(mapStateToProps)(InvoiceListPage);
