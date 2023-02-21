<template>
  <span ref="container" v-on:click="value = !value;$emit('input', value)">
    <label @click.prevent class="container">
    <span :style="hasOneLineLabel ? {'top': 3 + 'px'} : null" class="relative font-Work-Sans text-xs text-textDarkGray tracking-[0.2px]">
      {{ label }}
    </span>
    <input v-model="newvalue" type="checkbox">
    <span class="checkmark"></span>
  </label>
  </span>
</template>

<script>
export default {
  emits: ["input"],
  props: {
    label: {
      type: String,
      required: true,
    },
    hasOneLineLabel: {
      type: Boolean,
      required: false,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {},
  data() {
    return {
      newvalue: this.value
    }
  },
}
</script>

<style scoped>
/* Customize the label (the container) */
.container {
  width: fit-content;
  display: inline-block;
  height: 32px;
  line-height: 16px;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #fff;
  border: 1px solid #EAE8EF;
  border-radius: 4px;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #eee;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: theme('colors.blue');
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
