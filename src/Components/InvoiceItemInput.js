import DeleteBin from "../Assets/imgs/delete-bin.png";
import Button from "./Button";
import { useState, useEffect } from "react";

const InvoiceItemInput = (props) => {
  const [invoiceItem, setInvoiceItem] = useState(props.inputValues);
  const handleOnDelete = (e) => {
    e.preventDefault();
    props.onDelete(props.id);
  };

  const handleOnChange = (e) => {
    setInvoiceItem(() => {
      return {
        ...invoiceItem,
        [e.target.id]: e.target.value,
      };
    });
  };

  useEffect(() => {
    setInvoiceItem(() => {
      return {
        ...invoiceItem,
        itemTotal: invoiceItem.quantity * invoiceItem.price,
      };
    });
  }, [invoiceItem.quantity, invoiceItem.price]);

  const { syncData } = props;
  useEffect(() => {
    return syncData(invoiceItem);
  }, [syncData, invoiceItem]);

  return (
    <>
      <input
        type="text"
        className={` ${props.className} col-span-4`}
        value={invoiceItem.itemName}
        id="itemName"
        onChange={handleOnChange}
      />

      <input
        type="number"
        className={props.className}
        value={invoiceItem.quantity}
        id="quantity"
        onChange={handleOnChange}
      />
      <input
        type="number"
        className={props.className}
        value={invoiceItem.price}
        id="price"
        onChange={handleOnChange}
      />

      <div className=" self-center text-center px-1 text-darkishBlue_font dark:text-lightGrey_font md:px-2">
        {invoiceItem.itemTotal}
      </div>
      <Button
        styles={"px-2 self-center justify-self-end"}
        onClick={handleOnDelete}
      >
        <img src={DeleteBin} alt="delete icon" className=" w-4 ml-1 h-5" />
      </Button>
    </>
  );
};

export default InvoiceItemInput;
