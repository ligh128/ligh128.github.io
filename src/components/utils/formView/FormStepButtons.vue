<template>
  <div class="box-footer mx-[-24px] px-[24px] py-[26px] sm:py-[16px] flex flex-col sm:flex-row items-center
      justify-between bg-white border-t-[1px] border-textGrayLight">
    <div>
      <p class="flex items-center justify-center sm:justify-start">
        <span class="mr-[5px] min-w-[4px] w-[4px] h-[4px] min-h-[4px] bg-blue rounded-[4px] hidden sm:block"></span>
        <span class="font-medium text-sm sm:text-xs tracking-[0.2px] text-blue">Step {{ activeStep }} /
          {{ stepsQuantity }}</span>
      </p>
      <div
        class="mt-[8px] mb-[20px] sm:mb-0 step-indicator min-w-[240px] min-h-[4px] bg-[#D9DBDC] rounded-[8px] relative z-[0]">
        <span class="z-[1] absolute top-0 left-0 border-r-[4px] border-white bg-blue min-h-[4px] duration-300"
          :style="{ 'min-width': activeStep * (100 / stepsQuantity) + '%' }"></span>
      </div>
    </div>
    <div class="flex items-center">
      <p @click="this.$emit('stepBack')" class="white-btn-type mr-[16px]" v-if="activeStep > 1">
        Back
      </p>
      <p v-if="activeStep !== stepsQuantity" @click="this.$emit('stepFurther')" class="blue-btn-type w-[180px]">
        Proceed
      </p>
      <p v-if="activeStep === stepsQuantity" @click="this.$emit('stepFurther')" class="blue-btn-type w-[180px]">
        Submit
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {

    activeStep: {
      type: Number,
      required: true,
    },
    stepsQuantity: {
      type: Number,
      required: true,
    },
  },
}
</script>


<style scoped></style>
