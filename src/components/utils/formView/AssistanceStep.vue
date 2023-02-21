<template>
  <div class="box-header w-fit flex mb-[40px]">
    <svg class="mr-[16px]" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" rx="4" fill="#ADA9B5" fill-opacity="0.12" />
      <g clip-path="url(#clip0_1044_2174)">
        <path
          d="M44.0005 33.6562C44.0005 29.6853 41.7224 26.1414 38.3105 24.4175C38.2046 32.0312 32.0317 38.2041 24.418 38.3101C26.1418 41.7219 29.6858 44 33.6567 44C35.5186 44 37.3291 43.5042 38.9199 42.562L43.9553 43.9548L42.5625 38.9194C43.5046 37.3286 44.0005 35.5181 44.0005 33.6562Z"
          fill="#D9DBDC" />
        <path
          d="M36.4375 24.2188C36.4375 17.4812 30.9563 12 24.2188 12C17.4812 12 12 17.4812 12 24.2188C12 26.4146 12.5845 28.5525 13.6943 30.4294L12.0449 36.3923L18.0081 34.7432C19.885 35.853 22.023 36.4375 24.2188 36.4375C30.9563 36.4375 36.4375 30.9563 36.4375 24.2188ZM22.3438 21.375H20.4688C20.4688 19.3071 22.1509 17.625 24.2188 17.625C26.2866 17.625 27.9688 19.3071 27.9688 21.375C27.9688 22.4246 27.5244 23.4334 26.7493 24.1423L25.1563 25.6003V27.0625H23.2813V24.7747L25.4834 22.759C25.877 22.3989 26.0938 21.9075 26.0938 21.375C26.0938 20.3411 25.2527 19.5 24.2188 19.5C23.1848 19.5 22.3438 20.3411 22.3438 21.375ZM23.2813 28.9375H25.1563V30.8125H23.2813V28.9375Z"
          fill="#B5B7BA" />
      </g>
      <defs>
        <clipPath id="clip0_1044_2174">
          <rect width="32" height="32" fill="white" transform="translate(12 12)" />
        </clipPath>
      </defs>
    </svg>
    <div>
      <p class="font-semibold text-xl leading-[32px] mb-[4px] text-darkBlue">Assistance</p>
      <p class="text-sm tracking-[0.2px] leading-[20px] text-textDarkGray">Let’s get you a quote</p>
      <p class="text-sm tracking-[0.2px] leading-[20px] text-textDarkGray">{{
        homeRequest.data.requested_policy.sqft }}</p>
    </div>
  </div>
  <div class=" flex flex-col md:flex-row md:flex-wrap w-full">

    <InputField class="form-field input-field mb-[32px]" :numbersOnly="true" :required="true"
      :placeholder="'Dwelling Coverage'" :alwaysOn="true"
      :default="homeRequest?.data?.assistance?.dwelling_value ? homeRequest.data.assistance.dwelling_value : ''" />

    <InputField class="form-field input-field mb-[32px]" :numbersOnly="true" :required="true"
      :placeholder="'Content Coverage'" :alwaysOn="true"
      :default="homeRequest?.data?.assistance?.content_value ? homeRequest.data.assistance.content_value : ''" />

    <InputField class="form-field input-field mb-[32px]" :numbersOnly="true" :required="true"
      :placeholder="'Other Structures'" :alwaysOn="true"
      :default="homeRequest?.data?.assistance?.structure ? homeRequest.data.assistance.structure : ''" />

    <InputField class="form-field input-field mb-[32px]" :numbersOnly="true" :required="true" :placeholder="'Loss Of Use'"
      :alwaysOn="true" :default="homeRequest?.data?.assistance?.loss_use ? homeRequest.data.assistance.loss_use : ''" />

    <InputField class="form-field input-field mb-[32px]" :numbersOnly="true" :required="true"
      :placeholder="'Medical Payment'" :alwaysOn="true"
      :default="homeRequest?.data?.assistance?.medical_payment ? homeRequest.data.assistance.medical_payment : ''" />

    <InputField class="form-field  mb-[32px]" :numbersOnly="true" :required="true" :placeholder="'Liability'"
      :alwaysOn="true" :default="homeRequest?.data?.assistance?.liability ? homeRequest.data.assistance.liability : ''" />


    <CustomSelectButton class="form-field" :required="false"
      :options="['$ 500', '$ 1,000', '$ 2,500', '$ 5,000', '$ 10,000']" :title="'Aop Deductible'" :stylingTheme="1"
      :default="homeRequest?.data?.requested_policy?.deductible ? homeRequest.data.requested_policy.deductible : '$ 2,500'" />

    <CustomSelectButton class="form-field" :required="false" :options="['$ 1,000', '$ 2,500', '2%', '5%']"
      :title="'Hurricane Deductible'" :stylingTheme="1"
      :default="homeRequest?.data?.requested_policy?.liability ? homeRequest.data.requested_policy.liability : '2%'" />



  </div>
</template>

<style scoped lang="sass">

</style>

<script>
import InputField from '@/components/utils/InputField.vue';
import SelectField from '@/components/utils/SelectField.vue';
import CheckboxField from '@/components/utils/CheckboxField.vue';
import CustomSelectButton from '@/components/utils/CustomSelectButton.vue';

export default ({
  components: {
    InputField,
    SelectField,
    CheckboxField,
    CustomSelectButton
  },
  props: {
    homeRequest: {
      type: Object,
      required: true,
      default: {},
    },
    clientContactInfo: {
      type: Object,
      required: false,
      default: null,
    },
    clientInformationFormFieldsStatus: {
      type: Object,
      required: false,
      default: null,
    },
    homeInformationFormFieldsStatus: {
      type: Object,
      required: true,
      default: {},
    },
  },
  emits: ["formValueSelect"],
  data() {
    return {};
  },
  methods: {
    selectEvent(event) { },
    formValueSelect(fieldName, event) {
      if (typeof event === 'string') {
        this.$emit("formValueSelect", { fieldName, fieldValue: event });
      }
    },
  }
});
</script>
