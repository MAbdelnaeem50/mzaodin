<template>
    <div dir="rtl ">
        <NavBar />
        <div class="px-4">
        <div class="lg:px-10 lg:w-1/2 mx-auto border-2 border-gray-300 mt-10 py-10 rounded-2xl">
            <div class="flex justify-center items-center">
                <h1 class="text-xl font-bold mb-2 text-blue-500">التسجيل في المزاد</h1>
            </div>
                  <!-- Countdown Timer -->
      <div class="flex justify-center space-x-2 rtl:space-x-reverse mb-4 mt-5">
        <div v-for="(value, unit) in countdown" :key="unit" class="flex flex-col items-center">
          <div class="bg-red-500 text-white text-lg sm:text-lg p-2 sm:p-2 rounded-lg shadow-lg text-center lg:w-14 w-20 h-11">
            {{ value }}
          </div>
          <span class="text-sm mt-1">{{ unit }}</span>
        </div>
      </div>
            <form @submit.prevent="submitForm">
                <div class="grid gap-4 mb-6 grid-cols-1">
                    <div>
                        <input type="text"
                            class="appearance-none rounded-lg w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline"
                            placeholder="غدد الاشتراكات " required />
                    </div>
                    <div>
                        <input type="text"
                            class="appearance-none rounded-lg w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline"
                            placeholder=" محموعة القيمة" required />
                    </div>
                   
                </div>
                <div class="flex justify-center items-center h-full">
                    <div class="w-full max-w-md px-4">
                        <button type="submit"
                            class="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-300">
                          اشتراك
                        </button>
                        <button type="submit"
                            class="w-full bg-gray-200 text-blue-500 py-2 rounded-lg mt-4 hover:bg-gray-300 transition duration-300">
                          اغلاق
                        </button>
                    </div>
                </div>
            </form>

            <!-- Success Modal -->
            <div v-if="showModal"
                class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
                <div class="bg-white lg:p-40 p-10 rounded-lg shadow-xl justify-center">
                    <h2 class="text-2xl font-bold mb-10 text-center">
                        تم التسجيل في المزاد بنجاح
                    </h2>
                    <div class="flex justify-center">
                        <i class="fa-solid fa-circle-check text-center text-blue-600 text-8xl mb-10"></i>
                    </div>
                    <router-link to="/">
                        <button @click="closeModal"
                            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                            الصفحة الرئيسية
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
        <FooterBar />
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";
export default {
    components: {
        NavBar,
        FooterBar,
    },
    data() {
        return {
            showModal: false,
            countdown: {
          يوم: 5,
          ساعة: 20,
          دقيقة: 22,
          ثانية: 5
        },
        timer: null,
        };
    },
    methods: {
        submitForm() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        updateCountdown() {
        this.countdown.ثانية--;
        if (this.countdown.ثانية < 0) {
          this.countdown.ثانية = 59;
          this.countdown.دقيقة--;
          if (this.countdown.دقيقة < 0) {
            this.countdown.دقيقة = 59;
            this.countdown.ساعة--;
            if (this.countdown.ساعة < 0) {
              this.countdown.ساعة = 23;
              this.countdown.يوم--;
            }
          }
        }
      },
    },
    mounted() {
      this.timer = setInterval(this.updateCountdown, 1000);
    },
    beforeUnmount() {
      clearInterval(this.timer);
    },
};
</script>

<script setup>
</script>
