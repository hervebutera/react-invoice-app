const HomePageLayout = (props) => {
  return (
    <div className="container flex flex-col h-screen overflow-y-auto px-4 mx-auto lg:px-36 xl:px-60">
      {props.children}
    </div>
  );
};

export default HomePageLayout;
