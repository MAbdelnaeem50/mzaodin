import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
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
