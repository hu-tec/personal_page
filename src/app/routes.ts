import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import CareerPage from "./components/CareerPage";
import LifePage from "./components/LifePage";
import FuturePage from "./components/FuturePage";
import StoryPage from "./components/StoryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "career", Component: CareerPage },
      { path: "life", Component: LifePage },
      { path: "future", Component: FuturePage },
      { path: "story", Component: StoryPage },
    ],
  },
]);
