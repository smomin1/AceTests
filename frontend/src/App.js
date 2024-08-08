import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/SingleNote/SingleNote";

const App = () => { 
  
  return (
  <BrowserRouter>
    <Header></Header>
    <main>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/login" Component={LoginScreen} />
        <Route path="/register" Component={RegisterScreen} />
        <Route path="/createnote" Component={CreateNote} />
        <Route path="/note/:id" Component={SingleNote} />
        <Route path="/mynotes" Component={MyNotes} />
      </Routes>
    </main>
    <Footer></Footer>
  </BrowserRouter>)
};

export default App;
