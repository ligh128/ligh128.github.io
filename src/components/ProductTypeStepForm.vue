<script setup>
import FormProgressBar from '@/components/FormProgressBar.vue';
</script>

<style scoped>
  .client-information {
    background-image: url(../assets/img/gray-block-corner-icon.png);
    background-position: top right;
    background-repeat: no-repeat;
  }

  .product-list-item {
    width: 150px;
    min-width: 150px;
    height: 150px;
    min-height: 150px;
    margin-bottom: 22px;
    margin-right: 22px;
  }

  .product-list-item:nth-child(4n) {
    margin-right: 0px;
  }
</style>

<template>
  <div class="w-[718px]">
    <FormProgressBar step="2" class="mb-[24px]"/>
    <div class="client-information font-Work-Sans shadow-boxList bg-[#fff] rounded-[8px] border-[1px] border-textGrayLight min-h-[528px] p-[24px] pb-0 flex flex-col justify-between">
      <div class="flex mb-[40px]">
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
      <div class="product-list w-full h-full flex flex-wrap items-center justify-between">
        <div class="product-list-item border-[1px] border-textGrayLight rounded-[4px] flex flex-col items-center justify-center cursor-pointer">
          <img src="../assets/img/product-type-icons/car-insurance.png">
          <p class="text-sm leading-[20px] tracking-[0.2px] text-darkBlue">Car insurance</p>
        </div>
        <div class="product-list-item border-[1px] border-textGrayLight rounded-[4px] flex flex-col items-center justify-center cursor-pointer">
          <img src="../assets/img/product-type-icons/renters.png">
          <p class="text-sm leading-[20px] tracking-[0.2px] text-darkBlue">Renters</p>
        </div>
        <div class="product-list-item border-[1px] border-textGrayLight rounded-[4px] flex flex-col items-center justify-center cursor-pointer">
          <img class="w-[68px] mb-[9px]" src="../assets/img/product-type-icons/home-insurance.png">
          <p class="text-sm leading-[20px] tracking-[0.2px] text-darkBlue">Home insurance</p>
        </div>
        <div class="product-list-item border-[1px] border-textGrayLight rounded-[4px] flex flex-col items-center justify-center cursor-pointer">
          <img src="../assets/img/product-type-icons/car-and-home.png">
          <p class="text-sm leading-[20px] tracking-[0.2px] text-darkBlue">Car & home</p>
        </div>
        <div class="product-list-item border-[1px] border-textGrayLight rounded-[4px] flex flex-col items-center justify-center cursor-pointer">
          <img src="../assets/img/product-type-icons/pet.png">
          <p class="text-sm leading-[20px] tracking-[0.2px] text-darkBlue">Pet</p>
        </div>
        <div class="product-list-item border-[1px] border-textGrayLight rounded-[4px] flex flex-col items-center justify-center cursor-pointer">
          <img src="../assets/img/product-type-icons/life.png">
          <p class="text-sm leading-[20px] tracking-[0.2px] text-darkBlue">Life</p>
        </div>
        <div class="product-list-item border-[1px] border-textGrayLight rounded-[4px] flex flex-col items-center justify-center cursor-pointer">
          <img src="../assets/img/product-type-icons/small-business.png">
          <p class="text-sm leading-[20px] tracking-[0.2px] text-darkBlue">Small business</p>
        </div>
        <div class="product-list-item border-[1px] border-textGrayLight rounded-[4px] flex flex-col items-center justify-center cursor-pointer">
          <img src="../assets/img/product-type-icons/commercial-auto.png">
          <p class="text-sm leading-[20px] tracking-[0.2px] text-darkBlue">Commercial auto</p>
        </div>
      </div>
      <div class="flex items-center justify-between bg-white mx-[-24px] px-[24px] py-[16px] border-t-[1px] border-textGrayLight">
        <div>
          <p class="flex items-center">
            <span class="mr-[5px] min-w-[4px] w-[4px] h-[4px] min-h-[4px] bg-blue rounded-[4px] block"></span>
            <span class="font-medium text-xs tracking-[0.2px] text-blue">Step 2/4</span>
          </p>
          <div class="step-indicator min-w-[240px] min-h-[4px] bg-[#D9DBDC] mt-[8px] rounded-[8px] relative z-[0]">
            <span class="z-[1] absolute top-0 left-0 border-r-[4px] border-white bg-blue min-h-[4px] min-w-[50%]"></span>
          </div>
        </div>
        <div class="flex items-center">
          <a href="/clientInfo" class="white-btn-type mr-[16px]">
            Back
          </a>
          <a href="#" class="blue-btn-type w-[180px]">
            Proceed
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
