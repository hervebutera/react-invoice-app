import InvoiceListItem from "./InvoiceListItem";
import { useState, useEffect } from "react";

const InvoicesList = (props) => {
  const [invoices, setInvoices] = useState(props.invoices)
  
  useEffect(() => { 
    setInvoices(props.invoices)
  }, [props.invoices])

  return (
    <ul className="flex flex-col space-y-4">
      {invoices.map((invoice) => {
        return (
          <InvoiceListItem
            key={invoice.id}
            invoiceId={invoice.invoiceCode}
            invoiceDueDate={invoice.invoiceSentDate}
            invoiceDueAmount={invoice.grandTotal}
            invoiceSentTo={invoice.clientAddressClientName}
            status={invoice.invoiceStatus}
          />
        );
      })}
    </ul>
  );
};

export default InvoicesList;
