import "./App.css";

import Home from "./Components/Home/Index";
import { Provider } from "react-redux";
import { store } from "./helpers/store";

// import EnterPan from "./pay-later/pages/EnterPan";y
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  AOS.init();
  return (
    <>
      <Provider store={store}>
       
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
          </Router>
     
      </Provider>
    </>
  );
}

export default App;
