import { createRouter, createWebHistory } from "vue-router";
import Home from '@/pages/Home.vue'
import Register from '@/pages/Register.vue'
import Signin from '@/pages/Signin.vue'
import Student from '@/pages/Student.vue'
import Teacher from '@/pages/Teacher.vue'
import About from '@/pages/About.vue'

let  routes= [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/Register',
      component: Register
    },
    {
      path: '/Signin',
      component: Signin
    },
    {
      path: '/Student',
      component: Student
    },
    {
      path: '/Teacher',
      component: Teacher
    },
    {
        path: '/About',
        component: About
    },
  ]


const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.push('/')
export default router;