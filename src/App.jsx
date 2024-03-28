import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import Error from "./components/error/Error";
import PageNotFound from "./pages/notfound/PageNotFound";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="contact" element={<Contact />} errorElement={<Error />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
export default function App() {
  return (
    <main className="container">
      <RouterProvider router={router} />
    </main>
  );
}
