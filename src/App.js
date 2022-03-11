import "./App.css";
import UserList from "./Components/UserList";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navigation";
import { Route, Routes } from "react-router-dom";
import UserDetails from "./Components/UserDetails";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/details/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
