import InvoiceIdInfo from "./InvoiceIdInfo";
import InvoiceAmountInfo from "./InvoiceAmountInfo";

const InvoiceDetailsCard = () => {
  return (
    <div
      className="bg-invoiceItem_light_background dark:bg-invoiceItem_dark_background  
            rounded-lg space-y-12 p-5 mt-6 mb-9 md:p-10"
    >
      <InvoiceIdInfo />
      <InvoiceAmountInfo />
    </div>
  );
};

export default InvoiceDetailsCard;
