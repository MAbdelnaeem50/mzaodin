<template>
    <div>
        <NavBar />
  <div dir="rtl" class=" lg:w-3/4 mx-auto lg:px-20 pb-8 px-4 ">

    <!-- Tabs -->
    <div class="flex justify-right w-full  mb-8 mt-10">
      <button v-for="tab in tabs" :key="tab.id" :class="[
        'lg:px-20 px-4 py-2 font-semibold rounded-3xl  bg-blue-100 ml-1',
        selectedTab === tab.id ? 'bg-blue-500 text-white' : ' text-black'
      ]" @click="selectedTab = tab.id">
        {{ tab.label }}
      </button>
    </div>

    <!-- Components -->
    <UserData v-if="selectedTab === 'userData'" />
    <PasswordData v-if="selectedTab === 'passwordData'" />
   
  </div>
  <FooterBar />
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import UserData from '@/components/ProfilePage/UserData.vue';
import PasswordData from '@/components/ProfilePage/PasswordData.vue';
import FooterBar from '@/components/FooterBar.vue';
export default {
  components: {
    UserData,
    PasswordData,
    NavBar,
    FooterBar,
  },
  data() {
    return {
      selectedTab: 'userData',
      tabs: [
        { id: 'userData', label: 'بيانات المستخدم' },
        { id: 'passwordData', label: 'كلمة المرور ' },
      ],
    };
  },
};
</script>

<style>
/* Add any additional styles here */
</style>