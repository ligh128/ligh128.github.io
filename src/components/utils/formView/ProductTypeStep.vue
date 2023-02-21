<template>
  <div class="box-header w-fit flex mb-[40px]">
    <svg class="mr-[16px]" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" rx="4" fill="#ADA9B5" fill-opacity="0.12"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M44 21.3486L36.6154 25.1239V28.9882C36.6154 29.6134 36.064 30.1208 35.3846 30.1208C34.7052 30.1208 34.1538 29.6134 34.1538 28.9882V26.3833L29.2308 28.8991V44L43.3666 36.7742C43.7571 36.5734 44 36.1944 44 35.7836V21.3486ZM12 21.3486V35.7836C12 36.1944 12.2429 36.5734 12.6334 36.7742L26.7692 44V28.8991L12 21.3486ZM20.8386 36.4375L23.3001 37.6969C23.8942 38.0004 24.6441 37.8026 24.9739 37.256C25.3038 36.7093 25.0888 36.0207 24.4948 35.7157L22.0332 34.4578C21.4392 34.1542 20.6892 34.352 20.3594 34.8987C20.0295 35.4438 20.2445 36.134 20.8386 36.4375Z" fill="#D9DBDC"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.231 19.387L18.1639 16.8651L32.9331 24.4156L28.0002 26.9375L13.231 19.387ZM20.6976 15.5695L35.4669 23.1199L42.7694 19.387L28.5975 12.1416C28.2267 11.9528 27.7737 11.9528 27.4029 12.1416L20.6976 15.5695Z" fill="#B5B7BA"/>
    </svg>
    <div>
      <p class="font-semibold text-xl leading-[32px] mb-[4px] text-darkBlue">Product type</p>
      <p class="text-sm tracking-[0.2px] leading-[20px] text-textDarkGray">Choose what should be insured</p>
    </div>
  </div>
  <div class="content box-content product-list w-full h-full flex flex-wrap items-center justify-between">
    <div
        @click="selectProductType('auto-insurance')"
        v-bind:class="[activeProductType === 'auto-insurance' ? 'active' : '']"
        class="product-list-item border-[1px] border-textGrayLight rounded-[4px] flex flex-col items-center justify-center cursor-pointer"
    >
      <img class="type-icon" src="@/assets/img/product-type-icons/car-insurance.png">
      <img class="accept-icon" src="@/assets/img/icons/accept-green-circle.svg">
      <p class="text-sm leading-[20px] tracking-[0.2px] text-darkBlue">Car insurance</p>
    </div>
    <div
        @click="selectProductType('home-insurance')"
        v-bind:class="[activeProductType === 'home-insurance' ? 'active' : '']"
        class="product-list-item border-[1px] border-textGrayLight rounded-[4px] flex flex-col items-center justify-center cursor-pointer"
    >
      <img class="type-icon w-[68px] mb-[9px]" src="@/assets/img/product-type-icons/home-insurance.png">
      <img class="accept-icon" src="@/assets/img/icons/accept-green-circle.svg">
      <p class="text-sm leading-[20px] tracking-[0.2px] text-darkBlue">Home insurance</p>
    </div>
    <div
        style="pointer-events: none;opacity: 0.60;"
        @click="selectProductType('renters')"
        v-bind:class="[activeProductType === 'renters' ? 'active' : '']"
        class="product-list-item border-[1px] border-textGrayLight rounded-[4px] flex flex-col items-center justify-center cursor-pointer"
    >
      <img class="type-icon" src="@/assets/img/product-type-icons/renters.png">
      <img class="accept-icon" src="@/assets/img/icons/accept-green-circle.svg">
      <p class="text-sm leading-[20px] tracking-[0.2px] text-darkBlue">Renters</p>
    </div>
    <div
        style="pointer-events: none;opacity: 0.60;"
        @click="selectProductType('car&home')"
        v-bind:class="[activeProductType === 'car&home' ? 'active' : '']"
        class="product-list-item border-[1px] border-textGrayLight rounded-[4px] flex flex-col items-center justify-center cursor-pointer"
    >
      <img class="type-icon" src="@/assets/img/product-type-icons/car-and-home.png">
      <img class="accept-icon" src="@/assets/img/icons/accept-green-circle.svg">
      <p class="text-sm leading-[20px] tracking-[0.2px] text-darkBlue">Car & home</p>
    </div>
    <div
        style="pointer-events: none;opacity: 0.60;"
        @click="selectProductType('pet')"
        v-bind:class="[activeProductType === 'pet' ? 'active' : '']"
        class="product-list-item border-[1px] border-textGrayLight rounded-[4px] flex flex-col items-center justify-center cursor-pointer"
    >
      <img class="type-icon" src="@/assets/img/product-type-icons/pet.png">
      <img class="accept-icon" src="@/assets/img/icons/accept-green-circle.svg">
      <p class="text-sm leading-[20px] tracking-[0.2px] text-darkBlue">Pet</p>
    </div>
    <div
        style="pointer-events: none;opacity: 0.60;"
        @click="selectProductType('life')"
        v-bind:class="[activeProductType === 'life' ? 'active' : '']"
        class="product-list-item border-[1px] border-textGrayLight rounded-[4px] flex flex-col items-center justify-center cursor-pointer"
    >
      <img class="type-icon" src="@/assets/img/product-type-icons/life.png">
      <img class="accept-icon" src="@/assets/img/icons/accept-green-circle.svg">
      <p class="text-sm leading-[20px] tracking-[0.2px] text-darkBlue">Life</p>
    </div>
    <div
        style="pointer-events: none;opacity: 0.60;"
        @click="selectProductType('small-business')"
        v-bind:class="[activeProductType === 'small-business' ? 'active' : '']"
        class="product-list-item border-[1px] border-textGrayLight rounded-[4px] flex flex-col items-center justify-center cursor-pointer"
    >
      <img class="type-icon" src="@/assets/img/product-type-icons/small-business.png">
      <img class="accept-icon" src="@/assets/img/icons/accept-green-circle.svg">
      <p class="text-sm leading-[20px] tracking-[0.2px] text-darkBlue">Small business</p>
    </div>
    <div
        style="pointer-events: none;opacity: 0.60;"
        @click="selectProductType('commercial-auto')"
        v-bind:class="[activeProductType === 'commercial-auto' ? 'active' : '']"
        class="product-list-item border-[1px] border-textGrayLight rounded-[4px] flex flex-col items-center justify-center cursor-pointer"
    >
      <img class="type-icon" src="@/assets/img/product-type-icons/commercial-auto.png">
      <img class="accept-icon" src="@/assets/img/icons/accept-green-circle.svg">
      <p class="text-sm leading-[20px] tracking-[0.2px] text-darkBlue">Commercial auto</p>
    </div>
  </div>
</template>

<style scoped lang="sass">
  .product-list
    @media (max-width: 755px)
      justify-content: center
    @media (max-width: 729px)
      margin-bottom: 30px
    &-item
      width: 150px
      min-width: 150px
      height: 132px
      min-height: 132px
      margin-bottom: 22px
      margin-right: 22px
      transition-duration: 0.3s
      @media (min-width: 756px)
        &:nth-child(4n)
          margin-right: 0px
      @media (max-width: 755px)
        margin: 0px 5px 10px 5px
      @media (max-width: 569px)
        min-width: calc(50% - 10px)
        width: fit-content
      &:hover
        box-shadow: 0px 8px 15px -6px rgba(30, 24, 46, 0.12)
      &.active
        border: 2px solid #0C2778
        background-color: #F1F4FD
        .accept-icon
          display: block
        .type-icon
          display: none
        p
          font-weight: 500
      .accept-icon
        display: none
        margin-bottom: 16px
</style>

<script>
export default ({
  emits: ["productTypeSelect"],
  props: {
    activeProductType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    selectProductType(productType) {
      this.$emit('productTypeSelect', productType);
    },
  },
});
</script>
