<script setup>
    import Header from '@/components/Header.vue';
import Footertest from '../components/Footertest.vue';
import Pricing from '../components/Pricing.vue';
    
    
    </script>

<template>
    <main>
     <Header />
     <Pricing />
     <div class="spacer" />
     <Footertest/>
       </main>
    </template>

<style>
.spacer {
  margin-bottom: 200px;
}
</style>