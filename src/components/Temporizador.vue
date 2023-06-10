<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <CronometroComponent :tempoEmSegundos="tempoEmSegundos" />

        <button class="button" @click="iniciar" :disabled="cronometroRodando">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>Play</span>
        </button>
        <button class="button" @click="finalizar" :disabled="!cronometroRodando">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>Stop</span>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CronometroComponent from './Cronometro.vue'

export default defineComponent({
    name: 'TemporizadorComponent',
    components: {
        CronometroComponent
    },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false,
        }
    },
    computed: {
        tempoDecorrido(): string {
            return new Date(this.tempoEmSegundos * 1000).toISOString().substring(11, 19)
        }
    },
    methods: {
        iniciar() {
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1;
                this.cronometroRodando = true

            }, 1000)

        },
        finalizar() {
            this.cronometroRodando = !this.cronometroRodando
            clearInterval(this.cronometro)
        }
    }
})
</script>

