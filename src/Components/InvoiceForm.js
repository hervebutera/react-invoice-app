import InputField from "./InputField";
import InputLabelElement from "./InputLabelElement";
import DeleteBin from "../Assets/imgs/delete-bin.png";
import Button from "./Button";

const InvoiceForm = () => {
  return (
      <form className="flex flex-col space-y-8 px-10 py-8 lg:py-14 lg:pl-24 h-screen overflow-auto">
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
        <div className="flex flex-col flex-nowrap space-y-3">
          <span className="text-sm font-bold text-grey_font">Item List</span>
          <div className="flex flex-col space-y-2">
            <div className="flex flex-row flex-nowrap space-x-2 text-xs text-grey_font">
              <div className="w-[12rem] md:w-36">Item Name</div>
              <div className="w-10">Qty.</div>
              <div className="w-20">Price</div>
              <div className="w-20 pl-2">Total</div>
            </div>
            {/* code snippet for single item*/}
            <div className="flex flex-row flex-nowrap space-x-2 ">
              <InputField inputType={"text"} styles={"w-44 md:w-32"} />
              <InputField inputType={"number"} styles={"w-10"} />
              <InputField inputType={"number"} styles={"w-20"} />
              <div className="self-center px-2 text-darkishBlue_font dark:text-lightGrey_font">
                1200
              </div>
              <img
                src={DeleteBin}
                alt="delete icon"
                className="w-4 h-5 self-center"
              />
            </div>
            <div className="flex flex-row flex-nowrap space-x-2 ">
              <InputField inputType={"text"} styles={"w-44 md:w-32"} />
              <InputField inputType={"number"} styles={"w-10"} />
              <InputField inputType={"number"} styles={"w-20"} />
              <div className="self-center px-2 text-darkishBlue_font dark:text-lightGrey_font">
                1200
              </div>
              <img
                src={DeleteBin}
                alt="delete icon"
                className="w-4 h-5 self-center"
              />
            </div>
            {/* code snippet for single item*/}
          </div>
          <Button
            styles={`w-full p-2.5 px-36 border-[1.5px] dark:bg-invoiceItem_dark_background text-darkishBlue_font 
            dark:text-lightGrey_font dark:border-none border-[#bebebe8d] focus:outline-none md:px-32`}
          >
            + Add New Item
          </Button>
        </div>
      </form>
  );
};

export default InvoiceForm;
