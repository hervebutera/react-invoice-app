import InvoiceItem from "./InvoiceItem";

const InvoicesList = () => {
  return (
    <div className="relative flex flex-col space-y-4">
      <InvoiceItem
        invoiceId={"RT304"}
        invoiceDueDate={"13 Aug 2023"}
        invoiceDueAmount={"1200.89"}
        invoiceSentTo={"Alex Ikogi"}
        status={"Pending"}
      />
    </div>
  );
};

export default InvoicesList;
