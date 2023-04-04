const HomePageLayout = (props) => {
  return (
    <div className="container flex flex-col px-4 mx-auto lg:px-36">
      {props.children}
    </div>
  );
};

export default HomePageLayout;
