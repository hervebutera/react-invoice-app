import HomePageLayout from "../Layouts/HomePageLayout";
import HomeHeader from "../Components/HomeHeader";
import InvoicesList from "../Components/InvoicesList";
import NewInvoice from "../Components/NewInvoice";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

const InvoiceListPage = (props) => {
  const [displayedInvoices, setDisplayedInvoices] = useState(props.invoices);
  const [displayNewInvoice, setDisplayNewInvoice] = useState(false);

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

  const handleDisplayNewInvoice = (statusBoolean) => {
    return setDisplayNewInvoice(statusBoolean);
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
          displayInvoiceForm={handleDisplayNewInvoice}
        />
        <InvoicesList invoices={displayedInvoices} />
      </HomePageLayout>
      {displayNewInvoice === true ? (
        <NewInvoice displayInvoiceForm={handleDisplayNewInvoice} />
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
