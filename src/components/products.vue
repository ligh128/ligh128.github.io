
<template>
  <div class="my-14 px-4">
    <div class="main-containar">
      <h2 class="text-title md:text-[35px] text-2xl font-merriweather font-[900] text-center mb-8">Select products to bundle & save.</h2>
      <div class="flex flex-wrap justify-center">
        <div class="w-[48%]  md:w-[31%] xl:w-[24%] m-[1%] md:m-[0.5%] rounded-[5px] shadow-drop hover:shadow">
            <div class="pt-[15%]">
              <div class="max-w-[190px] m-auto">
                <Vue3Lottie :animationData="Car" :playOnHover='true' :height="200" :width="200" />
              </div>
              <p class="mb-[2px] font-merriweather md:text-[25px] text-base text-[#525355] text-center font-bold">Car Insurance</p>
              <p class="mb-[15px] font-merriweather md:text-[16px] text-[12px] text-[#999A9B] text-center font-bold">As low as $30/MO</p>
              <div class="text-center md:pb-2 pb-4">
                <a href="/form/car" class="btn-shadow inline-block font-merriweather sm:text-sm text-[12px] px-[22.5px] py-[7.5px] bg-Orenge rounded text-white drop-shadow-[-1px_7px_10px_0px_rgb(209,2,2,50)] hover:bg-[#C00202] transition-all duration-500 hover:scale-90">GET A QUOTE
                </a>
              </div>
            </div>
        </div>
        <div class="w-[48%]  md:w-[31%] xl:w-[24%] m-[1%] md:m-[0.5%] rounded-[5px] shadow-drop hover:shadow hidden">
            <div class="pt-[15%]">
              <div class="max-w-[190px] m-auto">
                <Vue3Lottie :animationData="bulding" :playOnHover='true' :height="200" :width="200" />
              </div>
              <p class="mb-[2] font-merriweather md:text-[25px] text-base text-[#525355] text-center font-bold">Renters Insurance</p>
              <p class="mb-[15px] font-merriweather md:text-[16px] text-[12px] text-[#999A9B] text-center font-bold">As low as $30/MO</p>
              <div class="text-center md:pb-2 pb-4">
                <a href="/form" class="btn-shadow inline-block font-merriweather sm:text-sm text-[12px] px-[22.5px] py-[7.5px] bg-Orenge rounded text-white drop-shadow-[-1px_7px_10px_0px_rgb(209,2,2,50)] hover:bg-[#C00202] transition-all duration-500 hover:scale-90">GET A QUOTE
                </a>
              </div>
            </div>
        </div>
        <div class="w-[48%]  md:w-[31%] xl:w-[24%] m-[1%] md:m-[0.5%] rounded-[5px] shadow-drop hover:shadow">
            <div class="pt-[15%]">
              <div class="max-w-[190px] m-auto">
                <Vue3Lottie :animationData="house" :playOnHover='true' :height="200" :width="200" />
              </div>
              <p class="mb-[2px] font-merriweather md:text-[25px] text-base text-[#525355] text-center font-bold">Home Insurance</p>
              <p class="mb-[15px] font-merriweather md:text-[16px] text-[12px] text-[#999A9B] text-center font-bold">As low as $30/MO</p>
              <div class="text-center md:pb-2 pb-4">
                <a href="/form/home" class="btn-shadow inline-block font-merriweather sm:text-sm text-[12px] px-[22.5px] py-[7.5px] bg-Orenge rounded text-white drop-shadow-[-1px_7px_10px_0px_rgb(209,2,2,50)] hover:bg-[#C00202] transition-all duration-500 hover:scale-90">GET A QUOTE
                </a>
              </div>
            </div>
        </div>
        <div class="w-[48%]  md:w-[31%] xl:w-[24%] m-[1%] md:m-[0.5%] rounded-[5px] shadow-drop hover:shadow">
            <div class="pt-[18%]">
              <div class="md:max-w-[120px] max-w-[108px] mx-auto sm:pb-[30px] pb-[39px]">
                <img class="" src="../assets/img/Medicaretile.png">
              </div>
              <p class="mb-[2px] font-merriweather md:text-[25px] text-base text-[#525355] text-center font-bold">Medicare</p>
              <p class="mb-[15px] font-merriweather md:text-[16px] text-[12px] text-[#999A9B] text-center font-bold">As low as $30/MO</p>
              <div class="text-center md:pb-2 pb-4">
                <a href="https://medicare.insuranceexpress.com" class="btn-shadow inline-block font-merriweather sm:text-sm text-[12px] px-[22.5px] py-[7.5px] bg-Orenge rounded text-white drop-shadow-[-1px_7px_10px_0px_rgb(209,2,2,50)] hover:bg-[#C00202] transition-all duration-500 hover:scale-90">GET A QUOTE
                </a>
              </div>
            </div>
        </div>
        <div class="w-[48%]  md:w-[31%] xl:w-[24%] m-[1%] md:m-[0.5%] rounded-[5px] shadow-drop hover:shadow">
            <div class="pt-[15%]">
              <div class="max-w-[190px] m-auto">
                <Vue3Lottie :animationData="dogtwo" :playOnHover='true' :height="200" :width="200" />
              </div>
              <p class="mb-[2px] font-merriweather md:text-[25px] text-base text-[#525355] text-center font-bold">Pet Insurance</p>
              <p class="mb-[15px] font-merriweather md:text-[16px] text-[12px] text-[#999A9B] text-center font-bold">As low as $30/MO</p>
              <div class="text-center md:pb-2 pb-4">
                <a href="/form/pet" class="btn-shadow inline-block font-merriweather sm:text-sm text-[12px] px-[22.5px] py-[7.5px] bg-Orenge rounded text-white drop-shadow-[-1px_7px_10px_0px_rgb(209,2,2,50)] hover:bg-[#C00202] transition-all duration-500 hover:scale-90">GET A QUOTE
                </a>
              </div>
            </div>
        </div>
        <div class="w-[48%]  md:w-[31%] xl:w-[24%] m-[1%] md:m-[0.5%] rounded-[5px] shadow-drop hover:shadow">
            <div class="pt-[15%]">
              <div class="max-w-[190px] m-auto">
                <Vue3Lottie :animationData="heart" :playOnHover='true' :height="200" :width="200" />
              </div>
              <p class="mb-[2px] font-merriweather md:text-[25px] text-base text-[#525355] text-center font-bold">Life Insurance</p>
              <p class="mb-[15px] font-merriweather md:text-[16px] text-[12px] text-[#999A9B] text-center font-bold">As low as $30/MO</p>
              <div class="text-center md:pb-2 pb-4">
                <a href="/form/life" class="btn-shadow inline-block font-merriweather sm:text-sm text-[12px] px-[22.5px] py-[7.5px] bg-Orenge rounded text-white drop-shadow-[-1px_7px_10px_0px_rgb(209,2,2,50)] hover:bg-[#C00202] transition-all duration-500 hover:scale-90">GET A QUOTE
                </a>
              </div>
            </div>
        </div>
        <div class="w-[48%]  md:w-[31%] xl:w-[24%] m-[1%] md:m-[0.5%] rounded-[5px] shadow-drop hover:shadow hidden">
            <div class="pt-[15%]">
              <div class="max-w-[190px] m-auto">
                <Vue3Lottie :animationData="hearttwo" :playOnHover='true' :height="200" :width="200" />
              </div>
              <p class="mb-[2px] font-merriweather md:text-[25px] text-base text-[#525355] text-center font-bold">Small Business</p>
              <p class="mb-[15px] font-merriweather md:text-[16px] text-[12px] text-[#999A9B] text-center font-bold">As low as $30/MO</p>
              <div class="text-center md:pb-2 pb-4">
                <a href="/form" class="btn-shadow inline-block font-merriweather sm:text-sm text-[12px] px-[22.5px] py-[7.5px] bg-Orenge rounded text-white drop-shadow-[-1px_7px_10px_0px_rgb(209,2,2,50)] hover:bg-[#C00202] transition-all duration-500 hover:scale-90">GET A QUOTE
                </a>
              </div>
            </div>
        </div>
        <div class="w-[48%]  md:w-[31%] xl:w-[24%] m-[1%] md:m-[0.5%] rounded-[5px] shadow-drop hover:shadow">
            <div class="pt-[15%]">
              <div class="max-w-[190px] m-auto">
                <Vue3Lottie :animationData="truck" :playOnHover='true' :height="200" :width="200" />
              </div>
              <p class="mb-[2px] font-merriweather md:text-[25px] text-base text-[#525355] text-center font-bold">Commercial Auto</p>
              <p class="mb-[15px] font-merriweather md:text-[16px] text-[12px] text-[#999A9B] text-center font-bold">As low as $30/MO</p>
              <div class="text-center md:pb-2 pb-4">
                <a href="/commercialquote" class="btn-shadow inline-block font-merriweather sm:text-sm text-[12px] px-[22.5px] py-[7.5px] bg-Orenge rounded text-white drop-shadow-[-1px_7px_10px_0px_rgb(209,2,2,50)] hover:bg-[#C00202] transition-all duration-500 hover:scale-90">GET A QUOTE
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
import Car from '../assets/img/1_car__.json';
import bulding from '../assets/img/2_bulding.json';
import house from '../assets/img/3_house.json';
import Carfor from '../assets/img/4_car.json';
import dogtwo from '../assets/img/5_dog.json';
import heart from '../assets/img/6_heart.json';
import hearttwo from '../assets/img/7_heart.json';
import truck from '../assets/img/8_truck.json';
export default ({
  components: {
    Vue3Lottie,
  },
   data() {
    return {
      Car,
      bulding,
      house,
      Carfor,
      dogtwo,
      heart,
      hearttwo,
      truck
    }
  },
});
</script>