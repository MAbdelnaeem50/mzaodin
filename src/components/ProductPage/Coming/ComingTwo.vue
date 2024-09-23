<template>
    <div   class="w-full mx-auto p-4 mt-8">
      <div class="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 md:space-x-reverse">
        <!-- Product Details Section -->
        <div class="w-full lg:w-1/2 bg-white rounded-lg border-2 p-4 lg:mr-20">
          <h2 class="text-lg font-bold text-blue-600 mb-4 text-right">تفاصيل المنتج</h2>
          <div class="space-y-4">
            <div class="flex justify-between">
              <span class="font-bold">350.00 ر.س</span>
              <span>اسم المنتج</span>
            </div>
            <div>
              <h3 class="font-bold mb-2 text-right">التفاصيل</h3>
              <p class="text-sm text-gray-600">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
                العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف
                التى يولدها التطبيق.
                إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث
                يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
                إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد.
              </p>
            </div>
          </div>
        </div>
  
          <!-- Auction Details Section -->
          <div class="w-full lg:w-1/2 bg-white rounded-lg border-2  p-4 lg:ml-20">
          <h2 class="text-lg font-bold text-blue-600 mb-4 text-right">تفاصيل المزاد</h2>
          <div class="space-y-4">
            <div class="flex justify-between">
              <span class="font-bold">350.00 ر.س</span>
              <span>سعر المنتج التقديري</span>
            </div>
            <div class="flex justify-between">
              <span class="font-bold">500.00 ر.س</span>
              <span>مبلغ ترسية المزاد</span>
            </div>
            <div class="flex justify-between">
              <span>محمد خالد</span>
              <span>المزاود</span>
            </div>
            <div class="flex justify-between">
              <span>السعودية</span>
              <span>الدولة</span>
            </div>
            <div class="flex justify-between">
              <span class="bg-green-500 text-white px-4 py-1 rounded-full text-sm">جاري</span>
              <span>الحالة</span>
            </div>
          </div>
          <button class="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-300">
            التسجيل بالمزاد
          </button>
        </div>

      
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductAuctionDetails',
    // You can add any necessary component logic here
  }
  </script>
  
  <style scoped>
  /* Add any component-specific styles here */
  </style>