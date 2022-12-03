import { createWebHistory, createRouter } from "vue-router";
import TeacherCompo from '../components/TeacherHome.vue';
import StudentCompo from '../components/StudentHome.vue';
import LoginCompo from '../components/LoginCompo.vue';
import PresCompo from '../components/PresCompo.vue'

const routes =[
    {
        path:'/',
        alias:'/login',
        name:'login-compo',
        component:LoginCompo
    },
    {
        path:'/tea',
        name:'teacher-compo',
        component:TeacherCompo
    },
    {
        path:'/stu',
        name:'student-compo',
        component:StudentCompo
    },
    {
        path:'/pres',
        name:'pres-compo',
        component:PresCompo
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router