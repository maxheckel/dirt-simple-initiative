<template>
  <div :class="{turn: true, active: turn.active}">
    <div class="row">
      <div class="col-1 delete">
        <button class="btn btn-light" @click="initiative.remove(props.turnIndex)"><i class="bi bi-trash"></i></button>
      </div>
      <div class="col-9 name  g-0">
        <input id="namefield" class="form-control" @focusin="data.showSuggestions = true" @focusout="stopShowing()" v-model="props.turn.name">
      </div>
      <div class="col-2 rolled">
        <input type="number" @blur="initiative.save()" class="form-control text-center" v-model="props.turn.rolled">
      </div>
    </div>
    <div v-if="names.list.length > 0 && data.showSuggestions" class="suggestions" >
      <div class="suggestion" v-for="name in filteredNames()" >
        <span class="clickable-name" @click="props.turn.name = name.target; data.showSuggestions = false; initiative.save()">
          <span v-for="(letter, index) in name.target">
            <b v-if="name.indexes.indexOf(index) >= 0">
              {{letter}}
            </b>
            <span v-else>
              {{letter}}
            </span>

          </span>
        </span>
        <div class="delete" @click="names.remove(name.target); data.dontSave = true;"><i class="bi bi-trash"></i></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// in <script setup>
import type {Turn} from "@/store/initiative";
import {initiative} from '@/store/initiative';
import {names} from '@/store/names';
import * as fuzzysort from "fuzzysort";
import {reactive} from "vue";


const props = defineProps<{
  turn: Turn
  turnIndex: number
}>()

const stopShowing = () => {

  setTimeout(() => {
    data.showSuggestions = true;
    if (data.dontSave){
      data.dontSave = false;
      return
    }
    initiative.save();
    names.add(props.turn.name);
    names.save()
  }, 500)
}
const data = reactive({
  showSuggestions: false,
  dontSave: false
});



const filteredNames = () => {
  const res = fuzzysort.go(props.turn.name, names.list)
  console.log(res)
  console.log(names.list)
  return res.filter(value => value.target.toLowerCase() !== props.turn.name.toLowerCase())
}

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

.suggestions{
  font-size: 16px;
  margin-left: 52px;
  width: 77%;
  margin-top: 1rem;

  .suggestion{
    border-bottom: 1px solid #f2f2f2;
    align-items: center;
    justify-content: normal;
    vertical-align: middle;
    padding: 10px 0px;
    margin-bottom: 0px;
    cursor: pointer;
    .delete{
      float: right;
      margin-right: 10px;
    }
    &:hover{
        background-color: #f2f2f2;
    }
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
.clickable-name{
  width: calc(100% - 30px);
  display: inline-block;
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