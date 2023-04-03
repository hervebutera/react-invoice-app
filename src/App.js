import NavBar from "./Components/NavBar";
import InvoicesPage from "./Pages/InvoicesPage";
import AppLayout from "./Layouts/AppLayout";

const App = () => {
  return (
    <AppLayout>
      <NavBar />
      <InvoicesPage />
    </AppLayout>
  );
};

export default App;
