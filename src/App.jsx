import React from "react";
import Home from "./pages/home";
import Products from "./pages/Products";
//import Contact from "./pages/Contact";
import About from "./pages/About";
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import ContactLayout from "./Layout/ContactLayout";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import NotFound from "./components/NotFound";
import JobsLayout from "./Layout/JobsLayout";
import Jobs, { jobsLoader } from "./pages/Jobs";
import JobDetails, { jobsDetailsLoader } from "./components/JobDetails";
import Error from "./components/Error";
import ErrorJobList from "./components/ErrorJobList";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="Jobs" element={<JobsLayout />} errorElement={<Error /> }>
          <Route index element={<Jobs />} loader={jobsLoader}  errorElement={<ErrorJobList/>} />
          <Route
            path=":id"
            element={<JobDetails />}
            loader={jobsDetailsLoader}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <>
      {/*Using Router Provider*/}
      <RouterProvider router={router} />

      {/*Method 2: Using Routes and Route components/*}
      {/*} 
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        */}
    </>
  );
}

export default App;
