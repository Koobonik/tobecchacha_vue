import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
import Member from "./views/Member"
import Signup from "@/views/signup/Signup";
import Login from "@/views/login/Login";
Vue.use(VueRouter);
const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/member",
            component: Member
        },
        {
            path: "/signup",
            component: Signup
        },
        {
            path: "/login",
            component: Login,
        }
    ]
});

export default router;