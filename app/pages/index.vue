<script setup>
import IconStart from '../assets/icons/IconStar.vue'
import { useTheme } from 'vuetify'

const theme = useTheme();

watch(theme, (newVal) => {
  console.log('newVal :', newVal)
})

watchEffect(() => {
  console.log('theme watchEffect :', theme)
})

</script>

<template>


  <div>
    <div class="bg-primary-tint-800 text-secondary-tint-800">index nuxtjs file</div>

    <VBtn>
      Button default
    </VBtn>

    <p>asdasdasdasd</p>

    <VTextField />


    <VBtn variant="outlined" color="primary">
      Button outlined
    </VBtn>

    <Icon name="custom:star" />

    <v-main>
      <v-container>
        <!-- Toggle between Light / Dark -->
        <v-btn @click="theme.toggle()" text="Toggle Light / Dark"></v-btn>

        <!-- Change to a specific theme -->
        <v-btn @click="theme.change('dark')" text="Change to Dark"></v-btn>

        <!-- Cycle between all themes -->
        <v-btn @click="theme.cycle()" text="Cycle All Themes"></v-btn>

        <!-- Cycle between specific themes -->
        <v-btn @click="theme.cycle(['custom', 'light', 'system'])" text="Cycle Specific Themes"></v-btn>
      </v-container>
    </v-main>

  </div>
</template>
