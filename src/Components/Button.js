const Button = (props) => {
  return (
    <a
      href="#"
      className={` px-3 rounded-full text-xs ${props.styles} `}
    >
      {props.children}
    </a>
  );
};

export default Button;
