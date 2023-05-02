import Button from "./Button";
import { connect } from "react-redux";

const HomeHeader = (props) => {
  const handleFilterValueChange = () => {
    let el = document.getElementById("selectElement");
    return props.filterByStatus(el.options[el.selectedIndex].text);
  };

  return (
    <div className="relative my-10 ">
      <div className="float-left flex flex-col space-y-1">
        <h1 className="text-xl items-center font-bold text-darkishBlue_font dark:text-darkWhite_font md:text-3xl">
          Invoices
        </h1>
        <h3 className="text-xs font-medium text-grey_font dark:text-lightGrey_font">
          <span className="hidden md:inline-flex">
            There {props.invoices.length > 1 ? "are" : "is"}{" "}
          </span>
          {` ${props.invoices.length} `}
          <span className="hidden md:inline-flex">total </span>
          {props.invoices.length > 1 ? " invoices" : " invoice"}
        </h3>
      </div>
      <div className="float-right mt-2 space-x-4 md:space-x-8">
        <select
          id="selectElement"
          className="bg-body_light_background dark:bg-body_dark_background  w-[3.90rem] font-semibold
                   text-darkishBlue_font dark:text-darkWhite_font focus:outline-none md:w-36"
          onChange={handleFilterValueChange}
        >
          <option>Filter by status</option>
          <option>All</option>
          <option>Pending</option>
          <option>Paid</option>
          <option>Draft</option>
        </select>
        <Button styles="bg-purpleMainColor text-white font-bold pl-2 space-x-2 py-3 pt-2 "
          onClick={() => props.displayInvoiceForm(true)}
        >
          <div className="bg-white pt-0 pb-1 px-2 mr-2 inline text-purpleMainColor text-lg font-bold rounded-full md:mr-3">
            +
          </div>
          New<div className="hidden md:inline-flex">Invoice</div>
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    invoices: state,
  };
};

export default connect(mapStateToProps)(HomeHeader);
