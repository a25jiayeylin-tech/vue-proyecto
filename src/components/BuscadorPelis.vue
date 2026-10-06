<script setup>
import { ref } from 'vue'
import { buscar, info} from '@/services/communicationManager'

const cerca = ref('')
const resultats = ref([])

const peli = ref(null) 

async function ferCerca() {
    resultats.value = await buscar(cerca.value)

}
async function verInfo(id) {
    peli.value = null 
    peli.value = await info(id)

}

</script>

<template>

    <v-container>

        <v-text-field
            v-model="cerca"
            label="Què vols cercar?"
        ></v-text-field>

        <v-btn
            @click="ferCerca"
        >
            Cercar
        </v-btn>
        <v-row >
            <v-col
                v-for="element in resultats":key="element.imdbID"
                cols="12"
                md="4"
                align="center"
            >
                <v-card>
                    <b>{{ element.Title }}</b>
                    <v-img :src="element.Poster" alt="" max-width="150" ></v-img>
                    {{ element.Year }}
                    <br>
                    <v-dialog max-width="500">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn
                            v-bind="activatorProps"
                            color="surface-variant"
                            text="Más info."
                            variant="flat"
                            @click="verInfo(element.imdbID)"
                            ></v-btn>
                        </template>

                        <template v-slot:default="{ isActive }">
                            
                            <v-card  v-if="peli"  >
                                <v-card-title>
                                    Detalles de la película
                                </v-card-title>
                                <v-card-text >
                                    <p><b>Género:</b> 
                                    {{ peli.Genre }}</p>
                                    <p><b>Director:</b> 
                                    {{ peli.Director }}</p>
                                    <p><b>Escritores:</b> 
                                    {{ peli.Writer }}</p>
                                    <p><b>Actores:</b> 
                                    {{ peli.Actors }}</p>
                                </v-card-text>               
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                    text="Cerrar"
                                    @click="isActive.value = false"
                                    ></v-btn>
                                </v-card-actions>
                            </v-card>
                        
                        </template>
                    </v-dialog>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

</template>