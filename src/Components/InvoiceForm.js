import Button from "./Button";
import { useEffect, useState } from "react";
import InvoiceItemInput from "./InvoiceItemInput";
import NewInvoiceActionBtns from "./NewInvoiceActionBtns";
import EditInvoiceActionBtns from "./EditInvoiceActionBtns";

export const InvoiceForm = (props) => {
  // assigning today's date
  let date = new Date();
  let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
  let currentDate = String(date.getDate()).padStart(2, "0");
  let currentYear = String(date.getFullYear());
  let defaultCurrentDate = `${currentYear}-${currentMonth}-${currentDate}`;
  const [emptyDateAlert, setEmptyDateAlert] = useState(false);
  const [invoiceData, setInvoiceData] = useState(() => {
    if (props.invoice !== undefined && props.invoice !== "") {
      let invoiceDateYear = props.invoice.invoiceSentDate.substr(6, 4);
      let invoiceDateMonth = props.invoice.invoiceSentDate.substr(3, 2);
      let invoiceDateDay = props.invoice.invoiceSentDate.substr(0, 2);
      let displayedCurrentDate = `${invoiceDateYear}-${invoiceDateMonth}-${invoiceDateDay}`;

      return { ...props.invoice, invoiceSentDate: displayedCurrentDate };
    } else {
      return {
        id: 0,
        invoiceCode: "RT340",
        senderStreetAddress: "",
        senderPostCode: "",
        senderCityAddress: "",
        senderCountryAddress: "",
        clientName: "",
        clientEmail: "",
        clientStreetAddress: "",
        clientPostCode: "",
        clientCityAddress: "",
        clientCountryAddress: "",
        invoiceSentDate: defaultCurrentDate,
        paymentDeadlineDate: "",
        paymentTerms: "",
        description: "",
        items: [
          {
            id: 0,
            itemName: "",
            quantity: 0,
            price: 0,
            itemTotal: 0,
          },
        ],
        grandTotal: 0,
        invoiceStatus: "",
      };
    }
  });

  const addInvoiceItem = (e) => {
    e.preventDefault();
    setInvoiceData(() => {
      if (invoiceData.items.length === 0) {
        return {
          ...invoiceData,
          items: [
            {
              id: 0,
              itemName: "",
              quantity: 0,
              price: 0,
              itemTotal: 0,
            },
          ],
        };
      } else {
        return {
          ...invoiceData,
          items: [
            ...invoiceData.items,
            {
              id: invoiceData.items[invoiceData.items.length - 1].id + 1,
              itemName: "",
              quantity: 0,
              price: 0,
              itemTotal: 0,
            },
          ],
        };
      }
    });
  };

  const removeInvoiceItem = (id) => {
    setInvoiceData(() => {
      return {
        ...invoiceData,
        items: invoiceData.items.filter((invoiceItem) => {
          return invoiceItem.id !== id;
        }),
      };
    });
  };

  const syncInvoiceItemData = (Item) => {
    setInvoiceData(() => {
      for (let i = 0; i < invoiceData.items.length; i++) {
        if (invoiceData.items[i].id === Item.id) {
          invoiceData.items[i] = Item;
          return invoiceData;
        }
      }
    });
  };

  const handleOnChange = (e) => {
    setInvoiceData(() => {
      return {
        ...invoiceData,
        [e.target.id]: e.target.value,
      };
    });
  };

  const setDefaultDateValue = () => {
    if (invoiceData.invoiceSentDate === "") {
      setEmptyDateAlert(true);
      setTimeout(() => {
        return setEmptyDateAlert(false);
      }, 4000);
      setInvoiceData(() => {
        return {
          ...invoiceData,
          invoiceSentDate: defaultCurrentDate,
        };
      });
    }
  };

  const setPaymentDeadlineDate = () => {
    if (invoiceData.invoiceSentDate !== "") {
      let invoiceDateYear = invoiceData.invoiceSentDate.substr(0, 4);
      let invoiceDateMonth = invoiceData.invoiceSentDate.substr(5, 2);
      let invoiceDateDay = invoiceData.invoiceSentDate.substr(8, 2);
      let theDate = new Date(
        invoiceDateYear,
        invoiceDateMonth - 1,
        invoiceDateDay
      );
      let myNewDate = new Date(theDate);

      const selectedOption = document.getElementById("duePaymentDays").value;
      if (selectedOption === "30") {
        myNewDate.setDate(myNewDate.getDate() + 30);
      } else if (selectedOption === "60") {
        myNewDate.setDate(myNewDate.getDate() + 60);
      } else if (selectedOption === "180") {
        myNewDate.setDate(myNewDate.getDate() + 180);
      }

      return setInvoiceData(() => {
        return {
          ...invoiceData,
          paymentDeadlineDate: `${String(myNewDate.getDate()).padStart(
            2,
            "0"
          )}/${String(myNewDate.getMonth() + 1).padStart(2, "0")}/${String(
            myNewDate.getFullYear()
          )}`,
          duePaymentDays: selectedOption,
        };
      });
    }
  };

  useEffect(() => {
    setPaymentDeadlineDate();
  }, [invoiceData.invoiceSentDate]);

  const inputFieldClasses = ` mt-1 border-[1.5px] dark:bg-invoiceItem_dark_background text-darkishBlue_font 
  dark:text-lightGrey_font dark:border-none border-[#bebebe8d] rounded-[5px] focus:outline-none 
  text-sm py-2 px-2 w-full`;

  return (
    <>
      <div className="px-5 pt-8 md:px-10 lg:pl-24">
        <form
          className="flex flex-col space-y-8 overflow-auto pr-3"
          id="invoice-form"
        >
          <div className="flex flex-col flex-nowrap space-y-2">
            <span className="w-full text-xs font-bold text-purpleMainColor">
              Bill From
            </span>
            <label className="w-full">
              <span className="labelName">Street Address</span>
              <input
                type="text"
                className={inputFieldClasses}
                value={invoiceData.senderStreetAddress}
                onChange={handleOnChange}
                id="senderStreetAddress"
              />
            </label>
            <div className="flex flex-row flex-wrap space-x-0 space-y-2 md:flex-nowrap md:space-x-4 md:space-y-0">
              <div className="flex flex-row space-x-4 flex-nowrap">
                <label>
                  <span className="labelName">City</span>
                  <input
                    type="text"
                    className={inputFieldClasses}
                    value={invoiceData.senderCityAddress}
                    onChange={handleOnChange}
                    id="senderCityAddress"
                  />
                </label>
                <label>
                  <span className="labelName">Post Code</span>
                  <input
                    type="text"
                    className={inputFieldClasses}
                    value={invoiceData.senderPostCode}
                    onChange={handleOnChange}
                    id="senderPostCode"
                  />
                </label>
              </div>
              <label className="w-full md:w-fit">
                <span className="labelName">Country</span>
                <input
                  type="text"
                  className={inputFieldClasses}
                  value={invoiceData.senderCountryAddress}
                  onChange={handleOnChange}
                  id="senderCountryAddress"
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col flex-nowrap space-y-2">
            <span className="w-full text-xs font-bold text-purpleMainColor">
              Bill To
            </span>
            <label className="w-full">
              <span className="labelName">Client's Name</span>
              <input
                type="text"
                className={inputFieldClasses}
                value={invoiceData.clientName}
                id="clientName"
                onChange={handleOnChange}
              />
            </label>
            <label className="w-full">
              <span className="labelName">Client's Email</span>
              <input
                type="email"
                className={inputFieldClasses}
                value={invoiceData.clientEmail}
                id="clientEmail"
                onChange={handleOnChange}
              />
            </label>
            <label className="w-full">
              <span className="labelName">Street Address</span>
              <input
                type="text"
                className={inputFieldClasses}
                value={invoiceData.clientStreetAddress}
                id="clientStreetAddress"
                onChange={handleOnChange}
              />
            </label>

            <div className="flex flex-row flex-wrap space-x-0 space-y-2 md:flex-nowrap md:space-x-4 md:space-y-0">
              <div className="flex flex-row space-x-4 flex-nowrap">
                <label>
                  <span className="labelName">City</span>
                  <input
                    type="text"
                    className={inputFieldClasses}
                    value={invoiceData.clientCityAddress}
                    id="clientCityAddress"
                    onChange={handleOnChange}
                  />
                </label>

                <label>
                  <span className="labelName">Post Code</span>
                  <input
                    type="text"
                    className={inputFieldClasses}
                    value={invoiceData.clientPostCode}
                    id="clientPostCode"
                    onChange={handleOnChange}
                  />
                </label>
              </div>
              <label className="w-full md:w-fit">
                <span className="labelName">Country</span>
                <input
                  type="text"
                  className={inputFieldClasses}
                  value={invoiceData.clientCountryAddress}
                  id="clientCountryAddress"
                  onChange={handleOnChange}
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col flex-nowrap space-y-2">
            <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-4 flex-nowrap">
              <label>
                <span className="labelName">Invoice Date</span>
                <input
                  type="date"
                  className={inputFieldClasses}
                  value={invoiceData.invoiceSentDate}
                  id="invoiceSentDate"
                  onChange={handleOnChange}
                />
                {emptyDateAlert === true ? (
                  <div className="text-[10px] ml-2 mt-1 text-pendingLabel_dark_font">
                    An empty date value is set to today's date!
                  </div>
                ) : (
                  ""
                )}
              </label>

              <label>
                <span className=" text-grey_font text-xs md:text-sm">
                  Payment Terms
                </span>
                <select
                  className="w-full mt-1 border-[1.5px] dark:bg-invoiceItem_dark_background text-darkishBlue_font
                 dark:text-lightGrey_font dark:border-none border-[#bebebe8d] rounded-[5px] focus:outline-none 
                 text-sm py-2 px-4"
                  id="duePaymentDays"
                  value={invoiceData.duePaymentDays}
                  onChange={() => {
                    setDefaultDateValue();
                    setPaymentDeadlineDate();
                  }}
                >
                  <option value="30">Next 30 days</option>
                  <option value="60">Next 2 months</option>
                  <option value="180">Next 6 months</option>
                </select>
              </label>
            </div>
            <label className="w-full">
              <span className="labelName">Project Description</span>
              <input
                type="text"
                className={inputFieldClasses}
                value={invoiceData.description}
                id="description"
                onChange={handleOnChange}
              />
            </label>
          </div>
          <div className="flex flex-col flex-nowrap space-y-2">
            <span className="text-sm font-bold text-grey_font">Item List</span>

            <div className="grid grid-cols-8 gap-1 md:gap-1  w-full">
              <div className="col-span-4 text-xs text-grey_font ">
                Item Name
              </div>
              <div className=" text-xs text-center text-grey_font">Qty.</div>
              <div className=" text-xs text-center text-grey_font">Price</div>
              <div className=" text-xs text-center text-grey_font">Total</div>

              {/* code snippet for invoice items list*/}
              {invoiceData.items.map((invoiceItem) => {
                return (
                  <InvoiceItemInput
                    key={invoiceItem.id}
                    inputValues={invoiceItem}
                    className={inputFieldClasses}
                    onDelete={removeInvoiceItem}
                    syncData={syncInvoiceItemData}
                  />
                );
              })}

              {/* code snippet for invoice items list*/}
            </div>

            <Button
              styles={`w-full py-2.5 border-[1.5px] dark:bg-invoiceItem_dark_background text-darkishBlue_font 
            text-center dark:text-lightGrey_font dark:border-none border-[#bebebe8d] focus:outline-none md:px-28 `}
              onClick={addInvoiceItem}
            >
              + Add New Item
            </Button>
          </div>
        </form>
      </div>
      {props.type === "new" ? (
        <NewInvoiceActionBtns
          displayInvoiceForm={props.displayInvoiceForm}
          invoiceData={invoiceData}
        />
      ) : (
        <EditInvoiceActionBtns
          invoiceData={invoiceData}
          displayInvoiceForm={props.displayInvoiceForm}
        />
      )}
    </>
  );
};

export const formatSavedDate = (date) => {
  let invoiceDateYear = date.substr(0, 4);
  let invoiceDateMonth = date.substr(5, 2);
  let invoiceDateDay = date.substr(8, 2);
  let displayedDate = `${invoiceDateDay}/${invoiceDateMonth}/${invoiceDateYear}`;

  return displayedDate;
}

