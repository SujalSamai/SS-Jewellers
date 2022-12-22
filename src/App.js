import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Middle from "./components/Middle";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-slate-50">
      <Navbar />
      <Hero />
      <Middle />
      <Footer />
    </div>
  );
}

export default App;
