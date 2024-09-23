<template>
  <div class="lg:px-48 pb-8">
    <NavBar />
    <EndedOne />
    <CurrentOne />
    <ComingOne />
    <EndedTwo />
    <CurrentTwo />
    <ComingTwo />
    <EndedThree />
    <CurrentThree />
    <FooterBar />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import EndedOne from '@/components/ProductPage/Ended/EndedOne.vue'
import CurrentOne from '@/components/ProductPage/Current/CurrentOne.vue'
import ComingOne from '@/components/ProductPage/Coming/ComingOne.vue'
import EndedTwo from '@/components/ProductPage/Ended/EndedTwo.vue'
import CurrentTwo from '@/components/ProductPage/Current/CurrentTwo.vue'
import ComingTwo from '@/components/ProductPage/Coming/ComingTwo.vue'
import EndedThree from '@/components/ProductPage/Ended/EndedThree.vue'
import CurrentThree from '@/components/ProductPage/Current/CurrentThree.vue'
import FooterBar from '@/components/FooterBar.vue'
export default {
    components: {
        NavBar,
        EndedOne,
        CurrentOne,
        ComingOne,
        EndedTwo,
        CurrentTwo,
        ComingTwo,
        EndedThree,
        CurrentThree,
        FooterBar,
    }
}
</script>

<style>

</style>