<template>
    <div>
      <NavBar />
      <PriceSection />
      <CreditSection />
      <InformationSection />
      <FooterBar />
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue'
  import PriceSection from '@/components/PayPage/PriceSection.vue'
  import CreditSection from '@/components/PayPage/CreditSection.vue'
  import InformationSection from '@/components/PayPage/InformationSection.vue'
  import FooterBar from '@/components/FooterBar.vue'
  
  export default {
    name: 'App',
    components: {
        NavBar,
        PriceSection,
        CreditSection,
        InformationSection,
        FooterBar
           
    }
  }
  </script>
  