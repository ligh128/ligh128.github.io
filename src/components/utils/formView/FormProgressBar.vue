<script setup>
import FormProgressBarItem from '@/components/utils/formView/formProgressBar/FormProgressBarItem.vue';
</script>

<template>
  <div v-if="this.$route.params.key == 'all'">  
    <div class="w-full flex items-center font-Work-Sans relative left-[10px]">
        <FormProgressBarItem
            :activeStep="step"
            :label="'Client information'"
            :itemIndex="1"
            @onStepTitleClick="onStepTitleClick(1)"
        />
        <FormProgressBarItem
            class="ml-[-10px]"
            :style="maxProgress < 2 ? {'pointer-events': 'none'} : null"
            :activeStep="step"
            :label="'Product type'"
            :itemIndex="2"
            @onStepTitleClick="onStepTitleClick(2)"
        />
        <FormProgressBarItem
            class="ml-[-10px]"
            :style="maxProgress < 3 ? {'pointer-events': 'none'} : null"
            :activeStep="step"
            :label="'Info & coverage'"
            :itemIndex="3"
            @onStepTitleClick="onStepTitleClick(3)"
        />
        <FormProgressBarItem
            class="ml-[-10px]"
            :style="maxProgress < 4 ? {'pointer-events': 'none'} : null"
            :activeStep="step"
            :label="'Assistance'"
            :itemIndex="4"
            @onStepTitleClick="onStepTitleClick(4)"
        />
      </div>
  </div>
  <div v-else>
    <div class="w-full flex items-center font-Work-Sans relative left-[10px]">
        <FormProgressBarItem
            :activeStep="step"
            :label="'Client information'"
            :itemIndex="1"
            @onStepTitleClick="onStepTitleClick(1)"
        />
        <FormProgressBarItem
            class="ml-[-10px]"
            :style="maxProgress < 2 ? {'pointer-events': 'none'} : null"
            :activeStep="step"
            :label="'Info & coverage'"
            :itemIndex="2"
            @onStepTitleClick="onStepTitleClick(2)"
        />
        <FormProgressBarItem
            class="ml-[-10px]"
            :style="maxProgress < 3 ? {'pointer-events': 'none'} : null"
            :activeStep="step"
            :label="'Assistance'"
            :itemIndex="3"
            @onStepTitleClick="onStepTitleClick(3)"
        />
      </div>
  </div>
</template>

<script>
  /* Step can be -> [1,2,3,4]. */
  export default {
    props: {
      step: {
        type: Number,
        required: true,
      },
      maxProgress: {
        type: Number,
        required: false,
        default: 999,
      }
    },
    methods: {
      onStepTitleClick(step) {
        if (step <= this.maxProgress) {
          this.$emit("click", step);
        }
      }
    }
  }
</script>

<style scoped lang="sass"></style>
