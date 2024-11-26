import { createBrowserRouter,createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from './Pages/HomePage/Home';
import { Outlet } from "react-router-dom";
import Portfolio from "./Pages/PortfolioPage/Portfolio";
function App() {
  return (
    <>
    <Outlet/>
    </>
  );
}
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home />}/>
      <Route path="portfolio" element={<Portfolio />}/>
    </Route>
  )
)

export default App;
