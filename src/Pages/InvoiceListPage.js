import HomePageLayout from "../Layouts/HomePageLayout";
import HomeHeader from "../Components/HomeHeader";
import InvoicesList from "../Components/InvoicesList";
import NewInvoice from "../Components/NewInvoice";
import { connect } from "react-redux";
import { useState } from "react";

const InvoiceListPage = (props) => {
  const [displayedInvoices, setDisplayedInvoices] = useState(props.invoices);

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

  return (
    <>
      <HomePageLayout>
        <HomeHeader filterByStatus={filterInvoicesByStatus} />
        <InvoicesList invoices={displayedInvoices} />
      </HomePageLayout>
      <NewInvoice />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    invoices: state,
  };
};

export default connect(mapStateToProps)(InvoiceListPage);
