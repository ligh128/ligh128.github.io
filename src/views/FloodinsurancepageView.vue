<script setup>
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
import Footertest from '../components/Footertest.vue';
    
    
    </script>
    
    <template>
       <main>
        <Header />
        <section class="lg:px-14 px-7 md:border-b-[80px] border-b-[40px]">
          <div class="w-full grid justify-items-center">
            <div class="grid text-center z-10 mx-auto w-fit absolute">
              <h2 class="text-gry px-4 text-lg leading-[1.5] text-[24px] marker:font-black font-merriweather xl:text-[46px] font-[800] lg:text-[35px] md:text-[30px] md:leading-[46px]">Flood Insurance</h2>
              <h4 class="text-[#000105] font-merriweather font-[300] pt-[20px] md:text-xl text-lg lg:text-2xl lg:px-0 px-4">We operate the largest flood insurance brokerage in the US</h4>
              <h4 class="text-[#000105] font-merriweather font-[300] pb-[20px] md:text-xl text-lg lg:text-2xl lg:px-0 px-4">with our brand <span class="text-[#D24948]">www.RocketFlood.com</span></h4>
            </div>
          </div>
          <div> 
            <img class="mx-auto mt-[50px] w-[940px]" src="../assets/img/floodinsurance.png" alt="">
          </div>  
        </section>
        <div class="border-t px-20 pt-[50px] 2xl:pb-[50px] md:pb-[50px] pb-24 md:mx-[-20px]">
          <div class="md:flex justify-between ">
            <div class="left-side md:w-[30%] relative">
              <div class="sticky top-[30px] xl:w-[300px] md:h-[1050px] lg:w-[288px] md:w-[230px] px-[20px] mt-[50px]">
                <div class="progress-bar">
                    <ul>
                        <li class="hover:text-[#D24948] duration-300"><a href="#home1" class="pb-[60px] text-[15px] pl-[40px] flex leading-[27px]">What is Flood Insurance?</a></li>
                        <li class="hover:text-[#D24948] duration-300"><a href="#home2" class="pb-[60px] text-[15px] pl-[40px] flex leading-[27px]">How much coverage do I need?</a></li>
                        <li class="hover:text-[#D24948] duration-300"><a href="#home3" class="pb-[60px] text-[15px] pl-[40px] flex leading-[27px]">How Premiums are calculated</a></li>
                        <li class="after:hidden hover:text-[#D24948] duration-300"><a href="#home4" class="pb-[60px] text-[15px] pl-[40px] flex leading-[27px]">Customize your Flood Inusrance Coverage</a></li>
                    </ul>
                </div>
              </div>
            </div>
            <div class="right-side px-[20px] md:w-[70%]">
              <div>
                <div class="flex text-[11px] items-center text-[#000105] uppercase">
                    <span class="pr-[20px] hover:text-[#D24948] duration-300">Insurance</span>
                    <span class="pr-[20px]">
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 12C7.5 11.5858 7.83579 11.25 8.25 11.25L15.75 11.25C16.1642 11.25 16.5 11.5858 16.5 12C16.5 12.4142 16.1642 12.75 15.75 12.75L8.25 12.75C7.83579 12.75 7.5 12.4142 7.5 12Z" fill="#000105"/>
                        </svg>
                    </span>
                    <span class="hover:text-[#D24948] duration-300">Flood Insurance</span>
                </div>
                <div id="">
                  <h2 class="xl:text-[35px] lg:text-[25px] text-[25px] pt-[10px] font-Merriweather font-black tracking-[-0.2px] pb-[20px] text-[#1F2937]">What is Flood Insurance?</h2>
                  <p class="text-[15px] my-[15px] leading-[27px]">Flood Insurance is a stand-alone insurance product that speciffically protects your home from the peril of rising flood waters. Standard home insurance policies do not cover the peril of flood. Seperate flood insurance policies are required if a homeowner would like to protect their home from the peril of rising flood waters. Flood Insurance is optional in low risk flood zones, a 1 in 500 year risk (Zones B, C and most commonly zone X). Flood Insurance is required by mortgage lenders for high risk flood zones, a 1 in 100 year risk (Zones A, AE, A1-30, AH, AO, V, VE, and V1-30.)</p>
                </div>

                <div class="">
                  <div class="bg-[#EDEDED] lg:p-6 p-3 rounded-md">
                    <h2 class="xl:text-[20px] lg:text-[15px] text-[15px] pt-[10px] font-roboto font-bold tracking-[-0.2px] pb-[20px] text-[#1F2937]">How to get the best rate</h2>
                    <ul class="list-disc ml-12 text-red-600 text-3xl leading-7">
                      <li><span class="text-[#1F2937] font-roboto font-regular text-[15px]">The rule of thumb at all times is to compare quotes between as many companies as you can. Comparing quotes across multiple companies is always the most effective approach to getting the best pricing.  </span></li>
                      <li><span class="text-[#1F2937] font-roboto font-regular text-[15px]">You can often find better rates with the “private” market rather than shopping with FEEMA and the NFIP. </span></li>
                      <li><span class="text-[#1F2937] font-roboto font-regular text-[15px]">Make sure you get the right coverage, too little or too much can cause you to severely over-pay -(See how much coverage do you need?)</span></li>
                      <li><span class="text-[#1F2937] font-roboto font-regular text-[15px]">Elevation is going to be a large factor when evaluating your property for flood risk, the higher you are, the lower you usually pay.</span></li>
                      <li><span class="text-[#1F2937] font-roboto font-regular text-[15px]">Bundle your policies and check for discounts- you can check for discounts by using an “Elevation Certificate.” Elevation certificates can only help your rate. Insurance companies will use this to prove that you are in a higher elevation than what their elevation modeling data says. If your elevation certificate proves that you are in high elevation, typically it will produce a discount.   </span></li>
                    </ul>
                  </div>
                  <hr class="w-full mt-6 h-[3px] bg-gray-300">
                </div>

                <div class="">
                   <h2 class="xl:text-[35px] lg:text-[25px] text-[25px] pt-[10px] font-Merriweather font-black tracking-[-0.2px] pb-[20px] text-[#1F2937]">How to calculate how much flood insurance coverage you need</h2>
                   <p class="text-[15px] my-[15px] leading-[27px]">One of the main topics of conversation when getting flood insurance is- “How much coverage should I get?” The answer can vary for different peoples circumstances but here is a couple data points to keep in consideration.</p>
                </div>                       
              
                <div class="grid lg:grid-cols-2 sm:grid-cols-2 gap-2 mb-10">
                  <div class="grid col">
                    <p class="text-[15px] my-[15px] leading-[27px]">The typical auto insurance policy may consist of six coverage types:</p>
                    <ul class="list-disc ml-12 text-red-600 text-3xl leading-7">
                      <li><span class="text-[#DC2626] font-roboto font-regular text-[15px]">Building Coverage</span></li>
                        <li><span class="text-[#DC2626] font-roboto font-regular text-[15px]">Content Coverage</span></li>
                        <li><span class="text-[#DC2626] font-roboto font-regular text-[15px]">Temporary Living Expenses</span></li>
                        <li><span class="text-[#DC2626] font-roboto font-regular text-[15px]">Detached Structure Coverage</span></li>
               
                      </ul>
                  </div>
                  <div class="grid col">
                    <img src="../assets/img/book.png" alt="">
                  </div>
                </div>  
                <div>
                  <p class="text-[15px] my-[15px] font-bold leading-[27px]">Building Coverage</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">Building coverage will be the main coverage that will be protecting your home. A great way of remembering what is covered under building coverage would be through a question- </p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">“If you were to move tomorrow, what would you put in the moving van and what would you leave behind?” </p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">Everything that you would leave behind, would typically be included in your building coverage. This would include- the structural aspects of the building, the equipment that powers the home (water heater, HVAC, electrical, etc.), and any built in features like your kitchen cabinents. </p>
                  <p class="text-[15px] my-[15px] font-bold leading-[27px] mb-2">Content Coverage</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">Content Coverage will be the coverage that will be protecting your personal belongings. Like Building Coverage, this can be remembered by using the question-</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">“If you were to move tomorrow, what would you put in the moving van and what would you leave behind?”</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">In this situation, everything that you would be putting in the moving van would fall under Content Coverage.</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">Content coverage covers for personal belongings, this typically includes- clothing, furniture, electronic equipment and can even provide protection for your washer and dryer unit. </p>
                  <p class="text-[15px] my-[15px] font-bold leading-[27px] mb-2">Temporary Living Expenses</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">Temporary living expenses are reserved for providing you some additional money to pay for a place to stay and food to eat during the time that you are unfortunately displaced from your home during a flood peril. </p>
                  <p class="text-[15px] my-[15px] font-bold leading-[27px] mb-2">Detached Structure Coverage</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">Detached Structure Coverage is designed to give coverage to any detached structures on the property (other than detached garages, they are covered up to 10% of the building coverage limit. This would include any structures with four walls and a roof.</p>
    
                </div>


                <div id="home2">
                  <h2 class="xl:text-[35px] lg:text-[25px] text-[25px] font-Merriweather font-black tracking-[-0.2px] py-[20px] text-[#1F2937]">We make buying flood insurance simple & convenient</h2>
                  <p class="text-[15px] my-[15px] leading-[27px]">When comparing rates and coverages for home insurance, it is important to keep in mind data points that Insurance Companies find most important when evaluating your rate.</p>
                </div>
              </div>
              <div class="md:px-[20px]" id="home3">
                <div class="pt-[20px]">
                  <a href="" class="group">
                    <div class="flex md:items-center">
                      <div class="md:w-[105px] w-[80px]">
                          <img src="../assets/img/multi.png" alt="">
                      </div>
                      <div class="md:ml-[45px] sm:ml-[25px] ml-[10px]">
                          <h3 class="text-[17px] font-bold text-black pb-[9px] group-hover:text-[#D24948] duration-500">Multi-policy discount</h3>
                          <p class="text-[14px] 2xl:max-w-[536px] xl:max-w-[465px] lg:max-w-[565px] md:max-w-[445px] max-w-[536px] w-full leading-[24px]">It goes without saying, Insurance Companies like when you purchase more than one policy with them. Consider this when you are getting one policy, that they may give a deeper discount by adding another.</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="pt-[20px]">
                  <a href="" class="group">
                    <div class="flex md:items-center">
                      <div class="md:w-[105px] w-[80px]">
                          <img src="../assets/img/credit.png" alt="">
                      </div>
                      <div class="md:ml-[45px] sm:ml-[25px] ml-[10px]">
                          <h3 class="text-[17px] font-bold text-black pb-[9px] group-hover:text-[#D24948] duration-500">Elevation Data</h3>
                          <p class="text-[14px] 2xl:max-w-[536px] xl:max-w-[465px] lg:max-w-[565px] md:max-w-[445px] max-w-[536px] w-full leading-[24px]">Your personal credit score is a impacting factor when determining home insurance rates. Insurance Companies anticipate a person with a higher credit score to be more attentive and preventative when evaluating risk. So you can expect to receive lower rates for a high score, and higher rates for a lower score. </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="pt-[20px]">
                  <a href="" class="group">
                    <div class="flex md:items-center">
                      <div class="md:w-[105px] w-[80px]">
                          <img src="../assets/img/marital.png" alt="">
                      </div>
                      <div class="md:ml-[45px] sm:ml-[25px] ml-[10px]">
                          <h3 class="text-[17px] font-bold text-black pb-[9px] group-hover:text-[#D24948] duration-500">Flood Zone</h3>
                          <p class="text-[14px] 2xl:max-w-[536px] xl:max-w-[465px] lg:max-w-[565px] md:max-w-[445px] max-w-[536px] w-full leading-[24px]">Flood Zones are a huge impacting factor when calculating flood insurance rates. Low risk flood zones will naturally produce much lower rates than high risk flood zones. Examples of low risk zones are- (Zones B, C and most commonly zone X) Examples of high risk zones are- (Zones A, AE, A1-30, AH, AO, V, VE, and V1-30) </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="pt-[20px]">
                  <a href="" class="group">
                    <div class="flex md:items-center">
                      <div class="md:w-[105px] w-[80px]">
                          <img src="../assets/img/age.png" alt="">
                      </div>
                      <div class="md:ml-[45px] sm:ml-[25px] ml-[10px]">
                          <h3 class="text-[17px] font-bold text-black pb-[9px] group-hover:text-[#D24948] duration-500">Coverage</h3>
                          <p class="text-[14px] 2xl:max-w-[536px] xl:max-w-[465px] lg:max-w-[565px] md:max-w-[445px] max-w-[536px] w-full leading-[24px]">Coverage ammounts and selected coverages will naturally make a significant impact on your flood insurance rates. FEEMA offers maximum coverage amounts of $250,000 for building and $100,000 for contents. Private companies can go as high as $5 million dollars! The more coverage you get, the higher the cost will be on average.</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 pb-[30px] mt-[20px]" id="home4">
                  <div class="xl:m-[20px] lg:m-[10px] md:m-[10px] my-[10px] ">
                      <div class="group bg-[#EDEDED] hover:bg-[#bdbdbd] duration-500 p-[30px] rounded-[5px]">
                          <div class="text-center md:pb-[20px]">
                              <img src="../assets/img/renters.png" alt="" class="w-[76px] mx-auto py-[5px]">
                              <h3 class="font-medium text-[15px] text-black md:py-[15px] py-2">Renters Insurance</h3>
                              <div>
                                  <a href="" class="text-[11px] text-[#1F2937] group-hover:text-[#DC2626] duration-500 underline underline-offset-8 uppercase">Learn more</a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="xl:m-[20px] lg:m-[10px] md:m-[10px] my-[10px] ">
                      <div class="group bg-[#EDEDED] hover:bg-[#bdbdbd] duration-500 p-[30px] rounded-[5px]">
                          <div class="text-center md:pb-[20px]">
                              <img src="../assets/img/condo.png" alt="" class="w-[76px] mx-auto py-[5px]">
                              <h3 class="font-medium text-[15px] text-black md:py-[15px] py-2">Condo Insurance</h3>
                              <div>
                                  <a href="" class="text-[11px] text-[#1F2937] group-hover:text-[#DC2626] duration-500 underline underline-offset-8 uppercase">Learn more</a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="xl:m-[20px] lg:m-[10px] md:m-[10px] my-[10px] ">
                      <div class="group bg-[#EDEDED] hover:bg-[#bdbdbd] duration-500 p-[30px] rounded-[5px]">
                          <div class="text-center md:pb-[20px]">
                              <img src="../assets/img/manufactured.png" alt="" class="w-[76px] mx-auto py-[5px]">
                              <h3 class="font-medium text-[15px] text-black md:py-[15px] py-2">Manufactured Home</h3>
                              <div>
                                  <a href="" class="text-[11px] text-[#1F2937] group-hover:text-[#DC2626] duration-500 underline underline-offset-8 uppercase">Learn more</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="border-t pt-[50px] 2xl:pb-[436px] md:pb-[200px] pb-24 md:mx-[-20px]">
                  <div class="md:mx-[20px] bg-[#EDEDED]  rounded-[5px]">
                    <div class="bg-[url('../assets/img/watch-bg.png')] lg:bg-contain bg-[length:395px] bg-no-repeat bg-right-bottom">
                      <div class="xl:p-[30px] lg:p-[20px] p-[20px]">
                        <h2 class="xl:text-[25px] lg:text-[21px] text-[21px] font-extrabold text-black mb-[20px]">WATCH YOUR SAVINGS ADD UP.</h2>
                        <p class="text-[15px] py-[15px] leading-[27px] 2xl:max-w-[495px] xl:max-w-[415px] lg:max-w-[301px] md:max-w-[405px] sm:max-w-[500px]">Always check to see if you can save money by adding an additional product to your home insurance policy! (Auto, Life, Flood, etc.)</p>
                        <div class="mt-[20px] lg:pb-0 md:pb-[150px] sm:pb-[230px] pb-[200px] bg-padding">
                            <a href=""  class="bg-black hover:bg-[#DC2626] duration-500 lg:max-w-[220px] max-w-[200px] w-full flex items-center rounded-[5px] uppercase text-white text-center tracking-[2px] text-[14px] px-[20px] py-[10px] lg:px-[40px] lg:py-[15px]">Get a quote
                              <svg width="24px" height="24px" viewBox="0 0 24 24" class="ml-[5px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303C9.17678 18.2374 9.17678 17.7626 9.46967 17.4697L14.9393 12L9.46967 6.53033C9.17678 6.23744 9.17678 5.76256 9.46967 5.46967Z" fill="#ffffff"/>
                            </svg>
                            </a>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
     
         
        <Footertest/>
       </main>
    </template>