
export default {
    path: "training",
    name: "training",
    component: () => import("@/views/training/index.vue"),
    meta: {
        locale: 'menu.training',
        requiresAuth: true,
        icon: 'icon-robot',
    },
    // children: []
}