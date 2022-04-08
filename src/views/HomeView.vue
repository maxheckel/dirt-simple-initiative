<script setup lang="ts">
  import Turns from '@/components/Turns.vue'
  import {initiative} from "@/store/initiative";
</script>

<template>
  <main>
    <div class="row" style="padding-bottom: 10px;">
      <div class="col">
        <h1 style="font-size: 1.5rem">Dirt Simple Initiative</h1>
      </div>
      <div class="col-1" style="margin-right: 30px;">
        <button class="btn btn-light" @click="initiative.sort()"><i class="bi bi-sort-down"></i>
        </button>
      </div>
    </div>

    <Turns/>
  </main>
</template>
