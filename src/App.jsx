import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import ItemDetailContainer from "./components/itemdetailcontainer/ItemDetailContainer";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <NavBar />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
