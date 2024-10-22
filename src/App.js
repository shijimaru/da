import React from "react";
import { Header } from "./layout/header";
import { Main } from "./layout/main";
import { Footer } from "./layout/footer";
import { List } from "./component/List";

function App() {
  return (
    <>
    <Header/>
    <Main/>
    <List/>
    <Footer/>
    </>
  );
}

export default App;
