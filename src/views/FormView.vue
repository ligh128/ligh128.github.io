<script setup>
import FormHeader from '@/components/FormHeader.vue';
import Footer from '@/components/Footer.vue';
import FormSideInformation from '@/components/utils/formView/FormSideInformation.vue'
import FormProgressBar from '@/components/utils/formView/FormProgressBar.vue';
import ClientInformationStep from '@/components/utils/formView/ClientInformationStep.vue';
import ProductTypeStep from '@/components/utils/formView/ProductTypeStep.vue';
import InfoAndCoverageStep from '@/components/utils/formView/InfoAndCoverageStep.vue';
import AssistanceStep from '@/components/utils/formView/AssistanceStep.vue';
import FormStepButtons from '@/components/utils/formView/FormStepButtons.vue';
import AfterSubmitCongrats from '@/components/utils/formView/AfterSubmitCongrats.vue';
import Header from '../components/Header.vue';
</script>

<style scoped lang="sass">
  .form-view-content
    @media (max-width: 1165px)
      flex-direction: column-reverse
      align-items: center
  .form-step
    background-image: url(../assets/img/gray-block-corner-icon.png)
    background-position: top right
    background-repeat: no-repeat
    background-color: #fff
    border-radius: 8px
    border: 1px solid #EAE8EF
    min-height: 528px
    padding: 24px
    padding-bottom: 0px
    display: flex
    flex-direction: column
    justify-content: space-between
    @media (max-width: 700px)
      padding: 15px 15px 0px 15px
</style>

<template>
    <main class="bg-white font-Work-Sans">
        <Header />
        <div
            class="form-view-content px-[20px] lg:px-[35px] 2x:px-[96px] pt-[30px] xl:pt-[56px] w-full flex items-center
                                                                                                                                                                                                                                                                                                                                                                                                                                                                lg:items-start lg:flex-row justify-center">
            <FormSideInformation
                class="2sm:min-w-[360px] w-full 2sm:max-w-[30%] mr-0 lg:mr-[20px] xl:mr-[65px] 2xl:mr-[130px]" />
            <div class="lg:min-w-[730px] w-[730px] max-w-[100%] mb-[40px] lg:mb-0">
                <FormProgressBar @click="onStepTitleClick($event)" :maxProgress="maxProgress" v-bind:step="activeStep"
                    class="mb-[24px]" />
                <div v-if="this.$route.params.key == 'all'">
                    <div v-if="activeStep <= stepsQuantity" class="form-step shadow-boxList">
                        <ClientInformationStep @formValueSelect="commonFormValueSelect($event)"
                            @setClientData="setClientData($event)" :clientContactInfo="clientContactInfo"
                            :clientInformationFormFieldsStatus="clientInformationFormFieldsStatus"
                            v-if="activeStep === 1" />

                        <ProductTypeStep @productTypeSelect="onProductTypeSelect($event)"
                            :activeProductType="activeProductType" v-if="activeStep === 2" />

                        <InfoAndCoverageStep v-if="activeStep === 3" :clientContactInfo="clientContactInfo"
                            :activeProductType="activeProductType" :autoRequest="autoRequest" :homeRequest="homeRequest"
                            :vehicleInformationFormFieldsStatus="vehicleInformationFormFieldsStatus"
                            :homeInformationFormFieldsStatus="homeInformationFormFieldsStatus"
                            @vehicleValueSelect="vehicleFormValueSelect($event)"
                            @homeValueSelect="homeFormValueSelect($event)"
                            @commonValueSelect="commonFormValueSelect($event)" />

                        <AssistanceStep :homeRequest="homeRequest" :clientContactInfo="clientContactInfo"
                            :clientInformationFormFieldsStatus="clientInformationFormFieldsStatus"
                            @formValueSelect="commonFormValueSelect($event)" v-if="activeStep === 4" />

                        <FormStepButtons class="formStepButtons" :activeStep="activeStep" :stepsQuantity="stepsQuantity"
                            @stepFurther="stepFurther()" @stepBack="stepBack()" />
                    </div>
                </div>
                <div v-else>
                    <div v-if="activeStep <= stepsQuantity" class="form-step shadow-boxList">
                        <ClientInformationStep @formValueSelect="commonFormValueSelect($event)"
                            @setClientData="setClientData($event)" :clientContactInfo="clientContactInfo"
                            :clientInformationFormFieldsStatus="clientInformationFormFieldsStatus"
                            v-if="activeStep === 1" />

                        <InfoAndCoverageStep v-if="activeStep === 2" :clientContactInfo="clientContactInfo"
                            :activeProductType="activeProductType" :autoRequest="autoRequest" :homeRequest="homeRequest"
                            :vehicleInformationFormFieldsStatus="vehicleInformationFormFieldsStatus"
                            :homeInformationFormFieldsStatus="homeInformationFormFieldsStatus"
                            @vehicleValueSelect="vehicleFormValueSelect($event)"
                            @homeValueSelect="homeFormValueSelect($event)"
                            @commonValueSelect="commonFormValueSelect($event)" />

                        <AssistanceStep :homeRequest="homeRequest" :clientContactInfo="clientContactInfo"
                            :clientInformationFormFieldsStatus="clientInformationFormFieldsStatus"
                            :homeInformationFormFieldsStatus="homeInformationFormFieldsStatus"
                            @formValueSelect="commonFormValueSelect($event)" v-if="activeStep === 3" />

                        <FormStepButtons class="formStepButtons" :activeStep="activeStep" :stepsQuantity="stepsQuantity"
                            @stepFurther="stepFurther()" @stepBack="stepBack()" />
                    </div>
                </div>
                <AfterSubmitCongrats v-if="activeStep === (stepsQuantity + 1)" />
            </div>
        </div>
        <Footer class="mt-[72px]" />
    </main>
</template>

