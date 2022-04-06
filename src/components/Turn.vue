<template>
  <div :class="{turn: true, active: turn.active}">
    <div class="row">
      <div class="col-1 delete">
        <button class="btn btn-light" @click="initiative.remove(props.turnIndex)"><i class="bi bi-trash"></i></button>
      </div>
      <div class="col-9 name  g-0">
        <input class="form-control" @keyup="initiative.save()" v-model="props.turn.name">
      </div>
      <div class="col-2 rolled">
        <input type="number" @keyup="initiative.save()" class="form-control text-center" v-model="props.turn.rolled">
      </div>
    </div>
    <p v-for="name in names.list.filter((n) => n[0].toLowerCase() === 'a')">
      {{name}}
    </p>
  </div>
</template>

<script setup lang="ts">
// in <script setup>
import type {Turn} from "@/store/initiative";
import {initiative} from '@/store/initiative';
import {names} from "@/store/names";

names.remove(1)


const props = defineProps<{
  turn: Turn
  turnIndex: number
}>()


</script>


<style lang="scss" scoped>

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
.turn {
  font-size: 22px;
  margin-bottom: 10px;
  padding: 10px;

  &.active{
    $borderColor: #b89eed;
     outline: none;
     border-color: $borderColor;
     box-shadow: 0 0 10px $borderColor;
    border-radius: 5px;
  }
}

@media(max-width: 790px){
  .turn {

    .name{
      width: 65%;
      margin-left: 30px;
    }
    button{
      font-size: 12px;
      z-index: 1000;
    }
  }
}

@media(max-width: 500px){
  .turn {

    .name{
      width: 50%;
      margin-left: 30px;
    }
    .rolled{
      width: 30%;
    }

    button{
      font-size: 12px;
      z-index: 1000;
    }
  }
}
@media(max-width: 374px){
  .turn {

    .name{
      width: 40%;
      margin-left: 30px;
    }
    .rolled{
      width: 35%;
    }

  }
}
</style>