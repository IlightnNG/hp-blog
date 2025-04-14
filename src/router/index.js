import { createRouter, createWebHistory } from 'vue-router';
import SettingsView from '@/views/SettingsView.vue';
import MainView from '@/views/MainView.vue';
import PostDetailView from '@/views/PostsDetailView.vue';
import PostsView from '@/views/PostsView.vue';
import PostsViewLight from '@/views/PostsViewLight.vue';
import AboutView from '@/views/AboutView.vue';

const routes = [
    { path: '/', name: 'Home', component: MainView },
    { path: '/posts', name: 'Posts', component: PostsView },
    {
        path: '/posts/:id',
        name: 'PostDetail',
        component: PostDetailView
    },
    { path: '/about', name: 'About', component: AboutView },
    { path: '/settings', name: 'Settings', component: SettingsView },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;