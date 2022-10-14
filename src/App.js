import logo from "./logo.svg";
import "./App.css";
import { Nav } from "./components/screens/Nav";
import { Images } from "./components/Images";
import { Hero } from "./components/screens/Hero";
import { About } from "./components/screens/About";
import { Support } from "./components/screens/Support";

function App() {
    return (
        
           <>
            <Nav />
            <Hero />
            <About />
            <Support />
           </>
           
        
    );
}

export default App;
