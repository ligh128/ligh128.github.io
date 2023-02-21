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
              <h2 class="text-gry px-4 text-[24px] text-lg leading-[1.5] marker:font-black font-merriweather xl:text-[46px] font-[800] lg:text-[35px] md:text-[30px] md:leading-[46px]">Life Insurance</h2>
              <h4 class="text-[#000105] font-merriweather md:py-[39px] font-[300] py-[20px] md:text-xl text-base lg:text-2xl lg:px-0 px-4">Coverage for the people most important to you</h4>
            </div>
          </div>
          <div> 
            <img class="mx-auto mt-[50px] w-[940px]" src="../assets/img/lifeinsurance.png" alt="">
          </div>  
        </section>
        <div class="border-t pt-[50px] 2xl:pb-[436px] md:pb-[200px] pb-24 md:mx-[-20px]">
          <div class="md:flex justify-between ">
            <div class="left-side md:w-[30%] relative">
              <div class="sticky top-[30px] xl:w-[300px] md:h-[1050px] lg:w-[288px] md:w-[230px] px-[20px] mt-[50px]">
                <div class="progress-bar">
                    <ul>
                        <li class="hover:text-[#D24948] duration-300"><a href="#home1" class="pb-[60px] text-[15px] pl-[40px] flex leading-[27px]">What is Life Insurance</a></li>
                        <li class="hover:text-[#D24948] duration-300"><a href="#home2" class="pb-[60px] text-[15px] pl-[40px] flex leading-[27px]">Which type of Life Insurance fits you?</a></li>
                        <li class="hover:text-[#D24948] duration-300"><a href="#home3" class="pb-[60px] text-[15px] pl-[40px] flex leading-[27px]">Reasons to get Life Insurance</a></li>
                        <li class="after:hidden hover:text-[#D24948] duration-300"><a href="#home4" class="pb-[60px] text-[15px] pl-[40px] flex leading-[27px]">Major Price Impacts for Life Insurance</a></li>
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
                    <span class="hover:text-[#D24948] duration-300">Life Insurance</span>
                </div>
                <div id="home1">
                  <h2 class="xl:text-[35px] lg:text-[25px] text-[25px] pt-[10px] font-Merriweather font-black tracking-[-0.2px] pb-[20px] text-[#1F2937]">What is Life Insurance</h2>
                  <p class="text-[15px] my-[15px] leading-[27px]">To describe life insurance simply, it is a contract that will pay money to named “beneficiaries” on your death. Life Insurance can be used in many different and beneficials ways, so it can sometimes be complicated to understand the different types.</p>
                </div>

                <div class="">
                  <div class="bg-[#EDEDED] p-6 rounded-md">
                    <h2 class="xl:text-[20px] lg:text-[15px] text-[15px] pt-[10px] font-roboto font-bold tracking-[-0.2px] pb-[20px] text-[#1F2937]">Different Types of Life Insurance</h2>
                    <ul class="list-disc ml-12 text-red-600 text-3xl leading-7">
                      <li><span class="text-[#1F2937] font-roboto font-regular text-[15px]">Term Life Insurance</span></li>
                      <li><span class="text-[#1F2937] font-roboto font-regular text-[15px]">Whole Life Insurance</span></li>
                      <li><span class="text-[#1F2937] font-roboto font-regular text-[15px]">Variable Life Insurance</span></li>
                    </ul>
                  </div>
                  <hr class="w-full mt-6 h-[3px] bg-gray-300">
                </div>

                <div class="">
                   <h2 class="xl:text-[35px] lg:text-[25px] text-[25px] pt-[10px] font-Merriweather font-black tracking-[-0.2px] pb-[20px] text-[#1F2937]">Which type of Life Insurance fits you?</h2>
                   <p class="text-[15px] my-[15px] leading-[27px]">Looking at the different types of life insurance. You may wonder, “I think I should get life insurance, but what kind do get?” Everyones situation is different, but understanding the different ways people use life insurance policies can help see what might be right for you.</p>
                </div>                       
              
                <div class="grid lg:grid-cols-2 sm:grid-cols-2 gap-2 mb-10">
                  <div class="grid col">
                    <p class="text-[15px] my-[15px] leading-[27px]">Common reasons why people get life insurance:</p>
                    <ul class="list-disc ml-12 text-red-600 text-3xl leading-7">
                      <li><span class="text-[#DC2626] font-roboto font-regular text-[15px]">Replacing Lost Income</span></li>
                        <li><span class="text-[#DC2626] font-roboto font-regular text-[15px]">College Planning</span></li>
                        <li><span class="text-[#DC2626] font-roboto font-regular text-[15px]">Building Cash Value</span></li>
                        <li><span class="text-[#DC2626] font-roboto font-regular text-[15px]">Peace of Mind</span></li>
                        <li><span class="text-[#DC2626] font-roboto font-regular text-[15px]">Mortgage Protection</span></li>
                        <li><span class="text-[#DC2626] font-roboto font-regular text-[15px]">Final Expenses</span></li>
                      </ul>
                  </div>
                  <div class="grid col">
                    <img src="../assets/img/book.png" alt="">
                  </div>
                </div>  
                <div>
                  <p class="text-[15px] my-[15px] font-bold leading-[27px]">Replacing Lost Income</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">If you are the head of household, or provide the majority of the financial support in your family, you may be looking into life insurance so that you will be protected in the event of your death.</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">All three types of life insurance will provide money to help replace lost income for your loved ones in the event of your death. </p>
                  <p class="text-[15px] my-[15px] font-bold leading-[27px] mb-2">College Planning</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">A whole life policy or variable life policy can be used as a way for you to save for your childs college expenses. </p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">One of the features of a whole life policy or a variable life policy is the ability to actually save money during the term of the policy. </p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">They both can accrue value during their term and you can take a loan out on the value of your policy to pay for your childs college expenses or, through the limits of the death benefit of the policy, college debt can be paid off at the time of your death. </p>
                  <p class="text-[15px] my-[15px] font-bold leading-[27px] mb-2">Building Cash Value</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">Many people actually use life insurance as a financial tool more so than insurance policy that protects you financially in the event of your death, this is due to the “Cash Value” aspect of whole life or variable life insurance.  </p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">During the term of your policy, the cash value of the  policy value will grow. You have the ability to take out a loan against the value of your life insurance policy, similar to a “home equity line of credit.” Life insurance policies come with many tax advantages and is seen as an investment.</p>
                  <p class="text-[15px] my-[15px] font-bold leading-[27px] mb-2">Peace of Mind</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">One of the most common reasons that anyone gets insurance in the first place, is for peace of mind. Perhaps none of the typical reasons for purchasing life insurance is very critical for you. Many people enjoy getting insuruance for the sheer principle of having peace of mind. Knowing that in the unlikely event that something does happen, you and your loved ones are insulated from harm. That peace of mind can also come at a very reasonable price.</p>
                  <p class="text-[15px] my-[15px] font-bold leading-[27px] mb-2">Mortgage Protection</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">Mortgages are typically the most expensive purchase anyone will make in their lifetime. Life insurance is very commonly sold under the handle of “Mortgage Protection” insurance. This is becasue life insurance can be used to pay off your mortgage through the death bennefit of your life insurance. </p>
                  <p class="text-[15px] my-[15px] font-bold leading-[27px] mb-2">Final Expenses</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">There are only two guarentees in life, death and taxes. It is an undeniable fact that we all will die one day. Life Insurance can be used for final expenses that occur when you pass away. Examples include- Funeral or memorial service, embalming, casket or cremation.  </p>

                </div>


                <div id="home2">
                  <h2 class="xl:text-[35px] lg:text-[25px] text-[25px] font-Merriweather font-black tracking-[-0.2px] py-[20px] text-[#1F2937]">Major Price Impacts for Life Insurance</h2>
                  <p class="text-[15px] my-[15px] leading-[27px]">When comparing life insurance rates and coverages, it is important to keep in mind the most impactful data points that insurance companies use to determine your rate. </p>
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
                          <p class="text-[14px] 2xl:max-w-[536px] xl:max-w-[465px] lg:max-w-[565px] md:max-w-[445px] max-w-[536px] w-full leading-[24px]">It goes without saying, Insurance Companies like when you purchase more than one policy with them. Consider this when you are getting one policy, that they may give a deeper discount by adding another. </p>
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
                          <h3 class="text-[17px] font-bold text-black pb-[9px] group-hover:text-[#D24948] duration-500">Smoking Status</h3>
                          <p class="text-[14px] 2xl:max-w-[536px] xl:max-w-[465px] lg:max-w-[565px] md:max-w-[445px] max-w-[536px] w-full leading-[24px]">Smoking has been known to cause early death. This is one of the main and most impactful data points for Life Insurance companies to use when determining your life insurance rates.  </p>
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
                          <h3 class="text-[17px] font-bold text-black pb-[9px] group-hover:text-[#D24948] duration-500">Marital status</h3>
                          <p class="text-[14px] 2xl:max-w-[536px] xl:max-w-[465px] lg:max-w-[565px] md:max-w-[445px] max-w-[536px] w-full leading-[24px]">Single vs Married, Your marital status can surprisingly effect your insurance rates! There is a more broad category for interpretation on how this effects your risk rating but it is generally understood that if you are married this produces better rates on your life insurance.  </p>
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
                          <h3 class="text-[17px] font-bold text-black pb-[9px] group-hover:text-[#D24948] duration-500">Age</h3>
                          <p class="text-[14px] 2xl:max-w-[536px] xl:max-w-[465px] lg:max-w-[565px] md:max-w-[445px] max-w-[536px] w-full leading-[24px]">It goes without saying, life insurance is measuring your risk of death. The older you are, the more you are naturally closer to death. The older you are, the higher your rates will be, the younger you are, the lower your rates will be. Start your life insurance while you are young!</p>
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
                        <p class="text-[15px] py-[15px] leading-[27px] 2xl:max-w-[495px] xl:max-w-[415px] lg:max-w-[301px] md:max-w-[405px] sm:max-w-[500px]">Always check to see if you can save money by adding an additional product to your life insurance policy! (Auto, Home, Flood, etc.)</p>
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