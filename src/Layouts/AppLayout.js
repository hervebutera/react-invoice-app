const AppLayout = (props) => {
  return <div className="flex flex-col lg:flex-row">{props.children}</div>;
};

export default AppLayout;
