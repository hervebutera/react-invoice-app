const Button = (props) => {
  return (
    <a
      href="#"
      className={`pt-3.5 pb-3.5 px-3 rounded-full text-xs ${props.styles} `}
    >
      {props.children}
    </a>
  );
};

export default Button;
