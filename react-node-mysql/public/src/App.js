import { BrowserRouter, Route, Routes } from "react-router-dom";

import UserTable from "./components/UserTable.js";
import Adduser from "./components/Adduser.js";
import EditUser from "./components/EditUser.js";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<UserTable />} />
        <Route path="/add" element={<Adduser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
