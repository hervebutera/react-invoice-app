const Modal = (props) => {
  return (
    <div className="absolute top-0 left-0 bottom-0 w-full lg:h-full p-0 bg-[#00000075]">
      {props.children}
    </div>
  );
};

export default Modal;
