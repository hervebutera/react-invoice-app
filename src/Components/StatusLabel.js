import { useState, useEffect } from "react";

const StatusLabel = (props) => {
  const [labelColors, setLabelColors] = useState({
    displayedBackground: { light: "", dark: "" },
    displayedDot: { light: "", dark: "" },
    displayedText: { light: "", dark: "" },
  });

  useEffect(() => {
    if (props.labelName === "Paid") {
      const newLabelColors = { ...labelColors };
      newLabelColors.displayedBackground.light =
        "bg-paidLabel_light_background";
      newLabelColors.displayedBackground.dark =
        "dark:bg-paidLabel_dark_background";
      newLabelColors.displayedDot.light = "bg-paidLabel_light_font";
      newLabelColors.displayedDot.dark = "dark:bg-paidLabel_dark_font";
      newLabelColors.displayedText.light = "text-paidLabel_light_font";
      newLabelColors.displayedText.dark = "dark:text-paidLabel_dark_font";
      setLabelColors(newLabelColors);
    } else if (props.labelName === "Pending") {
      const newLabelColors = { ...labelColors };
      newLabelColors.displayedBackground.light =
        "bg-pendingLabel_light_background";
      newLabelColors.displayedBackground.dark =
        "dark:bg-pendingLabel_dark_background";
      newLabelColors.displayedDot.light = "bg-pendingLabel_light_font";
      newLabelColors.displayedDot.dark = "dark:bg-pendingLabel_dark_font";
      newLabelColors.displayedText.light = "text-pendingLabel_light_font";
      newLabelColors.displayedText.dark = "dark:text-pendingLabel_dark_font";
      setLabelColors(newLabelColors);
    } else if (props.labelName === "Draft") {
      const newLabelColors = { ...labelColors };
      newLabelColors.displayedBackground.light =
        "bg-draftLabel_light_background";
      newLabelColors.displayedBackground.dark =
        "dark:bg-draftLabel_dark_background";
      newLabelColors.displayedDot.light = "bg-draftLabel_light_font";
      newLabelColors.displayedDot.dark = "dark:bg-draftLabel_dark_font";
      newLabelColors.displayedText.light = "text-draftLabel_light_font";
      newLabelColors.displayedText.dark = "dark:text-draftLabel_dark_font";
      setLabelColors(newLabelColors);
    }
  }, [props.labelName]);

  return (
    <div
      className={` ${labelColors.displayedBackground.light} ${labelColors.displayedBackground.dark}  
      flex flex-row  w-24 mt-6 py-2 justify-center space-x-1
      rounded-lg self-end md:self-center md:mt-0 `}
    >
      <div
        className={` w-2 h-2 rounded-full ${labelColors.displayedDot.light}
         ${labelColors.displayedDot.dark} border-none self-center `}
      ></div>
      <span
        className={` ${labelColors.displayedText.light} ${labelColors.displayedText.dark}
         text-base self-center `}
      >
        {props.labelName}
      </span>
    </div>
  );
};

export default StatusLabel;
