import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./styles.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import Nav from "./components/Nav";

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route component={Error}></Route>
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}
