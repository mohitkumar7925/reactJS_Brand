import logo from "./logo.svg";
import "./App.css";
import { Nav } from "./components/screens/Nav";
import { Images } from "./components/Images";

function App() {
    return (
        <div className={` w-full`}>
            <div className={`w-full h-full absolute top-0 left-0 right-0 -z-20 bg-black `}>
                <img src={Images.background} className="w-[100vw] h-[100vh] object-cover -z-30 opacity-80 " />
            </div>
            <Nav />
            <main className="container mx-auto p-5 text-white font-mono">
                <div className=" mt-20 text-6xl">
                    Create, Test
                    <br />
                    Publish, Deploy
                </div>
                <div className="mt-5">
                    Never stop learning,Never stop exploring,
                    <br /> new stop creating, new stop starting .
                </div>
              <div className="flex mt-10">
                <button className="rounded-md px-10 py-3 text-black bg-white hover:bg-opacity-90">SIGNUP</button>
                <button className="rounded-md px-10 py-3 ml-10 border ">LOGIN</button>
              </div>
            </main>
        </div>
    );
}

export default App;
