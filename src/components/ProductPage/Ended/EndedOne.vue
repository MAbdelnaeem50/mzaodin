<template>
    <div dir="rtl" class="w-full mx-auto  p-4 rounded-lg  ">
      <!-- Header with Breadcrumbs and Buttons -->
      <div class="flex justify-between items-center mb-4">
        <!-- Breadcrumbs -->
        <div class="text-right">
          <span class="text-gray-500">الرئيسية</span>
          <chevron-left-icon class="inline w-4 h-4 mx-1" />
          <span class="text-gray-500">الجوالات</span>
          <chevron-left-icon class="inline w-4 h-4 mx-1" />
          <span class="text-gray-900 font-semibold">ابل ايفون برو ماكس 2020</span>
        </div>
        
        <!-- Buttons -->
        <div class="flex space-x-2 rtl:space-x-reverse">
          <button class="bg-green-500 text-white px-4 py-2 rounded-full flex items-center">
            <message-circle-icon class="w-5 h-5 ml-2" />
            واتساب
          </button>
          <button class="border border-gray-300 p-2 rounded-full">
            <share-2-icon class="w-5 h-5" />
          </button>
        </div>
      </div>
  
      <!-- Product Images -->
      <div class="relative w-full max-w-md mx-auto">
        <img 
          :src="images[currentImage]"
          :alt="`iPhone Pro Max 2020 - Image ${currentImage + 1}`"
          class="w-full h-auto rounded-lg"
        />
        <div class="absolute top-4 left-4">
          <span class="font-bold bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-1 rounded-3xl text-sm sm:text-sm">
            منتهي
          </span>
        </div>
        <button @click="prevImage" class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-md">
          <chevron-right-icon class="w-6 h-6" />
        </button>
        <button @click="nextImage" class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-md" >
          <chevron-left-icon class="w-6 h-6" />
        </button>
      </div>
      
      <!-- Image Navigation Dots -->
      <div class="flex justify-center mt-4 space-x-2 rtl:space-x-reverse">
        <span 
          v-for="(_, index) in images" 
          :key="index"
          :class="[
            'h-2 w-2 rounded-full', 
            index === currentImage ? 'bg-blue-500' : 'bg-gray-300'
          ]"
        ></span>
      </div>
  
      <!-- Product Name -->
      <h2 class="text-center mt-4 text-xl font-bold">
        ابل ايفون برو ماكس 2020
      </h2>
    </div>
  </template>
  
  <script>
  import { ChevronLeft, ChevronRight, Share2, MessageCircle } from 'lucide-vue-next';
  
  export default {
    components: {
      ChevronLeftIcon: ChevronLeft,
      ChevronRightIcon: ChevronRight,
      Share2Icon: Share2,
      MessageCircleIcon: MessageCircle,
    },
    data() {
      return {
        currentImage: 0,
        images: [
          'https://kaleidoscope.scene7.com/is/image/OttoUK/600w/Apple-iPhone-14-Pro-Max-128GB-Silver~33H494FRSP.jpg',
          'https://www.tmt.my/data/editor/sc-product/18751/iPhone_16_Pro_Max_Desert_Titanium_PDP_Image_Position_1a_Desert_Titanium_Colour__MY-EN.jpg',
          'https://kingstore.link/upload/iblock/7aa/ax3byk9e24t9ed4oq3yd52rm0857nbla.jpg',
        ],
      };
    },
    methods: {
      nextImage() {
        this.currentImage = (this.currentImage + 1) % this.images.length;
      },
      prevImage() {
        this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
      },
    },
  };
  </script>