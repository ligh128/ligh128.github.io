<template>
  <div class="input-field-wrapper">
    <input
        :class="[
        'input-field__input',
        { 'input-field__input--focused': isFocused }
      ]"
        type="text"
        v-model="value"
        ref="input"
        @focus="isFocused = true"
        @blur="isFocused = false"
    >
    <div
        @click="clickPlaceholder"
        :class="[
        'input-field__placeholder',
        { 'input-field__placeholder--focused': floatOn }
      ]"
    >{{ placeholder }}</div>
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: ["placeholder"],
  data() {
    return {
      isFocused: false,
      value: ""
    };
  },
  computed: {
    floatOn() {
      return this.isFocused || this.value.length > 0;
    }
  },
  methods: {
    clickPlaceholder() {
      this.isFocused = true;
      this.$refs.input.focus();
    }
  }
};
</script>

<style scoped>
.input-field-wrapper {
  position: relative;
  padding-top: 10px;
}
.input-field__input {
  width: calc(100% - 20px);
  height: 100%;
  padding: 10px 13px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  border: 2px solid #bcbcbc;
  outline: none;
  font-weight: 550;
}
.input-field__input--focused {
  border: 2px solid #3b3b3b;
}
.input-field__placeholder {
  position: absolute;
  left: 12px;
  top: 25px;
  padding: 0 6px;
  background: #fff;
  transition: all 0.3s;
  line-height: 12px;
}
.input-field__placeholder--focused {
  top: 4px;
  font-size: 12px;
  left: 10px;
}
</style>
