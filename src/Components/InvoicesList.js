import InvoiceListItem from "./InvoiceListItem";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const InvoicesList = (props) => {
  const [invoices, setInvoices] = useState(props.invoices)
  
  useEffect(() => {
    setInvoices(props.invoices)
  }, [props.invoices])

  return (
    <ul className="flex flex-col space-y-4">
      {invoices.map((invoice) => {
        return (
          <Link to="/invoice" state={{ invoice: invoice}} key={invoice.id}>
            <InvoiceListItem
            
            invoiceId={invoice.invoiceCode}
            invoiceDueDate={invoice.paymentDeadlineDate}
            invoiceDueAmount={invoice.grandTotal}
            invoiceSentTo={invoice.clientName}
            status={invoice.invoiceStatus}
          />
          </Link>
          
        );
      })}
    </ul>
  );
};

export default InvoicesList;
