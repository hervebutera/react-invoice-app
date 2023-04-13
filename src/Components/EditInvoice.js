import InvoiceFormLayout from "../Layouts/InvoiceFormLayout";
import InvoiceForm from "./InvoiceForm";
import InvoiceFormActionBtnsWrapper from "./FormActionBtns";
import Modal from "./modal";
import Button from "./Button";

const EditInvoice = () => {
  return (
    <Modal>
      <InvoiceFormLayout>
        <h1
          className="text-darkishBlue_font dark:text-lightGrey_font text-2xl 
              font-bold px-5 pt-20 md:pt-28 md:px-10 lg:pt-14 lg:pl-24 "
        >
          Edit
          <span className="text-grey_font text-2xl "> #</span>
          <span
            className="text-darkishBlue_font dark:text-darkWhite_font 
                text-2xl font-bold "
          >
            {"RT340"}
          </span>
        </h1>
        <InvoiceForm />
        <InvoiceFormActionBtnsWrapper>
          <div className="float-right flex flex-row space-x-1 md:space-x-2">
            <Button
              styles={`bg-editBtn_light_background dark:bg-editBtn_dark_background text-grey_font 
                dark:text-white  py-2 text-xs px-1  font-semibold self-center  md:px-5 `}
            >
              Cancel
            </Button>
            <Button
              styles={
                "bg-purpleMainColor py-2.5 text-xs px-1 text-white font-semibold self-center  md:px-5 "
              }
            >
              Save Changes
            </Button>
          </div>
        </InvoiceFormActionBtnsWrapper>
      </InvoiceFormLayout>
    </Modal>
  );
};

export default EditInvoice;
