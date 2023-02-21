<template>
  <div class="header flex justify-between items-center w-full lg:p-[10px] py-[10px] px-4 relative z-50">
      <ul v-bind:class="[isActive ? 'left-0' : 'left-[-100%]']" class="lg:flex font-merriweather text-[15px] lg:left-0 lg:ml-0 top-0 lg:top-0 lg:relative fixed lg:w-auto w-full lg:h-auto h-screen z-50 bg-[#f7f7f7] lg:bg-transparent transition-all duration-500 z-50
      ">
            <li class="lg:hidden block px-5 h-24">
                <div class="flex justify-between lg:items-end items-center">
                    <a href="/"><img src="../assets/img/insurance_express-main-logo.svg" class="sm:w-[300px] w-[250px] lg:hidden block -ml-[10px]" /></a> 
                    <div class="p-2 rounded" @click="toggleClass()">
                        <svg width="20px" height="20px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><path d="M37.304 11.282l1.414 1.414-26.022 26.02-1.414-1.413z"/><path d="M12.696 11.282l26.022 26.02-1.414 1.415-26.022-26.02z"/>
                        </svg>
                    </div>
                </div>
            </li>
            <li class="">
              <a href="/" class="lg:px-5 px-4 lg:py-0 py-3 leading-5 inline-block">
              Home
              </a>
            </li>
            <li class="relative">
              <a @click="toggleMenuClass()" v-bind:class="[isActivemenu ? 'menu-hover' : '']" href="#0" class="flex lg:justify-start justify-between lg:px-5 px-4 lg:py-0 py-3 leading-5 md:hover:text-Orenge ease-in-out duration-300">
                Products/Services
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="lg:w-5 w-12 px-4 inline-block ml-1 lg:p-0 lg:border-0 rounded-[16px]">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5303 9.46967C18.8232 9.76256 18.8232 10.2374 18.5303 10.5303L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967C5.76256 9.17678 6.23744 9.17678 6.53033 9.46967L12 14.9393L17.4697 9.46967C17.7626 9.17678 18.2374 9.17678 18.5303 9.46967Z" fill="#101010" />
                </svg>
              </a>
                <ul v-bind:class="[isActivemenu ? 'menu-open' : '']" class="sub-menu hidden md:block origin-top-right md:absolute left-0 mt-2 lg:w-[218px] w-full bg-white font-meriweather lg:shadow-[0_10px_30px_0_rgb(45,45,45,0.3)] opacity-0 invisible lg:top-4 ease-in-out duration-300 z-20" >
                    <li>
                        <router-link to="/homeinsurance" class="hover:no-underline block p-[15px] text-sm hover:bg-Orenge hover:text-white ease-in-out duration-300">Home Insurance</router-link>
                    </li>
                    <li>
                        <router-link to="/autoinsurance" class=" hover:no-underline block p-[15px] text-sm hover:bg-Orenge hover:text-white ease-in-out duration-300">Auto Insurance</router-link>
                    </li>
                    <li>
                        <router-link to="/floodinsurance" class=" hover:no-underline block p-[15px] text-sm hover:bg-Orenge hover:text-white ease-in-out duration-300">Flood Insurance</router-link>
                    </li>
                    <li>
                        <router-link to="/lifeinsurance" class=" hover:no-underline block p-[15px] text-sm hover:bg-Orenge hover:text-white ease-in-out duration-300">Life Insurance</router-link>
                    </li>
                    <li>
                        <router-link to="/medicare" class=" hover:no-underline block p-[15px] text-sm hover:bg-Orenge hover:text-white ease-in-out duration-300">Medicare</router-link>
                    </li>
                    <li>
                        <router-link to="/commercialinsurance" class=" hover:no-underline block p-[15px] text-sm hover:bg-Orenge hover:text-white ease-in-out duration-300">Commercial Insurance</router-link>
                    </li>
                    <li>
                        <router-link to="/recreationalinsurance" class=" hover:no-underline block p-[15px] text-sm hover:bg-Orenge hover:text-white ease-in-out duration-300">Recreational Insurance</router-link>
                    </li>
                    <li>
                        <router-link to="/umbrellainsurance" class=" hover:no-underline block p-[15px] text-sm hover:bg-Orenge hover:text-white ease-in-out duration-300">Umbrella Insurance</router-link>
                    </li>
                </ul>
            </li>
            <li class="relative">
                <a @click="toggleMenuTwoClass()" href="/aboutus" v-bind:class="[isActivemenuTwo ? 'menu-hover' : '']" class="flex lg:justify-start justify-between lg:px-5 px-4 lg:py-0 py-3 leading-5 md:hover:text-Orenge ease-in-out duration-300">
                Member Companies
                <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  class="lg:w-5 w-12 px-4 inline-block ml-1 lg:p-0 lg:border-0  rounded-[16px]" >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5303 9.46967C18.8232 9.76256 18.8232 10.2374 18.5303 10.5303L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967C5.76256 9.17678 6.23744 9.17678 6.53033 9.46967L12 14.9393L17.4697 9.46967C17.7626 9.17678 18.2374 9.17678 18.5303 9.46967Z" fill="#101010"/>
                </svg>
                </a>
                <ul v-bind:class="[isActivemenuTwo ? 'menu-open' : '']" class="sub-menu origin-top-right hidden md:block md:absolute left-0 mt-2 lg:w-[218px] w-full bg-white font-roboto lg:shadow-[0_10px_30px_0_rgb(45,45,45,0.3)] opacity-0 invisible lg:top-4 ease-in-out duration-300 z-20">
                    <li>
                        <a href="https://quoteslash.com/" class=" hover:no-underline block p-[15px] text-sm hover:bg-Orenge hover:text-white ease-in-out duration-300">Quote Slash</a>
                    </li>
                    <li>
                        <a href="https://rocketflood.com/" class=" hover:no-underline block p-[15px] text-sm hover:bg-Orenge hover:text-white ease-in-out duration-300">Rocket Flood</a>
                    </li>
                    <li>
                        <a href="http://www.theleadexchange.com/" class=" hover:no-underline block p-[15px] text-sm hover:bg-Orenge hover:text-white ease-in-out duration-300">The Lead Exchange</a>
                    </li>
                    <li>
                    <a href="https://protegovip.com/" class=" hover:no-underline block p-[15px] text-sm hover:bg-Orenge hover:text-white ease-in-out duration-300">Protego VIP</a>
                    </li>
                    <li>
                        <a href="http://www.str8linegroup.com/" class=" hover:no-underline block p-[15px] text-sm hover:bg-Orenge hover:text-white ease-in-out duration-300">Str8line Group</a>
                    </li>
                    <li>
                        <a href="https://nubuildinsurance.com/" class=" hover:no-underline block p-[15px] text-sm hover:bg-Orenge hover:text-white ease-in-out duration-300">NuBuild</a>
                    </li>
                </ul>
            </li>
            <li class="">
              <a href="/contactus" class="lg:px-5 px-4 lg:py-0 py-3 leading-5 hover:text-Orenge ease-in-out duration-300 inline-block">
              Contact Us
              </a>
            </li>
      </ul>
        <a href="/"><img src="../assets/img/Insurance_express_logo.png" class="sm:w-[300px] w-[250px] md:hidden block -ml-[10px]" /></a>
      <div class="flex">
        <div class="lg:hidden block">
            <div class="flex items-center" @click="toggleClass()">
                <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <rect x='0.46' y='3.06' width='23.08' height='2.18' />
                    <rect x='7.73' y='8.29' width='15.81' height='2.18' />
                    <rect x='0.46' y='13.53' width='23.08' height='2.18' />
                    <rect x='7.73' y='18.76' width='15.81' height='2.18' />
                </svg>
            </div>
        </div>
        <div class="bg-[#C00202] rounded-3xl ease-in-out duration-500 overflow-hidden lg:block hidden 2xl:mr-0 lg:mr-[10px]">
                <a href="https://insexpress.com/" class="cus-arrow-btn font-roboto  h-10 p-2 w-[220px] flex content-center px-3 justify-center relative border-0 z-20 overflow-hidden after:content-'' after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[#DB0909] after:ease-in-out after:duration-500 after:transform after:z-[-1] after:rounded-3xl">
            <span class="relative font-bold text-white">Customer Service</span>
            <div class="icon-container relative w-[25px] h-[25px] ml-4 ease-in-out duration-500 transform">
                <div class="icon icon--left translate-x-[-200%] absolute ease-in-out duration-500 transform z-20 opacity-0">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" id="magicoon-Regular" xmlns="http://www.w3.org/2000/svg">
                    <defs></defs><title>arrow-right</title><g id="arrow-right-Regular"><path id="arrow-right-Regular-2" data-name="arrow-right-Regular" class="cls-1" d="M21.53,12.531l-7,7a.75.75,0,0,1-1.06-1.061l5.719-5.72H3a.75.75,0,0,1,0-1.5H19.189L13.47,5.531A.75.75,0,1,1,14.53,4.47l7,7A.75.75,0,0,1,21.53,12.531Z" fill="#ffff"/></g>
                    </svg>
                </div>
                <div class="icon icon--right w-[25px] h-[25px] absolute ease-in-out duration-500 transform z-20">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" id="magicoon-Regular" xmlns="http://www.w3.org/2000/svg"><defs></defs><title>arrow-right</title><g id="arrow-right-Regular"><path id="arrow-right-Regular-2" data-name="arrow-right-Regular" class="cls-1" d="M21.53,12.531l-7,7a.75.75,0,0,1-1.06-1.061l5.719-5.72H3a.75.75,0,0,1,0-1.5H19.189L13.47,5.531A.75.75,0,1,1,14.53,4.47l7,7A.75.75,0,0,1,21.53,12.531Z" fill="#ffff"/></g>
                    </svg>
                </div>
            </div>
        </a>
        <svg style="display: none;">
            <symbol id="arrow-right" viewBox="0 0 20 10">
                <path d="M14.84 0l-1.08 1.06 3.3 3.2H0v1.49h17.05l-3.3 3.2L14.84 10 20 5l-5.16-5z"></path>
            </symbol>
        </svg>		
        </div>
      </div>
  </div>
  <div class="z-10 relative w-[492px] hidden md:block m-auto">
    <a href="/" class="inline-block"><img src="../assets/img/Insurance_express_logo.png" class="block" /></a>
  </div>
</template>

<script>


export default ({
  data: () => ({
     isActive: false,
     isActivemenu: false,
     isActivemenuTwo: false
  }),
  methods: {
    toggleClass: function(){  
      this.isActive = !this.isActive;
    },
    toggleMenuClass: function(){  
      this.isActivemenu = !this.isActivemenu;
    },
    toggleMenuTwoClass: function(){  
      this.isActivemenuTwo = !this.isActivemenuTwo;
    }
  }  
})
</script>


<style scoped>

</style>
