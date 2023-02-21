<script setup>
import HelloWorld from '@/components/Homepagehero.vue'
import Header from '@/components/Header.vue';
import ClientSlider from '@/components/ClientSlider.vue';
import Products from '@/components/products.vue';
import WhyChoose from '@/components/WhyChoose.vue';
import Pricing from '@/components/Pricing.vue';
import Testimonials from '@/components/Testimonials.vue';
import Footer from '@/components/Footer.vue';
import Footertest from '../components/Footertest.vue';
</script>


<template>
  <main>
    
  
    <Header  />
    <HelloWorld /> 
    <ClientSlider />
    <Products />
    <!--<WhyChoose /> -->
    <Pricing />
    <!--<Testimonials />-->
    <Footertest/>
    <!-- <router-link to="/about">Go to Foo</router-link> -->   
  </main>
</template>
