import NavBar from "./Components/NavBar";
import InvoiceListPage from "./Pages/InvoiceListPage";
import AppLayout from "./Layouts/AppLayout";
import InvoiceDetailsPage from "./Pages/InvoiceDetailsPage";

const App = () => {
  return (
    <AppLayout>
      <NavBar />
      {/* <InvoiceListPage /> */}
      <InvoiceDetailsPage />
    </AppLayout>
  );
};

export default App;
