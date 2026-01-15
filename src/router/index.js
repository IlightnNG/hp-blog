import { createRouter, createWebHistory } from 'vue-router';
import SettingsView from '@/views/SettingsView.vue';
import MainView from '@/views/MainView.vue';
import PostDetailView from '@/views/PostsDetailView.vue';
import PostsView from '@/views/PostsView.vue';
import MediaView from '@/views/MediaView.vue';
import ContactView from '@/views/ContactView.vue';

const base = '/hp-blog';

const routes = [
    { path: base + '/', name: 'Home', component: MainView },
    { path: base + '/posts', name: 'Posts', component: PostsView },
    {
        path: base + '/posts/:id',
        name: 'PostDetail',
        component: PostDetailView
    },
    { path: base + '/media', name: 'Media', component: MediaView },
    { path: base + '/contact', name: 'Contact', component: ContactView },
    { path: base + '/settings', name: 'Settings', component: SettingsView },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;