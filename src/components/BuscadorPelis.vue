<script setup>
import { ref } from 'vue'
import { buscar } from '@/services/communicationManager'
import FitxaPelis from './FitxaPelis.vue' 
const cerca = ref('')
const resultats = ref([])

async function ferCerca() {
    resultats.value = await buscar(cerca.value)
}
</script>

<template>
    <v-container>
        <v-text-field
            v-model="cerca"
            label="Què vols cercar?"
            clearable
            @keydown.enter="ferCerca"
        ></v-text-field>

        <v-btn
            @click="ferCerca"
        >
            Cercar
        </v-btn>
        
        <v-row>
            <v-col
                v-for="element in resultats" :key="element.imdbID"
                cols="12"
                sm="6"
                md="4"
                align="center"
            >
                <FitxaPelis :element="element" />
            </v-col>
        </v-row>
    </v-container>
</template>
