const InvoiceFormLayout = (props) => {
  return (
    <div
      className="w-full flex flex-col md:w-[500px]  
        bg-invoiceItem_light_background dark:bg-[#141625] h-screen invoice-form-layout"
    >
      {props.children}
    </div>
  );
};

export default InvoiceFormLayout;
