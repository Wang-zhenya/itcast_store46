import Vue from 'vue';
import Router from 'vue-router';
// 导入组件
import Login from '@/views/Login';
import Home from '@/views/Home';
import Users from '@/views/users/Users.vue';
import Rights from '@/views/roles/Rights';
import Roles from '@/views/roles/Roles';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/',
      component: Home,
      // 子路由，将来子路由的切换 是在Home组件中完成的
      // 子路由使用之前，home组件已经创建完毕
      children: [
        // 用户列表
        {
          name: 'users',
          path: '/users',
          component: Users
        },
        {
          name: 'rights',
          path: '/rights',
          component: Rights
        },
        {
          name: 'roles',
          path: '/roles',
          component: Roles
        }
      ]
    }
  ]
});
