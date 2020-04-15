import Home from "@/views/Home.vue";
const routes = [{
    path: "/Home",
    name: "Home",
    component: Home,
    meta: {
        requiresAuth: true,
        title: "首页面"
    }
}

];
export default routes;