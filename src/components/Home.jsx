import React from "react";
import Container from "./Container";
import SideBar from "./SideBar";
import Header from "./Header";
import Footer from "./Footer";
import { FileContextProvider } from "../context/fileExplorerContext";

export default function Home() {
  return (
    <FileContextProvider>
      <Header />
      <div className="h-full flex">
        <Container />
        <SideBar />
      </div>
      <Footer />
    </FileContextProvider>
  );
}
