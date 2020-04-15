import FileUpload from "@/views/fileUpload/index.vue";
const routes = [{
    path: "/FileUpload",
    name: "FileUpload",
    component: FileUpload,
    meta: {
        requiresAuth: true,
        title: "文件上传"
    }
}

];
export default routes;