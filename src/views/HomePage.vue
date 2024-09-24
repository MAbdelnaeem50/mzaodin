<template>
  <div>
    <NavBar />
    <div class="container mx-auto p-4 pt-8" dir="rtl">
      <TabSelector :tabs="tabs" :selectedTab="selectedTab" @tabSelected="selectedTab = $event" />
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 px-6 sm:px-6 lg:px-20">
        <ItemCard
          v-for="item in filteredItems"
          :key="item.id"
          :item="item"
          @nextImage="nextImage"
          @prevImage="prevImage"
          @setImage="setImage"
        />
      </div>
    </div>
    <FooterBar />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';
import TabSelector from '@/components/HomePage/TabSelector.vue';
import ItemCard from '@/components/HomePage/ItemCard.vue';

export default {
  components: {
    NavBar,
    FooterBar,
    TabSelector,
    ItemCard,
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
    setImage(item, index) {
      item.currentImageIndex = index;
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
