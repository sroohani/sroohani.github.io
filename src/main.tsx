import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  Home,
  About,
  Contact,
  Projects,
  NotFound,
  Resume,
  Credits,
} from "./pages";
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
