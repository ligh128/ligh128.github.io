<template>
    <Header />
    <section class="px-14">
      <div v-if="!submitted" class="grid w-[680px] my-8 mx-auto gap-4">
        <div class="w-full grid justify-items-center">
          <div class="grid text-center mx-auto w-fit">
            <h2 class="text-[#525355] lg:text-[52px] marker:font-black font-[800] font-merriweather mt-6 sm:text-3xl text-2xl md:text-5xl">Health Insurance Quote</h2>
            <hr class="my-4 h-px bg-gray-200 border-[1.25px] dark:bg-gray-700">
          </div>
        </div>
  
        <form class="grid gap-4">
          <h4 class="md:text-xl text-lg lg:text-2xl text-[#525355] font-bold font-roboto">Contact Information</h4>
  
          <!--Name-->
          <div class="grid grid-cols-2 gap-[80px]">
              <div class="grid col">
                  <input v-model="formData.firstName" required type="text" name="firstName" id="firstName" placeholder="First Name *" class="h-[50px] w-[300px] rounded-md border-[3px] border-gry p-2">
              </div>
  
              <div class="grid col">
                  <input v-model="formData.lastName" required type="text" name="lastName" id="lastName" placeholder="Last Name *" class="h-[50px] w-[300px] rounded-md border-[3px] border-gry p-2">
              </div>
          </div>
  
          <!--Phone and Email-->
          <div class="grid grid-cols-2 gap-[80px]">
              <div class="grid col">
                  <input v-model="formData.phone" required type="text" name="phone" id="phone" placeholder="Phone *" class="h-[50px] w-[300px] rounded-md border-[3px] border-gry p-2">
              </div>
  
              <div class="grid col">
                  <input v-model="formData.email" required type="text" name="email" id="email" placeholder="Email *" class="h-[50px] w-[300px] rounded-md border-[3px] border-gry p-2">
              </div>
          </div>
 
          <!--Comment-->
          <textarea v-model="formData.comment" name="comment" id="comment" placeholder="Comments" cols="30" rows="5" class="rounded-md border-[3px] border-gry p-2"></textarea>
  
          <div class="flex h-fit w-fit mx-auto gap-4">
            <input v-model="disclaimer" required type="checkbox" class="">
            <p class="text-sm text-light-gry w-[500px] text-center">By clicking "Submit" you agree to receive quote offers  from Insurance Express and receive updates about Insurance Express. Message frequency may vary. Message and data rates may apply. Reply HELP for help or STOP to cancel. Insurance Express  Term Of Use and Privacy Policy.</p>
          </div>
  
          <button v-on:click="submit()" class="font-bold uppercase border-gry border-2 py-2 px-6 w-fit mx-auto rounded hover:bg-gry hover:text-white">Submit</button>
        </form>
      </div>
  
      <div v-else class="mt-12 z-10">
        <div class="grid w-fit h-fit mx-auto gap-8 justify-items-center">
          <h4 class="text-3xl text-gry font-bold font-roboto text-center">Quote Submitted!</h4>
          
          <img src="../assets/img/Check.svg" alt="Check" class="w-24">
          
          <p class="text-gry text-sm w-[300px] font-medium text-center">Average quote turn around time is 1-hour. We will assign an agent to your quote request and will send updates through the process. </p>
          
          <div class="grid justify-items-center">
            <h4 class="text-2xl text-gry font-roboto text-center">Call Us!</h4>
            <p class="font-bold text-gry text-sm text-center">We're standing by to assist you.</p>
          </div>
          
          <div class="flex w-fit h-fit gap-2 items-center">
            <img src="../assets/img/CallBtn.svg" alt="Call">
            <p class="text-2xl">(888) 871-2237</p>
          </div> 
        </div>
      </div>
    </section>
    <div class="flex items-baseline md:pt-36 xl:pt-0 justify-between mt-[-400px] z-0">
      <div class="traficAnimation w-full md:w-[35%] ">
          <Vue3Lottie :animationData="TraficAnimation" :height="200" :width="200" />
      </div>
      <div class="w-[10%]"></div>
      <div class="hidden sm:block w-[35%] pl-[150px]">
          <Vue3Lottie :animationData="Traffic" :height="200" :width="200" />
      </div>
    </div>
    <Footertest />
  </template>
        
  <script>
  import Header from '@/components/Header.vue';
  import Footertest from '../components/Footertest.vue';
  import { Vue3Lottie } from 'vue3-lottie';
  import TraficAnimation from '../assets/img/Chandler_01_2807.json';
  import Traffic from '../assets/img/Chandler_02_2807.json';
  import emailjs from 'emailjs-com';
  
  export default {
    data() {
      return {
        TraficAnimation,
        Traffic,
        emailjsPublicKey: 'h29zXRTKkaswfKPkp',
        emailjsServiceID: 'service_p7in1zl',
        emailjsTemplateID: 'template_etc6ig1',
        submitted: false,
        disclaimer: false,
        formData: {
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          comment: ''
        }
      }
    },
    methods: {
      submit() {
        if (
          this.formData.firstName === '',
          this.formData.lastName === '',
          this.formData.phone === '',
          this.formData.email === ''
  
        ){
          alert("Please complete all required fields.")
        } else if (this.disclaimer === false) {alert("Please accept the below disclaimer.")}
        else { 
          this.submitted = true
          console.log(this.formData)
          emailjs.init(this.emailjsPublicKey)
          emailjs.send(this.emailjsServiceID, this.emailjsTemplateID, {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            phone: this.formData.phone,
            email: this.formData.email,
          })
        }
      }
    },
    components: {
      Vue3Lottie,
      Header,
      Footertest
    }
  }
  </script>
  