<template>
  <Header />
  <section class="px-14 z-10 mb-20">
    <div v-if="!submitted" class=" 3xl:w-1/3 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 my-8 mx-auto gap-4">
      <div class="w-full flex justify-items-center">
        <div class="text-center mx-auto w-fit">
          <h2 class="text-[#525355] lg:text-3xl marker:font-black font-[800] 
          font-merriweather mt-6 text-2xl xs:text-xl md:text-2xl">Commercial Auto Insurance Quote</h2>
          <hr class="my-4 h-px bg-gray-200 border-[1.25px] dark:bg-gray-700">
        </div>
      </div>

      <!--Form-->
      <form @submit.prevent="submit" class="w-full grid gap-6 mt-2">
        <div class="w-full grid lg:grid-cols-2 gap-4">
          <textInput @inputUpdate="inputChange" :inputValue="form.first_name" :id="'first_name'" :label="'First Name'" :placeholderText="'John'" />
          <textInput @inputUpdate="inputChange" :inputValue="form.last_name" :id="'last_name'" :label="'Last Name'" :placeholderText="'Doe'" />
        </div>

        <div class="w-full grid lg:grid-cols-2 gap-4">
          <textInput @inputUpdate="inputChange" :inputValue="form.email" :id="'email'" :label="'Email'" :placeholderText="'john@doe.com'" :email="true" />
          <textInput @inputUpdate="inputChange" :inputValue="form.phone" :id="'phone'" :label="'Phone'" :placeholderText="'(555) 555-5555'" :mask=true :maskText="'(###) ###-####'" />
        </div>

        <div class="w-full grid lg:grid-cols-2 gap-4">
          <textInput @inputUpdate="inputChange" :inputValue="form.address_1" :id="'address_1'" :label="'Address 1'" :placeholderText="'000 Street Road'" />
          <textInput @inputUpdate="inputChange" :inputValue="form.address_2" :id="'address_2'" :label="'Address 2'" :placeholderText="'Suite 000'" :required=false />
        </div>

        <div class="w-full grid lg:grid-cols-3 gap-4">
          <textInput @inputUpdate="inputChange" :inputValue="form.city" :id="'city'" :label="'City'" :placeholderText="'City'" />
          <textInput @inputUpdate="inputChange" :inputValue="form.state" :id="'state'" :label="'State'" :placeholderText="'State'" />
          <textInput @inputUpdate="inputChange" :inputValue="form.zip" :id="'zip'" :label="'Zip'" :placeholderText="'Zip'" :mask=true :maskText="'#####'" />
        </div>

        <input type="submit" class="w-full mx-auto text-white bg-custom-blue rounded-lg mt-2 py-2 px-6 hover:cursor-pointer">
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
  <!-- <div class="flex items-baseline md:pt-36 xl:pt-0 justify-between mt-[-400px] z-0">
    <div class="hidden md:block w-full md:w-[35%] ">
        <Vue3Lottie :animationData="TraficAnimation" :height="200" :width="200" />
    </div>
    <div class="w-[10%]"></div>
    <div class="hidden md:block w-[35%] pl-[150px]">
        <Vue3Lottie :animationData="Traffic" :height="200" :width="200" />
    </div>
  </div> -->

<Footertest class="block bottom-0 abolute" />
</template>
      
<script>
import Header from '@/components/Header.vue';
import Footertest from '../components/Footertest.vue';
import { Vue3Lottie } from 'vue3-lottie';
import TraficAnimation from '../assets/img/Chandler_01_2807.json';
import Traffic from '../assets/img/Chandler_02_2807.json';
import emailjs from 'emailjs-com';
import textInput from '../components/textInput.vue'

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
      form: {
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          address_1: '',
          address_2: '',
          city: '',
          state: '',
          zip: ''
      },
      errors: [
        {
          name: 'first_name',
          errors: []
        },
        {
          name: 'last_name',
          errors: []
        },
        {
          name: 'email',
          errors: []
        },
        {
          name: 'phone',
          errors: []
        },
        {
          name: 'address_1',
          errors: []
        },
        {
          name: 'address_2',
          errors: []
        },
        {
          name: 'city',
          errors: []
        },
        {
          name: 'state',
          errors: []
        },
        {
          name: 'zip',
          errors: []
        }
      ]
    }
  },
  methods: {
    inputChange(id, value, errors){
      this.form[id] = value
      
      if(errors){
        this.errors.forEach(error => {
          if(error.name == id){
            error.errors = errors
          }
        })                    
      } else {
          this.errors.forEach(error => {
            if(error.name == id){
              error.errors = []
            }
          })
      }
    },
    submit() {
      let valid = true

      this.errors.forEach(item => {
        if(item.errors.length > 0){
          valid = false
          item.errors.forEach(error => {
            this.$alert({
              title: 'Validation Error',
              text: error,
              type: 'warn'
            })
          })
        }
      })

      const keys = Object.keys(this.form)

      keys.forEach(key => {
        if(this.form[key] == ''){
          valid = false
          this.$alert({
            title: 'Validation Error',
            text: key.replace('_', ' ')+' is a required filed',
            type: 'error'
          })
        }

        if(key == 'phone' && this.form[key].length < 14){
          valid = false
          this.$alert({
            title: 'Validation Error',
            text: 'please enter a 10 digit phone number',
            type: 'error'
          })
        }
      })

      if(valid){
        emailjs.init(this.emailjsPublicKey)
        emailjs.send(this.emailjsServiceID, this.emailjsTemplateID, {
          first_name: this.form.first_name,
          last_name: this.form.last_name,
          phone: this.form.phone,
          email: this.form.email,
          address_1: this.form.address_1,
          address_2: this.form.address_2,
          city: this.form.city,
          state: this.form.state,
          zip: this.form.zip
        })

        this.submitted = true
      }

      
      
    }
  },
  components: {
    Vue3Lottie,
    Header,
    Footertest,
    textInput
  }
}
</script>
