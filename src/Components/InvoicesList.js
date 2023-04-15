import InvoiceListItem from "./InvoiceListItem";
import { connect } from "react-redux";

const InvoicesList = (props) => {
  return (
    <ul className="flex flex-col space-y-4">
      {props.invoices.map((invoice) => {
        return (
          <InvoiceListItem
            key={invoice.id}
            invoiceId={invoice.invoiceCode}
            invoiceDueDate={invoice.invoiceSentDate}
            invoiceDueAmount={invoice.grandTotal}
            invoiceSentTo={invoice.clientAddress.clientName}
            status={invoice.invoiceStatus}
          />
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    invoices: state,
  };
};

export default connect(mapStateToProps)(InvoicesList);
