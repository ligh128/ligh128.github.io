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
              <h2 class="text-gry px-4 text-lg leading-[1.5] text-[24px] marker:font-black font-merriweather xl:text-[46px] font-[800] lg:text-[35px] md:text-[30px] md:leading-[46px]">Commercial Insurance</h2>
              <h4 class="text-[#000105] font-merriweather md:py-[39px] font-[300] py-[20px] md:text-xl text-base lg:text-2xl lg:px-0 px-4">Starting or running a business? We have you covered </h4>
            </div>
          </div>
          <div> 
            <img class="mx-auto lg:mt-[151px] mt-[50px] w-[940px]" src="../assets/img/commercial.png" alt="">
          </div>  
        </section>
        <div class="max-w-[1440px] mx-auto font-Roboto text-[#646778] 2xl:mt-[150px] xl:mt-[100px] mt-[70px]">
          <div class="md:flex justify-between ">
            <div class="left-side md:w-[30%] relative">
              <div class="sticky top-[30px] xl:w-[300px] md:h-[1050px] lg:w-[288px] md:w-[230px] px-[20px] mt-[50px]">
                <div class="progress-bar">
                    <ul>
                        <li class="hover:text-[#D24948] duration-300"><a href="#home1" class="pb-[60px] text-[15px] pl-[40px] flex leading-[27px]">Auto Insurance Overview</a></li>
                        <li class="hover:text-[#D24948] duration-300"><a href="#home2" class="pb-[60px] text-[15px] pl-[40px] flex leading-[27px]">Auto Insurance Average Costs</a></li>
                        <li class="hover:text-[#D24948] duration-300"><a href="#home3" class="pb-[60px] text-[15px] pl-[40px] flex leading-[27px]">Why Get Auto Insurance?</a></li>
                        <li class="after:hidden hover:text-[#D24948] duration-300"><a href="#home4" class="pb-[60px] text-[15px] pl-[40px] flex leading-[27px]">Popular Auto Insurance Companies</a></li>
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
                    <span class="hover:text-[#D24948] duration-300">Auto Insurance</span>
                </div>
                <div id="home1">
                  <h2 class="xl:text-[35px] lg:text-[25px] text-[25px] pt-[10px] font-Merriweather font-black tracking-[-0.2px] pb-[20px] text-[#1F2937]">Estimating Auto Insurance Costs</h2>
                  <p class="text-[15px] my-[15px] leading-[27px]">Car Insurance is probably the most familiar insurance policy type to most, with 228 million licensed drivers in the United States as of 2022. It is hard to understand why insurance companies may price your insurance with such large differences. We have provided some helpful information for you to help estimate your car insurance costs and your options to get the best coverage with the most affordable rate.</p>
                </div>

                <div class="">
                  <div class="bg-[#EDEDED] lg:p-6 p-4 rounded-md">
                    <h2 class="xl:text-[20px] lg:text-[15px] text-[15px] pt-[10px] font-roboto font-bold tracking-[-0.2px] pb-[20px] text-[#1F2937]">How to get the best rate</h2>
                    <ul class="list-disc ml-12 text-red-600 text-3xl leading-7">
                      <li><span class="text-[#1F2937] font-roboto font-regular text-[15px]">Make sure to get quotes from many different auto insurance companies- (There are 49 just in the state of Florida!) This is the most important way to save money on your auto insurance.</span></li>
                      <li><span class="text-[#1F2937] font-roboto font-regular text-[15px]">All of these companies will all have different appetites for what kind of driver they are looking to insure- which will effect your rate.</span></li>
                      <li><span class="text-[#1F2937] font-roboto font-regular text-[15px]">Make sure you get the right coverage, too little or too much can cause you to severely over-pay -(See how much coverage do you need?)</span></li>
                      <li><span class="text-[#1F2937] font-roboto font-regular text-[15px]">There are 4 major areas of evaluation that car insurance companies look for when quoting for auto insurance- (check your stats)</span></li>
                      <li><span class="text-[#1F2937] font-roboto font-regular text-[15px]">Bundle your policies and check for discounts- get multiple policies and check for common discounts for Pay in Full, Defensive Driving Class, Good Student GPA 3.0 or higher, AARP, Homeowners Discount, Paperless Billing and more!</span></li>
                    </ul>
                  </div>
                  <hr class="w-full mt-6 h-[3px] bg-gray-300">
                </div>

                <div class="">
                   <h2 class="xl:text-[35px] lg:text-[25px] text-[25px] pt-[10px] font-Merriweather font-black tracking-[-0.2px] pb-[20px] text-[#1F2937]">How to calculate how much car insurance coverage you need</h2>
                   <p class="text-[15px] my-[15px] leading-[27px]">One of the main topics of conversation when getting car insurance is- “How much coverage should I get?” The answer can vary for different peoples circumstances but here is a couple data points to keep in consideration.</p>
                </div>                       
              
                <div class="grid lg:grid-cols-2 sm:grid-cols-2 gap-2 mb-10">
                  <div class="grid col">
                    <p class="text-[15px] my-[15px] leading-[27px]">The typical auto insurance policy may consist of six coverage types:</p>
                    <ul class="list-disc ml-12 text-red-600 text-3xl leading-7">
                      <li><span class="text-[#DC2626] font-roboto font-regular text-[15px]">Auto Liability Coverage</span></li>
                        <li><span class="text-[#DC2626] font-roboto font-regular text-[15px]">Uninsured and underinsured motorist coverage</span></li>
                        <li><span class="text-[#DC2626] font-roboto font-regular text-[15px]">Comprehensive Coverage</span></li>
                        <li><span class="text-[#DC2626] font-roboto font-regular text-[15px]">Collision Coverage</span></li>
                        <li><span class="text-[#DC2626] font-roboto font-regular text-[15px]">Medical Payments Coverage</span></li>
                        <li><span class="text-[#DC2626] font-roboto font-regular text-[15px]">Personal Injury Protection</span></li>
                      </ul>
                  </div>
                  <div class="grid col">
                    <img src="../assets/img/book.png" alt="">
                  </div>
                </div>  
                <div>
                  <p class="text-[15px] my-[15px] font-bold leading-[27px]">Auto Liability Coverage-</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">In an accident, your auto insurance will protect you UP TO YOUR POLICY LIMIT for actions you are liable for. These coverages are called Bodily Injury Coverage and Property Damage Liability.</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">Bodily Injury Coverage gives you coverage up to your limit for when someone gets hurt from an accident that you are found to be at fault for.</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">An example- You have $100,000 in Bodily Injury Coverage and cause an accident that results in someone getting hurt. The insurance company will pay up to $100,000 to protect your personal liability for causing the accident. Beyond that limit you are un-protected. </p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">The average non-fatal accident in the United States will cause $78,900 worth of medical injury*, which would expose you to a lawsuit if you were at fault and caused the accident.  </p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">*According to the National Safety Council.</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">Property Damage Liability gives you coverage up to your limit for when you damage property from an accident that you are found to be at fault for.  </p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">An example- You crash into another persons car (property damage), and you caused the accident. This coverage will protect you for that damage.   </p>
                  <p class="text-[15px] my-[15px] font-bold leading-[27px] mb-2">Uninsured and underinsured motorist coverage-</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">This coverage is designed to protect you financially if you get into an accident with someone who has not purchased auto insurance (uninsured) or has very little coverage (underinsured.)</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">13% of drivers in the United States currently drive without any insurance, and 1 out of 7 drivers are underinsured. This gives good reason to obtain this type of coverage. </p>
                  <p class="text-[15px] my-[15px] font-bold leading-[27px] mb-2">Comprehensive Coverage-</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">This coverage will cover you for damages to your vehicle from anything other than collision. </p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">Fire, theft, windstorm, hail, vandalism, flood, falling objects or hitting an animal in the road are the most common reasons for this coverage. </p>
                  <p class="text-[15px] my-[15px] font-bold leading-[27px] mb-2">Collision Coverage-</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">This coverage is for your personal car if it is damaged during a collision type accident. Think- motor vehicles, telephone poles, trees, </p>
                  <p class="text-[15px] my-[15px] font-bold leading-[27px] mb-2">Medical Payments Coverage-</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">Medical payments are designated for any bodily injury in an accident, this will pay for medical expenses or funeral services regardless of who is at fault. Typically this is a small amount of coverage.</p>
                  <p class="text-[15px] my-[15px] font-bold leading-[27px] mb-2">Personal Injury Protection-</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">This coverage will cover 80% of medical expenses and provides work loss and death benefit component. </p>


                </div>


                <div id="home2">
                  <h2 class="xl:text-[35px] lg:text-[25px] text-[25px] font-Merriweather font-black tracking-[-0.2px] py-[20px] text-[#1F2937]">Main Price Impacting Factors </h2>
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
                          <h3 class="text-[17px] font-bold text-black pb-[9px] group-hover:text-[#D24948] duration-500">Credit score</h3>
                          <p class="text-[14px] 2xl:max-w-[536px] xl:max-w-[465px] lg:max-w-[565px] md:max-w-[445px] max-w-[536px] w-full leading-[24px]">Your personal credit score is a impacting factor when determining auto insurance rates. Insurance Companies anticipate a person with a higher credit score to be more attentive and preventative when evaluating risk. So you can expect to receive lower rates for a high score, and higher rates for a lower score.</p>
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
                          <p class="text-[14px] 2xl:max-w-[536px] xl:max-w-[465px] lg:max-w-[565px] md:max-w-[445px] max-w-[536px] w-full leading-[24px]">Single vs Married, Your marital status can surprisingly effect your insurance rates! There is a more broad category for interpretation on how this effects your risk rating but it is generally understood that if you are married this produces better rates on your home insurance.</p>
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
                          <p class="text-[14px] 2xl:max-w-[536px] xl:max-w-[465px] lg:max-w-[565px] md:max-w-[445px] max-w-[536px] w-full leading-[24px]">Ever heard of the phrase "Age considers; Youth Ventures"? Auto Insurance companies know, just like us, that generally people who are older are more cautionary than their youthful counterparts. This results in discounts for older age brackets, and higher rates for younger age brackets.</p>
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