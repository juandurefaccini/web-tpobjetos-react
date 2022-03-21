import React from "react";
import Container from "./Container";
import SideBar from "./SideBar";
import Header from "./Header";
import Footer from "./Footer";
import { FileContextProvider } from "../context/fileExplorerContext";

export default function Home() {
  return (
    <FileContextProvider>
      <div className="font-sans h-screen flex flex-col bg-primary">
        <Header />
        <div className="flex grow h-1/2 ">
          <div className="flex flex-row w-full">
            <Container />
            <SideBar />
          </div>
        </div>
        <Footer />
      </div>
    </FileContextProvider>
  );
}
