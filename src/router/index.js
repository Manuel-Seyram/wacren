import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ServicesView from "../views/ServicesView.vue";
import ContactUsView from "../views/ContactUsView.vue";
import RfcView from "../views/RfcView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/services",
      name: "services",
      component: ServicesView,
    },
    {
      path: "/contact-us",
      name: "contact-us",
      component: ContactUsView,
    },
    {
      path: "/rfc-2350",
      name: "rfc-2350",
      component: RfcView,
    },
  ],
});

export default router;
