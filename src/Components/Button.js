const Button = (props) => {
  return (
    <button
      className={` px-3 rounded-full text-xs ${props.styles} `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
