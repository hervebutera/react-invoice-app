import Button from "./Button";
import { connect } from "react-redux";
import { updateInvoice } from "../Store/Actions/invoiceAction";

const EditInvoiceActionBtns = (props) => {
  
  const handleSubmitInvoice = () => {
    const invoiceData = props.handleInvoiceData(props.invoiceData);
    if (invoiceData !== undefined) {
      props.updateInvoice(invoiceData);
      props.displayInvoiceForm(false);
    }
  };

  return (
    <div
      className="w-full bg-[#F8F7FC] dark:bg-invoiceItem_dark_background 
           h-16 px-5 pr-7 py-4 mt-10 md:w-[500px] md:pl-10 md:pr-12 lg:pl-24  "
    >
      <div className="float-right flex flex-row space-x-1 md:space-x-2">
        <Button
          styles={`bg-[#fafcfe] dark:bg-editBtn_dark_background text-grey_font 
                dark:text-white  py-2 text-xs px-1  font-semibold self-center  md:px-5
                hover:bg-[#e6e8ec] dark:hover:bg-[#2e3553]`}
          onClick={() => props.displayInvoiceForm(false)}
        >
          Cancel
        </Button>
        <Button
          styles={
            "bg-purpleMainColor py-2.5 text-xs px-1 text-white font-semibold self-center  md:px-5 hover:bg-[#6844fa]"
          }
          onClick={handleSubmitInvoice}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateInvoice: (invoice) => {
      dispatch(updateInvoice(invoice));
    },
  };
};

export default connect(
  null,  
  mapDispatchToProps
)(EditInvoiceActionBtns);
