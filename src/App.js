import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import MyNav from "./components/MyNav";
import HeaderSection from "./components/HeaderSection";
import FooterSection from "./components/FooterSection";
function App() {
  return (
    <>
      <MyNav />
      <HeaderSection />
      <FooterSection />
    </>
  );
}

export default App;
