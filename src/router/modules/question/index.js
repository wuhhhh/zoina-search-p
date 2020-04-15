import Question from "@/views/question/index.vue";
const routes = [{
    path: "/Question",
    name: "Question",
    component: Question,
    meta: {
        requiresAuth: true,
        title: "问题页面"
    }
}

];
export default routes;