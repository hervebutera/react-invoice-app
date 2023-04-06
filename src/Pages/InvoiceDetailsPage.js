import HomePageLayout from "../Layouts/HomePageLayout";
import CRUDbuttonsCard from "../Components/CRUDbuttonsCard";
import InvoiceDetailsCard from "../Components/InvoiceDetailsCard";
import InvoiceDetailsHeader from "../Components/InvoiceDetailsHeader";

const InvoiceDetailsPage = () => {
  return (
    <>
      <HomePageLayout>
        <InvoiceDetailsHeader />
        <InvoiceDetailsCard />
      </HomePageLayout>
      <CRUDbuttonsCard
        styles={
          " bg-invoiceItem_light_background dark:bg-invoiceItem_dark_background w-full py-4 md:hidden"
        }
      />
    </>
  );
};

export default InvoiceDetailsPage;