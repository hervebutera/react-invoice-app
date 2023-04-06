const InvoiceIdInfo = () => {
  return (
    <div className="flex flex-col space-y-6">
      <div
        className=" flex flex-col h-[10rem] space-y-5 md:h-[6rem] 
          md:space-y-0 md:content-between md:flex-wrap"
      >
        <div className="flex flex-col space-y-1">
          <div>
            <span className="text-grey_font text-xs md:text-base">#</span>
            <span
              className="text-darkishBlue_font dark:text-darkWhite_font 
                text-sm font-bold md:text-base"
            >
              {"RT340"}
            </span>
          </div>
          <span className="text-xs text-grey_font dark:text-lightGrey_font md:text-sm ">
            {"Graphic Design"}
          </span>
        </div>
        <div
          className="flex flex-col text-sm text-grey_font dark:text-lightGrey_font
             md:items-end "
        >
          <span>{"Alex Ikogi"}</span>
          <span>{"Janson Ntabashwa"}</span>
          <span>{"Alex Ikogi"}</span>
          <span>{"Alex Ikogi"}</span>
        </div>
      </div>
      <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-20">
        <div
          className="flex flex-col space-y-8 min-[360px]:flex-row min-[360px]:space-y-0 
            min-[360px]:space-x-16 min-[768px]:space-x-20"
        >
          <div className="flex flex-col space-y-12">
            <div className="flex flex-col space-y-1">
              <span className="text-grey_font dark:text-lightGrey_font text-sm">
                Invoice Date
              </span>
              <span className="text-darkishBlue_font dark:text-darkWhite_font text-base font-bold md:text-lg">
                {"21 Aug 2021"}
              </span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-grey_font dark:text-lightGrey_font text-sm">
                Payment Due
              </span>
              <span className="text-darkishBlue_font dark:text-darkWhite_font text-base font-bold md:text-lg">
                {"21 Sep 2021"}
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-grey_font dark:text-lightGrey_font  text-sm">
              Bill To
            </span>
            <span className="text-darkishBlue_font dark:text-darkWhite_font text-base font-bold md:text-lg">
              {"Alex Grim"}
            </span>
            <div className="flex flex-col text-sm text-grey_font dark:text-lightGrey_font ">
              <span>{"Alex Ikogi"}</span>
              <span>{"Janson Ntabashwa"}</span>
              <span>{"Alex Ikogi"}</span>
              <span>{"Alex Ikogi"}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <span className="text-grey_font dark:text-lightGrey_font text-sm">
            Send To
          </span>
          <span className="text-darkishBlue_font dark:text-darkWhite_font text-base font-bold md:text-lg">
            {"johndoe@example.com"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InvoiceIdInfo;
