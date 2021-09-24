import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SidebarHome from "@/views/SidebarHome";
import SidebarUsers from "@/views/SidebarUsers";
import ModalView from "@/views/ModalView";
import DropBoxView from "@/views/DropBoxView";
import SnackBarView from "@/views/SnackBarView";
import NavigationView from "@/views/NavigationView";
import TabView from "@/views/TabView";
import ButtonView from "@/views/ButtonView";
import InputView from "@/views/InputView";
import TextAreaView from "@/views/TextAreaView";
import DropDownView from "@/views/DropDownView";
import AutoHidingNavigationView from "@/views/AutoHidingNavigationView";
import NavigationDropDownView from "@/views/NavigationDropDownView";
import AutocompleteView from "@/views/AutocompleteView";
import PricingComponentView from "@/views/PricingComponentView";
import AutoFormatInputView from "@/views/AutoFormatInputView";
import About from "@/views/About";
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
    path: "/navigation",
    name: "NavigationView",
    component: NavigationView,
  },
  {
    path: "/tab",
    name: "TabView",
    component: TabView,
  },
  {
    path: "/buttons",
    name: "ButtonView",
    component: ButtonView,
  },
  {
    path: "/input",
    name: "InputView",
    component: InputView,
  },
  {
    path: "/textarea",
    name: "TextAreaView",
    component: TextAreaView,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/dropdown",
    name: "DropDownView",
    component: DropDownView,
  },
  {
    path: "/auto-hiding-navigation",
    name: "AutoHidingNavigationView",
    component: AutoHidingNavigationView,
  },
  {
    path: "/navigation-dropdown",
    name: "NavigationDropDownView",
    component: NavigationDropDownView,
  },
  {
    path: "/autocomplete",
    name: "AutocompleteView",
    component: AutocompleteView,
  },
  {
    path: "/pricing-component",
    name: "PricingComponentView",
    component: PricingComponentView,
  },
  {
    path: "/auto-format-input",
    name: "AutoFormatInputView",
    component: AutoFormatInputView,
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
