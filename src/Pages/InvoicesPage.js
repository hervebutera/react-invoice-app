import HomePageLayout from "../Layouts/HomePageLayout";
import HomeHeader from "../Components/HomeHeader";
import InvoicesList from "../Layouts/InvoicesList";

const InvoicesPage = () => {
  return (
    <HomePageLayout>
      <HomeHeader />
      <InvoicesList />
    </HomePageLayout>
  );
};

export default InvoicesPage;
