import { addInvoice } from "../Store/Actions/invoiceAction";
import Button from "./Button";
import { connect } from "react-redux";

const NewInvoiceActionBtns = (props) => {

  const handleSubmitInvoice = (invoiceStatus) => {
    const invoiceData = props.handleInvoiceData(props.invoiceData);
    let newInvoiceId = props.invoices[props.invoices.length - 1].id + 1;
    if (invoiceData !== undefined) {
        const newInvoiceData = {
          ...invoiceData,
          id: newInvoiceId,
          invoiceStatus: invoiceStatus,
        };
      props.addInvoice(newInvoiceData);
      props.displayInvoiceForm(false);
    }
  };

  return (
    <div
      className="w-full bg-[#F8F7FC] dark:bg-invoiceItem_dark_background 
         h-16 px-5 pr-7 py-4 mt-10 md:w-[500px] md:pl-10 md:pr-12 lg:pl-24  "
    >
      <div className="float-left flex flex-row">
        <Button
          styles={
            "bg-white py-2 text-xs px-1 text-[#363951] font-semibold self-center  md:px-5 md:py-2"
          }
          onClick={() => props.displayInvoiceForm(false)}
        >
          Discard
        </Button>
      </div>
      <div className="float-right flex flex-row space-x-1 md:space-x-2">
        <Button
          styles={
            "bg-[#363951] py-2 text-xs px-1 text-white font-semibold self-center  md:px-5 md:py-2"
          }
          onClick={() => {
            handleSubmitInvoice("Draft");
          }}
        >
          Save as Draft
        </Button>
        <Button
          styles={
            "bg-purpleMainColor py-2 text-xs px-1 text-white font-semibold self-center  md:px-5 md:py-2 hover:bg-[#6844fa]"
          }
          onClick={() => {
            handleSubmitInvoice("Pending");
          }}
        >
          Save & send
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    invoices: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addInvoice: (newInvoice) => {
      dispatch(addInvoice(newInvoice));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewInvoiceActionBtns);
