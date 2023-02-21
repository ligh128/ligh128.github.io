<template>
  <div class="w-full flex items-center font-Work-Sans">
    <a
        href="#"
        class="progress-bar-item flex items-center justify-center py-[10px] border-[1px] border-textGrayLight rounded-[8px] relative min-h-[40px] h-[40px]"
        @click="onStepTitleClick(1)"
        v-bind:class="step === 1 ? 'active-page' : (step > 1 ? 'previous-page' : '')"
    >
      <span class="circle-icon min-w-[8px] min-h-[8px] rounded-[8px]"></span>
      <p class="ml-[6px] text-sm tracking-[0.2px] leading-[20px] text-textDarkGray z-[9] whitespace-nowrap">Client information</p>
      <span class="shape-helper border-r-[1px] border-b-[1px] border-textGrayLight rounded-[7px] min-w-[32px] min-h-[32px] absolute z-[2] right-[-10px] top-[3px] rotate-[-45deg] bg-[#fff] pointer-events-none"></span>
    </a>
    <a
        href="#"
        class="progress-bar-item flex items-center justify-center py-[10px] ml-[-10px] border-[1px] border-textGrayLight rounded-[8px] relative min-h-[40px] h-[40px]"
        @click="onStepTitleClick(2)"
        v-bind:class="step === 2 ? 'active-page' : (step > 2 ? 'previous-page' : '')"
    >
      <span class="circle-icon min-w-[8px] min-h-[8px] rounded-[8px]"></span>
      <p class="ml-[6px] text-sm tracking-[0.2px] leading-[20px] text-textDarkGray z-[8] whitespace-nowrap">Product type</p>
      <span class="shape-helper border-r-[1px] border-b-[1px] border-textGrayLight rounded-[7px] min-w-[32px] min-h-[32px] absolute z-[2] right-[-10px] top-[3px] rotate-[-45deg] bg-[#fff] pointer-events-none"></span>
    </a>
    <a
        href="#"
        class="progress-bar-item flex items-center justify-center py-[10px] ml-[-10px] border-[1px] border-textGrayLight rounded-[8px] relative min-h-[40px] h-[40px]"
        @click="onStepTitleClick(3)"
        v-bind:class="step === 3 ? 'active-page' : (step > 3 ? 'previous-page' : '')"
    >
      <span class="circle-icon min-w-[8px] min-h-[8px] rounded-[8px]"></span>
      <p class="ml-[6px] text-sm tracking-[0.2px] leading-[20px] text-textDarkGray z-[7] whitespace-nowrap">Info & coverage</p>
      <span class="shape-helper border-r-[1px] border-b-[1px] border-textGrayLight rounded-[7px] min-w-[32px] min-h-[32px] absolute z-[2] right-[-10px] top-[3px] rotate-[-45deg] bg-[#fff] pointer-events-none"></span>
    </a>
    <a
        href="#"
        class="progress-bar-item flex items-center justify-center py-[10px] ml-[-10px] border-[1px] border-textGrayLight rounded-[8px] relative min-h-[40px] h-[40px]"
        @click="onStepTitleClick(4)"
        v-bind:class="step === 4 ? 'active-page' : (step > 4 ? 'previous-page' : '')"
    >
      <span class="circle-icon min-w-[8px] min-h-[8px] rounded-[8px]"></span>
      <p class="ml-[6px] text-sm tracking-[0.2px] leading-[20px] text-textDarkGray z-[6] whitespace-nowrap">Assistance</p>
      <span class="shape-helper border-r-[1px] border-b-[1px] border-textGrayLight rounded-[7px] min-w-[32px] min-h-[32px] absolute z-[2] right-[-10px] top-[3px] rotate-[-45deg] bg-[#fff] pointer-events-none"></span>
    </a>
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
    },
    methods: {
      onStepTitleClick(step) {
        this.$emit("click", step);
      }
    }
  }
</script>


<style scoped lang="sass">
  .progress-bar-item
    background-color: #fff
    width: calc(25% + 4px)
    &.active-page
      background-color: #FEF7E8
      border-color: #D9BFA7
      p
        color: theme('colors.orange')
        font-weight: 600
      .shape-helper
        background-color: #FEF7E8
        border-color: #D9BFA7
      .circle-icon
        background-color: theme('colors.orange')
  .progress-bar-item.previous-page
    background-color: theme('colors.orange')
    border: 2px solid #fff
    p
      color: #fff
      font-weight: 600
    .shape-helper
      background-color: theme('colors.orange')
      border-right: 2px solid #fff
      border-bottom: 2px solid #fff
      border-top-right-radius: 3px
      border-bottom-left-radius: 3px
      min-width: 28px
      min-height: 28px
      top: 4px
    .circle-icon
      background-color: #FAFAFA
</style>
