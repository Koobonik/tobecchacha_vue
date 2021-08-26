import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
import Member from "./views/Member"
import Signup from "@/views/signup/Signup";
import Login from "@/views/login/Login";
import Logout from "@/views/login/Logout";
import FindPassword from "@/views/find/FindPassword";
import ResetPassword from "@/views/find/ResetPassword";
import BooksPage from "@/views/books/BooksPage";
import BookDetail from "./views/books/BookDetail";
import EducationPage from "@/views/education/EducationPage";
import EducationDetail from "@/views/education/EducationDetail";
import GalleryPage from "@/views/gallery/GalleryPage";
import GalleryDetail from "@/views/gallery/GalleryDetail";
import ArtistsPage from "./views/artists/ArtistsPage";
import EtcDetail from "./views/etc/EtcDetail";
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
        },
        {
            path: "/logout",
            component: Logout,
        },
        {
            path: "/findPassword",
            component: FindPassword,
        },
        {
            path: "/resetPassword",
            component: ResetPassword,
        },
        {
            path: "/books",
            component: BooksPage
        },
        {
            path: "/bookDetail",
            component: BookDetail
        },
        {
            path: "/education",
            component: EducationPage
        },
        {
            path: "/educationDetail",
            component: EducationDetail
        },
        {
            path: "/gallery",
            component: GalleryPage
        },
        {
            path: "/galleryDetail",
            component: GalleryDetail
        },
        {
            path: "/artists",
            component: ArtistsPage
        },
        {
            path: "/etcDetail",
            component: EtcDetail
        },
    ]
});

export default router;