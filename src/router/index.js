import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ProductPage from "@/views/ProductPage.vue";
import PayPage from "@/views/PayPage.vue";
import SettingsProfile from "@/views/SettingsProfile.vue";
import AuctionRegister from "@/views/AuctionRegister.vue";
import SubscribersPanel from "@/views/SubscribersPanel.vue";
import BiddersRegister from "@/views/BiddersRegister.vue";
import InvoicePage from "@/views/InvoicePage.vue";
import ShippingPage from "@/views/ShippingPage.vue";
import LoginPage from "@/views/Registration/LoginPage.vue";
import RegisterPage from "@/views/Registration/RegisterPage.vue";
import ForgetPasswordPage from "@/views/Registration/Forget-passwordPage.vue";
import ResetPasswordPage from "@/views/Registration/Reset-passwordPage.vue";
const routes = [
  {
    name:"HomePage",
    path:"/",
    component : HomePage
  },
  {
    name:"ProductPage",
    path:"/Product",
    component : ProductPage
  },
  {
    name:"PayPage",
    path:"/Pay",
    component : PayPage
  },
  {
    name:"SettingsProfile",
    path:"/Settings",
    component : SettingsProfile
  },
  {
    name:"AuctionRegister",
    path:"/AuctionRegister",
    component : AuctionRegister
  },
  {
    name:"SubscribersPanel",
    path:"/SubscribersPanel",
    component : SubscribersPanel
  },
  {
    name:"BiddersRegister",
    path:"/BiddersRegister",
    component : BiddersRegister
  },
  {
    name:"InvoicePage",
    path:"/Invoice",
    component : InvoicePage
  },
  {
    name:"ShippingPage",
    path:"/Shipping",
    component : ShippingPage
  },
  {
    name:"LoginPage",
    path:"/Login",
    component : LoginPage
  },
  {
    name:"RegisterPage",
    path:"/Register",
    component : RegisterPage
  },
  {
    name:"ForgetPasswordPage",
    path:"/Forget-Password",
    component : ForgetPasswordPage
  },
  {
    name:"ResetPasswordPage",
    path:"/Reset-Password",
    component : ResetPasswordPage
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
