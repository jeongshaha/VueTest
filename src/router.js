import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Home from "./views/About";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {path:"/", component: Home},
        {path:"/about", component: About}
    ]
});