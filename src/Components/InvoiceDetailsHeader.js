import StatusLabel from "./StatusLabel";
import CRUDbuttonsCard from "./CRUDbuttonsCard";
import Button from "./Button";
import ArrowHead from "../Assets/imgs/arrowhead.png";

const InvoiceDetailsHeader = () => {
  return (
    <>
      <Button styles=" mt-10 mb-4 pl-0 text-darkishBlue_font dark:text-darkWhite_font font-bold flex flex-row ">
        <img
          src={ArrowHead}
          className="w-2.5 h-2.5 rotate-180 self-center mr-4"
        />
        Go back
      </Button>
      <div
        className="bg-invoiceItem_light_background dark:bg-invoiceItem_dark_background h-[5rem] 
            rounded-lg py-5 px-7 md:h-[4.5rem] md:py-4"
      >
        <div className="w-full md:w-40 md:float-left">
          <span className="float-left mt-3 text-xs text-grey_font dark:text-lightGrey_font ">
            Status
          </span>
          <StatusLabel
            labelName="Pending"
            styles={"float-right mt-0 md:ml-5"}
          />
        </div>
        <CRUDbuttonsCard styles={"hidden md:block md:float-right"} />
      </div>
    </>
  );
};

export default InvoiceDetailsHeader;
