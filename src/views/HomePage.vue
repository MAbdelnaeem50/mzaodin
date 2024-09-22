<template>
    <div>
        <Navbar/>
      <div class="container mx-auto p-4 pt-8" dir="rtl">
        
        <!-- Tabs -->
        <div class="flex justify-right w-full lg:px-20 mb-8">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            :class="[ 
              'lg:px-20 px-4 py-2 font-semibold rounded-3xl  bg-blue-100 ml-1',
              selectedTab === tab.id ? 'bg-blue-500 text-white' : ' text-black'
            ]"
            @click="selectedTab = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>
    
        <!-- Card Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 px-6 sm:px-6 lg:px-20">
  <div
    v-for="item in filteredItems"
    :key="item.id"
    class="bg-white rounded-lg shadow-lg p-4 sm:p-4"
  >
    <!-- Item Header -->
    <div class="flex justify-between items-center mb-4">
      <span
        :class="[
          'px-2 py-1 text-xs font-bold rounded',
          item.status === 'قادِم' ? 'bg-green-500 text-white px-3 py-1 sm:px-4 sm:py-1 rounded-3xl text-sm sm:text-sm' : '',
          item.status === 'جاري' ? 'bg-blue-500 text-white px-3 py-1 sm:px-4 sm:py-1 rounded-3xl text-sm sm:text-sm' : '',
          item.status === 'مُنتهى' ? 'bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-1 rounded-3xl text-sm sm:text-sm' : '',
        ]"
      >
        {{ item.status }}
      </span>
      <button class="text-blue-500">مشاركة<i class="fa-solid fa-share-nodes mr-2"></i></button>
    </div>

    <!-- Image -->
    <img :src="item.image" alt="product" class="w-full h-40 sm:h-60 object-contain mb-4 rounded" />

    <!-- Item Details -->
    <h3 class="text-lg sm:text-lg font-semibold  text-center mb-4">{{ item.title }}</h3>

    <!-- Countdown or Ended Message -->
    <div v-if="item.status === 'قادِم' || item.status === 'جاري'" class="text-center mb-4">
      <!-- Countdown Timer -->
      <div class="grid grid-cols-4 gap-1 sm:gap-1">
        <div 
          v-for="(value, label) in item.countdown"
          :key="label"
          :class="[
            'p-2 sm:p-2 rounded-lg shadow-lg text-center',
            item.status === 'قادِم' ? 'bg-green-500' : 'bg-red-500'
          ]"
        >
          <div class="text-white text-xs sm:text-sm">{{ value }}</div>
          <span class="text-white text-xs sm:text-sm">{{ label }}</span>
        </div>
      </div>
    </div>
    <div v-else-if="item.status === 'مُنتهى'" class="text-center text-black font-bold mb-7">
        <p>سعر المنتج التقديري : 350 رس</p>

        <p>سعر المنتج التقديري : 350 رس</p>
    </div>

    <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-2xl w-full ">عرض التفاصيل</button>
  </div>
</div>


      </div>
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/NavBar.vue';
  export default {
    components: {
      Navbar,
    },
    data() {
      return {
        selectedTab: 'الكل',
        tabs: [
          { id: 'الكل', label: 'الكل' },
          { id: 'قادِم', label: 'قادِم' },
          { id: 'جاري', label: 'جاري' },
          { id: 'مُنتهى', label: 'مُنتهى' },
        ],
        items: [
          {
            id: 1,
            status: 'قادِم',
            title: 'ايفون برو ماكس 2020',
            image: 'https://btech.com/media/catalog/product/i/p/iphone-15-pro-blue_titanium_5.jpg?width=1045&store=en&image-type=image',
            countdown: { أيام: 5, ساعات: 22, دقائق: 10, ثواني: 5 },
          },
          {
            id: 2,
            status: 'جاري',
            title: 'ايفون برو ماكس 2020',
            image: 'https://btech.com/media/catalog/product/i/p/iphone-15-pro-blue_titanium_5.jpg?width=1045&store=en&image-type=image',
            countdown: { أيام: 5, ساعات: 22, دقائق: 10, ثواني: 5 },
          },
          {
            id: 3,
            status: 'مُنتهى',
            title: 'ايفون برو ماكس 2020',
            image: 'https://btech.com/media/catalog/product/i/p/iphone-15-pro-blue_titanium_5.jpg?width=1045&store=en&image-type=image',
          },
          {
            id: 4,
            status: 'قادِم',
            title: 'ايفون برو ماكس 2020',
            image: 'https://btech.com/media/catalog/product/i/p/iphone-15-pro-blue_titanium_5.jpg?width=1045&store=en&image-type=image',
            countdown: { أيام: 5, ساعات: 22, دقائق: 10, ثواني: 5 },
          },
        ],
      };
    },
    computed: {
      filteredItems() {
        if (this.selectedTab === 'الكل') {
          return this.items;
        }
        return this.items.filter(item => item.status === this.selectedTab);
      },
    },
  };
  </script>
  
  <style>
  /* Add any additional styling here */
  </style>

