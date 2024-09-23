<template>
  <div class="lg:px-0 px-2">
    <NavBar />
    <InformationSection />
    <ExtraInformation />
    <FooterBar />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import InformationSection from '@/components/ShippingPage/InformationSection.vue';
import ExtraInformation from '@/components/ShippingPage/ExtraInformation.vue';
import FooterBar from '@/components/FooterBar.vue';

export default {
  components: {
    InformationSection,
    ExtraInformation,
    NavBar,
    FooterBar
  }
}
</script>

<style>

</style>