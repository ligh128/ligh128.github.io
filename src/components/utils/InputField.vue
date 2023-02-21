<template>
  <div class="input-field-wrapper" :class="[
    { 'focused': isFocused }
  ]">
    <input :class="[
      'input-field__input',
      {
        'input-field__input--focused': isFocused,
        'with-icon': icon,
        'with-prefix': prefix
      }
    ]" type="text" v-model="value" ref="input" @keyup="onChange()" @focus="isFocused = true" @blur="isFocused = false">
    <span class="icon" v-if="icon">
      <img :src="icon">
    </span>
    <div @click="clickPlaceholder" :class="[
      'input-field__placeholder',
      {
        'input-field__placeholder--focused': floatOn,
        'with-icon': icon,
        'with-prefix': prefix
      }
    ]">{{ placeholder }}<span v-if="errorDescription && errorState">&nbsp;({{ errorDescription }})</span></div>
  </div>
</template>

<script>
import { buildProps } from '@vue/compiler-core';

export default {
  name: "InputField",
  props: {
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    alwaysOn: {
      type: Boolean,
      required: false,
      default: false
    },
    placeholder: {
      type: String,
      required: true,
    },
    prefix: {
      type: String,
      required: false,
    },
    numbersOnly: {
      type: Boolean,
      required: false,
      default: false,
    },
    icon: {
      type: String,
      required: false,
      default: null,
    },
    default: {
      type: String,
      required: false,
      default: undefined,
    },
    maxLength: {
      type: Number,
      required: false,
      default: 240,
    },
    errorDescription: {
      type: Boolean,
      required: false,
      default: false,
    },
    errorState: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      isFocused: false,
      value: this.default !== undefined ? this.default : ""
    };
  },
  watch: {
    default: function (newVal, oldVal) { // watch it
      this.value = this.default;
    }
  },
  created() {
    if (this.prefix) {
      this.floatOn = true;
      this.onChange();
    }
  },
  computed: {
    floatOn() {
      return this.isFocused || this.value?.length > 0 || this.alwaysOn;
    }
  },
  emits: ["input"],
  methods: {
    clickPlaceholder() {
      this.isFocused = true;
      this.$refs.input.focus();
    },
    onChange() {
      if (typeof this.value === 'string') {
        if (this.value > this.maxLength) {
          this.value = this.value.substring(0, this.maxLength);
        }

        if (this.numbersOnly) {
          this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
        }

        this.prefix && this.value[0] !== this.prefix ? this.value = this.prefix + ' ' + this.value : null;

        this.$emit('input', this.value);
      }
    }
  }
};
</script>

<style scoped lang="sass">
  .input-field-wrapper
    position: relative
    display: flex
    align-items: center
    &.not-valid
      .input-field__input
        animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both
        backface-visibility: hidden
        perspective: 1000px
        border-color: red
        color: red
      .input-field__placeholder
        color: red !important
    &.focused .input-field__placeholder
      color: theme('colors.blue')
    >.icon
      position: absolute
      left: 18px
    .input-field__input
      max-width: 100%
      width: 320px
      height: 48px
      min-height: 48px
      font-family: 'Work Sans', sans-serif
      padding: 14px 16px
      font-size: 14px
      font-weight: 600
      border: 1px solid #EAE8EF
      color: #1E182E
      border-radius: 8px
      outline: none
      background-color: #fff
      @media (max-width: 440px)
        width: 100%
      &.with-icon
        padding-left: 48px
      &--focused
        border: 1px solid theme('colors.blue')
        color: theme('colors.blue')
    .input-field__placeholder
      position: absolute
      left: 12px
      top: 18px
      padding: 0 3px
      background: #fff
      transition: all 0.3s
      line-height: 12px
      font-size: 14px
      span
        font-weight: 700
        font-size: 12px
      &.with-icon
        left: 50px
      &--focused
        top: -5px
        font-size: 12px
        left: 10px
        span
          font-size: 10px
</style>
