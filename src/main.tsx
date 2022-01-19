import routes from "./router";
import App from "./App";
import viteSSR from "vite-ssr";
import { showHairMessage } from "@/utils/hair";
import "./index.css";
import "reset.css/reset.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default viteSSR(App, { routes }, (context) => {
  /* Vite SSR main hook for custom logic */
  /* const { app, router, initialState, ... } = context */
});

if (import.meta.env.PROD) {
  showHairMessage();
}
