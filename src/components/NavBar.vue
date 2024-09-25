<template>
  <nav dir="rtl" class="bg-white p-4 rtl">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Menu toggle button for small screens (right) -->
      <button @click="toggleMenu" class="lg:hidden order-first">
        <i class="fa-solid fa-bars fa-xl"></i>
      </button>

      <!-- Logo (center for small screens, left for large screens) -->
      <div class="navbar-logo lg:order-first flex-1 lg:flex-none text-center lg:text-right">
        <img src="../assets/logo.png" alt="Logo" class="h-16 inline-block" />
      </div>

      <!-- Navigation menu (hidden on small screens) -->
      <ul class="hidden lg:flex space-x-4 space-x-reverse items-center">
        <router-link to="/">
          <li><a class="text-gray-700 hover:text-blue-600">الرئيسية</a></li>
        </router-link>
        <li><a href="#about" class="text-gray-700 hover:text-blue-600">شروط المزادات</a></li>
      </ul>

      <!-- User section -->
      <div class="flex items-center space-x-4 space-x-reverse order-last">
        <!-- Buttons for large screens -->
        <div class="hidden lg:flex space-x-2 space-x-reverse">
          <router-link to="/register" class="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg">
            انشاء حساب
          </router-link>
          <router-link to="/login" class="bg-blue-100 text-blue-600 hover:bg-blue-200 px-4 py-2 rounded-lg">
            تسجيل الدخول
          </router-link>
        </div>

          <!-- Notification dropdown -->
          <div class="flex-none">
            <div class="dropdown dropdown-end">
              <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                <i class="fa-regular fa-bell fa-lg"></i>
              </div>
              <div tabindex="0" class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 lg:w-96 w-64 shadow">
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
                <img alt="" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 px-4 py-6 shadow">
              <li>
                <a class="">
                  <i class="fa-regular fa-user"></i>الملف الشخصي
                </a>
              </li>
              <router-link to="/settings">
                <li><a><i class="fa-solid fa-gear"></i>الإعدادات</a></li>
              </router-link>
              <router-link to="/login">
                <li><a><i class="fa-solid fa-right-from-bracket"></i>تسجيل الخروج</a></li>
              </router-link>
            </ul>
          </div>
          <span class="text-gray-700 hidden lg:inline">أحمد محمد</span>
        </div>
      </div>
   

    <!-- Mobile menu -->
    <div :class="{
      'fixed inset-y-0 right-0 bg-white z-50 lg:hidden w-3/4 shadow-lg text-center px-10': true,
      'translate-x-full': !isMenuOpen,
      'translate-x-0': isMenuOpen
    }" class="transition-transform duration-300 ease-in-out">
      <div class="flex flex-col h-full p-4">
        <div class="flex justify-between items-center mb-8">
          <img src="../assets/logo.png" alt="Logo" class="h-16" />
          <button @click="toggleMenu" class="text-gray-700">
            <i class="fa-solid fa-times fa-xl"></i>
          </button>
        </div>
        <ul class="flex flex-col space-y-4 mb-8">
          <router-link to="/" @click="toggleMenu">
            <li><a class="text-gray-700 hover:text-blue-600">الرئيسية</a></li>
          </router-link>
          <li><a href="#about" @click="toggleMenu" class="text-gray-700 hover:text-blue-600">شروط المزادات</a></li>
        </ul>
        <div class="flex flex-col space-y-4">
          <router-link to="/register" @click="toggleMenu" class="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg text-center">
            انشاء حساب
          </router-link>
          <router-link to="/login" @click="toggleMenu" class="bg-blue-100 text-blue-600 hover:bg-blue-200 px-4 py-2 rounded-lg text-center">
            تسجيل الدخول
          </router-link>
        </div>
      </div>
    </div>

    <!-- Overlay -->
    <div 
      v-if="isMenuOpen" 
      @click="toggleMenu" 
      class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
    ></div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      if (this.isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
  },
};
</script>
