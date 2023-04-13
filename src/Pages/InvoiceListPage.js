import HomePageLayout from "../Layouts/HomePageLayout";
import HomeHeader from "../Components/HomeHeader";
import InvoicesList from "../Components/InvoicesList";
import NewInvoice from "../Components/NewInvoice";

const InvoiceListPage = () => {
  return (
    <>
      <HomePageLayout>
        <HomeHeader />
        <InvoicesList />
      </HomePageLayout>
      <NewInvoice />
    </>
  );
};

export default InvoiceListPage;
