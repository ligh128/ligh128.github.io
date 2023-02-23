<template>
  <div class="custom-select font-Work-Sans" :tabindex="tabindex" @blur="open = false"
    :style="width ? { width: width + 'px' } : {}">
    <label :class="selected !== ' ' ? 'active' : null">{{ label }}</label>
    <div class="selected" :class="{ open: open }" @click="open = !open;">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div v-for="(option, i) of $props.options" :key="i"
        @click="
          selected = option;
        open = false;
        $emit('input', option);
                                                                                                                                                                ">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    options: {
      type: Array,
      required: true,
      default: [],
    },
    default: {
      type: String,
      required: false,
      default: undefined,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
    width: {
      type: Number,
      required: false,
      default: undefined,
    },
    label: {
      type: String,
      required: true,
      default: undefined,
    },
  },
  emits: ["input"],
  data() {
    return {
      options: [],
      selected: this.default ? this.default : this.options.length > 0 ? this.options[0] : null,
      open: false,
    };
  },
  watch: {
    default: function (newVal, oldVal) { // watch it
      this.selected = this.default;
    }
  },
  mounted() {
    this.$emit("input", this.selected);

    this.options = this.$props.options;
  },
  methods: {},
};
</script>

<style scoped lang="sass">
  .custom-select
    max-width: 100%
    width: 207px
    position: relative
    text-align: left
    outline: none
    height: 48px
    line-height: 48px
    padding: 0px
    &.not-valid
      .selected
        animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both
        backface-visibility: hidden
        perspective: 1000px
        border-color: red
        color: red
      >label
        color: red
    >label
      display: inline-block
      position: absolute
      z-index: 99
      left: 12px
      transition-duration: 0.3s
      pointer-events: none
      font-size: 14px
      &.active
        margin-top: -5px
        font-size: 12px
        line-height: 12px
        background-color: #fff
        padding: 0 5px
        height: 10px
    .selected
      width: 100%
      height: 100%
      background-color: #fff
      border-radius: 4px
      border: 1px solid #EAE8EF
      color: #534E5F
      padding-left: 1em
      letter-spacing: 0.2px
      cursor: pointer
      user-select: none
      font-size: 14px
      line-height: 20px
      display: flex
      align-items: center
      &.open
        border-radius: 4px 4px 0px 0px
      &:after
        position: absolute
        content: ""
        top: 22px
        right: 1em
        width: 8px
        height: 6px
        background-image: url(../../assets/img/icons/chevron-bottom-dark.svg)
        pointer-events: none
        z-index: 10
    .items
      color: #534E5F
      border-radius: 0px 0px 4px 4px
      overflow: hidden
      border-right: 1px solid #EAE8EF
      border-left: 1px solid #EAE8EF
      border-bottom: 1px solid #EAE8EF
      position: absolute
      background-color: #fff
      left: 0
      right: 0
      z-index: 101
      box-shadow: 3px 3px 5px 0px rgb(66 68 90 / 12%)
      max-height: 25vh
      overflow-y: auto
      @media (max-width: 600px)
        max-height: 50vh
      div
        color: #534E5F
        padding-left: 1em
        cursor: pointer
        user-select: none
        &:hover
          background-color: theme('colors.blue')
          color: #fff
  .selectHide
    display: none
</style>
