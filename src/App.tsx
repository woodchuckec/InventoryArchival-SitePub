import './App.css'
import Listing from "../components/Listing";
import AllListings from "../components/AllListings";
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
              <Route path="/listing/:listingId" Component={Listing} />
              <Route path="/allListings/" Component={AllListings} />
          </Routes>
      </Router>
    </main>
  )
}