import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import styled from "styled-components";
import Bookning from "./components/Bookning";
import MediaSideBar from "./common/MediaSideBar";
function App() {
  return (
    <div>
      <Navbar />
      <MediaSidebarStyle>
        <MediaSideBar />
      </MediaSidebarStyle>
      <Continer>
        <Routes>
          <Route path="/products/:id" element={<ProductsList />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/bookning" element={<Bookning />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Continer>
    </div>
  );
}

export default App;

const Continer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MediaSidebarStyle = styled.div`
  position: fixed;
  top: 30%;
`;
