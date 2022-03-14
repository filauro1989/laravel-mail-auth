/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import App from './views/App';
import Home from './pages/Home';
import Contactus from './pages/Contactus';
import VueRouter from 'vue-router';
import Vue from "vue";


window.Vue = require('vue');

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes:  [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            // {
            //     path: '/products',
            //     name: 'products',
            //     component: Products
            // },
            // {
            //     path: '/products/:id',
            //     name: 'product',
            //     props: true, 
            //     component: Product
            // },
            // {
            //     path: '/about',
            //     name: 'about',
            //     component: About
            // },
            {
                path: '/contactus',
                name: 'contactus',
                component: Contactus
            },
            
        ]
});

const app = new Vue({
        el: '#app',
    render: h => h(App),
        router
    });