<template>
  <nav dir="rtl" class="bg-white p-4 rtl">
    <div class="container mx-auto flex flex-col lg:flex-row justify-between items-center">
      <div class="w-full lg:w-auto flex justify-between items-center lg:order-3 mb-4 lg:mb-0">
        <!-- User section -->
        <div class="flex items-center space-x-4 space-x-reverse order-3 lg:order-none">
          <!-- Buttons -->
          <div class="hidden lg:flex space-x-2 space-x-reverse">
            <router-link to="/register">
            <button class="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg">انشاء حساب</button>
            </router-link>
            <router-link to="/login">
            <button class="bg-blue-100 text-blue-600 hover:bg-blue-200 px-4 py-2 rounded-lg">تسجيل الدخول</button>
            </router-link>
          </div>
          <!-- Notification dropdown -->
          <div class="flex-none">
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
       
          <i class="fa-regular fa-bell fa-lg"></i>
        
 
      </div>
      <div
        tabindex="0"
        class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 lg:w-96 w-64  shadow">
        <div class="card-body">
          <div class="flex justify-between px-4 py-2 items-center">
    <h2 class="text-lg font-semibold">الإشعارات</h2>
    <button class="text-blue-500 text-sm"> الكل كمقروء</button>
  </div>
  <div class="divide-y divide-gray-200">
    <div class="flex justify-between items-center px-4 py-2 hover:bg-gray-100">
      <div>
        <p class="text-sm font-semibold text-gray-700">عنوان الاشعار</p>
        <p class="text-xs text-gray-500">تفاصيل الاشعار</p>
      </div>
      <div class="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
        <i class="fa-solid fa-bell"></i>
      </div>
    </div>
  </div>
  <div class="text-center py-2">
    <button class="text-blue-500 text-sm">عرض الكل</button>
  </div>
        </div>
      </div>
    </div>
          </div>
          <!-- User info -->
          <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 px-4 py-6 shadow">
        <li>
          <a class="">
            <i class="fa-regular fa-user"></i>الملف الشخصي
           
          </a>
        </li>
        <li><a><i class="fa-solid fa-gear"></i>الإعدادات</a></li>
        <router-link to="/login">
        <li><a><i class="fa-solid fa-right-from-bracket"></i>تسجيل الخروج</a></li>
        </router-link>
      </ul>
    </div>
          <span class="text-gray-700 hidden lg:inline">أحمد محمد</span>
        </div>

        <!-- Logo for small screens -->
        <div class="navbar-logo lg:hidden flex-grow flex justify-center order-2">
          <img src="../assets/logo.png" alt="Logo" class="h-16" />
        </div>
        
        <!-- Menu toggle button for small screens -->
        <button @click="toggleMenu" class="lg:hidden order-1">
          <i class="fa-solid fa-bars fa-xl"></i>
        </button>
      </div>

      <!-- Navigation menu -->
      <ul :class="{'hidden': !isMenuOpen, 'flex': isMenuOpen}" class="lg:flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 lg:space-x-reverse items-center w-full lg:w-auto lg:order-2">
        <router-link to="/">
        <li><a href="#home" class="text-gray-700 hover:text-blue-600">الرئيسية</a></li>
        </router-link>
       
        <li><a href="#about" class="text-gray-700 hover:text-blue-600">شروط المزادات </a></li>
    

        <!-- Buttons for small screens -->
        <div class="lg:hidden mt-4">
          <div class="flex flex-col space-y-2">
            <router-link to="/register">
            <button class="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg">انشاء حساب</button>
            </router-link>
            <router-link to="/login">
            <button class="bg-blue-100 text-blue-600 hover:bg-blue-200 px-4 py-2 rounded-lg">تسجيل الدخول</button>
            </router-link>
          </div>
        </div>
      </ul>

      <!-- Logo for large screens -->
      <div class="navbar-logo hidden lg:block lg:order-1">
        <img src="../assets/logo.png" alt="Logo" class="h-16" />
      </div>
    </div>
    
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },

}
</script>

<!-- ... existing styles ... -->

