import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import SignupView from "../views/SignupView.vue";
import SigninView from "../views/SigninView.vue";

const clientRouter = createRouter({
  history: createWebHistory(import.meta.env.CLIENT_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
    },
    {
      path: "/signin",
      name: "signin",
      component: SigninView,
    },
  ],
});

export default clientRouter;
