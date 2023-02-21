<template>
  <a
      href="#"
      class="progress-bar-item flex items-center justify-center py-[10px] ml-[-10px] border-[1px] border-textGrayLight
      rounded-[8px] relative min-h-[40px] h-[40px]"
      @click="this.$emit('onStepTitleClick')"
      v-bind:class="activeStep === itemIndex ? 'active-page' : (activeStep > itemIndex ? 'previous-page' : '')"
  >
    <span :class="'index-' + itemIndex" class="circle-icon progress-bar-item-content relative min-w-[5px] sm:min-w-[8px]
    min-h-[5px] sm:min-h-[8px] rounded-[8px] hidden md:block"></span>
    <p :class="'index-' + itemIndex"
       class="progress-bar-item-content relative name px-[15px] sm:px-0 md:ml-[6px] text-xs sm:text-sm tracking-[0.2px]
       text-textDarkGray sm:whitespace-nowrap max-w-[82%] z-[5] text-center sm:text-left"
       :style="{'z-index': 10 - itemIndex}"
    >{{ label }}</p>
    <span class="shape-helper border-r-[1px] border-b-[1px] border-textGrayLight rounded-[7px] min-w-[32px] min-h-[32px]
    absolute z-[2] right-[-10px] top-[3px] rotate-[-45deg] bg-[#fff] pointer-events-none"></span>
  </a>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    // When this step is active.
    itemIndex: {
      type: Number,
      required: true,
    },
    activeStep: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped lang="sass">
  .progress-bar-item
    background-color: #fff
    width: calc(34% + 4px)
    &.active-page
      background-color: theme('colors.white')
      border-color: theme('colors.blue')
      p
        color: theme('colors.blue')
        font-weight: 600
      .shape-helper
        background-color: theme('colors.white')
        border-color: theme('colors.blue')
      .circle-icon
        background-color: theme('colors.blue')
    &.previous-page
      background-color: theme('colors.textGrayLight')
      border: 2px solid #fff
      p
        color: theme('colors.blue')
        font-weight: 600
      .shape-helper
        background-color: theme('colors.textGrayLight')
        border-right: 2px solid #fff
        border-bottom: 2px solid #fff
        border-top-right-radius: 3px
        border-bottom-left-radius: 3px
        min-width: 28px
        min-height: 28px
        top: 4px
      .circle-icon
        background-color: theme('colors.blue')
    &-content
      @media (max-width: 680px)
        &.index-3
          left: 5px
      @media (max-width: 639px)
        &.index-1
          padding-left: 10px
      @media (max-width: 440px)
        font-size: 11px
        line-height: 12px
        padding-left: 16px
        &.index-1
          padding-left: 5px
</style>
