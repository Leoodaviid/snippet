import React from "react";
import Sidebar from "../components/sidebar";
import ContentArea from "../components/contentArea";

const MyNotesPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <ContentArea />
    </div>
  );
};

export default MyNotesPage;
