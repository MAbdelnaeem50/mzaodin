<template>
    <div dir="rtl">
        <NavBar />
       
    <div class="lg:px-10 lg:w-1/2 mx-auto border-2 border-gray-300 mt-10 py-10 rounded-2xl">
        <div class="flex justify-center items-center">
                <h1 class="text-xl font-bold mb-2 text-blue-500">  لوحة سجل المزايدات</h1>
            </div>
      <table class="w-full mb-4 mt-10">
        <thead>
          <tr class="text-right text-blue-500">
            <th class="pb-2 ">الوقت</th>
            <th class="pb-2">المبلغ</th>
            <th class="pb-2">الزائر</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in paginatedData" :key="item.id" class="border-t">
            <td class="py-2 text-right">{{ item.time }}</td>
            <td class="py-2 text-right">{{ item.amount.toFixed(2) }} ر.س</td>
            <td class="py-2 text-right">{{ item.name }}</td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-center items-center space-x-2">
        <button
          @click="handlePageChange(currentPage - 1)"
          :disabled="currentPage === 1"
          class="py-1 px-2 rounded-md bg-gray-200 disabled:opacity-50 ml-2"
        >
          &lt; <!-- Left chevron -->
        </button>
        <button
          v-for="page in totalPages"
          :key="page"
          @click="handlePageChange(page)"
          :class="[
            'px-3 py-1 rounded-md',
            currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200'
          ]"
        >
          {{ page }}
        </button>
        <button
          @click="handlePageChange(currentPage + 1)"
          :disabled="currentPage === totalPages"
          class="py-1 px-2 rounded-md bg-gray-200 disabled:opacity-50"
        >
          &gt; <!-- Right chevron -->
        </button>
      </div>
     
    </div>
    <div class="flex justify-center items-center h-full">
            <div class="w-full max-w-md px-4">
                <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-300">
                  اغلاق
                </button>
            </div>
        </div>
    <FooterBar />
</div>
  </template>
  
  <script>
  import NavBar from "@/components/NavBar.vue";
  import FooterBar from "@/components/FooterBar.vue";
  export default {
    components: {
      NavBar,
      FooterBar
    },
    data() {
      return {
        currentPage: 1,
        itemsPerPage: 5,
        revenueData: [
          { id: 1, name: 'خالد محمد', amount: 300.00, time: '11:55:55' },
          { id: 2, name: 'خالد محمد', amount: 300.00, time: '11:55:55' },
          { id: 3, name: 'خالد محمد', amount: 300.00, time: '11:55:55' },
          { id: 4, name: 'خالد محمد', amount: 300.00, time: '11:55:55' },
          { id: 5, name: 'خالد محمد', amount: 300.00, time: '11:55:55' },
          { id: 6, name: 'محمد علي', amount: 900.00, time: '7:55:55' },
          { id: 7, name: 'محمد علي', amount: 900.00, time: '7:55:55' },
          { id: 8, name: 'محمد علي', amount: 900.00, time: '7:55:55' },
          { id: 9, name: 'محمد علي', amount: 900.00, time: '7:55:55' },
          { id: 10, name: 'محمد علي', amount: 900.00, time: '7:55:55' },
          // Add more data as needed
        ]
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.revenueData.length / this.itemsPerPage);
      },
      paginatedData() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.revenueData.slice(start, end);
      }
    },
    methods: {
      handlePageChange(page) {
        if (page >= 1 && page <= this.totalPages) {
          this.currentPage = page;
        }
      }
    }
  };
  </script>