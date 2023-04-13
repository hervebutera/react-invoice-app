import InputField from "./InputField";
import InputLabelElement from "./InputLabelElement";
import DeleteBin from "../Assets/imgs/delete-bin.png";
import Button from "./Button";

const InvoiceForm = () => {
  return (
    <div className="px-5 pt-8 md:px-10 lg:pl-24">
      <form
        className="flex flex-col space-y-8 overflow-auto pr-3"
        id="invoice-form"
      >
        <div className="flex flex-col flex-nowrap space-y-2">
          <span className="w-full text-xs font-bold text-purpleMainColor">
            Bill From
          </span>
          <InputLabelElement
            labelStyles={"w-full"}
            labelName={"Street Address"}
            inputType={"text"}
          />
          <div className="flex flex-row flex-wrap space-x-0 space-y-2 md:flex-nowrap md:space-x-4 md:space-y-0">
            <div className="flex flex-row space-x-4 flex-nowrap">
              <InputLabelElement
                labelStyles={""}
                labelName={"City"}
                inputType={"text"}
              />
              <InputLabelElement
                labelStyles={""}
                labelName={"Post Code"}
                inputType={"text"}
              />
            </div>
            <InputLabelElement
              labelStyles={"w-full md:w-fit"}
              labelName={"Country"}
              inputType={"text"}
            />
          </div>
        </div>
        <div className="flex flex-col flex-nowrap space-y-2">
          <span className="w-full text-xs font-bold text-purpleMainColor">
            Bill To
          </span>
          <InputLabelElement
            labelStyles={"w-full"}
            labelName={"Client's Name"}
            inputType={"text"}
          />
          <InputLabelElement
            labelStyles={"w-full"}
            labelName={"Client's Email"}
            inputType={"text"}
          />
          <InputLabelElement
            labelStyles={"w-full"}
            labelName={"Street Address"}
            inputType={"text"}
          />
          <div className="flex flex-row flex-wrap space-x-0 space-y-2 md:flex-nowrap md:space-x-4 md:space-y-0">
            <div className="flex flex-row space-x-4 flex-nowrap">
              <InputLabelElement
                labelStyles={""}
                labelName={"City"}
                inputType={"text"}
              />
              <InputLabelElement
                labelStyles={""}
                labelName={"Post Code"}
                inputType={"text"}
              />
            </div>
            <InputLabelElement
              labelStyles={"w-full md:w-fit"}
              labelName={"Country"}
              inputType={"text"}
            />
          </div>
        </div>
        <div className="flex flex-col flex-nowrap space-y-2">
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-4 flex-nowrap">
            <InputLabelElement
              labelStyles={""}
              labelName={"Invoice Date"}
              inputType={"date"}
            />
            <label>
              <span className=" text-grey_font text-xs md:text-sm">
                Payment Terms
              </span>
              <select
                className="w-full mt-1 border-[1.5px] dark:bg-invoiceItem_dark_background text-darkishBlue_font
                 dark:text-lightGrey_font dark:border-none border-[#bebebe8d] rounded-[5px] focus:outline-none 
                 text-sm py-2 px-4"
              >
                <option>Next 30 days</option>
                <option>Next 2 months</option>
                <option>Next 6 months</option>
              </select>
            </label>
          </div>
          <InputLabelElement
            labelStyles={"w-full"}
            labelName={"Project Description"}
            inputType={"text"}
          />
        </div>
        <div className="flex flex-col flex-nowrap space-y-2">
          <span className="text-sm font-bold text-grey_font">Item List</span>

          <div className="grid grid-cols-8 gap-1 md:gap-1  w-full">
            <div className="col-span-4 text-xs text-grey_font ">Item Name</div>
            <div className=" text-xs text-center text-grey_font">Qty.</div>
            <div className=" text-xs text-center text-grey_font">Price</div>
            <div className=" text-xs text-center text-grey_font">Total</div>

            {/* code snippet for single item*/}

            <InputField inputType={"text"} styles={"col-span-4 w-full"} />
            <InputField inputType={"number"} styles={"w-full"} />
            <InputField inputType={"number"} styles={"w-full "} />
            <div className=" self-center text-center px-1 text-darkishBlue_font dark:text-lightGrey_font md:px-2">
              1200
            </div>
            <Button styles={"px-2 self-center justify-self-end"}>
              <img
                src={DeleteBin}
                alt="delete icon"
                className=" w-4 ml-1 h-5"
              />
            </Button>
            {/* code snippet for single item*/}
            <InputField inputType={"text"} styles={"col-span-4 w-full"} />
            <InputField inputType={"number"} styles={"w-full"} />
            <InputField inputType={"number"} styles={"w-full "} />
            <div className=" self-center text-center px-1 text-darkishBlue_font dark:text-lightGrey_font md:px-2">
              1200
            </div>
            <Button styles={"px-2 self-center justify-self-end"}>
              <img
                src={DeleteBin}
                alt="delete icon"
                className=" w-4 ml-1 h-5"
              />
            </Button>
            {/* code snippet for single item*/}
          </div>

          <Button
            styles={`w-full py-2.5 border-[1.5px] dark:bg-invoiceItem_dark_background text-darkishBlue_font 
            text-center dark:text-lightGrey_font dark:border-none border-[#bebebe8d] focus:outline-none md:px-28 `}
          >
            + Add New Item
          </Button>
        </div>
      </form>
    </div>
  );
};

export default InvoiceForm;
