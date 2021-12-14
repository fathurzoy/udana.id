import "./App.css";
import FloatMessage from "./components/FloatMessage/FloatMessage";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TablePage from "./pages/TablePage/TablePage";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Homepage />
                <FloatMessage />
              </>
            }
          />
          <Route exact path="/table" element={<TablePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
