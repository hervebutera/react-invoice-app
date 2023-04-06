import Button from "./Button";

const CRUDbuttonsCard = (props) => {
  return (
    <div className={props.styles}>
      <div className=" flex flex-row space-x-2 justify-center">
        <Button
          styles={` bg-editBtn_light_background dark:bg-editBtn_dark_background text-grey_font 
            dark:text-lightGrey_font font-semibold px-5 py-3 self-center`}
        >
          Edit
        </Button>
        <Button
          styles={
            " bg-deleteBtn_background text-white text-sm font-bold px-5 py-3.5 self-center"
          }
        >
          Delete
        </Button>
        <Button
          styles={
            " bg-purpleMainColor text-white text-sm font-bold px-5 py-3.5 self-center"
          }
        >
          Mark as Paid
        </Button>
      </div>
    </div>
  );
};

export default CRUDbuttonsCard;
