<script>
export default ({
  props: {
    imagePath: {
      type: String,
      required: true,
    },
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

<style scoped lang="sass">

</style>

<template>
  <div class="shadow-boxList px-[10px] 2sm:px-[24px] py-[24px] w-[48%] md:w-[31%] xl:w-[24%] m-[1%] md:m-[0.5%] rounded-[5px] bg-[#fff] border-[1px] border-textGrayLight">
    <div class="flex flex-col items-center">
      <div class="flex w-full justify-center items-center mb-[20px]">
        <img :src="imagePath">
      </div>
      <p class="font-semibold text-xl text-blue mb-[8px] leading-[32px] w-full text-center">{{ label }}</p>
      <p class="text-textDarkGray text-sm tracking-[0.2px] text-center leading-[20px]">{{ text }}</p>
      <div class="text-center mt-[24px]">
        <a :href="linkTo" class="font-medium text-darkBlue text-sm tracking-[0.2px] hover:underline">Learn more →</a>
      </div>
    </div>
  </div>
</template>
