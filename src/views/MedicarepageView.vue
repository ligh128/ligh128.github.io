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
              <h2 class="text-gry px-4 text-lg leading-[1.5] text-[24px] marker:font-blackfont-merriweather xl:text-[46px] font-[800] lg:text-[35px] md:text-[30px] md:leading-[46px]">Medicare</h2>
              <h4 class="text-[#525355] font-merriweather md:py-[39px] font-[300] py-[20px] md:text-xl text-base lg:text-2xl lg:px-0 px-4">Medicare often costs $0/Month... ask us how!</h4>
            </div>
          </div>
          <div> 
            <img class="mx-auto mt-[50px] w-[940px]" src="../assets/img/medicare.png" alt="">
          </div>  
        </section>
        <div class="max-w-[1440px] mx-auto font-Roboto text-[#646778] 2xl:mt-[150px] xl:mt-[100px] mt-[70px]">
          <div class="md:flex justify-between ">
            <div class="left-side md:w-[30%] relative">
              <div class="sticky top-[30px] xl:w-[300px] md:h-[1050px] lg:w-[288px] md:w-[230px] px-[20px] mt-[50px]">
                <div class="progress-bar">
                    <ul>
                        <li class="hover:text-[#D24948] duration-300"><a href="#home1" class="pb-[60px] text-[15px] pl-[40px] flex leading-[27px]">What is Medicare</a></li>
                        <li class="hover:text-[#D24948] duration-300"><a href="#home2" class="pb-[60px] text-[15px] pl-[40px] flex leading-[27px]">Types of Medicare</a></li>
                        <li class="hover:text-[#D24948] duration-300"><a href="#home3" class="pb-[60px] text-[15px] pl-[40px] flex leading-[27px]">Coverages to look out for</a></li>
                        <li class="after:hidden hover:text-[#D24948] duration-300"><a href="#home4" class="pb-[60px] text-[15px] pl-[40px] flex leading-[27px]">Medicare pricing impacts</a></li>
                    </ul>
                </div>
              </div>
            </div>
            <div class="right-side px-[20px] md:w-[70%]">
              <div>
                <div class="flex text-[11px] items-center text-[#525355] uppercase">
                    <span class="pr-[20px] hover:text-[#D24948] duration-300">Insurance</span>
                    <span class="pr-[20px]">
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 12C7.5 11.5858 7.83579 11.25 8.25 11.25L15.75 11.25C16.1642 11.25 16.5 11.5858 16.5 12C16.5 12.4142 16.1642 12.75 15.75 12.75L8.25 12.75C7.83579 12.75 7.5 12.4142 7.5 12Z" fill="#525355"/>
                        </svg>
                    </span>
                    <span class="hover:text-[#D24948] duration-300">Medicare</span>
                </div>
                <div id="home1">
                  <h2 class="xl:text-[35px] lg:text-[25px] text-[25px] pt-[10px] font-Merriweather font-black tracking-[-0.2px] pb-[20px] text-[#1F2937]">What is Medicare?</h2>
                  <p class="text-[15px] my-[15px] leading-[27px]">Medicare was created in 1965, signed into law by President Lyndon B Johnson. Medicare was designed to be a national health care solution for seniors over the age of 65. Since Medicare's creation there has been several changes. Most notibly, the expansion of coverages through Medicare Supplements and the advent of Medicare Advantage plans.</p>
                </div>

                <div class="">
                  <div class="bg-[#EDEDED] lg:p-6 p-4 rounded-md">
                    <h2 class="xl:text-[20px] lg:text-[15px] text-[15px] pt-[10px] font-roboto font-bold tracking-[-0.2px] pb-[20px] text-[#1F2937]">Types of Medicare</h2>
                    <ul class="list-disc ml-12 text-red-600 text-3xl leading-7">
                      <li><span class="text-[#1F2937] font-roboto font-regular text-[15px]">Original Medicare </span></li>
                      <li><span class="text-[#1F2937] font-roboto font-regular text-[15px]">Medicare Supplement/ Medigap</span></li>
                      <li><span class="text-[#1F2937] font-roboto font-regular text-[15px]">Medicare Advantage</span></li>
                    </ul>
                  </div>
                  <hr class="w-full mt-6 h-[3px] bg-gray-300">
                </div>

                <div class="">
                   <h2 class="xl:text-[35px] lg:text-[25px] text-[25px] pt-[10px] font-Merriweather font-black tracking-[-0.2px] pb-[20px] text-[#1F2937]">Coverages to look out for</h2>
                   <p class="text-[15px] my-[15px] leading-[27px]">Medicare can get confusing with the different coverage options. To help understand how Medicare coverages are offered, we will break it down into a few easy categories.</p>
                </div>                       
              
                <div class="grid lg:grid-cols-2 sm:grid-cols-2 gap-2 mb-10">
                  <div class="grid col">
                    <p class="text-[15px] my-[15px] leading-[27px]">Typical Medicare coverages are seperated into-</p>
                    <ul class="list-disc ml-12 text-red-600 text-3xl leading-7">
                      <li><span class="text-[#DC2626] font-roboto font-regular text-[15px]">Part A- Hospital Insurance</span></li>
                        <li><span class="text-[#DC2626] font-roboto font-regular text-[15px]">Part B- Out of Hospital (Primary Care)</span></li>
                        <li><span class="text-[#DC2626] font-roboto font-regular text-[15px]">Part C- Medicare Advantage</span></li>
                        <li><span class="text-[#DC2626] font-roboto font-regular text-[15px]">Part D- Drugs</span></li>
                        <li><span class="text-[#DC2626] font-roboto font-regular text-[15px]">Medicare Supplement/ Medigap</span></li>
                      </ul>
                  </div>
                  <div class="grid col">
                    <img src="../assets/img/book.png" alt="">
                  </div>
                </div>  
                <div>
                  <p class="text-[15px] my-[15px] font-bold leading-[27px]">Part A</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">The most well known and commonly found coverage within Medicare is part A. The best way to understand Part A is it revolves around the “hosptial”. You will more than likely be using this coverage if you end up in the hospital or you need care after hospitalization. </p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">Ficticious examples of how Part A would be used-</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">Cindy got into a car accident, the car accident resulted in her being admitted to a near-by hosptial. Cindy had to stay at the hospital for a few days while she recovered. She would be using Part A. </p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">Robert comes down with a cold. He needs to visit his primary physician to get a check-up. He would not be using Part A.  </p>
                  <p class="text-[15px] my-[15px] font-bold leading-[27px] mb-2">Part B</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">This coverage will be used most often for the majority of Medicare recipents. Part B is used for primary care or diagnosing and treating medical conditions that dont require hospitalization. Part B would be for your primary care and for preventative services. </p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">Ficticious examples of how Part B would be used-</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">Robert comes down with a cold. He needs to visit his primary physician to get a check-up. He would be using Part B. </p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">Gladys tripped over her grandsons toy on the floor. Her ankel hurts after tripping. She goes to her primary care physician to get it looked at. She would be using Part B.                  </p>
                  <p class="text-[15px] my-[15px] font-bold leading-[27px] mb-2">Part C </p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">Otherwise known as Medicare Advantage, is a type of Medicare Plan and coverage that is provided by a private company. Part C commonly covers both Part A and B, but also can have coverages for Part D and a variety of other benefits like vision, dental, gym and meals to name a few.</p>
                  <p class="text-[15px] my-[15px] font-bold leading-[27px] mb-2">Part D</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">D for Drugs, part D is the drug portion of Medicare coverage. This will help cover the cost of perscription drugs, this can be obtained by joining a Medicare Advantage plan or supplement to Origional Medicare coverage. </p>
                  <p class="text-[15px] my-[15px] font-bold leading-[27px] mb-2">Medicare Supplement</p>
                  <p class="text-[15px] my-[15px] font-regular leading-[27px] mb-2">Medicare Supplement is coverages that are additional to Original Medicare.  They are primarily used to take care of many of the out-of-pocket costs of Original Medicare. Medicare Supplment policies are sold by private companies that follow guidelines set fourth by the federal government. </p>
                  
                </div>


                <div id="home2">
                  <h2 class="xl:text-[35px] lg:text-[25px] text-[25px] font-Merriweather font-black tracking-[-0.2px] py-[20px] text-[#1F2937]">Medicare Pricing Impacts</h2>
                  <p class="text-[15px] my-[15px] leading-[27px]">When comparing Medicare policies and coverages, it is important to keep in mind the most impactful data points that are used to determine your rate. </p>
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
                          <h3 class="text-[17px] font-bold text-black pb-[9px] group-hover:text-[#D24948] duration-500">Original Medicare, Medicare Supplement, Medicare Advantage</h3>
                          <p class="text-[14px] 2xl:max-w-[536px] xl:max-w-[465px] lg:max-w-[565px] md:max-w-[445px] max-w-[536px] w-full leading-[24px]">The type of plan you choose will have a major impact on what pricing you will get when it comes to Medicare. While there is a variety of factors to consider, it is generally understood that Medicare Advantage can come at the least cost, Original Medicare can comes in as a mid-tier solution, and Medicare Supplement as the priciest option. </p>
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
                          <h3 class="text-[17px] font-bold text-black pb-[9px] group-hover:text-[#D24948] duration-500">Drugs</h3>
                          <p class="text-[14px] 2xl:max-w-[536px] xl:max-w-[465px] lg:max-w-[565px] md:max-w-[445px] max-w-[536px] w-full leading-[24px]">The type of drugs that you need will have a major impact on your pricing. A drug like Eliquis- a blood thinner can cost as much as $511 (2022), a drug like Loratadine- an allergy medication can cost around $3 (2022). This vast difference in pricing will ultimately effect pricing with your Medicare plan. </p>
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
                          <h3 class="text-[17px] font-bold text-black pb-[9px] group-hover:text-[#D24948] duration-500">Extras</h3>
                          <p class="text-[14px] 2xl:max-w-[536px] xl:max-w-[465px] lg:max-w-[565px] md:max-w-[445px] max-w-[536px] w-full leading-[24px]">If you are interested in additional benefits and coverages like- Vision, Hearing, Dental, Fitness Programs, and Transportation. This can incur higher costs, due to the expanded coverage and benefits you elect.</p>
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
                          <h3 class="text-[17px] font-bold text-black pb-[9px] group-hover:text-[#D24948] duration-500">Doctors</h3>
                          <p class="text-[14px] 2xl:max-w-[536px] xl:max-w-[465px] lg:max-w-[565px] md:max-w-[445px] max-w-[536px] w-full leading-[24px]">Depending on if your doctor is a Medicare participating provider, or a non-Medicare participating provider, this can effect your rates in a big way because it will determine what type of plan you will need to sign up for. Check with your doctor to see what insurance they accept. </p>
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