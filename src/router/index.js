import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SidebarHome from "@/views/SidebarHome";
import SidebarUsers from "@/views/SidebarUsers";
import ModalView from "@/views/ModalView";
import DropBoxView from "@/views/DropBoxView";
import SnackBarView from "@/views/SnackBarView";
import NotFound from "@/views/NotFound";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sidebar-home",
    name: "SidebarHome",
    component: SidebarHome,
  },
  {
    path: "/sidebar-users",
    name: "SidebarUsers",
    component: SidebarUsers,
  },
  {
    path: "/modal",
    name: "ModalView",
    component: ModalView,
  },
  {
    path: "/drop-box",
    name: "DropBoxView",
    component: DropBoxView,
  },
  {
    path: "/snack-bar",
    name: "SnackBarView",
    component: SnackBarView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
