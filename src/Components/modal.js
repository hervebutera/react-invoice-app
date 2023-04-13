const Modal = (props) => {
  return (
    <div className="absolute top-0 left-0 bottom-0 w-full h-[1199px] p-0 bg-[#00000075] lg:h-[1160px]">
      {props.children}
    </div>
  );
};

export default Modal;
