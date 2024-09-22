<template>
    <div>
      <div class="min-h-screen w-full flex items-center justify-center bg-white">
        <div class="lg:w-1/3 w-full  bg-white rounded-xl shadow-lg p-8  ">
          <!-- Logo -->
          <div class="text-center mb-8">
            <div class="flex justify-center">
              <img src="../../assets/logo.png" class="w-48" alt="">
            </div>
            <p class="text-gray-600 text-2xl">  استرجاع كلمة <span class="text-blue-500">المرور</span></p>
            <p class="text-lg text-gray-400">   ادخل البريد الإلكتروني  لاسترحاع كلمة المرور</p>
          </div>
  
          <!-- Email Input -->
          <div class="mb-8">
            <div class="relative flex items-center">
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <i class="fa-solid fa-envelope  text-gray-400 "></i>
              </div>
              <input
                v-model="email"
                class="shadow appearance-none  rounded-lg w-full py-3 pl-3 pr-10 bg-gray-100 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline border-none"
                id="email" type="email" placeholder="البريد الإلكتروني" required />
            </div>
          </div>
  
          <!-- Login Button -->
          <div>
            <button
              @click="sendResetEmail"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              type="button">
               ارسال
            </button>
          </div>
  
          <!-- Register Prompt -->

          <div v-if="showModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div class="bg-white p-40 rounded-lg shadow-xl justify-center  ">
        <h2 class="text-2xl font-bold mb-4 text-center">تم إرسال رمز التحقق</h2>
        <p class="text-center mb-4">تم إرسال رمز التحقق إلى البريد الإلكتروني:</p>
        <p class="text-center font-semibold mb-6">{{ email }}</p>
        <div class="flex justify-center mb-4">
            <i class="fa-solid fa-circle-check text-center text-blue-600 text-8xl"></i>
        </div>
      
        <div class="space-y-4">
          <button @click="resendCode" class="w-full bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-2 px-4 rounded-lg">
            إعادة إرسال الرمز
          </button>
          
          
        </div>
      </div>
    </div>
          
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        showModal: false
      }
    },
    methods: {
      sendResetEmail() {
        if (this.email) {
          // Here you would typically call an API to send the reset email
          // For now, we'll just show the success modal
          this.showModal = true;
        }
      },
      closeModal() {
        this.showModal = false;
      },
      resendCode() {
        // Implement the logic to resend the code
        console.log('Resending code to:', this.email);
      },
      goToEnterCode() {
        // Implement the logic to navigate to the enter code page
        console.log('Navigating to enter code page');
        // You might want to use Vue Router to navigate to a new page
        // this.$router.push('/enter-code');
      }
    }
  }
  </script>
  
  <style>
  
  </style>