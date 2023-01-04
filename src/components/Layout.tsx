import { Outlet } from "react-router-dom";
import styled from "styled-components";
import MediaSideBar from "../common/MediaSideBar";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = () => {
  return (
    <div>
      <MediaSidebarStyle>
        <MediaSideBar />
      </MediaSidebarStyle>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

const MediaSidebarStyle = styled.div`
  position: fixed;
  top: 30%;
`;
