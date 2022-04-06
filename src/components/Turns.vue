<script setup lang="ts">
import {initiative} from "@/store/initiative";
import Turn from '@/components/Turn.vue'
import {onMounted} from "vue";

onMounted(() => {
  initiative.load()
})

</script>

<template>
  <div class="turns" >
    <Turn  v-for="(turn, index) in initiative.turns" :turn="turn"
          :turn-index="index"></Turn>

    <div class="row bottom-row">
      <div class="col-4 add-button">
        <button @click="initiative.addTurn()" class="btn btn-success">+ Add Turn</button>
      </div>
      <div class="col middle"></div>
      <div class="col-1 control-arrow">
        <button @click="initiative.previous()" class="btn btn-light">
          <i class="bi bi-arrow-left-square-fill"></i>
        </button>

      </div>
      <div class="col-1 control-arrow">
        <button @click="initiative.next()" class="btn btn-light">
          <i class="bi bi-arrow-right-square-fill"></i>
        </button>

      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.turns {
  width: 100%;
  border-radius: 25px;
  border: 1px solid #ccc;
  padding: 20px;
}


@media(max-width: 500px){
  .turns{
    .add-button{
      width: 50%;
      button{
        font-size: 12px;
      }
    }
    .middle{
      display: none;
    }
    .control-arrow{
      width: 25%;
    }
  }
}
</style>