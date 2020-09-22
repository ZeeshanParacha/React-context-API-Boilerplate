import React from "react";
import "./stye.css";
import Users from "./Users";
import { UsersProvider } from "./Context/UserContext";

export default function App() {
  return (
    <UsersProvider>
      <div className="App">
        <h1>Hello Hoooooks</h1>
        <Users />
      </div>
    </UsersProvider>
  );
}
