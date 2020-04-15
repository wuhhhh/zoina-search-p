import FileUpload from "./modules/upload";
import Question from "./modules/question";
import Home from "./modules/home";
export default [

  {
    path: "/",
    name: "Home",
    meta: {
      requiresAuth: true
    },
    redirect: {
      name: "Home"
    },
    component: Home,
    
    
  },
  ...Question,
  ...FileUpload,
  ...Home
];