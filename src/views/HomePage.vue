<template>
  <div>
    <Navbar />
    <div class="container mx-auto p-4 pt-8" dir="rtl">

      <!-- Tabs -->
      <div class="flex justify-right w-full lg:px-20 mb-8">
        <button v-for="tab in tabs" :key="tab.id" :class="[
          'lg:px-20 px-4 py-2 font-semibold rounded-3xl  bg-blue-100 ml-1',
          selectedTab === tab.id ? 'bg-blue-500 text-white' : ' text-black'
        ]" @click="selectedTab = tab.id">
          {{ tab.label }}
        </button>
      </div>

      <!-- Card Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 px-6 sm:px-6 lg:px-20">
        <div v-for="item in filteredItems" :key="item.id" class="bg-white rounded-2xl shadow-lg p-4 sm:p-4">
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
            <button @click="prevImage(item)"
              class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-300  text-white px-2 by-3 rounded-full">
              &#10094;
            </button>
            <button @click="nextImage(item)"
              class="absolute left-0 top-1/2 transform -translate-y-1/2  bg-blue-300  text-white px-2 by-3 rounded-full">
              &#10095;
            </button>
          </div>

          <!-- Item Details -->
          <h3 class="text-lg sm:text-lg font-semibold  text-center mb-4">{{ item.title }}</h3>


          <!-- Countdown or Ended Message -->
          <div v-if="item.status === 'قادِم' || item.status === 'جاري'" class="text-center mb-4">
            <!-- Countdown Timer -->
            <div class="grid grid-cols-4 gap-1 sm:gap-1">
              <div v-for="(value, label) in item.countdown" :key="label" :class="[
                'p-2 sm:p-2 rounded-lg shadow-lg text-center',
                item.status === 'قادِم' ? 'bg-green-500' : 'bg-red-500'
              ]">
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
          images: [
            'https://kaleidoscope.scene7.com/is/image/OttoUK/600w/Apple-iPhone-14-Pro-Max-128GB-Silver~33H494FRSP.jpg',
            'https://www.tmt.my/data/editor/sc-product/18751/iPhone_16_Pro_Max_Desert_Titanium_PDP_Image_Position_1a_Desert_Titanium_Colour__MY-EN.jpg',
            'https://kingstore.link/upload/iblock/7aa/ax3byk9e24t9ed4oq3yd52rm0857nbla.jpg',
          ],
          currentImageIndex: 0,
          endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
          countdown: { أيام: 0, ساعات: 0, دقائق: 0, ثواني: 0 },
        },
        {
          id: 2,
          status: 'جاري',
          title: 'ايفون برو ماكس 2020',
          images: [
            'https://kaleidoscope.scene7.com/is/image/OttoUK/600w/Apple-iPhone-14-Pro-Max-128GB-Silver~33H494FRSP.jpg',
            'https://www.tmt.my/data/editor/sc-product/18751/iPhone_16_Pro_Max_Desert_Titanium_PDP_Image_Position_1a_Desert_Titanium_Colour__MY-EN.jpg',
            'https://kingstore.link/upload/iblock/7aa/ax3byk9e24t9ed4oq3yd52rm0857nbla.jpg',
          ],
          currentImageIndex: 0,
          endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
          countdown: { أيام: 0, ساعات: 0, دقائق: 0, ثواني: 0 },
        },
        {
          id: 3,
          status: 'مُنتهى',
          title: 'ايفون برو ماكس 2020',
          images: [
            'https://kaleidoscope.scene7.com/is/image/OttoUK/600w/Apple-iPhone-14-Pro-Max-128GB-Silver~33H494FRSP.jpg',
            'https://www.tmt.my/data/editor/sc-product/18751/iPhone_16_Pro_Max_Desert_Titanium_PDP_Image_Position_1a_Desert_Titanium_Colour__MY-EN.jpg',
            'https://kingstore.link/upload/iblock/7aa/ax3byk9e24t9ed4oq3yd52rm0857nbla.jpg',
          ],
          currentImageIndex: 0,
        },
        {
          id: 4,
          status: 'قادِم',
          title: 'ايفون برو ماكس 2020',
          images: [
            'https://kaleidoscope.scene7.com/is/image/OttoUK/600w/Apple-iPhone-14-Pro-Max-128GB-Silver~33H494FRSP.jpg',
            'https://www.tmt.my/data/editor/sc-product/18751/iPhone_16_Pro_Max_Desert_Titanium_PDP_Image_Position_1a_Desert_Titanium_Colour__MY-EN.jpg',
            'https://kingstore.link/upload/iblock/7aa/ax3byk9e24t9ed4oq3yd52rm0857nbla.jpg',
          ],
          currentImageIndex: 0,
          endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
          countdown: { أيام: 0, ساعات: 0, دقائق: 0, ثواني: 0 },
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
  methods: {
    nextImage(item) {
      item.currentImageIndex = (item.currentImageIndex + 1) % item.images.length;
    },
    prevImage(item) {
      item.currentImageIndex = (item.currentImageIndex - 1 + item.images.length) % item.images.length;
    },
    startAutoSwap() {
      setInterval(() => {
        this.items.forEach(item => this.nextImage(item));
      }, 5000);
    },
    updateCountdown() {
      this.items.forEach(item => {
        if (item.status === 'قادِم' || item.status === 'جاري') {
          const now = new Date();
          const distance = item.endTime - now;

          if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            item.countdown = {
              أيام: days,
              ساعات: hours,
              دقائق: minutes,
              ثواني: seconds
            };
          } else {
            item.status = 'مُنتهى';
            item.countdown = { أيام: 0, ساعات: 0, دقائق: 0, ثواني: 0 };
          }
        }
      });
    },
    startCountdown() {
      setInterval(this.updateCountdown, 1000);
    },
  },
  mounted() {
    this.startAutoSwap();
    this.startCountdown();
  },
};
</script>

<style></style>
