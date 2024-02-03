import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Main from "./Layout/Main/Main";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Service from "./Pages/Service/Service";
import Faq from "./Pages/Faq/Faq";
import Contact from "./Pages/Contact/Contact";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element = {<Main/>}>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/service" element = {<Service/>}/>
        <Route path="/faq" element = {<Faq/>}/>
        <Route path="/contact" element = {<Contact/>}/>
      </Route>
    )
  );
  return (
    <RouterProvider
      router={router}
    />
  )
}

export default App
