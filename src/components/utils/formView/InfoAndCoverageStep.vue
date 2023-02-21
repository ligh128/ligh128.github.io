<script setup>
import CustomSelectButton from '@/components/utils/CustomSelectButton.vue';
import InputField from '@/components/utils/InputField.vue';
import SelectField from '@/components/utils/SelectField.vue';
import CheckboxField from '@/components/utils/CheckboxField.vue';
</script>

<template>
  <div class="box-header w-fit flex mb-[40px]">
    <!-- <svg class="mr-[16px]" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                                <rect width="56" height="56" rx="4" fill="#ADA9B5" fill-opacity="0.12" />
                                                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                                                  d="M28.3335 14.6667V22L28.3335 22.0544V22.0544V22.0544V22.0545C28.3334 22.4785 28.3333 22.8906 28.379 23.2305C28.4305 23.6137 28.5561 24.051 28.9193 24.4142C29.2825 24.7775 29.7198 24.903 30.103 24.9545C30.4429 25.0002 30.855 25.0001 31.2791 25H31.2791H31.2791H31.2791L31.3335 25H38.6668V33.3334C38.6668 37.1046 38.6668 38.9902 37.4953 40.1618C36.3237 41.3334 34.4381 41.3334 30.6668 41.3334H25.3335C21.5623 41.3334 19.6766 41.3334 18.5051 40.1618C17.3335 38.9902 17.3335 37.1046 17.3335 33.3334V22.6667C17.3335 18.8955 17.3335 17.0098 18.5051 15.8383C19.6766 14.6667 21.5623 14.6667 25.3335 14.6667H28.3335ZM30.3335 14.6679V22C30.3335 22.4997 30.3356 22.7739 30.3612 22.964L30.3622 22.9713L30.3695 22.9723C30.5597 22.9979 30.8338 23 31.3335 23H38.6656C38.6601 22.2565 38.63 21.8186 38.4638 21.4174C38.2609 20.9274 37.8755 20.542 37.1047 19.7713L37.1047 19.7713L33.5623 16.2288C32.7915 15.458 32.4061 15.0727 31.9161 14.8697C31.515 14.7035 31.077 14.6734 30.3335 14.6679ZM23.0002 29.3334C23.0002 28.7811 23.4479 28.3334 24.0002 28.3334L32.0002 28.3334C32.5524 28.3334 33.0002 28.7811 33.0002 29.3334C33.0002 29.8856 32.5524 30.3334 32.0002 30.3334L24.0002 30.3334C23.4479 30.3334 23.0002 29.8856 23.0002 29.3334ZM24.0002 33.6667C23.4479 33.6667 23.0002 34.1144 23.0002 34.6667C23.0002 35.219 23.4479 35.6667 24.0002 35.6667H29.3335C29.8858 35.6667 30.3335 35.219 30.3335 34.6667C30.3335 34.1144 29.8858 33.6667 29.3335 33.6667H24.0002Z"
                                                                                                  fill="#D9DBDC" />
                                                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                                                  d="M38.6603 22.9999C38.6463 22.324 38.6023 21.7515 38.4638 21.4174C38.2609 20.9273 37.8755 20.5419 37.1048 19.7712L37.1047 19.7712L37.1047 19.7712L33.5623 16.2287C32.7915 15.458 32.4061 15.0726 31.9161 14.8696C31.5597 14.722 31.0204 14.6817 30.3335 14.6708V21.9999C30.3335 22.4996 30.3356 22.7738 30.3612 22.964L30.3622 22.9713L30.3695 22.9723C30.5597 22.9978 30.8338 22.9999 31.3335 22.9999H38.6603Z"
                                                                                                  fill="#B5B7BA" />
                                                                                              </svg> -->
    <div v-if="activeProductType == 'home-insurance'">
      <img class="mr-[16px]" width="56" height="56" viewBox="0 0 56 56" fill="none"
        src="/src/assets/img/img/product-type-icons/home-insurance.png" alt="no picture" />
    </div>
    <div v-if="activeProductType == 'auto-insurance'">
      <img class="mr-[16px]" width="56" height="56" viewBox="0 0 56 56" fill="none"
        src="/src/assets/img/img/product-type-icons/car-insurance.png" alt="no picture" />
    </div>

    <div>
      <p class="font-semibold text-xl leading-[32px] mb-[4px] text-darkBlue">Info & coverage</p>
      <p class="text-sm tracking-[0.2px] leading-[20px] text-textDarkGray">
        {{ clientContactInfo.first_name }}
        {{ clientContactInfo.last_name }}
        {{ clientContactInfo.first_name }}
        {{ clientContactInfo.address1 }}
        {{ clientContactInfo.address2 }}
        {{ clientContactInfo.state }}
        {{ clientContactInfo.city }}
        {{ clientContactInfo.zip_code }}
        {{ clientContactInfo.country }}

      </p>

    </div>
  </div>
  <div class="content info-coverage box-content w-full pb-[40px]">

    <!-- <div class="flex items-center w-fit mb-[24px] mx-[-24px] px-[24px] pt-[40px] border-t-[1px] border-textGrayLight">
                                                                                              <span class="w-[24px] h-[24px] mr-[8px] bg-blue text-white rounded-[12px] flex items-center justify-center">1</span>
                                                                                              <p class="font-semibold text-darkBlue">Requested Policy Variables</p>
                                                                                            </div> -->
    <!-- AUTO, done. -->
    <!-- <div v-if="activeProductType === 'auto-insurance'" class="flex flex-col md:flex-row md:flex-wrap w-full relative">
                            <SelectField class="form-field select-field" :width="320"
                              :options="['Preferred', 'Premium', 'Standard', 'State Minimum']"
                              :default="autoRequest?.data?.requested_policy?.coverage_type ? autoRequest.data.requested_policy.coverage_type : ' '"
                              :label="'Coverage type *'" :required="true"
                              :class="vehicleInformationFormFieldsStatus.coverage_type ? 'valid' : 'not-valid'"
                              @input="selectVehicleFieldValue('requested_coverage_type', $event)" />
                            <CustomSelectButton class="form-field md:mt-[-30px]" :required="false"
                              :options="['25/50', '50/100', '100/300', '250/500']" :title="'Bodily injury'" :stylingTheme="1"
                              :default="autoRequest?.data?.requested_policy?.bodily_injury ? autoRequest.data.requested_policy.bodily_injury : '25/50'"
                              @input="selectVehicleFieldValue('requested_bodily_injury', $event)" />
                            <InputField class="form-field input-field" :numbersOnly="true" :required="false" :prefix="'$'"
                              :placeholder="'Property damage'"
                              :default="autoRequest?.data?.requested_policy?.property_damage ? autoRequest.data.requested_policy.property_damage : null"
                              @input="selectVehicleFieldValue('requested_property_damage', $event, true, null)" />
                          </div> -->
    <!-- HOME, done. -->
    <div v-if="activeProductType === 'home-insurance'" class="flex flex-col w-full">
      <div class="flex flex-col md:flex-row md:flex-wrap w-full">
        <div class="flex flex-col md:mt-[-21px]">
          <span :class="homeInformationFormFieldsStatus.year_built ? 'valid' : 'not-valid'"
            class="datepicker-label text-sm mb-[2px]">Year Built *</span>
          <Datepicker class="w-[320px] max-w-[100%] mb-[20px]" v-model="homeRequest.data.current_policy.year_built"
            :class="homeInformationFormFieldsStatus.year_built ? 'valid' : 'not-valid'" :enable-time-picker="false"
            :min-date="new Date()" />
        </div>

        <div class="flex flex-col md:mt-[-21px]">
          <span :class="homeInformationFormFieldsStatus.roof_year ? 'valid' : 'not-valid'"
            class="datepicker-label text-sm mb-[2px]">Roof Year *</span>
          <Datepicker class="w-[320px] max-w-[100%] mb-[20px]" v-model="homeRequest.data.current_policy.roof_year"
            :class="homeInformationFormFieldsStatus.roof_year ? 'valid' : 'not-valid'" :enable-time-picker="false"
            :min-date="new Date()" />
        </div>

        <SelectField class="form-field select-field" :width="320"
          :options="['Frame', 'Masonry', 'Masonry Veneer', 'Brick Veneer', 'Superior Non Combustible', 'Steel']"
          :label="'Construction Type *'" :required="true"
          :default="homeRequest?.data?.requested_policy?.construction_type ? homeRequest.data.requested_policy.construction_type : ' '"
          :class="homeInformationFormFieldsStatus.requested_construction_type ? 'valid' : 'not-valid'"
          @input="selectHomeFieldValue('requested_construction_type', $event)" />

        <SelectField class="form-field select-field" :width="320"
          :options="['Single Family', '2-4 Family', 'Townhouse/Rowhouse', 'Condo']" :label="'Occupancy Type *'"
          :required="true"
          :default="homeRequest?.data?.requested_policy?.occupancy_type ? homeRequest.data.requested_policy.occupancy_type : ' '"
          :class="homeInformationFormFieldsStatus.requested_occupancy_type ? 'valid' : 'not-valid'"
          @input="selectHomeFieldValue('requested_occupancy_type', $event)" />

        <SelectField class="form-field select-field" :width="320" :options="['Primary Home', 'Secondary']"
          :label="'Building Use *'" :required="true"
          :default="homeRequest?.data?.requested_policy?.building_use ? homeRequest.data.requested_policy.building_use : ' '"
          :class="homeInformationFormFieldsStatus.requested_building_use ? 'valid' : 'not-valid'"
          @input="selectHomeFieldValue('requested_building_use', $event)" />

        <SelectField class="form-field select-field" :width="320" :options="[' HO3', 'HO6', 'DP3']" :label="'Form Type *'"
          :required="true"
          :default="homeRequest?.data?.requested_policy?.form_type ? homeRequest.data.requested_policy.form_type : ' '"
          :class="homeInformationFormFieldsStatus.requested_form_type ? 'valid' : 'not-valid'"
          @input="selectHomeFieldValue('requested_form_type', $event)" />

        <InputField :numbersOnly="true" :required="true" class="form-field mb-[32px]" :placeholder="'SQFT *'"
          :default="homeRequest?.data?.requested_policy?.sqft ? homeRequest.data.requested_policy.sqft : ''"
          :class="homeInformationFormFieldsStatus.requested_sqft ? 'valid' : 'not-valid'"
          :errorState="!homeInformationFormFieldsStatus?.sqft" :errorDescription="'more than 10'"
          @input="selectHomeFieldValue('requested_sqft', $event)" />

      </div>

      <!-- <InputField class="form-field input-field" :numbersOnly="true" :required="true" :placeholder="'Replacement cost *'"
                                :prefix="'$'"
                                :default="homeRequest?.data?.requested_policy?.replacement_cost ? homeRequest.data.requested_policy.replacement_cost : null"
                                :class="homeInformationFormFieldsStatus.requested_replacement_cost ? 'valid' : 'not-valid'"
                                :errorState="!homeInformationFormFieldsStatus.requested_replacement_cost"
                                :errorDescription="'greater then 10,000'"
                                @input="selectHomeFieldValue('requested_replacement_cost', $event, true)" /> -->



    </div>

    <!-- <div class="flex w-fit items-center mb-[24px] mx-[-24px] px-[24px] pt-[40px] border-t-[1px] border-textGrayLight">
                    <span class="w-[24px] h-[24px] mr-[8px] bg-blue text-white rounded-[12px] flex items-center justify-center">2</span>
                    <p class="font-semibold text-darkBlue">Current Policy Variables</p>
                  </div> -->
    <!-- AUTO, done. -->
    <!-- <div v-if="activeProductType === 'auto-insurance'" class="flex flex-col md:flex-row md:flex-wrap w-full">
                            <SelectField class="form-field select-field" :width="320"
                              :options="['Company Not Listed', '21st Century Insurance', 'AAA Insurance Co.', 'AARP', 'AETNA', 'AFLAC', 'AIG', 'AIU Insurance', 'Allied', 'Allstate County Mutual', 'Allstate Indemnity', 'Allstate Insurance', 'American Alliance Insurance', 'American Automobile Insurance', 'American Casualty', 'American Deposit Insurance', 'American Direct Business Insurance', 'American Empire Insurance', 'American Family Insurance', 'American Family Mutual', 'American Financial', 'American Health Underwriters', 'American Home Assurance', 'American Insurance', 'American International Ins', 'American International Pacific', 'American International South', 'American Manufacturers', 'American Mayflower Insurance', 'American Motorists Insurance', 'American National Insurance', 'American Premier Insurance', 'American Protection Insurance', 'American Republic', 'American Savers Plan', 'American Security Insurance Company', 'American Service Insurance', 'American Skyline Insurance Company', 'American Spirit Insurance', 'American Standard Insurance - OH', 'American Standard Insurance - WI', 'AmeriPlan', 'Amica Insurance', 'Answer Financial', 'Arbella', 'Associated Indemnity', 'Assurant', 'Atlanta Casualty', 'Atlantic Indemnity', 'Auto Club Insurance Company', 'AXA Advisors', 'Bankers Life and Casualty', 'Banner Life', 'Best Agency USA', 'Blue Cross and Blue Shield', 'Brooke Insurance', 'Cal Farm Insurance', 'California State Automobile Association', 'Chubb', 'Citizens', 'Clarendon American Insurance', 'Clarendon National Insurance', 'CNA', 'Colonial Insurance', 'Comparison Market', 'Continental Casualty', 'Continental Divide Insurance', 'Continental Insurance', 'Cotton States Insurance', 'Country Insurance and Financial Services', 'Countrywide Insurance', 'CSE Insurance Group', 'Dairyland County Mutual Co of TX', 'Dairyland Insurance', 'eHealthInsurance Services', 'Electric Insurance', 'Erie Insurance Company', 'Erie Insurance Exchange', 'Erie Insurance Group', 'Erie Insurance Property and Casualty', 'Esurance', 'Farm Bureau/Farm Family/Rural', 'Farmers Insurance', 'Farmers Insurance Exchange', 'Farmers TX County Mutual', 'Farmers Union', 'FinanceBox.com', 'Fire and Casualty Insurance Co of CT', 'Fireman\'s Fund', 'Foremost', 'Foresters', 'Geico Casualty', 'Geico General Insurance', 'Geico Indemnity', 'GMAC Insurance', 'Golden Rule Insurance', 'Government Employees Insurance', 'Guaranty National Insurance', 'Guide One Insurance', 'Hanover Lloyd\'s Insurance Company', 'Hartford Accident and Indemnity', 'Hartford Casualty Insurance', 'Hartford Fire Insurance', 'Hartford Insurance Co of Illinois', 'Hartford Insurance Co of the Southeast', 'Hartford Omni', 'Hartford Underwriters Insurance', 'Health Benefits Direct', 'Health Choice One', 'Health Plus of America', 'HealthShare American', 'Humana', 'IFA Auto Insurance', 'IGF Insurance', 'Infinity Insurance', 'Infinity National Insurance', 'Infinity Select Insurance', 'Insurance Insight', 'Insurance.com', 'InsuranceLeads.com', 'InsWeb', 'Integon', 'John Hancock', 'Kaiser Permanente', 'Kemper Lloyds Insurance', 'Landmark American Insurance', 'Leader National Insurance', 'Leader Preferred Insurance', 'Leader Specialty Insurance', 'Liberty Insurance Corp', 'Liberty Mutual Fire Insurance', 'Liberty Mutual Insurance', 'Liberty National', 'Liberty Northwest Insurance', 'Lumbermens Mutual', 'Maryland Casualty', 'Mass Mutual', 'Mega/Midwest', 'Mercury', 'MetLife Auto and Home', 'Metropolitan Insurance Co.', 'Mid Century Insurance', 'Mid-Continent Casualty', 'Middlesex Insurance', 'Midland National Life', 'Mutual of New York', 'Mutual Of Omaha', 'National Ben Franklin Insurance', 'National Casualty', 'National Continental Insurance', 'National Fire Insurance Company of Hartford', 'National Health Insurance', 'National Indemnity', 'National Union Fire Insurance of LA', 'National Union Fire Insurance of PA', 'Nationwide General Insurance', 'Nationwide Insurance Company', 'Nationwide Mutual Fire Insurance', 'Nationwide Mutual Insurance', 'Nationwide Property and Casualty', 'New England Financial', 'New York Life Insurance', 'Northwestern Mutual Life', 'Northwestern Pacific Indemnity', 'Omni Indemnity', 'Omni Insurance', 'Orion Insurance', 'Pacific Indemnity', 'Pacific Insurance', 'Pafco General Insurance', 'Patriot General Insurance', 'Peak Property and Casualty Insurance', 'PEMCO Insurance', 'Physicians', 'Preferred Mutual', 'Progressive', 'Progressive Auto Pro', 'Prudential Insurance Co.', 'Reliance Insurance', 'Reliance National Indemnity', 'Reliance National Insurance', 'Republic Indemnity', 'Response Insurance', 'SAFECO', 'Safeway Insurance', 'Safeway Insurance Co of AL', 'Safeway Insurance Co of GA', 'Safeway Insurance Co of LA', 'Security Insurance Co of Hartford', 'Security National Insurance Co of FL', 'Sentinel Insurance', 'Sentry Insurance a Mutual Company', 'Sentry Insurance Group', 'Shelter Insurance Co.', 'St. Paul', 'St. Paul Fire and Marine', 'St. Paul Insurance', 'Standard Fire Insurance Company', 'State and County Mutual Fire Insurance', 'State Farm County', 'State Farm Fire and Cas', 'State Farm General', 'State Farm Indemnity', 'State Farm Insurance Co.', 'State Farm Lloyds Tx', 'State Farm Mutual Auto', 'State Fund', 'State National Insurance', 'Superior American Insurance', 'Superior Guaranty Insurance', 'Superior Insurance', 'Sure Health Plans', 'The Ahbe Group', 'The General', 'The Hartford', 'TICO Insurance', 'TIG Countrywide Insurance', 'Titan', 'TransAmerica', 'Travelers Indemnity', 'Travelers Insurance Company', 'Tri-State Consumer Insurance', 'Twin City Fire Insurance', 'UniCare', 'United American/Farm and Ranch', 'United Pacific Insurance', 'United Security', 'United Services Automobile Association', 'Unitrin Direct', 'Universal Underwriters Insurance', 'US Financial', 'USA Benefits/Continental General', 'USAA', 'USF and G', 'Viking County Mutual Insurance', 'Viking Insurance Co of WI', 'Western and Southern Life', 'Western Mutual', 'Windsor Insurance', 'Woodlands Financial Group', 'Zurich North America']"
                              :default="getDefaultInsuranceValue()" :label="'Insurance Company *'" :required="true"
                              :class="vehicleInformationFormFieldsStatus.insurance_company ? 'valid' : 'not-valid'"
                              @input="selectCommonFieldValue('current_policy_insurance_company', $event)" />

                            <div class="flex flex-col md:mt-[-21px]">
                              <span class="datepicker-label text-sm mb-[2px]">Expiration date</span>
                              <Datepicker class="w-[320px] max-w-[100%] mb-[20px]" v-model="autoRequest.data.current_policy.expiration_date"
                                :enable-time-picker="false" :min-date="new Date()" />
                            </div>

                            <SelectField class="form-field select-field" :width="320"
                              :options="['Fire and Liability', 'Full Package', 'Liability Only']" :label="'Coverage type'" :required="false"
                              :default="autoRequest?.data?.current_policy?.coverage_type ? autoRequest.data.current_policy.coverage_type : ' '"
                              @input="selectVehicleFieldValue('current_coverage_type', $event)" />
                          </div> -->
    <!-- HOME, done. -->
    <div v-if="activeProductType === 'home-insurance'" class="flex flex-col w-full">
      <div class="flex flex-col md:flex-row md:flex-wrap">
        <!-- <SelectField class="form-field select-field" :width="320"
                          :options="['Company Not Listed', '21st Century Insurance', 'AAA Insurance Co.', 'AARP', 'AETNA', 'AFLAC', 'AIG', 'AIU Insurance', 'Allied', 'Allstate County Mutual', 'Allstate Indemnity', 'Allstate Insurance', 'American Alliance Insurance', 'American Automobile Insurance', 'American Casualty', 'American Deposit Insurance', 'American Direct Business Insurance', 'American Empire Insurance', 'American Family Insurance', 'American Family Mutual', 'American Financial', 'American Health Underwriters', 'American Home Assurance', 'American Insurance', 'American International Ins', 'American International Pacific', 'American International South', 'American Manufacturers', 'American Mayflower Insurance', 'American Motorists Insurance', 'American National Insurance', 'American Premier Insurance', 'American Protection Insurance', 'American Republic', 'American Savers Plan', 'American Security Insurance Company', 'American Service Insurance', 'American Skyline Insurance Company', 'American Spirit Insurance', 'American Standard Insurance - OH', 'American Standard Insurance - WI', 'AmeriPlan', 'Amica Insurance', 'Answer Financial', 'Arbella', 'Associated Indemnity', 'Assurant', 'Atlanta Casualty', 'Atlantic Indemnity', 'Auto Club Insurance Company', 'AXA Advisors', 'Bankers Life and Casualty', 'Banner Life', 'Best Agency USA', 'Blue Cross and Blue Shield', 'Brooke Insurance', 'Cal Farm Insurance', 'California State Automobile Association', 'Chubb', 'Citizens', 'Clarendon American Insurance', 'Clarendon National Insurance', 'CNA', 'Colonial Insurance', 'Comparison Market', 'Continental Casualty', 'Continental Divide Insurance', 'Continental Insurance', 'Cotton States Insurance', 'Country Insurance and Financial Services', 'Countrywide Insurance', 'CSE Insurance Group', 'Dairyland County Mutual Co of TX', 'Dairyland Insurance', 'eHealthInsurance Services', 'Electric Insurance', 'Erie Insurance Company', 'Erie Insurance Exchange', 'Erie Insurance Group', 'Erie Insurance Property and Casualty', 'Esurance', 'Farm Bureau/Farm Family/Rural', 'Farmers Insurance', 'Farmers Insurance Exchange', 'Farmers TX County Mutual', 'Farmers Union', 'FinanceBox.com', 'Fire and Casualty Insurance Co of CT', 'Fireman\'s Fund', 'Foremost', 'Foresters', 'Geico Casualty', 'Geico General Insurance', 'Geico Indemnity', 'GMAC Insurance', 'Golden Rule Insurance', 'Government Employees Insurance', 'Guaranty National Insurance', 'Guide One Insurance', 'Hanover Lloyd\'s Insurance Company', 'Hartford Accident and Indemnity', 'Hartford Casualty Insurance', 'Hartford Fire Insurance', 'Hartford Insurance Co of Illinois', 'Hartford Insurance Co of the Southeast', 'Hartford Omni', 'Hartford Underwriters Insurance', 'Health Benefits Direct', 'Health Choice One', 'Health Plus of America', 'HealthShare American', 'Humana', 'IFA Auto Insurance', 'IGF Insurance', 'Infinity Insurance', 'Infinity National Insurance', 'Infinity Select Insurance', 'Insurance Insight', 'Insurance.com', 'InsuranceLeads.com', 'InsWeb', 'Integon', 'John Hancock', 'Kaiser Permanente', 'Kemper Lloyds Insurance', 'Landmark American Insurance', 'Leader National Insurance', 'Leader Preferred Insurance', 'Leader Specialty Insurance', 'Liberty Insurance Corp', 'Liberty Mutual Fire Insurance', 'Liberty Mutual Insurance', 'Liberty National', 'Liberty Northwest Insurance', 'Lumbermens Mutual', 'Maryland Casualty', 'Mass Mutual', 'Mega/Midwest', 'Mercury', 'MetLife Auto and Home', 'Metropolitan Insurance Co.', 'Mid Century Insurance', 'Mid-Continent Casualty', 'Middlesex Insurance', 'Midland National Life', 'Mutual of New York', 'Mutual Of Omaha', 'National Ben Franklin Insurance', 'National Casualty', 'National Continental Insurance', 'National Fire Insurance Company of Hartford', 'National Health Insurance', 'National Indemnity', 'National Union Fire Insurance of LA', 'National Union Fire Insurance of PA', 'Nationwide General Insurance', 'Nationwide Insurance Company', 'Nationwide Mutual Fire Insurance', 'Nationwide Mutual Insurance', 'Nationwide Property and Casualty', 'New England Financial', 'New York Life Insurance', 'Northwestern Mutual Life', 'Northwestern Pacific Indemnity', 'Omni Indemnity', 'Omni Insurance', 'Orion Insurance', 'Pacific Indemnity', 'Pacific Insurance', 'Pafco General Insurance', 'Patriot General Insurance', 'Peak Property and Casualty Insurance', 'PEMCO Insurance', 'Physicians', 'Preferred Mutual', 'Progressive', 'Progressive Auto Pro', 'Prudential Insurance Co.', 'Reliance Insurance', 'Reliance National Indemnity', 'Reliance National Insurance', 'Republic Indemnity', 'Response Insurance', 'SAFECO', 'Safeway Insurance', 'Safeway Insurance Co of AL', 'Safeway Insurance Co of GA', 'Safeway Insurance Co of LA', 'Security Insurance Co of Hartford', 'Security National Insurance Co of FL', 'Sentinel Insurance', 'Sentry Insurance a Mutual Company', 'Sentry Insurance Group', 'Shelter Insurance Co.', 'St. Paul', 'St. Paul Fire and Marine', 'St. Paul Insurance', 'Standard Fire Insurance Company', 'State and County Mutual Fire Insurance', 'State Farm County', 'State Farm Fire and Cas', 'State Farm General', 'State Farm Indemnity', 'State Farm Insurance Co.', 'State Farm Lloyds Tx', 'State Farm Mutual Auto', 'State Fund', 'State National Insurance', 'Superior American Insurance', 'Superior Guaranty Insurance', 'Superior Insurance', 'Sure Health Plans', 'The Ahbe Group', 'The General', 'The Hartford', 'TICO Insurance', 'TIG Countrywide Insurance', 'Titan', 'TransAmerica', 'Travelers Indemnity', 'Travelers Insurance Company', 'Tri-State Consumer Insurance', 'Twin City Fire Insurance', 'UniCare', 'United American/Farm and Ranch', 'United Pacific Insurance', 'United Security', 'United Services Automobile Association', 'Unitrin Direct', 'Universal Underwriters Insurance', 'US Financial', 'USA Benefits/Continental General', 'USAA', 'USF and G', 'Viking County Mutual Insurance', 'Viking Insurance Co of WI', 'Western and Southern Life', 'Western Mutual', 'Windsor Insurance', 'Woodlands Financial Group', 'Zurich North America']"
                          :default="getDefaultInsuranceValue()" :label="'Insurance Company *'" :required="true"
                          :class="homeInformationFormFieldsStatus.current_insurance_company ? 'valid' : 'not-valid'"
                          @input="selectCommonFieldValue('current_policy_insurance_company', $event)" /> -->
        <!-- <div class="flex flex-col md:mt-[-21px]">
                                <span :class="homeInformationFormFieldsStatus.current_expiration_date ? 'valid' : 'not-valid'"
                                  class="datepicker-label text-sm mb-[2px]">Expiration date *</span>
                                <Datepicker class="w-[320px] max-w-[100%] mb-[20px]" v-model="homeRequest.data.current_policy.expiration_date"
                                  :class="homeInformationFormFieldsStatus.current_expiration_date ? 'valid' : 'not-valid'"
                                  :enable-time-picker="false" :min-date="new Date()" />
                              </div> -->
        <!-- <SelectField class="form-field select-field" :width="320"
                            :options="['Fire and Liability', 'Full Package', 'Liability Only']" :label="'Coverage type *'" :required="true"
                            :default="homeRequest?.data?.current_policy?.coverage_type ? homeRequest.data.current_policy.coverage_type : ' '"
                            :class="homeInformationFormFieldsStatus.current_coverage_type ? 'valid' : 'not-valid'"
                            @input="selectHomeFieldValue('current_coverage_type', $event)" /> -->
      </div>
    </div>
    <!-- AUTO, done. -->
    <!-- <div v-if="activeProductType === 'auto-insurance'" class="flex flex-col w-full">
                            <div class="flex items-center mb-[24px] mx-[-24px] px-[24px] pt-[40px] border-t-[1px] border-textGrayLight">
                              <span
                                class="w-[24px] h-[24px] mr-[8px] bg-blue text-white rounded-[12px] flex items-center justify-center">3</span>
                              <p class="font-semibold text-darkBlue">Driver Information</p>
                            </div>

                            <div class="flex flex-col md:flex-row md:flex-wrap">
                              <InputField class="form-field input-field mb-[32px]" :required="true" :placeholder="'First name *'"
                                :default="autoRequest?.data?.drivers?.[0]?.first_name ? autoRequest?.data?.drivers?.[0]?.first_name : ''"
                                :class="vehicleInformationFormFieldsStatus.driver_first_name ? 'valid' : 'not-valid'"
                                @input="selectVehicleFieldValue('driver_first_name', $event)" />
                              <InputField class="form-field input-field mb-[32px]" :required="true" :placeholder="'Last name *'"
                                :default="autoRequest?.data?.drivers?.[0]?.last_name ? autoRequest?.data?.drivers?.[0]?.last_name : ''"
                                :class="vehicleInformationFormFieldsStatus.driver_last_name ? 'valid' : 'not-valid'"
                                @input="selectVehicleFieldValue('driver_last_name', $event)" />
                            </div>
                            <span :class="vehicleInformationFormFieldsStatus.driver_birth_date ? 'valid' : 'not-valid'"
                              class="datepicker-label text-sm mb-[2px]">Birth date *</span>
                            <Datepicker class="w-[320px] max-w-[100%] mb-[20px]" v-model="autoRequest.data.drivers[0].birth_date"
                              :class="vehicleInformationFormFieldsStatus.driver_birth_date ? 'valid' : 'not-valid'" :enable-time-picker="false"
                              :max-date="new Date()" />
                            <CustomSelectButton class="form-field mb-[32px]" :buttonsWidth="100" :required="false" :options="['M', 'F']"
                              :title="'Gender *'" :stylingTheme="1"
                              :default="autoRequest?.data?.drivers?.[0]?.gender ? autoRequest?.data?.drivers?.[0]?.gender : ' '"
                              :class="vehicleInformationFormFieldsStatus.driver_gender ? 'valid' : 'not-valid'"
                              @input="selectVehicleFieldValue('driver_gender', $event)" />
                            <div class="flex flex-col md:flex-row md:flex-wrap">
                              <SelectField class="form-field select-field mb-[32px]" :width="320"
                                :options="['Single', 'Married', 'Separated', 'Divorced', 'Widowed', 'Domestic Partner']"
                                :label="'Marital status'" :required="true"
                                :default="autoRequest?.data?.drivers?.[0]?.marital_status ? autoRequest?.data?.drivers?.[0]?.marital_status : ' '"
                                @input="selectVehicleFieldValue('driver_marital_status', $event)" />
                              <SelectField class="form-field select-field mb-[32px]" :width="320"
                                :options="['Self', 'Child', 'Spouse', 'Grandchild', 'Grandparent', 'Sibling', 'Parent', 'Other']"
                                :label="'Relationship'" :required="true"
                                :default="autoRequest?.data?.drivers?.[0]?.relationship ? autoRequest?.data?.drivers?.[0]?.relationship : ' '"
                                @input="selectVehicleFieldValue('driver_relationship', $event)" />
                              <SelectField class="form-field select-field mb-[32px]" :width="320"
                                :options="['Active', 'International', 'Learner', 'Probation', 'Restricted', 'Suspended', 'Temporary']"
                                :label="'License status'" :required="true"
                                :default="autoRequest?.data?.drivers?.[0]?.license_status ? autoRequest?.data?.drivers?.[0]?.license_status : ' '"
                                @input="selectVehicleFieldValue('driver_license_status', $event)" />
                              <SelectField :required="true" class="form-field select-field mb-[32px]" :width="320"
                                :options="['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']"
                                :label="'License state'"
                                :default="autoRequest?.data?.drivers?.[0]?.license_state ? autoRequest?.data?.drivers?.[0]?.license_state : ' '"
                                @input="selectVehicleFieldValue('driver_license_state', $event)" />
                            </div>
                            <CheckboxField :hasOneLineLabel="true" :label="'License ever suspended'" class="mr-[32px]"
                              :value="autoRequest?.data?.drivers?.[0]?.license_ever_suspended ? autoRequest?.data?.drivers?.[0]?.license_ever_suspended : false"
                              @input="selectVehicleFieldValue('driver_license_ever_suspended', $event)" />
                            <InputField class="form-field input-field mb-[32px]" :numbersOnly="true" :required="false"
                              :placeholder="'Age licensed'"
                              :default="autoRequest?.data?.drivers?.[0]?.age_licensed ? autoRequest?.data?.drivers?.[0]?.age_licensed : ''"
                              @input="selectVehicleFieldValue('driver_age_licensed', $event)" />
                            <CustomSelectButton class="form-field mb-[32px]" :required="false" :options="['Own', 'Rent', 'Other']"
                              :title="'Residence type'" :stylingTheme="1"
                              :default="autoRequest?.data?.drivers?.[0]?.residence_type ? autoRequest?.data?.drivers?.[0]?.residence_type : ' '"
                              @input="selectVehicleFieldValue('driver_residence_type', $event)" />
                            <div class="flex flex-col md:flex-row md:flex-wrap">
                              <InputField class="form-field input-field mb-[32px]" :numbersOnly="true" :required="false"
                                :placeholder="'Months at residence'"
                                :default="autoRequest?.data?.drivers?.[0]?.months_at_residence ? autoRequest?.data?.drivers?.[0]?.months_at_residence : ''"
                                @input="selectVehicleFieldValue('driver_months_at_residence', $event)" />
                              <InputField class="form-field input-field mb-[32px]" :numbersOnly="true" :required="false"
                                :placeholder="'Occupation'"
                                :default="autoRequest?.data?.drivers?.[0]?.occupation ? autoRequest?.data?.drivers?.[0]?.occupation : ''"
                                @input="selectVehicleFieldValue('driver_occupation', $event)" />
                              <InputField class="form-field input-field mb-[32px]" :numbersOnly="true" :required="false"
                                :placeholder="'Months at employer'"
                                :default="autoRequest?.data?.drivers?.[0]?.months_at_employer ? autoRequest.data.drivers[0].months_at_employer : ''"
                                @input="selectVehicleFieldValue('driver_months_at_employer', $event)" />
                              <SelectField :required="false" class="form-field select-field mb-[32px]" :width="320"
                                :options="['High School Diploma', 'Associate Degree', 'Bachelors Degree', 'Masters Degree', 'Doctorate Degree', 'Some College', 'Some or No High School', 'Less than High School']"
                                :label="'Education'"
                                :default="autoRequest?.data?.drivers?.[0]?.education ? autoRequest.data.drivers[0].education : ' '"
                                @input="selectVehicleFieldValue('driver_education', $event)" />
                            </div>
                            <CheckboxField :hasOneLineLabel="true" :label="'Requires SR22'" class="mr-[32px]"
                              :value="autoRequest?.data?.drivers?.[0]?.requires_sr22 ? autoRequest.data.drivers[0].requires_sr22 : false"
                              @input="selectVehicleFieldValue('driver_requires_sr22', $event)" />
                            <CheckboxField :hasOneLineLabel="true" :label="'Recent bankruptcy'" class="mr-[32px]"
                              :value="autoRequest?.data?.drivers?.[0]?.bankruptcy ? autoRequest.data.drivers[0].bankruptcy : false"
                              @input="selectVehicleFieldValue('driver_bankruptcy', $event)" />
                            <div class="tickets pb-[40px]">
                              <div class="flex items-center mb-[24px] mx-[-24px] px-[24px] pt-[40px] border-t-[1px] border-textGrayLight">
                                <span
                                  class="w-[24px] h-[24px] mr-[8px] bg-blue text-white rounded-[12px] flex items-center justify-center">4</span>
                                <p class="font-semibold text-darkBlue">Driver recent tickets</p>
                              </div>
                              <div v-for="(item, index) in autoRequest.data.drivers[0].tickets">
                                <p class="font-semibold mb-[10px]">{{ index + 1 }}.</p>
                                <span :class="vehicleInformationFormFieldsStatus.tickets[index].ticket_date ? 'valid' : 'not-valid'"
                                  class="datepicker-label text-sm mb-[2px]">Ticket date *</span>
                                <Datepicker class="w-[320px] max-w-[100%] mb-[20px]"
                                  :class="vehicleInformationFormFieldsStatus.tickets[index].ticket_date ? 'valid' : 'not-valid'"
                                  v-model="autoRequest.data.drivers[0].tickets[index].ticket_date" :enable-time-picker="false"
                                  :max-date="new Date()" />
                                <SelectField class="form-field select-field mb-[32px]" :width="320"
                                  :options="['Careless driving', 'Carpool lane violation', 'Child not in car seat', 'Defective Equipment', 'Defective vehicle (reduced violation)', 'Driving too fast for conditions', 'Driving without a license', 'Excessive noise', 'Exhibition driving', 'Expired drivers license', 'Expired emissions', 'Expired Registration', 'Failure to obey traffic signal', 'Failure to signal', 'Failure to stop', 'Failure to yield', 'Following too close', 'Illegal lane change', 'Illegal passing', 'Illegal turn', 'Illegal turn on red', 'Illegal U Turn', 'Inattentive driving', 'No helmet', 'No insurance', 'No seatbelt', 'Other Ticket', 'Passing a school bus', 'Passing in a no-passing zone', 'Passing on shoulder', 'Ran a red light', 'Ran a stop sign', 'Speeding', 'Speeding less than 10 MPH over', 'Speeding more than 10 MPH over', 'Speeding more than 20 MPH over', 'Wrong way on a one way']"
                                  :default="' '" :label="'Ticket description'" :required="false"
                                  @input="selectVehicleFieldValue('ticket_description', $event, false, index)" />
                              </div>
                              <div class="flex">
                                <p v-on:click="addDriverTicket()" class="font-bold cursor-pointer">Add ticket</p>
                                <p v-if="autoRequest.data.drivers[0].tickets.length > 0" v-on:click="removeDriverTicket()"
                                  class="ml-[30px] font-bold cursor-pointer">Remove ticket</p>
                              </div>
                            </div>
                            <div class="major-violations pb-[40px]">
                              <div class="flex items-center mb-[24px] mx-[-24px] px-[24px] pt-[40px] border-t-[1px] border-textGrayLight">
                                <span
                                  class="w-[24px] h-[24px] mr-[8px] bg-blue text-white rounded-[12px] flex items-center justify-center">5</span>
                                <p class="font-semibold text-darkBlue">Driver major violations</p>
                              </div>
                              <div v-for="(item, index) in autoRequest.data.drivers[0].major_violations">
                                <p class="font-semibold mb-[10px]">{{ index + 1 }}.</p>
                                <span :class="vehicleInformationFormFieldsStatus.major_violations[index].violation_date ? 'valid' : 'not-valid'"
                                  class="datepicker-label text-sm mb-[2px]">Violation date *</span>
                                <Datepicker class="w-[320px] max-w-[100%] mb-[20px]"
                                  :class="vehicleInformationFormFieldsStatus.major_violations[index].violation_date ? 'valid' : 'not-valid'"
                                  v-model="autoRequest.data.drivers[0].major_violations[index].violation_date" :enable-time-picker="false"
                                  :max-date="new Date()" />
                                <SelectField class="form-field select-field mb-[32px]" :width="320"
                                  :options="['Driving While Suspended/Revoked', 'Drunk Driving - Injury', 'Drunk Driving - no Injury', 'Hit and Run - Injury', 'Hit and Run - no Injury', 'Reckless Driving - Injury', 'Reckless Driving - no Injury', 'Speeding Over 100']"
                                  :default="autoRequest?.data?.drivers?.[0]?.major_violations?.[index]?.description ? autoRequest.data.drivers[0].major_violations[index].description : ' '"
                                  :label="'Violation description'" :required="false"
                                  @input="selectVehicleFieldValue('violation_description', $event, false, index)" />
                                <SelectField :required="true" class="form-field select-field mb-[32px]" :width="320"
                                  :options="['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']"
                                  :default="autoRequest?.data?.drivers?.[0]?.major_violations?.[index]?.state ? autoRequest.data.drivers[0].major_violations[index].state : ' '"
                                  :label="'State violation occurred in'"
                                  @input="selectVehicleFieldValue('violation_state', $event, false, index)" />
                              </div>
                              <div class="flex">
                                <p v-on:click="addDriverViolation()" class="font-bold cursor-pointer">Add violation</p>
                                <p v-if="autoRequest.data.drivers[0].major_violations.length > 0" v-on:click="removeDriverViolation()"
                                  class="ml-[30px] font-bold cursor-pointer">Remove violation</p>
                              </div>
                            </div>
                            <div class="accidents pb-[40px]">
                              <div class="flex items-center mb-[24px] mx-[-24px] px-[24px] pt-[40px] border-t-[1px] border-textGrayLight">
                                <span
                                  class="w-[24px] h-[24px] mr-[8px] bg-blue text-white rounded-[12px] flex items-center justify-center">6</span>
                                <p class="font-semibold text-darkBlue">Driver recent accidents</p>
                              </div>
                              <div v-for="(item, index) in autoRequest.data.drivers[0].accidents">
                                <p class="font-semibold mb-[10px]">{{ index + 1 }}.</p>
                                <span :class="vehicleInformationFormFieldsStatus.accidents[index].accident_date ? 'valid' : 'not-valid'"
                                  class="datepicker-label text-sm mb-[2px]">Accident date *</span>
                                <Datepicker class="w-[320px] max-w-[100%] mb-[20px]"
                                  :class="vehicleInformationFormFieldsStatus.accidents[index].accident_date ? 'valid' : 'not-valid'"
                                  v-model="autoRequest.data.drivers[0].accidents[index].accident_date" :enable-time-picker="false"
                                  :max-date="new Date()" />
                                <SelectField class="form-field select-field mb-[32px]" :width="320"
                                  :options="['Not Listed', 'Other Vehicle Hit Yours', 'Vehicle Damaged Avoiding Accident', 'Vehicle Hit Pedestrian', 'Vehicle Hit Property', 'Vehicle Hit Vehicle']"
                                  :default="autoRequest?.data?.drivers?.[0]?.accidents?.[index]?.description ? autoRequest.data.drivers[0].accidents[index].description : ' '"
                                  :label="'Accident description'" :required="false"
                                  @input="selectVehicleFieldValue('accident_description', $event, false, index)" />
                                <CheckboxField :hasOneLineLabel="true" :label="'Was driver at fault?'" class="mr-[32px]"
                                  :value="autoRequest?.data?.drivers?.[0]?.accidents?.[index]?.at_fault ? autoRequest.data.drivers[0].accidents[index].at_fault : false"
                                  @input="selectVehicleFieldValue('accident_was_driver_fault', $event, false, index)" />
                                <SelectField class="form-field select-field mb-[32px]" :width="320"
                                  :options="['Not Applicable', 'People', 'Property', 'Both']"
                                  :default="autoRequest?.data?.drivers?.[0]?.accidents?.[index]?.damage ? autoRequest.data.drivers[0].accidents[index].damage : ' '"
                                  :label="'Accident damage'" :required="false"
                                  @input="selectVehicleFieldValue('accident_damage', $event, false, index)" />
                              </div>
                              <div class="flex">
                                <p v-on:click="addDriverAccident()" class="font-bold cursor-pointer">Add accident</p>
                                <p v-if="autoRequest.data.drivers[0].accidents.length > 0" v-on:click="removeDriverAccident()"
                                  class="ml-[30px] font-bold cursor-pointer">Remove accident</p>
                              </div>
                            </div>
                            <div class="claims pb-[40px]">
                              <div class="flex items-center mb-[24px] mx-[-24px] px-[24px] pt-[40px] border-t-[1px] border-textGrayLight">
                                <span
                                  class="w-[24px] h-[24px] mr-[8px] bg-blue text-white rounded-[12px] flex items-center justify-center">7</span>
                                <p class="font-semibold text-darkBlue">Driver recent claims</p>
                              </div>
                              <div v-for="(item, index) in autoRequest.data.drivers[0].claims">
                                <p class="font-semibold mb-[10px]">{{ index + 1 }}.</p>
                                <span :class="vehicleInformationFormFieldsStatus.claims[index].claim_date ? 'valid' : 'not-valid'"
                                  class="datepicker-label text-sm mb-[2px]">Claim date *</span>
                                <Datepicker :class="vehicleInformationFormFieldsStatus.claims[index].claim_date ? 'valid' : 'not-valid'"
                                  class="w-[320px] max-w-[100%] mb-[20px]" v-model="autoRequest.data.drivers[0].claims[index].claim_date"
                                  :enable-time-picker="false" :max-date="new Date()" />
                                <InputField class="form-field input-field" :placeholder="'Description'"
                                  :default="autoRequest.data?.drivers?.[0].claims?.[index]?.description ? autoRequest.data.drivers[0].claims[index].description : null"
                                  @input="selectVehicleFieldValue('claim_description', $event, false, index)" />
                                <InputField class="form-field input-field" :numbersOnly="true" :required="true" :prefix="'$'"
                                  :placeholder="'Paid amount'"
                                  :default="autoRequest.data?.drivers?.[0].claims?.[index]?.paid_amount ? autoRequest.data.drivers[0].claims[index].paid_amount : null"
                                  @input="selectVehicleFieldValue('claim_paid_amount', $event, true, index)" />
                              </div>
                              <div class="flex">
                                <p v-on:click="addDriverClaim()" class="font-bold cursor-pointer">Add claim</p>
                                <p v-if="autoRequest.data.drivers[0].claims.length > 0" v-on:click="removeDriverClaim()"
                                  class="ml-[30px] font-bold cursor-pointer">Remove claim</p>
                              </div>
                            </div>
                            <div class="flex items-center mb-[24px] mx-[-24px] px-[24px] pt-[40px] border-t-[1px] border-textGrayLight">
                              <span
                                class="w-[24px] h-[24px] mr-[8px] bg-blue text-white rounded-[12px] flex items-center justify-center">8</span>
                              <p class="font-semibold text-darkBlue">Vehicle Information</p>
                            </div>
                            <div class="flex flex-col md:flex-row md:flex-wrap">
                              <SelectField class="form-field select-field mb-[32px]" :width="320" :options="$data.vehicleYearVariants"
                                :label="'Vehicle year *'" :required="false"
                                :default="autoRequest?.data?.vehicles?.[0]?.year ? autoRequest?.data?.vehicles?.[0]?.year : ' '"
                                :class="vehicleInformationFormFieldsStatus.vehicle_year ? 'valid' : 'not-valid'"
                                @input="selectVehicleFieldValue('vehicle_year', $event); updateVehicleMakeVariants();" />
                              <SelectField class="form-field select-field mb-[32px]" :width="320" :options="$data.vehicleMakeVariants"
                                :label="'Vehicle make *'" :required="false"
                                :default="autoRequest?.data?.vehicles?.[0]?.make ? autoRequest?.data?.vehicles?.[0]?.make : ' '"
                                :class="vehicleInformationFormFieldsStatus.vehicle_make ? 'valid' : 'not-valid'"
                                @input="selectVehicleFieldValue('vehicle_make', $event); updateVehicleModelVariants();" />
                              <SelectField class="form-field select-field mb-[32px]" :width="320" :options="$data.vehicleModelVariants"
                                :label="'Vehicle model *'" :required="false"
                                :default="autoRequest?.data?.vehicles?.[0]?.model ? autoRequest?.data?.vehicles?.[0]?.model : ' '"
                                :class="vehicleInformationFormFieldsStatus.vehicle_model ? 'valid' : 'not-valid'"
                                @input="selectVehicleFieldValue('vehicle_model', $event)" />

                              <InputField class="form-field input-field mb-[32px]" :required="false" :placeholder="'Vehicle submodel'"
                                :default="autoRequest?.data?.vehicles?.[0]?.submodel ? autoRequest?.data?.vehicles?.[0]?.submodel : ''"
                                @input="selectVehicleFieldValue('vehicle_submodel', $event)" />
                              <InputField class="form-field input-field mb-[32px]" :required="false" :placeholder="'vin'"
                                :default="autoRequest?.data?.vehicles?.[0]?.vin ? autoRequest?.data?.vehicles?.[0]?.vin : ''"
                                @input="selectVehicleFieldValue('vehicle_vin', $event)" />
                            </div>
                            <div class="flex flex-wrap w-full">
                              <CheckboxField :hasOneLineLabel="true" :label="'Has vehicle been salvaged?'" class="mr-[32px]"
                                :value="autoRequest?.data?.vehicles?.[0]?.salvaged ? autoRequest?.data?.vehicles?.[0]?.salvaged : false"
                                @input="selectVehicleFieldValue('vehicle_salvaged', $event)" />
                              <CheckboxField :hasOneLineLabel="true" :label="'Is vehicle a rental?'" class="mr-[32px]"
                                :value="autoRequest?.data?.vehicles?.[0]?.rental ? autoRequest?.data?.vehicles?.[0]?.rental : false"
                                @input="selectVehicleFieldValue('vehicle_rental', $event)" />
                              <CheckboxField :hasOneLineLabel="true" :label="'Does vehicle having towing capabilities?'" class="mr-[32px]"
                                :value="autoRequest?.data?.vehicles?.[0]?.towing ? autoRequest.data.vehicles[0]?.towing : false"
                                @input="selectVehicleFieldValue('vehicle_towing', $event)" />
                              <CheckboxField :hasOneLineLabel="true" :label="'Does vehicle have four wheel drive?'" class="mr-[32px]"
                                :value="autoRequest?.data?.vehicles?.[0]?.four_wheel_drive ? autoRequest?.data?.vehicles?.[0]?.four_wheel_drive : false"
                                @input="selectVehicleFieldValue('vehicle_four_wheel_drive', $event)" />
                              <CheckboxField :hasOneLineLabel="true" :label="'Does vehicle have anti lock breaks?'" class="mr-[32px]"
                                :value="autoRequest?.data?.vehicles?.[0]?.abs ? autoRequest?.data?.vehicles?.[0]?.abs : false"
                                @input="selectVehicleFieldValue('vehicle_abs', $event)" />
                              <CheckboxField :hasOneLineLabel="true" :label="'Does vehicle have airbags?'" class="mr-[32px]"
                                :value="autoRequest?.data?.vehicles?.[0]?.airbags ? autoRequest?.data?.vehicles?.[0]?.airbags : false"
                                @input="selectVehicleFieldValue('vehicle_airbags', $event)" />
                              <CheckboxField :hasOneLineLabel="true" :label="'Does vehicle have automatic seat belts?'" class="mr-[32px]"
                                :value="autoRequest?.data?.vehicles?.[0]?.automatic_seat_belts ? autoRequest?.data?.vehicles?.[0]?.automatic_seat_belts : false"
                                @input="selectVehicleFieldValue('vehicle_automatic_seat_belts', $event)" />
                            </div>
                            <div class="flex flex-col md:flex-row md:flex-wrap">
                              <SelectField class="form-field select-field" :width="320"
                                :options="['Audible Alarm', 'Lojack', 'No Alarm', 'OnStar']" :label="'Alarm'" :required="false"
                                :default="autoRequest?.data?.vehicles?.[0]?.alarm ? autoRequest?.data?.vehicles?.[0]?.alarm : ' '"
                                @input="selectVehicleFieldValue('vehicle_alarm', $event)" />
                              <SelectField class="form-field select-field" :width="320"
                                :options="['Car Port', 'Full Garage', 'No Cover', 'On Street']" :label="'Garage'" :required="false"
                                :default="autoRequest?.data?.vehicles?.[0]?.garage ? autoRequest?.data?.vehicles?.[0]?.garage : ' '"
                                @input="selectVehicleFieldValue('vehicle_garage', $event)" />
                              <SelectField class="form-field select-field" :width="320" :options="['Own', 'Lease']" :label="'Ownership'"
                                :required="false"
                                :default="autoRequest?.data?.vehicles?.[0]?.ownership ? autoRequest?.data?.vehicles?.[0]?.ownership : ' '"
                                @input="selectVehicleFieldValue('vehicle_ownership', $event)" />
                              <SelectField class="form-field select-field" :width="320"
                                :options="['Business', 'Commute School', 'Commute Varies', 'Commute Work', 'Pleasure']"
                                :label="'Vehicle primary use'" :required="false"
                                :default="autoRequest?.data?.vehicles?.[0]?.primary_use ? autoRequest?.data?.vehicles?.[0]?.primary_use : ' '"
                                @input="selectVehicleFieldValue('vehicle_primary_use', $event)" />
                              <InputField class="form-field input-field mb-[32px]" :numbersOnly="true" :required="false"
                                :placeholder="'Annual miles'"
                                :default="autoRequest?.data?.vehicles?.[0]?.annual_miles ? autoRequest?.data?.vehicles?.[0]?.annual_miles : ''"
                                @input="selectVehicleFieldValue('vehicle_annual_miles', $event)" />
                              <InputField class="form-field input-field mb-[32px]" :numbersOnly="true" :required="false"
                                :placeholder="'Number of commute days a week'"
                                :default="autoRequest?.data?.vehicles?.[0]?.weekly_commute_days ? autoRequest?.data?.vehicles?.[0]?.weekly_commute_days : ''"
                                @input="selectVehicleFieldValue('vehicle_weekly_commute_days', $event)" />
                              <InputField class="form-field input-field mb-[32px]" :numbersOnly="true" :required="false"
                                :placeholder="'Daily one way commute distance'"
                                :default="autoRequest?.data?.vehicles?.[0]?.one_way_distance ? autoRequest?.data?.vehicles?.[0]?.one_way_distance : null"
                                @input="selectVehicleFieldValue('vehicle_one_way_distance', $event)" />
                              <InputField class="form-field input-field mb-[32px]" :required="false"
                                :placeholder="'Vehicle comprehensive deductible'"
                                :default="autoRequest?.data?.vehicles?.[0]?.comprehensive_deductible ? autoRequest?.data?.vehicles?.[0]?.comprehensive_deductible : ''"
                                @input="selectVehicleFieldValue('vehicle_comprehensive_deductible', $event)" />
                              <InputField class="form-field input-field mb-[32px]" :required="false"
                                :placeholder="'Vehicle collision deductible'"
                                :default="autoRequest?.data?.vehicles?.[0]?.collision_deductible ? autoRequest?.data?.vehicles?.[0]?.collision_deductible : ''"
                                @input="selectVehicleFieldValue('vehicle_collision_deductible', $event)" />
                            </div>
                          </div> -->
    <!-- HOME -->
    <div v-if="activeProductType === 'home-insurance'" class="flex flex-col w-full">
      <!-- <div class="flex w-fit items-center mb-[24px] mx-[-24px] px-[24px] pt-[40px] border-t-[1px] border-textGrayLight">
                    <span
                      class="w-[24px] h-[24px] mr-[8px] bg-blue text-white rounded-[12px] flex items-center justify-center">3</span>
                    <p class="font-semibold text-darkBlue">Dweller Information</p>
                  </div> -->
      <!-- <div class="flex flex-col w-full">
                    <CustomSelectButton class="form-field" :buttonsWidth="100" :required="false" :options="['M', 'F']"
                      :title="'Gender'" :stylingTheme="1" :default="homeRequest?.data?.gender ? homeRequest.data.gender : ' '"
                      @input="selectHomeFieldValue('data_gender', $event)" />

                    <span class="datepicker-label text-sm mb-[2px]">Birth date</span>
                    <Datepicker class="w-[320px] max-w-[100%] mb-[20px]" v-model="homeRequest.data.birth_date"
                      :enable-time-picker="false" :max-date="new Date()" />

                    <SelectField class="form-field select-field" :width="320"
                      :options="['Single', 'Married', 'Separated', 'Divorced', 'Widowed']" :label="'Marital status'" :required="true"
                      :default="homeRequest?.data?.marital_status ? homeRequest.data.marital_status : ' '"
                      @input="selectHomeFieldValue('data_marital_status', $event)" />
                    <InputField class="form-field input-field" :required="false" :placeholder="'Current occupation'"
                      :default="homeRequest?.data?.occupation ? homeRequest.data.occupation : ''"
                      @input="selectHomeFieldValue('data_occupation', $event)" />
                  </div> -->

      <!-- <div class="flex w-fit items-center mb-[24px] mx-[-24px] px-[24px] pt-[40px] border-t-[1px] border-textGrayLight">
                  <span
                    class="w-[24px] h-[24px] mr-[8px] bg-blue text-white rounded-[12px] flex items-center justify-center">4</span>
                  <p class="font-semibold text-darkBlue">Property Information</p>
                </div> -->

      <div class="flex flex-col w-full">
        <div class="flex flex-col md:flex-row md:flex-wrap">
          <!-- <InputField :required="true" class="form-field mb-[32px]" type="text" :maxLength="9"
                                :placeholder="'Zip code of property *'"
                                :default="homeRequest?.data?.properties?.[0]?.zip_code ? homeRequest.data.properties[0].zip_code : ''"
                                :class="homeInformationFormFieldsStatus.zip_code ? 'valid' : 'not-valid'"
                                :errorState="!homeInformationFormFieldsStatus?.zip_code" :errorDescription="'5 numbers length'"
                                @input="selectHomeFieldValue('property_zip_code', $event)" /> -->
          <!-- <SelectField class="form-field select-field mb-[32px]" :width="320"
                      :options="['Apartment', 'Condo', 'Manufactured', 'Multi Family', 'Single Family', 'Townhome', 'Duplex']"
                      :label="'Property type'" :required="false"
                      :default="homeRequest?.data?.properties?.[0]?.property_type ? homeRequest.data.properties[0].property_type : ' '"
                      @input="selectHomeFieldValue('property_property_type', $event)" />
                    <SelectField class="form-field select-field mb-[32px]" :width="320"
                      :options="['Own', 'Rent', 'Live With Parents', 'Dormitory', 'Choice Not Listed']" :label="'Ownership'"
                      :required="false"
                      :default="homeRequest?.data?.properties?.[0]?.ownership ? homeRequest.data.properties[0].ownership : ' '"
                      @input="selectHomeFieldValue('property_ownership', $event)" />
                    <SelectField class="form-field select-field mb-[32px]" :width="320"
                      :options="['Primary Residence', 'Seasonal Residence', 'Vacation Property', 'Rental Property', 'Vacant For Sale']"
                      :label="'Number occupying residence'" :required="false"
                      :default="homeRequest?.data?.properties?.[0]?.occupancy ? homeRequest.data.properties[0].occupancy : ' '"
                      @input="selectHomeFieldValue('property_occupancy', $event)" />
                    <InputField class="form-field input-field mb-[32px]" :numbersOnly="true" :required="false"
                      :placeholder="'Number of months at residence'"
                      :default="homeRequest?.data?.properties?.[0]?.months_at_residence ? homeRequest.data.properties[0].months_at_residence : ''"
                      @input="selectHomeFieldValue('property_months_at_residence', $event)" />
                    <SelectField class="form-field select-field mb-[32px]" :width="320"
                      :options="['Primary Residence', 'Seasonal Residence', 'Vacation Property', 'Rental Property', 'Vacant For Sale']"
                      :label="'Garage type'" :required="false"
                      :default="homeRequest?.data?.properties?.[0]?.garage ? homeRequest.data.properties[0].garage : ' '"
                      @input="selectHomeFieldValue('property_garage', $event)" />
                    <SelectField class="form-field select-field mb-[32px]" :width="320"
                      :options="['Basement less than 50% finished', 'Basement more than 50% finished', 'Crawl Space', 'Open (Cement Non-Solid)', 'Piers Pilings Stilts', 'Slab', 'Other', 'Finished']"
                      :label="'Foundation'" :required="false"
                      :default="homeRequest?.data?.properties?.[0]?.foundation ? homeRequest.data.properties[0].foundation : ' '"
                      @input="selectHomeFieldValue('property_foundation', $event)" />
                  </div>
                  <CustomSelectButton class="form-field mb-[32px]" :required="false"
                    :options="['No Alarm', 'Home Only', 'Monitoring Company']" :title="'Home security'" :stylingTheme="1"
                    :default="homeRequest?.data?.properties?.[0]?.home_security ? homeRequest.data.properties[0].home_security : ' '"
                    @input="selectHomeFieldValue('property_home_security', $event)" />
                  <div class="flex flex-col md:flex-row md:flex-wrap">
                    <InputField class="form-field input-field mb-[32px]" :numbersOnly="true" :required="false"
                      :placeholder="'Year built'"
                      :default="homeRequest?.data?.properties?.[0]?.year_built ? homeRequest.data.properties[0].year_built : ''"
                      :errorState="!homeInformationFormFieldsStatus?.properties?.[0]?.year_built"
                      :errorDescription="'greater than or equal to 1900'"
                      :class="homeInformationFormFieldsStatus?.properties?.[0]?.year_built ? 'valid' : 'not-valid'"
                      @input="selectHomeFieldValue('property_year_built', $event)" /> -->
          <!-- <InputField class="form-field input-field mb-[32px]" :numbersOnly="true" :required="false"
                    :placeholder="'Year upgraded'"
                    :default="homeRequest?.data?.properties?.[0]?.year_upgraded ? homeRequest.data.properties[0].year_upgraded : ''"
                    :class="homeInformationFormFieldsStatus?.properties?.[0]?.year_upgraded ? 'valid' : 'not-valid'"
                    :errorState="!homeInformationFormFieldsStatus?.properties?.[0]?.year_upgraded"
                    :errorDescription="'greater than or equal to 1900'"
                    @input="selectHomeFieldValue('property_year_upgraded', $event)" />
                  <InputField class="form-field input-field mb-[32px]" :numbersOnly="true" :required="false"
                    :placeholder="'Stories'"
                    :default="homeRequest?.data?.properties?.[0]?.stories ? homeRequest.data.properties[0].stories : ''"
                    :class="homeInformationFormFieldsStatus?.properties?.[0]?.stories ? 'valid' : 'not-valid'"
                    :errorState="!homeInformationFormFieldsStatus?.properties?.[0]?.stories"
                    :errorDescription="'greater than or equal to 1'" @input="selectHomeFieldValue('property_stories', $event)" />
                  <InputField class="form-field input-field mb-[32px]" :numbersOnly="true" :required="false"
                    :placeholder="'Bedrooms'"
                    :default="homeRequest?.data?.properties?.[0]?.bedrooms ? homeRequest.data.properties[0].bedrooms : ''"
                    :class="homeInformationFormFieldsStatus?.properties?.[0]?.bedrooms ? 'valid' : 'not-valid'"
                    :errorState="!homeInformationFormFieldsStatus?.properties?.[0]?.bedrooms"
                    :errorDescription="'greater than or equal to 1'" @input="selectHomeFieldValue('property_bedrooms', $event)" />
                  <InputField class="form-field input-field mb-[32px]" :numbersOnly="true" :required="false"
                    :placeholder="'Bathrooms'"
                    :default="homeRequest?.data?.properties?.[0]?.bathrooms ? homeRequest.data.properties[0].bathrooms : ''"
                    :class="homeInformationFormFieldsStatus?.properties?.[0]?.bathrooms ? 'valid' : 'not-valid'"
                    :errorState="!homeInformationFormFieldsStatus?.properties?.[0]?.bathrooms"
                    :errorDescription="'greater than or equal to 1'"
                    @input="selectHomeFieldValue('property_bathrooms', $event)" />
                  <InputField class="form-field input-field mb-[32px]" :numbersOnly="true" :required="false"
                    :placeholder="'Square footage'"
                    :default="homeRequest?.data?.properties?.[0]?.square_footage ? homeRequest.data.properties[0].square_footage : ''"
                    :class="homeInformationFormFieldsStatus?.properties?.[0]?.square_footage ? 'valid' : 'not-valid'"
                    :errorState="!homeInformationFormFieldsStatus?.properties?.[0]?.square_footage"
                    :errorDescription="'greater than or equal to 100'"
                    @input="selectHomeFieldValue('property_square_footage', $event)" />
                  <InputField class="form-field input-field mb-[32px]" :numbersOnly="true" :required="false" :prefix="'$'"
                    :placeholder="'Dwelling value'"
                    :default="homeRequest?.data?.properties?.[0]?.dwelling_value ? homeRequest.data.properties[0].dwelling_value : ''"
                    :class="homeInformationFormFieldsStatus?.properties?.[0]?.dwelling_value ? 'valid' : 'not-valid'"
                    :errorState="!homeInformationFormFieldsStatus?.properties?.[0]?.dwelling_value"
                    :errorDescription="'greater than or equal to 1000'"
                    @input="selectHomeFieldValue('property_dwelling_value', $event, true)" /> -->
        </div>
        <!-- <CustomSelectButton class="form-field mb-[32px]" :required="false"
                :options="['Standard', 'Luxury', 'Economical', 'Manufactured']" :title="'Construction class'" :stylingTheme="1"
                :default="homeRequest?.data?.properties?.[0]?.construction_class ? homeRequest.data.properties[0].construction_class : ' '"
                @input="selectHomeFieldValue('property_construction_class', $event)" />
              <div class="flex flex-col md:flex-row md:flex-wrap">
                <SelectField class="form-field select-field mb-[32px]" :width="320"
                  :options="['Wood Frame', 'Metal Frame', 'Masonry', 'Log Home', 'Other']" :label="'Construction type'"
                  :required="false"
                  :default="homeRequest?.data?.properties?.[0]?.construction_type ? homeRequest.data.properties[0].construction_type : ' '"
                  @input="selectHomeFieldValue('property_construction_type', $event)" />
                <SelectField class="form-field select-field mb-[32px]" :width="320"
                  :options="['Asphalt', 'Concrete', 'Flat', 'Metal', 'Other', 'Slate', 'Tile', 'Wood', 'Composition',]"
                  :label="'Roof type'" :required="false"
                  :default="homeRequest?.data?.properties?.[0]?.roof_type ? homeRequest.data.properties[0].roof_type : ' '"
                  @input="selectHomeFieldValue('property_roof_type', $event)" />
              </div>
              <CustomSelectButton class="form-field mb-[32px]" :required="false"
                :options="['Circuit Breaker', 'Fuse Box', 'Other', 'Unknown']" :title="'Panel type'" :stylingTheme="1"
                :default="homeRequest?.data?.properties?.[0]?.panel_type ? homeRequest.data.properties[0].panel_type : ' '"
                @input="selectHomeFieldValue('property_panel_type', $event)" />
              <div class="flex flex-col md:flex-row md:flex-wrap">
                <SelectField class="form-field select-field mb-[32px]" :width="320"
                  :options="['Not Applicable', 'Within 1000 feet', 'Within 1 mile', 'Within 5 miles']"
                  :label="'Proximity water'" :required="false"
                  :default="homeRequest?.data?.properties?.[0]?.proximity_water ? homeRequest.data.properties[0].proximity_water : ' '"
                  @input="selectHomeFieldValue('property_proximity_water', $event)" />
                <SelectField class="form-field select-field mb-[32px]" :width="320"
                  :options="['Brick', 'Cement', 'Other', 'Shingles', 'Steel', 'Stone', 'Stucco', 'Vinyl', 'Aluminum Siding', 'Veneer', 'Wood', 'Cinder Block']"
                  :label="'Exterior walls'" :required="false"
                  :default="homeRequest?.data?.properties?.[0]?.exterior_walls ? homeRequest.data.properties[0].exterior_walls : ' '"
                  @input="selectHomeFieldValue('property_exterior_walls', $event)" />
                <SelectField class="form-field select-field mb-[32px]" :width="320"
                  :options="['Coal', 'Electric', 'Gas', 'Oil', 'Other', 'Propane', 'Wood']" :label="'Heating type'"
                  :required="false"
                  :default="homeRequest?.data?.properties?.[0]?.heating_type ? homeRequest.data.properties[0].heating_type : ' '"
                  @input="selectHomeFieldValue('property_heating_type', $event)" />
              </div>
              <CustomSelectButton class="form-field mb-[32px]" :required="false"
                :options="['Aluminum', 'Copper', 'Knob and Tube']" :title="'Wiring type'" :stylingTheme="1"
                :default="homeRequest?.data?.properties?.[0]?.wiring_type ? homeRequest.data.properties[0].wiring_type : ' '"
                @input="selectHomeFieldValue('property_wiring_type', $event)" />
              <CheckboxField :hasOneLineLabel="true" :label="'Newly purchased'" class="mr-[32px]"
                :value="homeRequest?.data?.properties?.[0]?.newly_purchased ? homeRequest.data.properties[0].newly_purchased : false"
                @input="selectHomeFieldValue('property_newly_purchased', $event)" />
              <SelectField class="form-field select-field mb-[32px]" :width="320"
                :options="['None', 'Doberman', 'German Shepherd', 'Pit Bull', 'Rottweiler', 'Other']" :label="'Dog type'"
                :required="false"
                :default="homeRequest?.data?.properties?.[0]?.dog ? homeRequest.data.properties[0].dog : 'None'"
                @input="selectHomeFieldValue('property_dog', $event)" />
              <div class="checkboxes flex flex-wrap w-full">
                <CheckboxField :hasOneLineLabel="true" :label="'Fireplace'" class="mr-[32px]"
                  :value="homeRequest?.data?.properties?.[0]?.fireplace ? homeRequest.data.properties[0].fireplace : false"
                  @input="selectHomeFieldValue('property_fireplace', $event)" />
                <CheckboxField :hasOneLineLabel="true" :label="'Deadbolt locks'" class="mr-[32px]"
                  :value="homeRequest?.data?.properties?.[0]?.deadbolt_locks ? homeRequest.data.properties[0].deadbolt_locks : false"
                  @input="selectHomeFieldValue('property_deadbolt_locks', $event)" />
                <CheckboxField :hasOneLineLabel="true" :label="'Smoke alarm'" class="mr-[32px]"
                  :value="homeRequest?.data?.properties?.[0]?.smoke_alarm ? homeRequest.data.properties[0].smoke_alarm : false"
                  @input="selectHomeFieldValue('property_smoke_alarm', $event)" />
                <CheckboxField :hasOneLineLabel="true" :label="'Fire alarm'" class="mr-[32px]"
                  :value="homeRequest?.data?.properties?.[0]?.fire_alarm ? homeRequest.data.properties[0].fire_alarm : false"
                  @input="selectHomeFieldValue('property_fire_alarm', $event)" />
                <CheckboxField :hasOneLineLabel="true" :label="'Fire extinguisher'" class="mr-[32px]"
                  :value="homeRequest?.data?.properties?.[0]?.fire_extinguisher ? homeRequest.data.properties[0].fire_extinguisher : false"
                  @input="selectHomeFieldValue('property_fire_extinguisher', $event)" />
                <CheckboxField :hasOneLineLabel="true" :label="'Manned fire station within 5 miles'" class="mr-[32px]"
                  :value="homeRequest?.data?.properties?.[0]?.manned_fire_station_within_5_miles ? homeRequest.data.properties[0].manned_fire_station_within_5_miles : false"
                  @input="selectHomeFieldValue('property_manned_fire_station_within_5_miles', $event)" />
                <CheckboxField :hasOneLineLabel="true" :label="'Fire hydrant within 1000 feet'" class="mr-[32px]"
                  :value="homeRequest?.data?.properties?.[0]?.fire_hydrant_within_1000_feet ? homeRequest.data.properties[0].fire_hydrant_within_1000_feet : false"
                  @input="selectHomeFieldValue('property_fire_hydrant_within_1000_feet', $event)" />
                <CheckboxField :hasOneLineLabel="true" :label="'Indoor sprinklers'" class="mr-[32px]"
                  :value="homeRequest?.data?.properties?.[0]?.indoor_sprinklers ? homeRequest.data.properties[0].indoor_sprinklers : false"
                  @input="selectHomeFieldValue('property_indoor_sprinklers', $event)" />
                <CheckboxField :hasOneLineLabel="true" :label="'Copper water pipes'" class="mr-[32px]"
                  :value="homeRequest?.data?.properties?.[0]?.copper_water_pipes ? homeRequest.data.properties[0].copper_water_pipes : false"
                  @input="selectHomeFieldValue('property_copper_water_pipes', $event)" />
                <CheckboxField :hasOneLineLabel="true" :label="'Brush hazard within 500 feet'" class="mr-[32px]"
                  :value="homeRequest?.data?.properties?.[0]?.brush_hazard_within_500_feet ? homeRequest.data.properties[0].brush_hazard_within_500_feet : false"
                  @input="selectHomeFieldValue('property_brush_hazard_within_500_feet', $event)" />
                <CheckboxField :hasOneLineLabel="true" :label="'Flood area'" class="mr-[32px]"
                  :value="homeRequest?.data?.properties?.[0]?.flood_area ? homeRequest.data.properties[0].flood_area : false"
                  @input="selectHomeFieldValue('property_flood_area', $event)" />
                <CheckboxField :hasOneLineLabel="true" :label="'Central air conditioning'" class="mr-[32px]"
                  :value="homeRequest?.data?.properties?.[0]?.central_air_conditioning ? homeRequest.data.properties[0].central_air_conditioning : false"
                  @input="selectHomeFieldValue('property_central_air_conditioning', $event)" />
                <CheckboxField :hasOneLineLabel="true" :label="'Sauna'" class="mr-[32px]"
                  :value="homeRequest?.data?.properties?.[0]?.sauna ? homeRequest.data.properties[0].sauna : false"
                  @input="selectHomeFieldValue('property_sauna', $event)" />
                <CheckboxField :hasOneLineLabel="true" :label="'Hot tub'" class="mr-[32px]"
                  :value="homeRequest?.data?.properties?.[0]?.hot_tub ? homeRequest.data.properties[0].hot_tub : false"
                  @input="selectHomeFieldValue('property_hot_tub', $event)" />
                <CheckboxField :hasOneLineLabel="true" :label="'Woodburning stove'" class="mr-[32px]"
                  :value="homeRequest?.data?.properties?.[0]?.woodburning_stove ? homeRequest.data.properties[0].woodburning_stove : false"
                  @input="selectHomeFieldValue('property_woodburning_stove', $event)" />
                <CheckboxField :hasOneLineLabel="true" :label="'Sump pump'" class="mr-[32px]"
                  :value="homeRequest?.data?.properties?.[0]?.sump_pump ? homeRequest.data.properties[0].sump_pump : false"
                  @input="selectHomeFieldValue('property_sump_pump', $event)" />
                <CheckboxField :hasOneLineLabel="true" :label="'In ground swimming pool'" class="mr-[32px]"
                  :value="homeRequest?.data?.properties?.[0]?.in_ground_swimming_pool ? homeRequest.data.properties[0].in_ground_swimming_pool : false"
                  @input="selectHomeFieldValue('property_in_ground_swimming_pool', $event)" />
                <CheckboxField :hasOneLineLabel="true" :label="'Swimming pool is fenced'" class="mr-[32px]"
                  :value="homeRequest?.data?.properties?.[0]?.swimming_pool_is_fenced ? homeRequest.data.properties[0].swimming_pool_is_fenced : false"
                  @input="selectHomeFieldValue('property_swimming_pool_is_fenced', $event)" />
                <CheckboxField :hasOneLineLabel="true" :label="'Smoker in household'" class="mr-[32px]"
                  :value="homeRequest?.data?.properties?.[0]?.smoker_in_household ? homeRequest.data.properties[0].smoker_in_household : false"
                  @input="selectHomeFieldValue('property_smoker_in_household', $event)" />
                <CheckboxField :hasOneLineLabel="true" :label="'Trampoline'" class="mr-[32px]"
                  :value="homeRequest?.data?.properties?.[0]?.trampoline ? homeRequest.data.properties[0].trampoline : false"
                  @input="selectHomeFieldValue('property_trampoline', $event)" />
                <CheckboxField :hasOneLineLabel="true" :label="'Covered deck patio'" class="mr-[32px]"
                  :value="homeRequest?.data?.properties?.[0]?.covered_deck_patio ? homeRequest.data.properties[0].covered_deck_patio : false"
                  @input="selectHomeFieldValue('property_covered_deck_patio', $event)" />
              </div>
              <div class="claims pb-[40px]">
                <div
                  class="flex w-fit items-center mb-[24px] mx-[-24px] px-[24px] pt-[40px] border-t-[1px] border-textGrayLight">
                  <span
                    class="w-[24px] h-[24px] mr-[8px] bg-blue text-white rounded-[12px] flex items-center justify-center">5</span>
                  <p class="font-semibold text-darkBlue">Recent claims</p>
                </div>
                <div v-for="(item, index) in homeRequest.data.properties[0].claims">
                  <p class="font-semibold mb-[10px]">{{ index + 1 }}.</p>
                  <span class="datepicker-label text-sm mb-[2px]">Claim date</span>
                  <Datepicker class="w-[320px] max-w-[100%] mb-[20px]"
                    v-model="homeRequest.data.properties[0].claims[index].claim_date" :enable-time-picker="false"
                    :max-date="new Date()" />

                  <SelectField class="form-field select-field mb-[32px]" :width="320"
                    :options="['Fire', 'Hail', 'Liability', 'Medical', 'Theft', 'Water', 'Wind', 'Other']"
                    :default="homeRequest.data.properties?.[0].claims?.[index]?.type ? homeRequest.data.properties[0].claims[index].type : ' '"
                    :label="'Claim type *'" :required="false"
                    :class="homeInformationFormFieldsStatus.claims[index].type ? 'valid' : 'not-valid'"
                    @input="selectHomeFieldValue('claim_type', $event, false, index)" />
                  <InputField class="form-field input-field" :numbersOnly="true" :required="true" :prefix="'$'"
                    :placeholder="'Paid amount *'"
                    :default="homeRequest.data.properties?.[0].claims?.[index]?.paid_amount ? homeRequest.data.properties[0].claims[index].paid_amount : null"
                    :class="homeInformationFormFieldsStatus.claims[index].paid_amount ? 'valid' : 'not-valid'"
                    @input="selectHomeFieldValue('claim_paid_amount', $event, true, index)" />
                </div>
                <div class="flex">
                  <p v-on:click="addHomeClaim()" class="font-bold cursor-pointer">Add claim</p>
                  <p v-if="homeRequest.data.properties[0].claims.length > 0" v-on:click="removeHomeClaim()"
                    class="ml-[30px] font-bold cursor-pointer">Remove claim</p>
                </div>
              </div> -->
      </div>

    </div>
  </div>
