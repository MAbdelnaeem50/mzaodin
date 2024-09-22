<template>
  <div>
    <div class="min-h-screen w-full flex items-center justify-center bg-white">
      <div class="lg:w-1/3 w-full bg-white rounded-xl shadow-lg p-8 lg:pb-10">
        <form @submit.prevent="submitForm">
          <!-- Logo -->
          <div class="text-center mb-8">
            <div class="flex justify-center">
              <img src="../../assets/logo.png" class="w-48" alt="">
            </div>
            <p class="text-gray-600 text-2xl">  ابدا مع منصة <span class="text-blue-500">مزاودين</span></p>
            <p class="text-lg text-gray-400">   انشاء حساب</p>
          </div>

          <!-- name Input -->
          <div class="mb-8">
            <div class="relative flex items-center">
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <i class="fa-regular fa-user text-gray-400"></i>
              </div>
              <input
                v-model="form.name"
                class="shadow appearance-none rounded-lg w-full py-3 pl-3 pr-10 bg-gray-100 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline border-none"
                id="text" type="text" placeholder=" الاسم الكامل" required />
            </div>
          </div>

          <!-- Country Select -->
          <div class="mb-8">
            <div class="relative flex items-center">
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <i class="fa-solid fa-location-dot text-gray-400"></i>
              </div>
              <select
                v-model="form.country"
                class="shadow appearance-none rounded-lg w-full py-3 pl-10 pr-10 bg-gray-100 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline border-none"
                id="country"
                required
              >
                <option value="" disabled selected>الدولة</option>
                <option value="sa">السعودية</option>
                <option value="ae">الإمارات</option>
                <option value="kw">الكويت</option>
              </select>
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <i class="fa-solid fa-chevron-down text-gray-400"></i>
              </div>
            </div>
          </div>

          <!-- Email Input -->
          <div class="mb-8">
            <div class="relative flex items-center">
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <i class="fa-solid fa-envelope text-gray-400"></i>
              </div>
              <input
                v-model="form.email"
                class="shadow appearance-none rounded-lg w-full py-3 pl-3 pr-10 bg-gray-100 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline border-none"
                id="email" type="email" placeholder="البريد الإلكتروني" required />
            </div>
          </div>

          <!-- Password Input -->
          <div class="mb-8">
            <div class="relative flex items-center">
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <i class="fa-solid fa-lock text-gray-400"></i>
              </div>
              <input
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                class="shadow appearance-none rounded-lg w-full py-3 pl-3 pr-10 bg-gray-100 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline border-none"
                id="password"
                placeholder="كلمة المرور"
                required
              />
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer" @click="togglePassword">
                <i :class="showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'" class="text-gray-400"></i>
              </div>
            </div>
          </div>

          <!-- Confirm Password Input -->
          <div class="mb-8">
            <div class="relative flex items-center">
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <i class="fa-solid fa-lock text-gray-400"></i>
              </div>
              <input
                v-model="form.confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                class="shadow appearance-none rounded-lg w-full py-3 pl-3 pr-10 bg-gray-100 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline border-none"
                id="confirmPassword"
                placeholder="تأكيد كلمة المرور"
                required
              />
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer" @click="toggleConfirmPassword">
                <i :class="showConfirmPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'" class="text-gray-400"></i>
              </div>
            </div>
          </div>

          <!-- Terms Agreement -->
          <div class="mb-4 flex justify-end">
            <label class="inline-flex items-center">
              <span class="mr-2 text-gray-700">الموافقة على الشروط والأحكام</span>
              <input v-model="form.agreeTerms" type="checkbox" class="form-checkbox h-4 w-4 text-blue-600 rounded" required>
            </label>
          </div>

          <!-- Submit Button -->
          <div>
            <button
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              type="submit">
              انشاء حساب
            </button>
          </div>
        </form>

        <!-- Register Prompt -->
        <p class="mt-4 text-center text-sm text-gray-600">
            لديك حساب؟  
            <router-link to="/login" >
            <a href="#" class="text-blue-500 hover:underline"> بتسجيل الدخول</a>
          </router-link>
        </p>
      </div>
    </div>

    <!-- Success Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div class="bg-white lg:p-40 p-10 rounded-lg shadow-xl justify-center">
        <h2 class="text-2xl font-bold mb-10 text-center ">تم انشاء الحساب بنجاح</h2>
        <div class="flex justify-center">
            <i class="fa-solid fa-circle-check text-center text-blue-600 text-8xl mb-10"></i>
        </div>
        <router-link to="/login" >
        <button @click="closeModal" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
          تسجيل الدخول
        </button>
      </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
      showConfirmPassword: false,
      showModal: false,
      form: {
        name: '',
        country: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
      }
    }
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword
    },
    toggleConfirmPassword() {
      this.showConfirmPassword = !this.showConfirmPassword
    },
    submitForm() {
      // Here you would typically send the form data to your backend
      // For this example, we'll just show the modal
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
      // Reset form after successful submission
      this.form = {
        name: '',
        country: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
      }
    }
  }
}
</script>

<style>
/* ... existing styles ... */
</style>