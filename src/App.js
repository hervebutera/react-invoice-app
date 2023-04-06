import NavBar from "./Components/NavBar";
// import InvoicesPage from "./Pages/InvoicesPage";
import AppLayout from "./Layouts/AppLayout";
import InvoiceDetailsPage from "./Pages/InvoiceDetailsPage";

const App = () => {
  return (
    <AppLayout>
      <NavBar />
      {/* <InvoicesPage /> */}
      <InvoiceDetailsPage />
    </AppLayout>
  );
};

export default App;
