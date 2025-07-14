import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { currentTabAtoms } from "./components/Tabbar/types";
import { aboutTabbarItems, aboutTabbarName } from "./data/tabbar-items";
import { atom } from "jotai";
import { currentPageAtoms } from "./components/Navbar/types.ts";
import navbarItems, { mainNavbarName } from "./data/navbar-items.tsx";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home/Home.tsx"));
const About = lazy(() => import("./pages/About/About.tsx"));
const Contact = lazy(() => import("./pages/Contact/Contact.tsx"));
const Projects = lazy(() => import("./pages/Projects/Projects.tsx"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound.tsx"));
const Resume = lazy(() => import("./pages/About/Resume.tsx"));
const Credits = lazy(() => import("./pages/About/Credits.tsx"));

currentPageAtoms.set(mainNavbarName, atom<string>(navbarItems[0].to));
currentTabAtoms.set(aboutTabbarName, atom<number>(aboutTabbarItems[0].id));

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="about" element={<About />}>
        <Route path="resume" element={<Resume />} />
        <Route path="credits" element={<Credits />} />
      </Route>
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}></RouterProvider>
);
