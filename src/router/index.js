import Vue from 'vue';
import Router from 'vue-router';

import Journal from '../components/journal';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: '/journal'
        },
        {
            path: '/journal',
            name: 'journal',
            component: Journal
        }
    ]
});
