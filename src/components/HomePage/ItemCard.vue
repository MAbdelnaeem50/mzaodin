<template>
    <div class="bg-white rounded-2xl shadow-lg p-4 sm:p-4">
      <!-- Item Header -->
      <div class="flex justify-between items-center mb-4">
        <span :class="[
          'px-2 py-1 text-xs font-bold rounded',
          item.status === 'قادِم' ? 'bg-green-500 text-white px-3 py-1 sm:px-4 sm:py-1 rounded-3xl text-sm sm:text-sm' : '',
          item.status === 'جاري' ? 'bg-blue-500 text-white px-3 py-1 sm:px-4 sm:py-1 rounded-3xl text-sm sm:text-sm' : '',
          item.status === 'مُنتهى' ? 'bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-1 rounded-3xl text-sm sm:text-sm' : '',
        ]">
          {{ item.status }}
        </span>
        <button class="text-blue-500">مشاركة<i class="fa-solid fa-share-nodes mr-2"></i></button>
      </div>
  
      <!-- Image Carousel -->
      <div class="relative mb-4">
        <img :src="item.images[item.currentImageIndex]" alt="product"
          class="w-full h-40 sm:h-60 object-contain rounded" />
        <button @click="$emit('prevImage', item)"
          class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-md">
          <chevron-right-icon class="w-6 h-6" />
        </button>
        <button @click="$emit('nextImage', item)"
          class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-md">
          <chevron-left-icon class="w-6 h-6" />
        </button>
      </div>
  
      <!-- Image Navigation Dots -->
      <div class="flex justify-center mb-4 space-x-2 rtl:space-x-reverse">
        <span 
          v-for="(_, index) in item.images" 
          :key="index"
          :class="[
            'h-2 w-2 rounded-full cursor-pointer', 
            index === item.currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'
          ]"
          @click="$emit('setImage', item, index)"
        ></span>
      </div>
  
      <!-- Item Details -->
      <h3 class="text-lg sm:text-lg font-semibold text-center mb-4">{{ item.title }}</h3>
  
      <!-- Countdown or Ended Message -->
      <div v-if="item.status === 'قادِم' || item.status === 'جاري'" class="text-center mb-4">
        <!-- Countdown Timer -->
        <div class="grid grid-cols-4 gap-1 sm:gap-1">
          <div v-for="(value, label) in item.countdown" :key="label" class="flex flex-col items-center">
            <div :class="[
              'p-2 sm:p-2 rounded-lg shadow-lg text-center lg:w-14 w-16 h-11',
              item.status === 'قادِم' ? 'bg-green-500' : 'bg-red-500'
            ]">
              <div class="text-white text-lg sm:text-lg">{{ value }}</div>
            </div>
            <span class="text-black text-xs sm:text-sm mt-1">{{ label }}</span>
          </div>
        </div>
      </div>
      <div v-else-if="item.status === 'مُنتهى'" class="text-center text-black font-bold mb-9">
        <p>سعر المنتج التقديري : 350 رس</p>
        <p>سعر المنتج التقديري : 350 رس</p>
      </div>
      <router-link to="/Product">
        <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-2xl w-full">عرض التفاصيل</button>
      </router-link>
    </div>
  </template>
  
  <script>
  import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
  
  export default {
    components: {
      ChevronLeftIcon: ChevronLeft,
      ChevronRightIcon: ChevronRight,
    },
    props: {
      item: Object,
    },
  };
  </script>