import React from "react";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import TopBar from "./components/topbar/TopBar";
import Settings from "./pages/settings/Settings";

function App() {
  return (
    <>
      <TopBar />
      <Settings />
      {/* <Write /> */}
      {/* <Single /> */}
      {/* <Home /> */}
    </>
  );
}

export default App;
