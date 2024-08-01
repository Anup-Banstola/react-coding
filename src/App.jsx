import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProfilesPage from "./pages/ProfilesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/profiles" element={<ProfilesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
