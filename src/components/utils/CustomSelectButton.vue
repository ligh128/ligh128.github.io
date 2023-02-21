<template>
  <div
      class="custom-select-button"
      :class="['styling-theme-' + stylingTheme, fullWidth ? 'full-width' : null]"
  >
    <p class="title">{{ title }}</p>
    <div class="list">
      <div
          class="list-item"
          :style="[
              {'padding': '12px ' + buttonInnerXPaddings +'px'},
              {'min-width': buttonsWidth + 'px'},
              ]"
          v-for="(option, i) of options"
          :class="selected === option ? 'active' : null"
          :key="i"
          @click="this.onValueSelect(option)"
      >
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
    // Can be [1,2].
    stylingTheme: {
      type: Number,
      required: true,
    },
    fullWidth: {
      type: Boolean,
      required: false,
      default: false,
    },
    buttonInnerXPaddings: {
      type: Number,
      required: false,
      default: 12,
    },
    buttonsWidth: {
      type: Number,
      required: false,
      default: false,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    title: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selected: this.default
          ? this.default
          : this.options.length > 0
              ? this.options[0]
              : null,
      open: false,
    };
  },
  emits: ["input"],
  methods: {
    onValueSelect(value) {
      this.selected = value;
      this.$emit("input", this.selected);
    },
  },
};
</script>

<style scoped lang="sass">
  .custom-select-button
    display: flex
    flex-direction: column
    width: fit-content
    &.not-valid
      *
        color: red !important
        border-color: red !important
        &:after
          background: red !important
    &.full-width
      width: 100%
      .list-item
        width: 100%
        justify-content: center
    @media (max-width: 767px)
      width: 100%
      .list
        overflow-x: scroll
        &-item
          width: 100%
          justify-content: center
    &.styling-theme-2
      .list-item:after
        display: none !important
    >.title
      color: #534E5F
      letter-spacing: 0.2px
      font-size: 14px
      line-height: 20px
      margin-bottom: 10px
    .list
      width: 100%
      border: 1px solid #EAE8EF
      border-radius: 4px
      display: flex
      align-items: center
      &-item
        list-style-type: none
        padding: 12px
        font-size: 14px
        line-height: 20px
        letter-spacing: 0.2px
        color: #1E182E
        transition-duration: 0.3s
        position: relative
        display: flex
        align-items: center
        justify-content: center
        white-space: nowrap
        &:after
          content: ""
          position: absolute
          right: 0px
          width: 1px
          height: 20px
          background: #D9D9D9
        &:hover
          cursor: pointer
          background-color: #F2F4FD
          color: theme('colors.blue')
        &.active
          background-color: #F2F4FD
          color: theme('colors.blue')
          font-weight: 500
        &:last-child
          &:after
            display: none
</style>
