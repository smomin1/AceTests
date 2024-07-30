import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";

const App = () => (
  <>
    <Header></Header>
    <main>
      <LandingPage></LandingPage>
    </main>
    <Footer></Footer>
  </>
);

export default App;
