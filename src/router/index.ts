import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import TarefasView from "../view/tarefas.vue";
import ProjetosView from "../view/projetos.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "tarefas", component: TarefasView },
  { path: "/projetos", name: "Projetos", component: ProjetosView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
