import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import styled from "styled-components";
import Bookning from "./components/Bookning";
import Layout from "./components/Layout";
function App() {
  return (
    <Continer>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/products/:id" element={<ProductsList />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/bookning" element={<Bookning />} />
        </Route>
      </Routes>
    </Continer>
  );
}

export default App;

const Continer = styled.div`
  display: flex;
  flex-direction: column;
`;
