import InvoiceListItem from "./InvoiceListItem";
import { connect } from "react-redux";

const InvoicesList = (props) => {
  return (
    <ul className="relative flex flex-col space-y-4">
      <InvoiceListItem
        invoiceId={props.invoice.id}
        invoiceDueDate={props.invoice.invoiceSentDate}
        invoiceDueAmount={props.invoice.grandTotal}
        invoiceSentTo={props.invoice.clientAddress.clientName}
        status={props.invoice.invoiceStatus}
      />
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    invoice: state[0]
  }
}

export default connect(mapStateToProps) (InvoicesList);
