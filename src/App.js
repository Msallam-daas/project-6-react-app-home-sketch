import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import HomePage from "./pages/homepage/homepage";
import Footer from "./components/footer/footer";
import LoginPage from "./pages/login-page/login-page";
import RegisterPage from "./pages/register-page/register-page";
import SketchesPage from "./pages/SketchesPage/SketchesPage";
import Exercisespage from "./pages/Exercisespage/Exercisespage";
import SketchesDetailes from "./components/SketchesDetailes/SketchesDetailes";
import sketches from "./data/sketches/sketches";
import Exercises from "./data/Exercises/Exercises";
import ExercisesDetailes from "./components/ExercisesDetailes/ExercisesDetailes";
import CartPage from "./pages/cart-page/cart-page";
import Profile from "./pages/Profile/Profile";

function App() {
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("loggedUser"))
  );

  return (
    <div className="App">
      <NavBar loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          exact
          path="/login"
          element={<LoginPage setLoggedUser={setLoggedUser} />}
        />
        <Route
          exact
          path="/register"
          element={<RegisterPage setLoggedUser={setLoggedUser} />}
        />
        <Route exact path="/sketches" element={<SketchesPage />} />
        <Route exact path="/exercises" element={<Exercisespage />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route
          exact
          path="/sketches/:title"
          element={
            <SketchesDetailes
              sketches={sketches}
              setLoggedUser={setLoggedUser}
            />
          }
        />
        <Route
          exact
          path="/exercises/:title"
          element={<ExercisesDetailes Exercises={Exercises} />}
        />
        <Route
          exact
          path="/cart"
          element={<CartPage setLoggedUser={setLoggedUser} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
