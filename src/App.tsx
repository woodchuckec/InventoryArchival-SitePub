import './App.css'
import Listing from "../components/Listing";
import "../style/style.css";
import AllItems from "../components/AllItems";
import AuthContainer from "../components/Auth/AuthContainer";
import HomePage from "../components/Home/HomePage";
import CreateItemForm from "../components/CreateItemForm";

import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";

export default function App() {
  return (
    <main>
          <Router>
                <Routes>
                    <Route path="/" Component={HomePage} />
                    <Route path="/listing/:listingId" Component={Listing} />
                    <Route path="/allListings/" Component={AllItems} />
                </Routes>
            </Router>
    </main>
  )
}