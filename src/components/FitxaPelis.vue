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
  <v-card class="pa-4 h-100 d-flex flex-column justify-space-between" elevation="2">

      <v-card-title class="text-h6 font-weight-bold px-0 text-wrap text-left">
        {{ element.Title }}
      </v-card-title>

      <v-img :src="element.Poster" alt=""  height="250" cover class="rounded-lg my-3"></v-img>
      
      <v-card-subtitle >
        <v-icon icon="mdi-calendar" size="small" class="mr-1"></v-icon>
        {{ element.Year }}
      </v-card-subtitle>
      
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
                  <v-card-title class="text-h5 font-weight-bold pt-2 px-2 text-wrap">
                      {{ peli.Title }}
                  </v-card-title>

                  <v-card-text class="py-2 px-2 text-body-1">
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
