<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import OtherThings from "@/components/OtherThings.vue";
</script>

<template>


  <RouterView />
  <other-things/>
</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

</style>
