import InvoiceFormLayout from "../Layouts/InvoiceFormLayout";
import InvoiceForm from "./InvoiceForm";
import Modal from "./modal";

const EditInvoice = (props) => {
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
        <InvoiceForm invoice={props.invoiceData} type="edit" displayInvoiceForm={props.displayInvoiceForm} />
      </InvoiceFormLayout>
    </Modal>
  );
};

export default EditInvoice;