</template>

<style scoped lang="sass">
  .form-step
    .form-field
      margin-bottom: 20px
      @media (min-width: 768px)
        margin-right: 20px
    .content.info-coverage
      @media (min-width: 768px)
        .input-field
          // width: 208px
          >input
            width: 208px !important
      @media (max-width: 767px)
        .input-field,.select-field
          width: calc(50% - 10px)
      @media (max-width: 440px)
        .input-field,.select-field
          width: 100%
          margin-right: 0px
      .property-information-inputs
        .form-field:nth-child(3)
          margin-right: 0px
      .property-coverage-inputs
        .form-field:nth-child(3),.form-field:nth-child(6)
          margin-right: 0px
</style>

<script>

export default {
  name: "InfoAndCoverageStep",
  emits: ["commonValueSelect", "vehicleValueSelect", "homeValueSelect"],
  props: {
    clientContactInfo: {
      type: String,
      required: true,
    },
    activeProductType: {
      type: String,
      required: true,
    },
    autoRequest: {
      type: Object,
      required: true,
      default: {},
    },
    homeRequest: {
      type: Object,
      required: true,
      default: {},
    },
    vehicleInformationFormFieldsStatus: {
      type: Object,
      required: true,
      default: {},
    },
    homeInformationFormFieldsStatus: {
      type: Object,
      required: true,
      default: {},
    },
  },
  data() {
    return {
      activeStep: 1,
      stepsQuantity: 4,// +1, One additional as afterSubmit screen.
      // Vehicle only.
      accidents: 1,
      tickets: 1,
      major_violations: 1,
      vehicleYearVariants: [],
      vehicleMakeVariants: [],
      vehicleModelVariants: [],
    };
  },
  computed: {},
  mounted() {
    this.assignVehicleYearVariants();
  },
  methods: {
    getDefaultInsuranceValue() {
      if (this.activeProductType === 'auto-insurance') {
        return this.autoRequest?.data?.current_policy?.insurance_company ? this.autoRequest.data.current_policy.insurance_company : ' ';
      }
      // else if (this.activeProductType === 'home-insurance') {
      //   return this.homeRequest?.data?.current_policy?.insurance_company ? this.homeRequest.data.current_policy.insurance_company : ' ';
      // }
    },
    selectCommonFieldValue(fieldName, value, withPrefix = false) {
      this.$emit("commonValueSelect", { fieldName, fieldValue: value, withPrefix });
    },
    selectVehicleFieldValue(fieldName, value, withPrefix = false, index = null) {
      this.$emit("vehicleValueSelect", { fieldName, fieldValue: value, withPrefix, index });
    },
    selectHomeFieldValue(fieldName, value, withPrefix = false, index = null) {
      this.$emit("homeValueSelect", { fieldName, fieldValue: value, withPrefix, index });
    },
    // Vehicle.
    assignVehicleYearVariants() {
      let min = 1981;
      const max = new Date().getFullYear();
      let result = [];
      while (min <= max) {
        result.push(min);
        min++;
      }
      this.$data.vehicleYearVariants = result;
    },
    updateVehicleMakeVariants() {
      let result = [];
      this.vehicleMakeVariants = [];

      try {
        const url = 'http://www.insuranceexpress.com/vehicles/vehicle-make?year='
          + this.autoRequest.data.vehicles[0].year;
        const requestResult = this.httpGet(url);
        if (requestResult) {
          result = JSON.parse(requestResult);
        }
      } catch (e) { }

      // TODO: REMOVE, THIS IS TEMPORARY FOR DEV PURPOSES.
      // result = [
      //   "Acura",
      //   "Alfa Romeo",
      //   "Aston Martin",
      //   "Audi",
      //   "Bentley",
      //   "BMW",
      //   "Buick",
      //   "Cadillac",
      //   "Chevrolet",
      //   "Chrysler",
      //   "Dodge",
      //   "Ferrari",
      //   "FIAT",
      //   "Ford",
      //   "Genesis",
      //   "GMC",
      //   "Honda",
      //   "Hyundai",
      //   "INFINITI",
      //   "Jaguar",
      //   "Jeep",
      //   "Karma",
      //   "Kia",
      //   "Lamborghini",
      //   "Land Rover",
      //   "Lexus",
      //   "Lincoln",
      //   "Lucid",
      //   "Maserati",
      //   "Mazda",
      //   "McLaren",
      //   "Mercedes-Benz",
      //   "MINI",
      //   "Mitsubishi",
      //   "Nissan",
      //   "Polestar",
      //   "Porsche",
      //   "Ram",
      //   "Rivian",
      //   "Rolls-Royce",
      //   "Subaru",
      //   "Tesla",
      //   "Toyota",
      //   "Volkswagen",
      //   "Volvo",
      //   "Wagoneer"
      // ];

      this.vehicleMakeVariants = result;
    },
    updateVehicleModelVariants() {
      let result = [];
      this.vehicleModelVariants = [];

      try {
        const url = 'http://www.insuranceexpress.com/vehicles/vehicle-make?year='
          + this.autoRequest.data.vehicles[0].year + '&make=' + this.autoRequest.data.vehicles[0].make;
        const requestResult = this.httpGet(url);
        if (requestResult) {
          result = JSON.parse(requestResult);
        }
      } catch (e) { }

      // // TODO: REMOVE, THIS IS TEMPORARY FOR DEV PURPOSES.
      // result = [
      //   "2 Series",
      //   "3 Series",
      //   "4 Series",
      //   "5 Series",
      //   "7 Series",
      //   "8 Series",
      //   "i4",
      //   "iX",
      //   "M3",
      //   "M4",
      //   "M5",
      //   "M8",
      //   "X1",
      //   "X2",
      //   "X3",
      //   "X3 M",
      //   "X4",
      //   "X4 M",
      //   "X5",
      //   "X5 M",
      //   "X6",
      //   "X6 M",
      //   "X7",
      //   "Z4"
      // ];

      this.vehicleModelVariants = result;
    },
    httpGet(url) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", url, false);
      xmlHttp.setRequestHeader("Accept", 'application/json, text/javascript, */*; q=0.01');
      // xmlHttp.setRequestHeader("Accept-Encoding", 'gzip, deflate');
      xmlHttp.setRequestHeader("Accept-Language", 'en-US,en;q=0.9,ru;q=0.8');
      // xmlHttp.setRequestHeader("Connection", 'keep-alive');
      // xmlHttp.setRequestHeader("Host", 'www.insuranceexpress.com');
      // xmlHttp.setRequestHeader("Referer", 'http://www.insuranceexpress.com/auto-insurance/vehicle-info');
      // xmlHttp.setRequestHeader("X-Requested-With", 'XMLHttpRequest');
      xmlHttp.send();
      return xmlHttp.responseText;
    },
    addDriverClaim() {
      this.autoRequest.data.drivers[0].claims.push(
        {
          claim_date: "",
          description: "",
          paid_amount: 0,
        }
      );
      this.vehicleInformationFormFieldsStatus.claims.push(
        {
          claim_date: true,
        }
      );
    },
    removeDriverClaim() {
      this.autoRequest.data.drivers[0].claims.pop();
      this.vehicleInformationFormFieldsStatus.claims.pop();
    },
    addDriverTicket() {
      this.autoRequest.data.drivers[0].tickets.push(
        {
          ticket_date: "",
          description: "",
        }
      );
      this.vehicleInformationFormFieldsStatus.tickets.push(
        {
          ticket_date: true,
        }
      );
    },
    removeDriverTicket() {
      this.autoRequest.data.drivers[0].tickets.pop();
      this.vehicleInformationFormFieldsStatus.tickets.pop();
    },
    addDriverViolation() {
      this.autoRequest.data.drivers[0].major_violations.push(
        {
          violation_date: "",
          description: "",
          state: "",
        }
      );
      this.vehicleInformationFormFieldsStatus.major_violations.push(
        {
          violation_date: true,
        }
      );
    },
    removeDriverViolation() {
      this.autoRequest.data.drivers[0].major_violations.pop();
      this.vehicleInformationFormFieldsStatus.major_violations.pop();
    },
    addDriverAccident() {
      this.autoRequest.data.drivers[0].accidents.push(
        {
          accident_date: "",
          description: "",
          at_fault: false,
          damage: "",
        }
      );
      this.vehicleInformationFormFieldsStatus.accidents.push(
        {
          accident_date: true,
        }
      );
    },
    removeDriverAccident() {
      this.autoRequest.data.drivers[0].accidents.pop();
      this.vehicleInformationFormFieldsStatus.accidents.pop();
    },
    // Home.
    addHomeClaim() {
      this.homeRequest.data.properties[0].claims.push(
        {
          claim_date: "",
          type: "",
          paid_amount: 0,
        }
      );
      this.homeInformationFormFieldsStatus.claims.push(
        {
          type: true,
          paid_amount: true,
        }
      );
    },
    removeHomeClaim() {
      this.homeRequest.data.properties[0].claims.pop();
      this.homeInformationFormFieldsStatus.claims.pop();
    },
  }
};
</script>
