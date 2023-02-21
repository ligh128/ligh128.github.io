<template>
  <div>
    <p class="font-semibold leading-[20px] text-xl text-darkBlue mb-[13px] sm:mb-[8px]">{{ label }}</p>
    <p>{{ text }}</p>
    <a :href="linkTo" class="block font-semibold text-orange hover:text-orangeHover duration-300 leading-[20px] text-base sm:text-sm mt-[10px] 2sm:mt-[5px] sm:mt-0 tracking-[0.2px]">
      Read more →
    </a>
  </div>
</template>

<script>
export default ({
  props: {
    label: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    linkTo: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
});
</script>
