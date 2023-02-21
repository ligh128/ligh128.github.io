<script setup>
import FormHeader from '@/components/FormHeader.vue';
import Footer from '@/components/Footer.vue';
import ClientInfoStepForm from '@/components/ClientInfoStepForm.vue'
import FormSideInformation from '@/components/FormSideInformation.vue'
</script>

<template>
  <main class="bg-white">
    <FormHeader />
    <div class="px-[96px] pt-[56px] pb-[72px] w-full flex justify-center">
      <FormSideInformation class="min-w-[400px] max-w-[30%] mr-[130px]" />
      <ClientInfoStepForm />
    </div>
    <Footer class="mt-56" />
  </main>
</template>