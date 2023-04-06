const InvoiceAmountInfo = () => {
  return (
    <div className="bg-invoiceAmount_light_background dark:bg-invoiceAmount_dark_background rounded-lg w-full space-y-6">
      <div className=" flex flex-col space-y-3 p-4">
        <div className="hidden md:block text-sm font-semibold text-grey_font dark:text-lightGrey_font">
          <div className="float-left">Item Name</div>
          <div className="float-right flex flex-row space-x-28">
            <span>QTY</span>
            <span>Price</span>
            <span>Total</span>
          </div>
        </div>
        {/*code snippet for on item record */}

        <div className="flex flex-col flex-wrap h-6 content-between font-bold">
          <div className="float-left flex flex-col md:w-48">
            <span className="text-darkishBlue_font dark:text-darkWhite_font text-lg">
              {"Airmax 1"}
            </span>
            <span className="text-grey_font dark:text-lightGrey_font text-xs md:hidden">{`${1}x ${"$"} ${200.89}`}</span>
          </div>
          <div className="hidden  md:block w-20 ">
            <span className="float-right text-grey_font dark:text-lightGrey_font text-base">
              {1}
            </span>
          </div>
          <div className="hidden   md:block w-20 ">
            <span className="float-right text-grey_font dark:text-lightGrey_font text-base">{`${"$"} ${200.89}`}</span>
          </div>
          <div className="mt-3 w-20 md:mt-0 ">
            <span className="float-right text-darkishBlue_font dark:text-darkWhite_font text-lg">{`${"$"} ${200.89}`}</span>
          </div>
        </div>

        {/*code snippet for on item record */}
      </div>
      <div className="bg-sideBar_light_background dark:bg-body_dark_background text-darkWhite_font h-[4rem] rounded-b-lg  p-4">
        <div className="float-left text-xs p-2 md:p-1 md:text-sm">
          Grand Total
        </div>
        <div className="float-right text-lg p-1 font-bold md:p-0 md:text-2xl">
          {"$ 1200"}
        </div>
      </div>
    </div>
  );
};

export default InvoiceAmountInfo;
