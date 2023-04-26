import StatusLabel from "./StatusLabel";
import ArrowHead from "../Assets/imgs/arrowhead.png";

const InvoiceListItem = (props) => {
  return (
    <li
      className="bg-invoiceItem_light_background dark:bg-invoiceItem_dark_background max-h-[7rem] 
    flex flex-col flex-wrap rounded-lg p-4  content-between md:max-h-[4rem] md:flex-row md:flex-nowrap
    md:space-x-12 lg:space-x-[4%] xl:space-x-[6%]"
    >
      <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:ml-[1rem] lg:space-x-[7%]">
        <div className="md:self-center">
          <span className="text-grey_font text-xs md:text-base">#</span>
          <span className="text-darkishBlue_font dark:text-darkWhite_font text-sm font-bold md:text-base">
            {props.invoiceId}
          </span>
        </div>

        <span className="text-xs text-grey_font dark:text-lightGrey_font md:self-center lg:w-[7rem] ">
          Due {props.invoiceDueDate}
        </span>
      </div>
      <div
        className="text-base text-darkishBlue_font dark:text-darkWhite_font font-bold mt-1 md:w-24 
      md:order-3  md:mt-0 md:self-center md:text-right"
      >
        $ {props.invoiceDueAmount}
      </div>
      <div
        className="text-start self-center text-xs text-grey_font dark:text-lightGrey_font md:w-36 md:text-xs
       lg:w-40 "
      >
        {props.invoiceSentTo}
      </div>
      <div className=" order-last md:space-x-3 xl:space-x-4 ">
        <StatusLabel labelName={props.status} styles={"float-right inline-block mt-6 md:-mt-[4px] md:float-left"} />
        <img
          src={ArrowHead}
          className="hidden h-3 w-3 justify-center cursor-pointer mt-2.5 md:inline-block md:float-right"
        />
      </div>
    </li>
  );
};

export default InvoiceListItem;
