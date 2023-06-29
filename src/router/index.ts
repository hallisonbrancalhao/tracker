import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefas from "../view/tarefas.vue";

const rotas: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Tarefas",
    component: Tarefas,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: rotas,
});

export default router;
