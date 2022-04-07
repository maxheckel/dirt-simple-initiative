<template>
  <div class="other-things">
    <div class="left">
      <a target="_blank" href="https://github.com/maxheckel/dirt-simple-initiative"> <i class="bi bi-github"></i></a>

    </div>
    <div class="right">
      Created By <a href="https://github.com/maxheckel" target="_blank"> Max Heckel </a><br>
      <a href="#" @click="data.show = !data.show; data.showCount++" v-if="!data.show && data.showCount === 0">Click to see other things I've built...</a>
      <a href="#" @click="data.show = !data.show; data.showCount++" v-if="!data.show && data.showCount > 0 && data.showCount !== 10">Good bye things :( </a>
      <a href="#" @click="data.show = !data.show; data.showCount++" v-if="data.show && data.showCount === 1">Wow so many things!</a>
      <a href="#" @click="data.show = !data.show; data.showCount++" v-if="data.show && data.showCount > 1 && data.showCount !== 10">Yay things are back!</a>
      <a href="#" @click="data.show = !data.show; data.showCount++" v-if="data.showCount === 10">//🥚 you found the easter egg, good job!</a>

      <Transition name="slide-fade">
        <p class="thing-i-built" v-if="data.show">
          <a target="_blank" href="http://www.ddencounters.com/">More Advanced Encounter Tracker</a>
        </p>
      </Transition>
      <Transition name="slide-fade" class="two">
        <p class="thing-i-built" v-if="data.show">
          <a target="_blank" href="https://random-hook.com/">Random Plot Hook Generator</a>
        </p>
      </Transition>
      <Transition name="slide-fade" class="three">
        <p class="thing-i-built" v-if="data.show">
          <a target="_blank" href="http://markovdnd.maxheckel.me">AI (poorly) generated D&D books</a>
        </p>
      </Transition>
    </div>

  </div>
</template>

<script setup lang="ts">
  import {reactive} from "vue";

  const data = reactive({
    show: false,
    showCount: 0
  })

</script>


<style lang="scss" scoped>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.two{
  transition-delay: 0.25s;
}
.three{
  transition-delay: 0.5s;
}
.four{
  transition-delay: 0.75s;
}

a{
  color: #cccccc;
  font-size: 12px;
  &:hover{
  color: #c0c0c0;
 }
}

.other-things{
  font-size: 12px;
  color: #cccccc;
  display: grid;
  grid-template-columns: 50% 50%;

  .right{
    text-align: right;
  }
  .left{
    margin-left: 20px;
    margin-top: 1px;
    a{
      font-size: 22px;
    }
  }
}


.thing-i-built{
  margin-bottom: 0px;
}
</style>