<script setup>
import { ref } from 'vue'
import { info } from '@/services/communicationManager'

defineProps({
  element: {
    type: Object,
    required: true
  }
})

const peli = ref(null) 

async function verInfo(id) {
    peli.value = null 
    peli.value = await info(id)
}
</script>

<template>
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
              <v-card v-if="peli">
                  <v-card-title>
                      Detalles de la película
                  </v-card-title>

                  <v-card-text>
                      <p><b>Género:</b> {{ peli.Genre }}</p>
                      <p><b>Director:</b> {{ peli.Director }}</p>
                      <p><b>Escritores:</b> {{ peli.Writer }}</p>
                      <p><b>Actores:</b> {{ peli.Actors }}</p>
                  </v-card-text>               
                  <v-card-actions>
                      <v-btn
                          text="Cerrar"
                          @click="isActive.value = false"
                      ></v-btn>
                  </v-card-actions>
              </v-card>
          </template>
      </v-dialog>
  </v-card>
</template>
