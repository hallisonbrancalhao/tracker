import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "vue";
import { Store, createStore } from "vuex";

interface Estado {
  projetos: IProjeto[];
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    projetos: [],
  },
  mutations: {
    ADICIONA_PROJETO(state, nomeProjeto: string) {
      const projeto = {
        id: new Date().toISOString(),
        nome: nomeProjeto,
      } as IProjeto;
      state.projetos.push(projeto);
    },
  },
});
