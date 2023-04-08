const InputField = (props) => {
  return (
    <input
      type={props.inputType}
      className={` mt-1 border-[1.5px] dark:bg-invoiceItem_dark_background text-darkishBlue_font 
      dark:text-lightGrey_font dark:border-none border-[#bebebe8d] rounded-[5px] focus:outline-none 
      text-sm py-2 px-4 ${props.styles}`}
    />
  );
};

export default InputField;
