<template>
  <router-link
      :to="linkTo"
      class="hover:no-underline block p-[15px] text-sm hover:bg-Orenge hover:text-white ease-in-out duration-300">{{label}}</router-link>
</template>

<script>
export default ({
  props: {
    linkTo: {
      type: Number,
      required: false,
    },
    label: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {

    }
  },
});
</script>
