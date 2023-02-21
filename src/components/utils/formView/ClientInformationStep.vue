<template>
  <div class="box-header w-fit flex">
    <svg class="mr-[16px]" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" rx="4" fill="#ADA9B5" fill-opacity="0.12" />
      <path
        d="M28.0024 28.6168C32.5739 28.6168 36.3108 24.8799 36.3108 20.3084C36.3108 15.7369 32.5739 12 28.0024 12C23.431 12 19.6941 15.7369 19.6941 20.3084C19.6941 24.8799 23.431 28.6168 28.0024 28.6168Z"
        fill="#B5B7BA" />
      <path
        d="M42.2609 35.2562C42.0432 34.712 41.753 34.2041 41.4264 33.7324C39.7575 31.2652 37.1816 29.6326 34.2791 29.2335C33.9163 29.1973 33.5172 29.2698 33.2269 29.4875C31.7031 30.6122 29.8891 31.1927 28.0024 31.1927C26.1157 31.1927 24.3017 30.6122 22.7779 29.4875C22.4876 29.2698 22.0885 29.1609 21.7257 29.2335C18.8232 29.6326 16.211 31.2652 14.5784 33.7324C14.2519 34.2041 13.9616 34.7483 13.7439 35.2562C13.6351 35.4739 13.6714 35.7279 13.7802 35.9456C14.0705 36.4535 14.4332 36.9615 14.7598 37.3968C15.2677 38.0862 15.8119 38.703 16.4287 39.2834C16.9366 39.7914 17.5171 40.263 18.0977 40.7347C20.9639 42.8753 24.4106 44 27.9662 44C31.5217 44 34.9685 42.8753 37.8346 40.7347C38.4151 40.2993 38.9956 39.7914 39.5036 39.2834C40.0841 38.703 40.6646 38.0862 41.1725 37.3968C41.5353 36.9252 41.8619 36.4535 42.1521 35.9456C42.3335 35.7279 42.3697 35.4739 42.2609 35.2562Z"
        fill="#D9DBDC" />
    </svg>
    <div>
      <p class="font-semibold text-xl leading-[32px] mb-[4px] text-darkBlue">Client information</p>
      <p class="text-sm tracking-[0.2px] leading-[20px] text-textDarkGray">At this stage we are asking about first and
        last name</p>
    </div>
  </div>
  <div class="content w-full h-full flex flex-col items-center justify-center py-[32px]">
    <!-- Contact variables. -->
    <InputField @input="formValueSelect('contact_first_name', $event)" :required="true"
      :default="clientContactInfo.first_name ? clientContactInfo.first_name : null"
      :class="clientInformationFormFieldsStatus.first_name ? 'valid' : 'not-valid'" class="mb-[32px]" type="text"
      placeholder="First name *" />

    <InputField @input="formValueSelect('contact_last_name', $event)" :required="true"
      :default="clientContactInfo.last_name ? clientContactInfo.last_name : null"
      :class="clientInformationFormFieldsStatus.last_name ? 'valid' : 'not-valid'" class="mb-[32px]" type="text"
      placeholder="Last name *" />


    <AutoInputField @input="formValueSelect('contact_street_address1', $event)" :required="true"
      :default="clientContactInfo.address1 ? clientContactInfo.address1 : null"
      :class="clientInformationFormFieldsStatus.address1 ? 'valid' : 'not-valid'" class="mb-[32px]"
      :placeholder="'Street address *'" :func="getAddressData" />


    <!-- <InputField @input="formValueSelect('contact_street_address1', $event)" :required="true"
      :default="clientContactInfo.address1 ? clientContactInfo.address1 : null"
      :class="clientInformationFormFieldsStatus.address1 ? 'valid' : 'not-valid'" class="mb-[32px]" type="text"
      :placeholder="'Street address *'" /> -->

    <InputField @input="formValueSelect('contact_street_address2', $event)"
      :default="clientContactInfo.address2 ? clientContactInfo.address2 : null"
      :class="clientInformationFormFieldsStatus.address2 ? 'valid' : 'not-valid'" class="mb-[32px]" type="text"
      :placeholder="'Apartment, Unit, Suite, Building, etc. *'" />

    <SelectField :required="true" class="form-field select-field mb-[32px]" :width="320"
      :options="['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']"
      :default="clientContactInfo.state ? clientContactInfo.state : ' '"
      :class="clientInformationFormFieldsStatus.state ? 'valid' : 'not-valid'" :label="'State *'"
      @input="formValueSelect('contact_state', $event)" />

    <InputField @input="formValueSelect('contact_city', $event)" :required="true"
      :default="clientContactInfo.city ? clientContactInfo.city : null"
      :class="clientInformationFormFieldsStatus.city ? 'valid' : 'not-valid'" class="mb-[32px]" type="text"
      :placeholder="'City *'" />

    <InputField class="mb-[32px]" type="text" @input="formValueSelect('contact_zip_code', $event)" :required="true"
      :default="clientContactInfo.zip_code ? clientContactInfo.zip_code : null"
      :class="clientInformationFormFieldsStatus.zip_code ? 'valid' : 'not-valid'" :numbersOnly="true" :maxLength="9"
      :placeholder="'Zipcode *'" :errorState="!clientInformationFormFieldsStatus?.zip_code"
      :errorDescription="'5 numbers length'" />

    <InputField @input="formValueSelect('contact_country', $event)" :required="true"
      :default="clientContactInfo.country ? clientContactInfo.country : null"
      :class="clientInformationFormFieldsStatus.country ? 'valid' : 'not-valid'" class="mb-[32px]" type="text"
      :placeholder="'Country *'" />

  </div>
</template>

<style scoped lang="sass">

</style>

<script>
import CustomSelectButton from '@/components/utils/CustomSelectButton.vue';
import InputField from '@/components/utils/InputField.vue';
import AutoInputField from '@/components/utils/AutoInputField.vue';
import SelectField from '@/components/utils/SelectField.vue';
import VueGoogleAutocomplete from "vue-google-autocomplete";

export default ({
  components: {
    InputField,
    SelectField,
    CustomSelectButton,
    AutoInputField,
    VueGoogleAutocomplete
  },
  props: {
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
  },
  emits: ["formValueSelect", "setClientData"],
  data() {
    return {
      value: "",
      country: ""
    };
  },
  mounted() {

  },
  methods: {
    formValueSelect(fieldName, event) {
      if (typeof event === 'string') {
        this.$emit("formValueSelect", { fieldName, fieldValue: event });
      }
    },
    getAddressData(addressData) {
      const city = addressData.locality;                        //city
      const country = addressData.country;                         //country
      const route = addressData.route;                         //street address
      const apartment = addressData.street_number;                //apartment
      const zipcode = addressData.postal_code;                  //zip
      const state = addressData.administrative_area_level_1;   ////state
      this.$emit("setClientData", { city, country, route, apartment, zipcode, state });
      this.country = addressData.country;
    }
  }
});
</script>
