import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FreeRasklad from "./Page/FreeRasklad/FreeRasklad"
import History from "./Page/History/History"
import PayRasklad from "./Page/PayRasklad/PayRasklad"
import Profile from "./Page/Profile/Profile"
import Rasklad from "./Page/Rasklad/Rasklad"
import Welcome from "./Page/Welcome/Welcome"
import StarsShop from "./Page/StarsShop/StarsShop";
import Shop from "./Page/Shop/Shop";
import Additional from "./Page/Additional/Additional";
import Choice from "./Page/Choice/Choice";

function App() {
  return (
    <div className='app'>
      <Router>
       <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/rasklad" element={<Rasklad />} />
        <Route path="/history" element={<History />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/starsshop" element={<StarsShop />} />
        <Route path="/choice" element={<Choice />} />
        <Route path="/additional" element={<Additional />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payrasklad" element={<PayRasklad />} />
        <Route path="/freerasklad" element={<FreeRasklad />} />
       </Routes>
      </Router>
    </div>
  )
}

export default App
