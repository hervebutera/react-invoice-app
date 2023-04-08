import InputField from "./InputField";

const InputLabelElement = (props) => {
    return (
        <label className={`${props.labelStyles}`}>
            <span className="text-grey_font text-xs md:text-sm">
                { props.labelName}
            </span>
            <InputField inputType={ props.inputType} styles={"w-full"}/>
          </label>
    );
 }

export default InputLabelElement;