<script>
var category = {
    all: "",
    car: "auto-insurance",
    home: "home-insurance"
};
var step = {
    all: 4,
    car: 3,
    home: 3
};
export default {
    name: "FormView",
    props: [],
    mounted() {
    },
    data() {
        return {
            activeProductType: category[this.$route.params.key],
            maxProgress: 1,
            activeStep: 1,
            verifyStep: 1,
            stepsQuantity: step[this.$route.params.key],
            // This will hold information till we will know product type to assign this data to proper request body.
            clientContactInfo: {
                "first_name": "",
                "last_name": "",
                "email": "",
                "phone": "",
                "address": "",
                "address1": "",
                "address2": "",
                "city": "",
                "country": "",
                "state": "",
                "zip_code": "",
                "ip_address": "10.0.0.1"
            },
            autoRequest: {
                "auth_code": "DUWlqMFRXclBzZ2s9X18tMTEyNDk3MjE3Mg==",
                "meta": {
                    "originally_created": "2015-09-15T14:12:00Z",
                    "source_id": "1A2B3C4D",
                    "offer_id": "13502",
                    "lead_id_code": "4xyz78b9-0cdc-43a7-98ea-2b680a5313a2",
                    "trusted_form_cert_url": "https://cert.trustedform.com/f886071...",
                    "user_agent": window.navigator.userAgent,
                    "landing_page_url": "https://www.somewebsite.com",
                    "tcpa_compliant": true,
                    "tcpa_consent_text": "I agree to receive to be contacted by phone or email."
                },
                "contact": {
                    "first_name": "",
                    "last_name": "",
                    "email": "",
                    "phone": "",
                    "address": "",
                    "city": "",
                    "state": "",
                    "zip_code": "",
                    "ip_address": "10.0.0.1"
                },
                "data": {
                    "drivers": [
                        {
                            "first_name": "",
                            "last_name": "",
                            "birth_date": "",
                            "marital_status": "",
                            "relationship": "",
                            "gender": "",
                            "license_status": "",
                            "license_state": "",
                            "license_ever_suspended": false,
                            "age_licensed": 0,
                            "residence_type": "",
                            "months_at_residence": 0,
                            "occupation": "",
                            "months_at_employer": 0,
                            "education": "",
                            "requires_sr22": false,
                            "bankruptcy": false,
                            "tickets": [
                                // {
                                //   "ticket_date": "2006-01-01",
                                //   "description": "Failure to stop"
                                // }
                            ],
                            "major_violations": [
                                // {
                                //   "violation_date": "2007-08-13",
                                //   "description": "Drunk Driving",
                                //   "state": "CA"
                                // }
                            ],
                            "accidents": [
                                // {
                                //   "accident_date": "2008-10-05",
                                //   "description": "Vehicle Hit Vehicle",
                                //   "at_fault": false,
                                //   "damage": "property"
                                // }
                            ],
                            "claims": [
                                // {
                                //   "claim_date": "2009-12-27",
                                //   "description": "Hit an animal",
                                //   "paid_amount": 1000
                                // }
                            ]
                        },
                    ],
                    "vehicles": [
                        {
                            "year": 0,
                            "make": "",
                            "model": "",
                            "submodel": "",
                            "vin": "",
                            "salvaged": false,
                            "rental": false,
                            "towing": false,
                            "alarm": "",
                            "four_wheel_drive": false,
                            "abs": false,
                            "airbags": false,
                            "automatic_seat_belts": false,
                            "garage": "",
                            "ownership": "",
                            "primary_use": "",
                            "annual_miles": 0,
                            "weekly_commute_days": 0,
                            "one_way_distance": 0,
                            "comprehensive_deductible": 0,
                            "collision_deductible": 0
                        }
                    ],
                    "requested_policy": {
                        // "coverage_type": "",
                        "bodily_injury": "",
                        "property_damage": 0
                    },
                    "current_policy": {
                        // "insurance_company": "",
                        // "expiration_date": "",
                        // "insured_since": "",
                        // "coverage_type": ""
                    }
                }
            },
            homeRequest: {
                "meta": {
                    "originally_created": "2015-09-15T14:12:00Z",
                    "source_id": "1A2B3C4D",
                    "offer_id": "13502",
                    "lead_id_code": "4xyz78b9-0cdc-43a7-98ea-2b680a5313a2",
                    "trusted_form_cert_url": "https://cert.trustedform.com/f886071...",
                    "user_agent": window.navigator.userAgent,
                    "landing_page_url": "https://www.somewebsite.com",
                    "tcpa_compliant": true,
                    "tcpa_consent_text": "I agree to receive to be contacted by phone or email."
                },
                "contact": {
                    "phone_last_four": "",
                    "zip_code": "",
                    "ip_address": "10.0.0.1",
                    "phone": "",
                    "first_name": "",
                    "last_name": "",
                    "email": ""
                },
                "data": {
                    // "birth_date": "",
                    "gender": "",
                    "marital_status": "",
                    "occupation": "",
                    "properties": [
                        {
                            // "zip_code": "",
                            "property_type": "",
                            "ownership": "",
                            "occupancy": "",
                            "months_at_residence": 0,
                            "garage": "",
                            "foundation": "",
                            "home_security": "",
                            // "year_built": 0,
                            // "year_upgraded": 0,
                            // "stories": 0,
                            // "bedrooms": 0,
                            // "bathrooms": 0,
                            // "square_footage": 0,
                            // "dwelling_value": 0,
                            "construction_class": "",
                            "construction_type": "",
                            "roof_type": "",
                            "panel_type": "",
                            "proximity_water": "",
                            "exterior_walls": "",
                            "heating_type": "",
                            "wiring_type": "",
                            "newly_purchased": false,
                            "dog": "",
                            "fireplace": false,
                            "deadbolt_locks": false,
                            "smoke_alarm": false,
                            "fire_alarm": false,
                            "fire_extinguisher": false,
                            "manned_fire_station_within_5_miles": false,
                            "fire_hydrant_within_1000_feet": false,
                            "indoor_sprinklers": false,
                            "copper_water_pipes": false,
                            "brush_hazard_within_500_feet": false,
                            "flood_area": false,
                            "central_air_conditioning": false,
                            "sauna": false,
                            "hot_tub": false,
                            "woodburning_stove": false,
                            "sump_pump": false,
                            "in_ground_swimming_pool": false,
                            "swimming_pool_is_fenced": false,
                            "smoker_in_household": false,
                            "trampoline": false,
                            "covered_deck_patio": false,
                            "claims": [
                                // {
                                //   "claim_date": "2000-01-01",
                                //   "type": "weather",
                                //   "paid_amount": "1000.00"
                                // },
                            ]
                        }
                    ],
                    "requested_policy": {
                        // "coverage_type": "",
                        "construction_type": "",
                        "occupancy_type": "",
                        "building_use": "",
                        "form_type": "",
                        "sqft": 0,
                        "liability": "",
                        "deductible": "",
                        // "replacement_cost": 0,
                    },
                    "current_policy": {
                        // "insurance_company": "",
                        // "expiration_date": "",
                        "year_built": "",
                        "roof_year": "",
                        // "insured_since": "",
                        // "coverage_type": ""
                    },
                    "assistance": {
                        "dwelling_value": "",
                        "content_value": "",
                        "structure": "0",
                        "loss_use": "0",
                        "medical_payment": "0",
                        "liability": "1000"
                    }

                }
            },
            clientInformationFormFieldsStatus: {
                first_name: true,
                last_name: true,
                address: true,
                address1: true,
                address2: true,
                zip_code: true,
                city: true,
                country: true,
                state: true,
                phone: true,
                email: true,
            },
            vehicleInformationFormFieldsStatus: {
                // coverage_type: true,
                // insurance_company: true,
                // expiration_date: true,
                // Driver info.
                driver_first_name: true,
                driver_last_name: true,
                driver_birth_date: true,
                driver_gender: true,
                // Vehicle info.
                vehicle_year: true,
                vehicle_make: true,
                vehicle_model: true,
                claims: [],
                accidents: [],
                major_violations: [],
                tickets: [],
            },
            homeInformationFormFieldsStatus: {
                // requested_coverage_type: true,
                requested_construction_type: true,
                requested_occupancy_type: true,
                requested_building_use: true,
                requested_form_type: true,
                requested_sqft: true,
                // requested_replacement_cost: true,
                // current_insurance_company: true,
                // current_expiration_date: true,
                year_built: true,
                roof_year: true,
                // current_coverage_type: true,
                // zip_code: true,
                properties: [
                    {
                        year_built: true,
                        year_upgraded: true,
                        stories: true,
                        bedrooms: true,
                        bathrooms: true,
                        square_footage: true,
                        dwelling_value: true,
                    }
                ],
                claims: [],

            },
        };
    },
    computed: {},
    methods: {
        stepBack() {
            this.activeStep > 0 ? this.activeStep-- : null;
        },
        stepFurther() {
            let areFieldsValid = this.validateFields();
            if (areFieldsValid) {
                // Make request?
                if (this.activeStep === this.stepsQuantity) {
                    //const response = undefined;
                    try {
                        const result = this.callApi();
                    }
                    catch (e) {
                        alert("Error during form submission: " + e);
                    }
                    // if (response) {
                    //     this.activeStep++;
                    // }
                }
                else {
                    this.activeStep < (this.stepsQuantity + 1) ? this.activeStep++ : null;
                }
                this.scrollTopOfThePage();
                if (this.maxProgress < this.activeStep) {
                    this.maxProgress = this.activeStep;
                }
            }
        },
        callApi() {
            if (this.activeProductType === "auto-insurance") {
                var key = "Token 0c98684cd8db87f2fd6af0029d51e1f4671c9acc";
                var url = "https://test-api.jangl.com/v2/auto_insurance/direct_post";
                const requestBody = JSON.parse(JSON.stringify(this.autoRequest));
                requestBody.data.current_policy.expiration_date = this.getAPILegitimateDate(requestBody.data.current_policy.expiration_date);
                requestBody.data.drivers[0].birth_date = this.getAPILegitimateDate(requestBody.data.drivers[0].birth_date);
                requestBody.data.drivers[0].claims.forEach(item => {
                    item.claim_date = this.getAPILegitimateDate(item.claim_date);
                });
                requestBody.data.drivers[0].tickets.forEach(item => {
                    item.ticket_date = this.getAPILegitimateDate(item.ticket_date);
                });
                requestBody.data.drivers[0].major_violations.forEach(item => {
                    item.violation_date = this.getAPILegitimateDate(item.violation_date);
                });
                requestBody.data.drivers[0].accidents.forEach(item => {
                    item.accident_date = this.getAPILegitimateDate(item.accident_date);
                });
                return this.httpPost(url, key, JSON.stringify(requestBody));
            }
            else if (this.activeProductType === "home-insurance") {
                var key = "Token f367c133a96f34e7cf8c28e2093df685da09eced";
                var url = "https://test-api.jangl.com/v2/home_insurance/direct_post";
                const requestBody = JSON.parse(JSON.stringify(this.homeRequest));
                //requestBody.data.current_policy.expiration_date = this.getAPILegitimateDate(requestBody.data.current_policy.expiration_date);
                requestBody.data.birth_date = this.getAPILegitimateDate(requestBody.data.birth_date);
                requestBody.data.properties[0].claims.forEach(item => {
                    item.claim_date = this.getAPILegitimateDate(item.claim_date);
                });
                return this.httpPost(url, key, JSON.stringify(requestBody));
            }
        },
        // Desired form: yyyy-mm-dd .
        getAPILegitimateDate(d) {
            const date = new Date(d);
            if (!this.isValidDate(date))
                return d;
            return date.toISOString().split("T")[0];
        },
        httpPost(url, key, body) {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("POST", url, false);
            xmlHttp.setRequestHeader("Authorization", key);
            xmlHttp.setRequestHeader("Content-Type", "application/json");
            xmlHttp.setRequestHeader("Accept", "application/json");
            xmlHttp.send(body);
            return xmlHttp.responseText;
        },
        onStepTitleClick(step) {
            if (typeof step === "number") {
                this.activeStep = step;
            }
        },
        onProductTypeSelect(productType) {
            if (typeof productType === "string") {
                this.activeProductType = productType;
            }
        },
        // Handling form selection events.
        commonFormValueSelect(value) {
            if (!value)
                return;
            // Number fields can have prefix -> "$ ".
            if (value?.withPrefix) {
                value.fieldValue = value.fieldValue.split(" ")[1];
            }
            switch (value.fieldName) {
                case "contact_first_name":
                    this.clientContactInfo.first_name = value.fieldValue;
                    break;
                case "contact_last_name":
                    this.clientContactInfo.last_name = value.fieldValue;
                    break;
                case "contact_address":
                    this.clientContactInfo.address = value.fieldValue;
                    break;
                case "contact_street_address1":
                    this.clientContactInfo.address1 = value.fieldValue;
                    break;
                case "contact_street_address2":
                    this.clientContactInfo.address2 = value.fieldValue;
                    break;
                case "contact_zip_code":
                    this.clientContactInfo.zip_code = value.fieldValue;
                    break;
                case "contact_city":
                    this.clientContactInfo.city = value.fieldValue;
                    break;
                case "contact_country":
                    this.clientContactInfo.country = value.fieldValue;
                    break;
                case "contact_state":
                    this.clientContactInfo.state = value.fieldValue;
                    break;
                case "contact_phone":
                    this.clientContactInfo.phone = value.fieldValue;
                    break;
                case "contact_email_address":
                    this.clientContactInfo.email = value.fieldValue;
                    break;
                // case "current_policy_insurance_company":
                //     this.autoRequest.data.current_policy.insurance_company = value.fieldValue;
                //     this.homeRequest.data.current_policy.insurance_company = value.fieldValue;
                //     break;
                default:
                    break;
            }
        },
        setClientData(value) {
            this.clientContactInfo.address1 = value.route;
            this.clientContactInfo.state = value.state;
            this.clientContactInfo.city = value.city;
            this.clientContactInfo.zip_code = value.zipcode;
            this.clientContactInfo.country = value.country;
        },
        vehicleFormValueSelect(value) {
            if (!value)
                return;
            // Number fields can have prefix -> "$ ".
            if (value?.withPrefix) {
                value.fieldValue = value.fieldValue.split(" ")[1];
            }
            switch (value.fieldName) {
                // case "requested_coverage_type":
                //     this.autoRequest.data.requested_policy.coverage_type = value.fieldValue;
                //     break;
                case "requested_bodily_injury":
                    this.autoRequest.data.requested_policy.bodily_injury = value.fieldValue;
                    break;
                case "requested_property_damage":
                    this.autoRequest.data.requested_policy.property_damage = value.fieldValue;
                    break;
                // case "current_expiration_date":
                //     this.autoRequest.data.current_policy.expiration_date = value.fieldValue;
                //     break;
                // case "current_coverage_type":
                //     this.autoRequest.data.current_policy.coverage_type = value.fieldValue;
                //     break;
                case "driver_first_name":
                    this.autoRequest.data.drivers[0].first_name = value.fieldValue;
                    break;
                case "driver_last_name":
                    this.autoRequest.data.drivers[0].last_name = value.fieldValue;
                    break;
                case "driver_birth_date":
                    this.autoRequest.data.drivers[0].birth_date = value.fieldValue;
                    break;
                case "driver_gender":
                    this.autoRequest.data.drivers[0].gender = value.fieldValue;
                    break;
                case "driver_marital_status":
                    this.autoRequest.data.drivers[0].marital_status = value.fieldValue;
                    break;
                case "driver_relationship":
                    this.autoRequest.data.drivers[0].relationship = value.fieldValue;
                    break;
                case "driver_license_status":
                    this.autoRequest.data.drivers[0].license_status = value.fieldValue;
                    break;
                case "driver_license_state":
                    this.autoRequest.data.drivers[0].license_state = value.fieldValue;
                    break;
                case "driver_license_ever_suspended":
                    this.autoRequest.data.drivers[0].license_ever_suspended = value.fieldValue;
                    break;
                case "driver_age_licensed":
                    this.autoRequest.data.drivers[0].age_licensed = value.fieldValue;
                    break;
                case "driver_residence_type":
                    this.autoRequest.data.drivers[0].residence_type = value.fieldValue;
                    break;
                case "driver_months_at_residence":
                    this.autoRequest.data.drivers[0].months_at_residence = value.fieldValue;
                    break;
                case "driver_occupation":
                    this.autoRequest.data.drivers[0].occupation = value.fieldValue;
                    break;
                case "driver_months_at_employer":
                    this.autoRequest.data.drivers[0].months_at_employer = value.fieldValue;
                    break;
                case "driver_education":
                    this.autoRequest.data.drivers[0].education = value.fieldValue;
                    break;
                case "driver_requires_sr22":
                    this.autoRequest.data.drivers[0].requires_sr22 = value.fieldValue;
                    break;
                case "driver_bankruptcy":
                    this.autoRequest.data.drivers[0].bankruptcy = value.fieldValue;
                    break;
                case "claim_description":
                    this.autoRequest.data.drivers[0].claims[value.index].description = value.fieldValue;
                    break;
                case "claim_paid_amount":
                    this.autoRequest.data.drivers[0].claims[value.index].paid_amount = value.fieldValue;
                    break;
                case "ticket_description":
                    this.autoRequest.data.drivers[0].tickets[value.index].description = value.fieldValue;
                    break;
                case "violation_description":
                    this.autoRequest.data.drivers[0].major_violations[value.index].description = value.fieldValue;
                    break;
                case "violation_state":
                    this.autoRequest.data.drivers[0].major_violations[value.index].state = value.fieldValue;
                    break;
                case "accident_description":
                    this.autoRequest.data.drivers[0].accidents[value.index].description = value.fieldValue;
                    break;
                case "accident_was_driver_fault":
                    this.autoRequest.data.drivers[0].accidents[value.index].at_fault = value.fieldValue;
                    break;
                case "accident_damage":
                    this.autoRequest.data.drivers[0].accidents[value.index].damage = value.fieldValue;
                    break;
                case "vehicle_year":
                    this.autoRequest.data.vehicles[0].year = value.fieldValue;
                    break;
                case "vehicle_make":
                    this.autoRequest.data.vehicles[0].make = value.fieldValue;
                    break;
                case "vehicle_model":
                    this.autoRequest.data.vehicles[0].model = value.fieldValue;
                    break;
                case "vehicle_submodel":
                    this.autoRequest.data.vehicles[0].submodel = value.fieldValue;
                    break;
                case "vehicle_vin":
                    this.autoRequest.data.vehicles[0].vin = value.fieldValue;
                    break;
                case "vehicle_salvaged":
                    this.autoRequest.data.vehicles[0].salvaged = value.fieldValue;
                    break;
                case "vehicle_rental":
                    this.autoRequest.data.vehicles[0].rental = value.fieldValue;
                    break;
                case "vehicle_towing":
                    this.autoRequest.data.vehicles[0].towing = value.fieldValue;
                    break;
                case "vehicle_four_wheel_drive":
                    this.autoRequest.data.vehicles[0].four_wheel_drive = value.fieldValue;
                    break;
                case "vehicle_abs":
                    this.autoRequest.data.vehicles[0].abs = value.fieldValue;
                    break;
                case "vehicle_airbags":
                    this.autoRequest.data.vehicles[0].airbags = value.fieldValue;
                    break;
                case "vehicle_automatic_seat_belts":
                    this.autoRequest.data.vehicles[0].automatic_seat_belts = value.fieldValue;
                    break;
                case "vehicle_alarm":
                    this.autoRequest.data.vehicles[0].alarm = value.fieldValue;
                    break;
                case "vehicle_garage":
                    this.autoRequest.data.vehicles[0].garage = value.fieldValue;
                    break;
                case "vehicle_ownership":
                    this.autoRequest.data.vehicles[0].ownership = value.fieldValue;
                    break;
                case "vehicle_primary_use":
                    this.autoRequest.data.vehicles[0].primary_use = value.fieldValue;
                    break;
                case "vehicle_vehicle_annual_miles":
                    this.autoRequest.data.vehicles[0].vehicle_annual_miles = value.fieldValue;
                    break;
                case "vehicle_weekly_commute_days":
                    this.autoRequest.data.vehicles[0].weekly_commute_days = value.fieldValue;
                    break;
                case "vehicle_one_way_distance":
                    this.autoRequest.data.vehicles[0].one_way_distance = value.fieldValue;
                    break;
                case "vehicle_comprehensive_deductible":
                    this.autoRequest.data.vehicles[0].comprehensive_deductible = value.fieldValue;
                    break;
                case "vehicle_collision_deductible":
                    this.autoRequest.data.vehicles[0].collision_deductible = value.fieldValue;
                    break;
                default:
                    break;
            }
        },
        homeFormValueSelect(value) {
            if (!value)
                return;
            // Number fields can have prefix -> "$ ".
            if (value?.withPrefix) {
                value.fieldValue = value.fieldValue.split(" ")[1];
            }
            switch (value.fieldName) {
                // case "requested_coverage_type":
                //     this.homeRequest.data.requested_policy.coverage_type = value.fieldValue;
                //     break;
                case "requested_construction_type":
                    this.homeRequest.data.requested_policy.construction_type = value.fieldValue;
                    break;
                case "requested_occupancy_type":
                    this.homeRequest.data.requested_policy.occupancy_type = value.fieldValue;
                    break;
                case "requested_building_use":
                    this.homeRequest.data.requested_policy.building_use = value.fieldValue;
                    break;
                case "requested_form_type":
                    this.homeRequest.data.requested_policy.form_type = value.fieldValue;
                    break;
                case "requested_sqft":
                    this.homeRequest.data.requested_policy.sqft = value.fieldValue;
                    this.homeRequest.data.assistance.dwelling_value = value.fieldValue * 180;
                    this.homeRequest.data.assistance.content_value = value.fieldValue * 45;
                    break;
                // case "requested_replacement_cost":
                //     this.homeRequest.data.requested_policy.replacement_cost = value.fieldValue;
                //     break;

                case "requested_liability":
                    this.homeRequest.data.requested_policy.liability = value.fieldValue;
                    break;
                case "requested_deductible":
                    this.homeRequest.data.requested_policy.deductible = value.fieldValue;
                    break;
                // case "current_expiration_date":
                //     this.homeRequest.data.current_policy.expiration_date = value.fieldValue;
                //     break;
                // case "current_coverage_type":
                //     this.homeRequest.data.current_policy.coverage_type = value.fieldValue;
                //     break;
                case "data_gender":
                    this.homeRequest.data.gender = value.fieldValue;
                    break;
                case "data_marital_status":
                    this.homeRequest.data.marital_status = value.fieldValue;
                    break;
                case "data_occupation":
                    this.homeRequest.data.occupation = value.fieldValue;
                    break;
                // case "property_zip_code":
                //     this.homeRequest.data.properties[0].zip_code = value.fieldValue;
                //     break;
                case "property_property_type":
                    this.homeRequest.data.properties[0].property_type = value.fieldValue;
                    break;
                case "property_ownership":
                    this.homeRequest.data.properties[0].ownership = value.fieldValue;
                    break;
                case "property_occupancy":
                    this.homeRequest.data.properties[0].occupancy = value.fieldValue;
                    break;
                case "property_months_at_residence":
                    this.homeRequest.data.properties[0].months_at_residence = value.fieldValue;
                    break;
                case "property_garage":
                    this.homeRequest.data.properties[0].garage = value.fieldValue;
                    break;
                case "property_foundation":
                    this.homeRequest.data.properties[0].foundation = value.fieldValue;
                    break;
                case "property_home_security":
                    this.homeRequest.data.properties[0].home_security = value.fieldValue;
                    break;
                case "property_year_built":
                    this.homeRequest.data.properties[0].year_built = value.fieldValue;
                    break;
                case "property_year_upgraded":
                    this.homeRequest.data.properties[0].year_upgraded = value.fieldValue;
                    break;
                case "property_stories":
                    this.homeRequest.data.properties[0].stories = value.fieldValue;
                    break;
                case "property_bedrooms":
                    this.homeRequest.data.properties[0].bedrooms = value.fieldValue;
                    break;
                case "property_bathrooms":
                    this.homeRequest.data.properties[0].bathrooms = value.fieldValue;
                    break;
                case "property_square_footage":
                    this.homeRequest.data.properties[0].square_footage = value.fieldValue;
                    break;
                case "property_dwelling_value":
                    if (this.isNumeric(value.fieldValue)) {
                        this.homeRequest.data.properties[0].dwelling_value = value.fieldValue;
                    }
                    else {
                        delete this.homeRequest.data.properties[0].dwelling_value;
                    }
                    break;
                case "property_construction_class":
                    this.homeRequest.data.properties[0].construction_class = value.fieldValue;
                    break;
                case "property_construction_type":
                    this.homeRequest.data.properties[0].construction_type = value.fieldValue;
                    break;
                case "property_roof_type":
                    this.homeRequest.data.properties[0].roof_type = value.fieldValue;
                    break;
                case "property_panel_type":
                    this.homeRequest.data.properties[0].panel_type = value.fieldValue;
                    break;
                case "property_proximity_water":
                    this.homeRequest.data.properties[0].proximity_water = value.fieldValue;
                    break;
                case "property_exterior_walls":
                    this.homeRequest.data.properties[0].exterior_walls = value.fieldValue;
                    break;
                case "property_heating_type":
                    this.homeRequest.data.properties[0].heating_type = value.fieldValue;
                    break;
                case "property_wiring_type":
                    this.homeRequest.data.properties[0].wiring_type = value.fieldValue;
                    break;
                case "property_newly_purchased":
                    this.homeRequest.data.properties[0].newly_purchased = value.fieldValue;
                    break;
                case "property_dog":
                    this.homeRequest.data.properties[0].dog = value.fieldValue;
                    break;
                case "property_fireplace":
                    this.homeRequest.data.properties[0].fireplace = value.fieldValue;
                    break;
                case "property_deadbolt_locks":
                    this.homeRequest.data.properties[0].deadbolt_locks = value.fieldValue;
                    break;
                case "property_smoke_alarm":
                    this.homeRequest.data.properties[0].smoke_alarm = value.fieldValue;
                    break;
                case "property_fire_alarm":
                    this.homeRequest.data.properties[0].fire_alarm = value.fieldValue;
                    break;
                case "property_fire_extinguisher":
                    this.homeRequest.data.properties[0].fire_extinguisher = value.fieldValue;
                    break;
                case "property_manned_fire_station_within_5_miles":
                    this.homeRequest.data.properties[0].manned_fire_station_within_5_miles = value.fieldValue;
                    break;
                case "property_fire_hydrant_within_1000_feet":
                    this.homeRequest.data.properties[0].fire_hydrant_within_1000_feet = value.fieldValue;
                    break;
                case "property_indoor_sprinklers":
                    this.homeRequest.data.properties[0].indoor_sprinklers = value.fieldValue;
                    break;
                case "property_copper_water_pipes":
                    this.homeRequest.data.properties[0].copper_water_pipes = value.fieldValue;
                    break;
                case "property_brush_hazard_within_500_feet":
                    this.homeRequest.data.properties[0].brush_hazard_within_500_feet = value.fieldValue;
                    break;
                case "property_flood_area":
                    this.homeRequest.data.properties[0].flood_area = value.fieldValue;
                    break;
                case "property_central_air_conditioning":
                    this.homeRequest.data.properties[0].central_air_conditioning = value.fieldValue;
                    break;
                case "property_sauna":
                    this.homeRequest.data.properties[0].sauna = value.fieldValue;
                    break;
                case "property_hot_tub":
                    this.homeRequest.data.properties[0].hot_tub = value.fieldValue;
                    break;
                case "property_woodburning_stove":
                    this.homeRequest.data.properties[0].woodburning_stove = value.fieldValue;
                    break;
                case "property_sump_pump":
                    this.homeRequest.data.properties[0].sump_pump = value.fieldValue;
                    break;
                case "property_in_ground_swimming_pool":
                    this.homeRequest.data.properties[0].in_ground_swimming_pool = value.fieldValue;
                    break;
                case "property_swimming_pool_is_fenced":
                    this.homeRequest.data.properties[0].swimming_pool_is_fenced = value.fieldValue;
                    break;
                case "property_smoker_in_household":
                    this.homeRequest.data.properties[0].smoker_in_household = value.fieldValue;
                    break;
                case "property_trampoline":
                    this.homeRequest.data.properties[0].trampoline = value.fieldValue;
                    break;
                case "property_covered_deck_patio":
                    this.homeRequest.data.properties[0].covered_deck_patio = value.fieldValue;
                    break;
                case "claim_type":
                    this.homeRequest.data.properties[0].claims[value.index].type = value.fieldValue;
                    break;
                case "claim_paid_amount":
                    this.homeRequest.data.properties[0].claims[value.index].paid_amount = value.fieldValue;
                    break;
                default:
                    break;
            }
        },
        // Validation methods.
        validateFields() {
            let areFieldsValid = true;
            if (this.$route.params.key === "all") {
                this.verifyStep = this.activeStep;
            }
            else {
                if (this.activeStep === 1) {
                    this.verifyStep = 1;
                }
                else {
                    this.verifyStep = this.activeStep + 1;
                }
            }
            const CURRENT_YEAR = new Date().getFullYear();
            if (this.verifyStep === 1) {
                this.homeRequest.contact = this.clientContactInfo;
                this.autoRequest.contact = this.clientContactInfo;
                if (this.clientContactInfo.first_name.length <= 2) {
                    areFieldsValid = false;
                    this.clientInformationFormFieldsStatus.first_name = false;
                }
                else {
                    this.clientInformationFormFieldsStatus.first_name = true;
                }
                if (this.clientContactInfo.last_name.length <= 1) {
                    areFieldsValid = false;
                    this.clientInformationFormFieldsStatus.last_name = false;
                }
                else {
                    this.clientInformationFormFieldsStatus.last_name = true;
                }
                if (this.clientContactInfo.address.length <= 2) {
                    areFieldsValid = false;
                    this.clientInformationFormFieldsStatus.address = false;
                }
                else {
                    this.clientInformationFormFieldsStatus.address = true;
                }
                if (this.clientContactInfo.address1.length <= 2) {
                    areFieldsValid = false;
                    this.clientInformationFormFieldsStatus.address1 = false;
                }
                else {
                    this.clientInformationFormFieldsStatus.address1 = true;
                }
                if (!this.isValidZipCode(this.clientContactInfo.zip_code)) {
                    areFieldsValid = false;
                    this.clientInformationFormFieldsStatus.zip_code = false;
                }
                else {
                    this.clientInformationFormFieldsStatus.zip_code = true;
                }
                if (this.clientContactInfo.city.length <= 2) {
                    areFieldsValid = false;
                    this.clientInformationFormFieldsStatus.city = false;
                }
                else {
                    this.clientInformationFormFieldsStatus.city = true;
                }
                if (this.clientContactInfo.country.length <= 2) {
                    areFieldsValid = false;
                    this.clientInformationFormFieldsStatus.country = false;
                }
                else {
                    this.clientInformationFormFieldsStatus.country = true;
                }
                if (this.clientContactInfo.state.length !== 2) {
                    areFieldsValid = false;
                    this.clientInformationFormFieldsStatus.state = false;
                }
                else {
                    this.clientInformationFormFieldsStatus.state = true;
                }
            }
            else if (this.verifyStep === 2) {
                if (this.activeProductType === "") {
                    areFieldsValid = false;
                    alert("Select product type.");
                }
                else {
                    areFieldsValid = true;
                }
            }
            else if (this.verifyStep === 3) {
                if (this.activeProductType === "auto-insurance") {
                    // Requested policy.
                    // if (this.autoRequest.data.requested_policy.coverage_type.length < 2) {
                    //     areFieldsValid = false;
                    //     this.vehicleInformationFormFieldsStatus.coverage_type = false;
                    // }
                    // else {
                    //     this.vehicleInformationFormFieldsStatus.coverage_type = true;
                    // }
                    // Current policy.
                    // if (this.autoRequest.data.current_policy.insurance_company.length < 2) {
                    //     areFieldsValid = false;
                    //     this.vehicleInformationFormFieldsStatus.insurance_company = false;
                    // }
                    // else {
                    //     this.vehicleInformationFormFieldsStatus.insurance_company = true;
                    // }
                    // Driver info.
                    if (this.autoRequest.data.drivers[0].first_name.length < 2) {
                        areFieldsValid = false;
                        this.vehicleInformationFormFieldsStatus.driver_first_name = false;
                    }
                    else {
                        this.vehicleInformationFormFieldsStatus.driver_first_name = true;
                    }
                    if (this.autoRequest.data.drivers[0].last_name.length < 2) {
                        areFieldsValid = false;
                        this.vehicleInformationFormFieldsStatus.driver_last_name = false;
                    }
                    else {
                        this.vehicleInformationFormFieldsStatus.driver_last_name = true;
                    }
                    if (!this.isValidDate(this.autoRequest.data.drivers[0].birth_date)) {
                        areFieldsValid = false;
                        this.vehicleInformationFormFieldsStatus.driver_birth_date = false;
                    }
                    else {
                        this.vehicleInformationFormFieldsStatus.driver_birth_date = true;
                    }
                    if (!this.isValidGender(this.autoRequest.data.drivers[0].gender)) {
                        areFieldsValid = false;
                        this.vehicleInformationFormFieldsStatus.driver_gender = false;
                    }
                    else {
                        this.vehicleInformationFormFieldsStatus.driver_gender = true;
                    }
                    this.autoRequest.data.drivers[0].claims.forEach((item, index) => {
                        if (!this.isValidDate(item.claim_date)) {
                            areFieldsValid = false;
                            this.vehicleInformationFormFieldsStatus.claims[index].claim_date = false;
                        }
                        else {
                            this.vehicleInformationFormFieldsStatus.claims[index].claim_date = true;
                        }
                    });
                    this.autoRequest.data.drivers[0].tickets.forEach((item, index) => {
                        if (!this.isValidDate(item.ticket_date)) {
                            areFieldsValid = false;
                            this.vehicleInformationFormFieldsStatus.tickets[index].ticket_date = false;
                        }
                        else {
                            this.vehicleInformationFormFieldsStatus.tickets[index].ticket_date = true;
                        }
                    });
                    this.autoRequest.data.drivers[0].major_violations.forEach((item, index) => {
                        if (!this.isValidDate(item.violation_date)) {
                            areFieldsValid = false;
                            this.vehicleInformationFormFieldsStatus.major_violations[index].violation_date = false;
                        }
                        else {
                            this.vehicleInformationFormFieldsStatus.major_violations[index].violation_date = true;
                        }
                    });
                    this.autoRequest.data.drivers[0].accidents.forEach((item, index) => {
                        if (!this.isValidDate(item.accident_date)) {
                            areFieldsValid = false;
                            this.vehicleInformationFormFieldsStatus.accidents[index].accident_date = false;
                        }
                        else {
                            this.vehicleInformationFormFieldsStatus.accidents[index].accident_date = true;
                        }
                    });
                    // Vehicle info.
                    if (this.autoRequest.data.vehicles[0].year < 1981 || this.autoRequest.data.vehicles[0].year > new Date().getFullYear()) {
                        areFieldsValid = false;
                        this.vehicleInformationFormFieldsStatus.vehicle_year = false;
                    }
                    else {
                        this.vehicleInformationFormFieldsStatus.vehicle_year = true;
                    }
                    if (this.autoRequest.data.vehicles[0].make.length < 2) {
                        areFieldsValid = false;
                        this.vehicleInformationFormFieldsStatus.vehicle_make = false;
                    }
                    else {
                        this.vehicleInformationFormFieldsStatus.vehicle_make = true;
                    }
                    if (this.autoRequest.data.vehicles[0].model.length < 2) {
                        areFieldsValid = false;
                        this.vehicleInformationFormFieldsStatus.vehicle_model = false;
                    }
                    else {
                        this.vehicleInformationFormFieldsStatus.vehicle_model = true;
                    }
                }
                else if (this.activeProductType === "home-insurance") {
                    // Requested policy.

                    if (this.homeRequest.data.requested_policy.construction_type.length < 2) {
                        areFieldsValid = false;
                        this.homeInformationFormFieldsStatus.requested_construction_type = false;
                    }
                    else {
                        this.homeInformationFormFieldsStatus.requested_construction_type = true;
                    }

                    if (this.homeRequest.data.requested_policy.occupancy_type.length < 2) {
                        areFieldsValid = false;
                        this.homeInformationFormFieldsStatus.requested_occupancy_type = false;
                    }
                    else {
                        this.homeInformationFormFieldsStatus.requested_occupancy_type = true;
                    }

                    if (this.homeRequest.data.requested_policy.building_use.length < 2) {
                        areFieldsValid = false;
                        this.homeInformationFormFieldsStatus.requested_building_use = false;
                    }
                    else {
                        this.homeInformationFormFieldsStatus.requested_building_use = true;
                    }

                    if (this.homeRequest.data.requested_policy.form_type.length < 2) {
                        areFieldsValid = false;
                        this.homeInformationFormFieldsStatus.requested_form_type = false;
                    }
                    else {
                        this.homeInformationFormFieldsStatus.requested_form_type = true;
                    }

                    if (this.homeRequest.data.requested_policy.sqft < 10) {
                        areFieldsValid = false;
                        this.homeInformationFormFieldsStatus.requested_sqft = false;
                    }
                    else {
                        this.homeInformationFormFieldsStatus.requested_sqft = true;
                    }

                    // if (this.homeRequest.data.requested_policy.replacement_cost < 10000) {
                    //     areFieldsValid = false;
                    //     this.homeInformationFormFieldsStatus.requested_replacement_cost = false;
                    // }
                    // else {
                    //     this.homeInformationFormFieldsStatus.requested_replacement_cost = true;
                    // }





                    // Current policy.
                    // if (this.homeRequest.data.current_policy.insurance_company.length <= 2) {
                    //     areFieldsValid = false;
                    //     this.homeInformationFormFieldsStatus.current_insurance_company = false;
                    // }
                    // else {
                    //     this.homeInformationFormFieldsStatus.current_insurance_company = true;
                    // }
                    // if (!this.isValidDate(this.homeRequest.data.current_policy.expiration_date)) {
                    //     areFieldsValid = false;
                    //     this.homeInformationFormFieldsStatus.current_expiration_date = false;
                    // }
                    // else {
                    //     this.homeInformationFormFieldsStatus.current_expiration_date = true;
                    // }



                    if (!this.isValidDate(this.homeRequest.data.current_policy.year_built)) {
                        areFieldsValid = false;
                        this.homeInformationFormFieldsStatus.year_built = false;
                    }
                    else {
                        this.homeInformationFormFieldsStatus.year_built = true;
                    }

                    if (!this.isValidDate(this.homeRequest.data.current_policy.roof_year)) {
                        areFieldsValid = false;
                        this.homeInformationFormFieldsStatus.roof_year = false;
                    }
                    else {
                        this.homeInformationFormFieldsStatus.roof_year = true;
                    }



                    // if (this.homeRequest.data.current_policy.coverage_type.length < 2) {
                    //     areFieldsValid = false;
                    //     this.homeInformationFormFieldsStatus.current_coverage_type = false;
                    // }
                    // else {
                    //     this.homeInformationFormFieldsStatus.current_coverage_type = true;
                    // }
                    // if (this.homeRequest.data.current_policy.insurance_company.length <= 2) {
                    //     areFieldsValid = false;
                    //     this.homeInformationFormFieldsStatus.current_insurance_company = false;
                    // }
                    // else {
                    //     this.homeInformationFormFieldsStatus.current_insurance_company = true;
                    // }
                    // Property information.
                    // if (!this.isValidZipCode(this.homeRequest.data.properties[0].zip_code)) {
                    //     areFieldsValid = false;
                    //     this.homeInformationFormFieldsStatus.zip_code = false;
                    // }
                    // else {
                    //     this.homeInformationFormFieldsStatus.zip_code = true;
                    // }
                    if (this.homeRequest.data.properties[0].year_built &&
                        (this.homeRequest.data.properties[0].year_built < 1900 || this.homeRequest.data.properties[0].year_built
                            > CURRENT_YEAR)) {
                        this.homeInformationFormFieldsStatus.properties[0].year_built = false;
                        areFieldsValid = false;
                    }
                    else {
                        this.homeInformationFormFieldsStatus.properties[0].year_built = true;
                    }
                    if (this.homeRequest.data.properties[0].year_upgraded &&
                        (this.homeRequest.data.properties[0].year_upgraded < 1900 ||
                            this.homeRequest.data.properties[0].year_upgraded > CURRENT_YEAR)) {
                        this.homeInformationFormFieldsStatus.properties[0].year_upgraded = false;
                        areFieldsValid = false;
                    }
                    else {
                        this.homeInformationFormFieldsStatus.properties[0].year_upgraded = true;
                    }
                    if (this.homeRequest.data.properties[0].stories && this.homeRequest.data.properties[0].stories < 1) {
                        this.homeInformationFormFieldsStatus.properties[0].stories = false;
                        areFieldsValid = false;
                    }
                    else {
                        this.homeInformationFormFieldsStatus.properties[0].stories = true;
                    }
                    if (this.homeRequest.data.properties[0].bedrooms && this.homeRequest.data.properties[0].bedrooms < 1) {
                        this.homeInformationFormFieldsStatus.properties[0].bedrooms = false;
                        areFieldsValid = false;
                    }
                    else {
                        this.homeInformationFormFieldsStatus.properties[0].bedrooms = true;
                    }
                    if (this.homeRequest.data.properties[0].bathrooms && this.homeRequest.data.properties[0].bathrooms < 1) {
                        this.homeInformationFormFieldsStatus.properties[0].bathrooms = false;
                        areFieldsValid = false;
                    }
                    else {
                        this.homeInformationFormFieldsStatus.properties[0].bathrooms = true;
                    }
                    if (this.homeRequest.data.properties[0].square_footage &&
                        this.homeRequest.data.properties[0].square_footage < 100) {
                        this.homeInformationFormFieldsStatus.properties[0].square_footage = false;
                        areFieldsValid = false;
                    }
                    else {
                        this.homeInformationFormFieldsStatus.properties[0].square_footage = true;
                    }
                    if (this.homeRequest.data.properties[0].dwelling_value &&
                        this.homeRequest.data.properties[0].dwelling_value < 1000) {
                        this.homeInformationFormFieldsStatus.properties[0].dwelling_value = false;
                        areFieldsValid = false;
                    }
                    else {
                        this.homeInformationFormFieldsStatus.properties[0].dwelling_value = true;
                    }
                    this.homeRequest.data.properties[0].claims.forEach((item, index) => {
                        if (item.type.length < 2) {
                            areFieldsValid = false;
                            this.homeInformationFormFieldsStatus.claims[index].type = false;
                        }
                        else {
                            this.homeInformationFormFieldsStatus.claims[index].type = true;
                        }
                        if (item.paid_amount.length < 2) {
                            areFieldsValid = false;
                            this.homeInformationFormFieldsStatus.claims[index].paid_amount = false;
                        }
                        else {
                            this.homeInformationFormFieldsStatus.claims[index].paid_amount = true;
                        }
                    });
                }
            }
            else if (this.verifyStep === 4) {
                if (!this.isValidUSPhoneNumber(this.clientContactInfo.phone)) {
                    areFieldsValid = false;
                    this.clientInformationFormFieldsStatus.phone = false;
                }
                else {
                    this.clientInformationFormFieldsStatus.phone = true;
                }
                if (!this.isValidEmail(this.clientContactInfo.email)) {
                    areFieldsValid = false;
                    this.clientInformationFormFieldsStatus.email = false;
                }
                else {
                    this.clientInformationFormFieldsStatus.email = true;
                }
            }
            if (!areFieldsValid) {
                this.scrollTopOfThePage();
            }
            return areFieldsValid;
        },
        isNumeric(str) {
            if (typeof str != "string")
                return false; // we only process strings!
            return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
                !isNaN(parseFloat(str)); // ...and ensure strings of whitespace fail
        },
        isValidZipCode(code) {
            return String(code)
                .toLowerCase()
                .match(/(^\d{5}$)|(^\d{5}-\d{4}$)/);
        },
        isValidGender(gender) {
            return gender === "M" || gender === "F";
        },
        isValidDate(d) {
            return d instanceof Date && !isNaN(d);
        },
        isValidEmail(email) {
            return String(email)
                .toLowerCase()
                .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        },
        isValidUSPhoneNumber(number) {
            return String(number)
                .toLowerCase()
                .match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
        },
        // Utils.
        scrollTopOfThePage() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        },
    },
    components: { Header },
    mounted() {
        console.log(this.$route.params.key)
    }
};
</script>
