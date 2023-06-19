<template>
    <Formulario @aoSalvarTarefa="salvarTarefa" />
    <div class="lista">
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
        <Box v-if="listaEstaVazia">
            Você não está muito produtivo hoje :(
        </Box>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import FormularioComponent from '../components/Formulario.vue'
import TarefaComponent from '../components/Tarefa.vue'
import BoxComponent from '../components/Box.vue'
import ITarefa from '../interfaces/ITarefa'

export default defineComponent({
    name: 'TarefasView',
    components: {
        Formulario: FormularioComponent,
        Tarefa: TarefaComponent,
        Box: BoxComponent
    },
    data() {
        return {
            tarefas: [] as ITarefa[],
        }
    },
    computed: {
        listaEstaVazia(): boolean {
            return this.tarefas.length === 0
        }
    },
    methods: {
        salvarTarefa(tarefa: ITarefa) {
            this.tarefas.push(tarefa)
        },
    }
});
</script>
  
<style></style>
  