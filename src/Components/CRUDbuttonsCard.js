import Button from "./Button";
import { connect } from "react-redux";
import { deleteInvoice, updateInvoice } from "../Store/Actions/invoiceAction";
import { useNavigate } from "react-router-dom";

const CRUDbuttonsCard = (props) => {
  const navigate = useNavigate();
  const handleDeleteInvoice = () => {
    props.deleteInvoice(props.invoiceData.id);
    return navigate("/", { replace: true });
  };
  const handleUpdateInvoice = () => { 
    props.updateInvoice({...props.invoiceData, invoiceStatus: "Paid",})
  }

  return (
    <div className={props.styles}>
      <div className=" flex flex-row space-x-2 justify-center">
        <Button
          styles={` bg-editBtn_light_background dark:bg-editBtn_dark_background text-grey_font 
            dark:text-lightGrey_font font-semibold px-5 py-3 self-center`}
          onClick={() => props.displayInvoiceForm(true)}
        >
          Edit
        </Button>
        <Button
          styles={
            " bg-deleteBtn_background text-white text-sm font-bold px-5 py-3.5 self-center"
          }
          onClick={handleDeleteInvoice}
        >
          Delete
        </Button>
        <Button
          styles={
            " bg-purpleMainColor text-white text-sm font-bold px-5 py-3.5 self-center"
          }
          onClick={handleUpdateInvoice}
        >
          Mark as Paid
        </Button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteInvoice: (id) => dispatch(deleteInvoice(id)),
    updateInvoice: (invoice) => dispatch(updateInvoice(invoice)),
  };
};

export default connect(null, mapDispatchToProps)(CRUDbuttonsCard);
