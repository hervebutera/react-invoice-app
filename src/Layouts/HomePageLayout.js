const HomePageLayout = (props) => {
  return (
    <div className="container flex flex-col h-full px-4 mx-auto lg:px-36 xl:px-60">
      {props.children}
    </div>
  );
};

export default HomePageLayout;
