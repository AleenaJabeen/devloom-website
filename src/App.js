import { createBrowserRouter,createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from './Pages/HomePage/Home'
function App() {
  return (
    <>
    </>
  );
}
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home />}/>
    </Route>
  )
)

export default App;
