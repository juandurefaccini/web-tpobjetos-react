import React from "react";
import Container from "./Container";
import SideBar from "./SideBar";
import Header from "./Header";
import { FileContextProvider } from "../context/fileExplorerContext";
import { axiosClient } from "../services/services";

const loadElement = async (name) => {
  try {
    const res = await axiosClient.get(`/directorio?carpetaBase=${name}`);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export default function Home() {
  return (
    <FileContextProvider default={loadElement("root")}>
      <Header />
      <div className="h-full flex">
        <Container />
        <SideBar />
      </div>
    </FileContextProvider>
  );
}
