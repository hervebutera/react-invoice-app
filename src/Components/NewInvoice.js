import InvoiceFormLayout from "../Layouts/InvoiceFormLayout.js";
import Button from "./Button.js";
import InvoiceForm from "./InvoiceForm.js";
import FormActionBtns from "./FormActionBtns.js";
import Modal from "./modal.js";

const NewInvoice = () => {
  return (
    <Modal>
      <InvoiceFormLayout>
        <h1
          className="text-darkishBlue_font dark:text-lightGrey_font text-2xl 
              font-bold px-5 pt-20 md:pt-28 md:px-10 lg:pt-14 lg:pl-24 "
        >
          New Invoice
        </h1>
        <InvoiceForm />
        <FormActionBtns>
          <div className="float-left flex flex-row">
            <Button
              styles={
                "bg-white py-2 text-xs px-1 text-[#363951] font-semibold self-center  md:px-5 md:py-2"
              }
            >
              Discard
            </Button>
          </div>
          <div className="float-right flex flex-row space-x-1 md:space-x-2">
            <Button
              styles={
                "bg-[#363951] py-2 text-xs px-1 text-white font-semibold self-center  md:px-5 md:py-2"
              }
            >
              Save as Draft
            </Button>
            <Button
              styles={
                "bg-purpleMainColor py-2 text-xs px-1 text-white font-semibold self-center  md:px-5 md:py-2"
              }
            >
              Save & send
            </Button>
          </div>
        </FormActionBtns>
      </InvoiceFormLayout>
    </Modal>
  );
};

export default NewInvoice;
