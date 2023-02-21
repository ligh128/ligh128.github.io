<template>
  <div class="testimonials-list-item bg-[#fff] shadow-boxList rounded-[8px] border-[1px] border-textGrayLight mb-[24px] mr-[24px] p-[24px] w-[350px] 2xl:w-[400px]">
    <div class="w-full flex justify-between items-center mb-[4px]">
      <p class="text-blue font-semibold py-[3px] text-xl mr-[5px]">{{ name }}</p>
      <img src="@/assets/img/testimonials-5stars.png">
    </div>
    <p class="flex items-center tracking-[0.2px] text-textGray text-sm">
      <span>Ordered:&nbsp;</span>
      <span class="font-semibold">{{ product }}</span>
    </p>
    <p class="mt-[16px] leading-[20px] tracking-[0.2px] text-sm">
      {{ text }}
    </p>
  </div>
</template>

<style scoped lang="sass">
   @media (max-width: 1464px)
     .testimonials-list-item
       margin-right: 10px
       min-height: 322px
   @media (max-width: 917px)
     .testimonials-list-item
       margin-right: 0px
       width: 49%
   @media (max-width: 510px)
     .testimonials-list-item
       height: fit-content
       min-height: unset
       width: 100%
</style>

<script>
export default ({
  props: {
    name: {
      type: String,
      required: true,
    },
    product: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
});
</script>
