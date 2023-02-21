<script setup>
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
    import Products from '../components/products.vue';
import Footertest from '../components/Footertest.vue';
</script>

<template>
  <div class="text-gray-800 antialiased">
    <main>
      <Header />
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style="min-height: 75vh;"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style='background-image: url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80");'
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="lg:pr-12">
                <h1 class="text-white font-semibold md:text-5xl text-3xl">
                  Growing and Pushing Boundaries
                </h1>
                <p class="mt-4 text-lg text-gray-300">
                  Insurance Express and Member Companies are a group of companies who work together
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px; transform: translateZ(0px);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-[#F2F2F4] fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section class="pb-20 bg-[#F2F2F4] -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-row flex-wrap mx-auto">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-2 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class=""
                  >
                  <img class="mx-auto mb-[20px] w-[1440px]" src="../assets/img/RocketFlood.png" alt="">
                  <div>
                
                  </div>
                  </div>
                  <h6 class="text-xl font-semibold">#1 Flood Insurance Agency in the US</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    We are a super powered insurance agency specializing in personal and commercial flood insurance.
                     Using a combination of technology, insurance expertise and customer service, we help clients secure
                      flood insurance in 49 states across the country.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-4/12 px-2 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div 
                  >
                  <img class="mx-auto mb-[20px] w-[400px]" src="../assets/img/Quoteslash.svg" alt="">
                  
                  </div>
                  <h6 class="text-xl font-semibold">Home Insurance for Mortgage Professionals</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Quote Slash is the only online platform dedicated to providing fast, accurate home insurance quotes 
                    to mortgage and real estate professionals.  Our proprietary software scans all of the markets, quoting
                     every insurance carrier within minutes, returning the lowest home insurance rates available on any home, any age, anywhere instantly!
                  </p>
                </div>
              </div>
            </div>
            <div class="md:pt-6 w-full md:w-4/12 px-2 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-[5px] flex-auto">
                  <div
                  >
                  <img class="mx-auto mb-[0px] h-[110px] w-[300px]" src="../assets/img/Str8line.png" alt="">
                    
                  </div>
                  <h6 class="text-xl font-semibold">Access the Insurance Express Model</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    When a proven insurance alliance in the West met an equally top-selling insurance firm in the East,
                     fireworks went off as we put our minds together to form Str8line Insurance Group, an industry-changing, bold and innovative insurance franchise model.
                  </p>
                </div>
              </div>
            </div>
            <div class="md:pt-6 w-full md:w-4/12 px-2 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-[5px] flex-auto">
                  <div
                  >
                  <img class="mx-auto mb-[0px] h-[110px] w-[300px]" src="../assets/img/Nubuildlogo.svg" alt="">
                    
                  </div>
                  <h6 class="text-xl font-semibold">New Construction Insurance</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    NuBuild Insurance Group is a subsidiary of Insurance Express, the largest writer of homeowner insurance in the USA 
                    and the #1 Insurance Agency in the country for new construction homes. We specialize in working solely with home builders, 
                    new construction developments and new construction homeowners.
                  </p>
                </div>
              </div>
            </div>
            <div class="md:pt-6 w-full md:w-4/12 px-2 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-[5px] flex-auto">
                  <div
                  >
                  <img class="mx-auto mb-[0px] h-[120px] w-[150px]" src="../assets/img/Protego-VIP-1.png" alt="">
                    
                  </div>
                  <h6 class="text-xl font-semibold">High Value Insurance</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Customized protection for the distinguised client. Protego VIP offers a white glove experience and access to high value insurance markets.
                  </p>
                </div>
              </div>
            </div>
            <div class="md:pt-6 w-full md:w-4/12 px-2 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-[5px] flex-auto">
                  <div
                  >
                  <img class="mx-auto mb-[0px] h-[110px] w-[300px]" src="../assets/img/Theleadexchangelogo.jpg" alt="">
                    
                  </div>
                  <h6 class="text-xl font-semibold">Get Access to our Vast Markets</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    By bridging access to every A-rated homeowner's insurance company in Florida, we assist our partner agents to capture and retain more business through our referral program The Lead Exchange.

                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap items-center xl:mt-32 md:mt-16 mt-8">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div
                class="text-gray-600 p-3 text-center inline-flex items-center justify-center lg:w-[100px] w-16 h-16 lg:h-[100px] mb-6 shadow-lg rounded-full bg-gray-100"
              >
              
              </div>
              <h3 class="md:text-3xl text-2xl mb-2 font-semibold leading-normal">
                Working with us is a pleasure
              </h3>
              <p
                class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
              >
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
              </p>
              <p
                class="text-lg font-light leading-relaxed mt-0 mb-8 text-gray-700"
              >
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </p>
              <a
                href="https://github.com/abhinavs/cookie"
                class="font-bold text-gray-500 px-8 py-4 rounded-md bg-gray-50 hover:bg-gray-400 hover:text-gray-50 inline-block md:mb-0 mb-10"
                >Check Cookie!</a>
            </div>
            <div class="w-full md:w-4/12 lg:px-4 mr-auto ml-auto">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg"
              >
                <img
                  alt="..."
                  src="../assets/img/officephoto.jpg"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block"
                    style="height: 95px; top: -94px;"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-[#DA1F26] fill-current"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">
                    Top Notch Services
                  </h4>
                  <p class="text-md font-light mt-2 text-white">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="relative py-20">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px; transform: translateZ(0px);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div class="md:w-1/2 w-full xl:w-4/12 ml-auto mr-auto lg:px-4">
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg"
                src="../assets/img/growingcompany.jpg"
              />
            </div>
            <div class="w-full md:w-[45%] xl:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <div
                  class="text-[#DA1F26] p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-[#DA1F26] md:mt-0 mt-8"
                >
                  <i class="fa-user"></i>
                </div>
                <h3 class="md:text-3xl text-2xl font-semibold">A growing company</h3>
                <p class="mt-4 text-lg leading-relaxed text-gray-600">
                  The extension comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go.
                </p>
                <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#DA1F26] bg-[#DA1F26] mr-3"
                          ><i class="fas fa-fingerprint"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">
                          Carefully crafted components
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#DA1F26] bg-[#DA1F26] mr-3"
                          ><i class="fab fa-html5"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Amazing page examples</h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#DA1F26] bg-[#DA1F26] mr-3"
                          ><i class="far fa-paper-plane"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Dynamic components</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="xl:pt-20 md:mt-10 lg:pb-0 md:mb-12 mb-8">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center xl:mb-24 mb-16">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="md:text-4xl text-3xl font-semibold">Here are our heroes</h2>
              <p class="text-lg leading-relaxed m-4 text-gray-600">
                Our proud staff of over 200 members. We are driven to excellence and have a good mission. And this is filler text so I can see what this looks like.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full sm:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src="../assets/img/partners_raymond.jpg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px;"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Raymond Graceffo</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    CEO/President
                  </p>
                  <div class="mt-6">
                    <button
                      class="bg-[#2B4570] text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-twitter"></i></button
                    ><button
                      class="bg-[#AFAFAF] text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-facebook-f"></i></button
                    ><button
                      class="bg-[#DA1F26] text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-dribbble"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full sm:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src="../assets/img/partners_glenn.jpg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px;"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Glenn Kanarick</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    CFO/Partner
                  </p>
                  <div class="mt-6">
                    <button
                      class="bg-[#DA1F26] text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-google"></i></button
                    ><button
                      class="bg-[#2B4570] text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full sm:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src="../assets/img/partners_garrett.jpg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px;"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Garrett Mitchell</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    CMO/Partner
                  </p>
                  <div class="mt-6">
                    <button
                      class="bg-[#DA1F26] text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-google"></i></button
                    ><button
                      class="bg-[#2B4570] text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-twitter"></i></button
                    ><button
                      class="bg-[#AFAFAF] text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-instagram"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full sm:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src="../assets/img/partners_chandlerjpg.jpg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px;"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Chandler Coven</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Agent
                  </p>
                  <div class="mt-6">
                    <button
                      class="bg-[#AFAFAF] text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-dribbble"></i></button
                    ><button
                      class="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-google"></i></button
                    ><button
                      class="bg-[#2B4570] text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-twitter"></i></button
                    ><button
                      class="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-instagram"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="xl:pt-0 md:mt-0 lg:pb-24 md:mb-0 mb-0">
        <div class="container mx-auto px-0">
          <div class="flex flex-wrap justify-center text-center xl:mb-0 mb-0">
            <div class="w-full lg:w-6/12 px-0">
             </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full sm:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src="../assets/img/melissanorman.jpeg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px;"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Melissa Norman</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Operations Manager
                  </p>
                  <div class="mt-6">
                    <button
                      class="bg-[#2B4570] text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-twitter"></i></button
                    ><button
                      class="bg-[#AFAFAF] text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-facebook-f"></i></button
                    ><button
                      class="bg-[#DA1F26] text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-dribbble"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full sm:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src="../assets/img/toddbeal.jpg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px;"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Todd Beal</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Partner
                  </p>
                  <div class="mt-6">
                    <button
                      class="bg-[#DA1F26] text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-google"></i></button
                    ><button
                      class="bg-[#2B4570] text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full sm:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src="../assets/img/partners_garrett.jpg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px;"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Garrett Mitchell</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    CMO/Partner
                  </p>
                  <div class="mt-6">
                    <button
                      class="bg-[#DA1F26] text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-google"></i></button
                    ><button
                      class="bg-[#2B4570] text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-twitter"></i></button
                    ><button
                      class="bg-[#AFAFAF] text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-instagram"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full sm:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src="../assets/img/partners_chandlerjpg.jpg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px;"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Chandler Coven</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Agent
                  </p>
                  <div class="mt-6">
                    <button
                      class="bg-[#AFAFAF] text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-dribbble"></i></button
                    ><button
                      class="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-google"></i></button
                    ><button
                      class="bg-[#2B4570] text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-twitter"></i></button
                    ><button
                      class="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-instagram"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pb-20 relative block bg-[#2B4570] lg:pt-0 pt-10">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px; transform: translateZ(0px);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-[#2B4570] fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="md:text-4xl text-3xl font-semibold text-white">Build something</h2>
              <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                Put the potentially record low maximum sea ice extent tihs year
                down to low ice. According to the National Oceanic and
                Atmospheric Administration, Ted, Scambos.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap lg:mb-0 mb-10 mt-12 justify-center">
            <div class="w-full md:w-3/12 px-4 text-center md:mb-0 mb-4">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i class="fas fa-medal text-xl"></i>
              </div>
              <h6 class="text-xl mt-5 font-semibold text-white">
                Excelent Services
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div class="w-full md:w-3/12 px-4 text-center md:mb-0 mb-4">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i class="fas fa-poll text-xl"></i>
              </div>
              <h5 class="text-xl mt-5 font-semibold text-white">
                Grow your market
              </h5>
              <p class="mt-2 mb-4 text-gray-500">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div class="w-full md:w-3/12 px-4 text-center md:mb-0 mb-4">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i class="fas fa-lightbulb text-xl"></i>
              </div>
              <h5 class="text-xl mt-5 font-semibold text-white">Launch time</h5>
              <p class="mt-2 mb-4 text-gray-500">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="relative block py-24 lg:pt-0 bg-[#2B4570]">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div class="w-full lg:w-6/12 sm:px-4">
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
              >
                <div class="flex-auto p-5 lg:p-10">
                  <h4 class="text-2xl font-semibold">Want to work with us?</h4>
                  <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                    Complete this form and we will get back to you in 24 hours.
                  </p>
                  <div class="relative w-full mb-3 mt-8">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="full-name"
                      >Full Name</label
                    ><input
                      type="text"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Full Name"
                      style="transition: all 0.15s ease 0s;"
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="email"
                      >Email</label
                    ><input
                      type="email"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Email"
                      style="transition: all 0.15s ease 0s;"
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="message"
                      >Message</label
                    ><textarea
                      rows="4"
                      cols="80"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Type a message..."
                    ></textarea>
                  </div>
                  <div class="text-center mt-6">
                    <button
                      class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style="transition: all 0.15s ease 0s;"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footertest class="mt-[0px]" />
    </main>
  </div>
</template>
