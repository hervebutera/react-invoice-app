import NavBar from "./Components/NavBar";
import InvoiceListPage from "./Pages/InvoiceListPage";
import AppLayout from "./Layouts/AppLayout";
import InvoiceDetailsPage from "./Pages/InvoiceDetailsPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <AppLayout>
      <NavBar />
      <Routes>
        <Route path="/" element={<InvoiceListPage />}/>
        <Route path="/invoice" element={<InvoiceDetailsPage />}/>  
      </Routes>
    </AppLayout>
  );
};

export default App;
