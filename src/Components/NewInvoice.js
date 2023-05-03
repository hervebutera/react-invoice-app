import InvoiceFormLayout from "../Layouts/InvoiceFormLayout.js";
import InvoiceForm from "./InvoiceForm.js";
import Modal from "./modal.js";

const NewInvoice = (props) => {
  return (
    <Modal>
      <InvoiceFormLayout>
        <h1
          className="text-darkishBlue_font dark:text-lightGrey_font text-2xl 
              font-bold px-5 pt-20 md:pt-28 md:px-10 lg:pt-14 lg:pl-24 "
        >
          New Invoice
        </h1>
        <InvoiceForm invoice={""} type="new" displayInvoiceForm={props.displayInvoiceForm} />
      </InvoiceFormLayout>
    </Modal>
  );
};

export default NewInvoice;
