import Button from "./Button";

const HomeHeader = () => {
  return (
    <div className="relative my-10 ">
      <div className="float-left flex flex-col space-y-1">
        <h1 className="text-xl items-center font-bold text-darkishBlue_font dark:text-darkWhite_font md:text-3xl">
          Invoices
        </h1>
        <h3 className="text-xs font-medium text-grey_font dark:text-lightGrey_font">
          <span className="hidden md:inline-flex">There are </span>
          {" 7 "}
          <span className="hidden md:inline-flex">total </span> invoices
        </h3>
      </div>
      <div className="float-right mt-4 space-x-4 md:space-x-8">
        <select className="bg-body_light_background dark:bg-body_dark_background  w-[3.75rem] font-semibold text-darkishBlue_font dark:text-darkWhite_font focus:outline-none md:w-36">
          <option>Filter by status</option>
          <option>Pending</option>
          <option>Paid</option>
        </select>
        <Button styles="bg-purpleMainColor text-white font-bold pl-2 space-x-2">
          <span className="bg-white pt-0 pb-1 px-2 mr-2  text-purpleMainColor text-lg font-bold rounded-full md:mr-3">
            +
          </span>
          New<span className="hidden md:inline-flex">Invoice</span>
        </Button>
      </div>
    </div>
  );
};

export default HomeHeader;
