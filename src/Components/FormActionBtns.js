const FormActionBtns = (props) => {
  return (
    <div
      className="w-full bg-[#F8F7FC] dark:bg-invoiceItem_dark_background 
         h-16 px-5 pr-7 py-4 mt-10 md:w-[500px] md:pl-10 md:pr-12 lg:pl-24  "
    >
      {props.children}
    </div>
  );
};

export default FormActionBtns;
