<template>
  <div>
    <div class="min-h-screen w-full flex items-center justify-center bg-white">
     
      <div class="lg:w-1/3 w-full  bg-white rounded-xl shadow-lg p-8 lg:pb-60 ">
        <!-- Logo -->
        <div class="text-center mb-8">
          <div class="flex justify-center">
            <img src="../../assets/logo.png" class="w-48" alt="">
          </div>
          <p class="text-gray-600 text-2xl">مرحبًا بك في <span class="text-blue-500">مزاودين</span></p>
          <p class="text-lg text-gray-400">تسجيل الدخول إلى حسابك</p>
        </div>

        <!-- Email Input -->
        <div class="mb-8">
          <div class="relative flex items-center">
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <i class="fa-solid fa-envelope  text-gray-400 "></i>
            </div>
            <input
              class="shadow appearance-none  rounded-lg w-full py-3 pl-3 pr-10 bg-gray-100 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline border-none"
              id="email" type="email" placeholder="البريد الإلكتروني" />
          </div>
        </div>

        <!-- Password Input -->
        <div class="mb-8">
          <div class="relative flex items-center">
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <i class="fa-solid fa-lock text-gray-400"></i>
            </div>
            <input
              :type="showPassword ? 'text' : 'password'"
              class="shadow appearance-none  rounded-lg w-full py-3 pl-3 pr-10 bg-gray-100 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline border-none"
              id="password"
              placeholder="كلمة المرور"
            />
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer" @click="togglePassword">
              <i :class="showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'" class="text-gray-400"></i>
            </div>
          </div>
        </div>

        <!-- Remember Me & Forgot Password -->
        <div class="flex items-center justify-between mb-4">
          <router-link to="/forget-password" >
          <a href="#" class="text-sm text-blue-500 hover:underline">استعادة كلمة المرور</a>
        </router-link>
          <label class="inline-flex items-center">
            <span class="mr-2 text-gray-700">تذكرني</span>
            <input type="checkbox" class="form-checkbox h-4 w-4 text-blue-600 rounded">
          </label>
         
        </div>

        <!-- Login Button -->
        <div>
          <router-link  to="/">
          <button
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="button">
            تسجيل الدخول
          </button>
        </router-link>
        </div>

        <!-- Register Prompt -->
        <p class="mt-4 text-center text-sm text-gray-600">
          إذا كنت لا تمتلك حسابًا 
          <router-link to="/register" >
          <a href="#" class="text-blue-500 hover:underline">قم بالتسجيل</a>
        </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false
    }
  },

  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword
    }
  }
}
</script>

<style>

</style>