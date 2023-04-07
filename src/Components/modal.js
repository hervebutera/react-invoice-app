const Modal = (props) => {
  return (
    <div className="absolute top-0 left-0  w-full h-full p-0 bg-[#000000] opacity-75 ">
      {props.children}
    </div>
  );
};

export default Modal;
