<template>
    <div dir="rtl" class="lg:w-1/2 mx-auto bg-white  rounded-lg overflow-hidden">
      <div class="flex justify-center items-center mt-12">
        <h1 class="text-xl font-bold mb-2 text-blue-500">
          تفاصيل الدفع
        </h1>
      </div>
      <div class="px-6 py-4">
        <h2 class="text-xl font-bold mb-8">معلومات الفوترة</h2>
        <div class="flex justify-between mb-2">
          <span class="text-gray-700">الخدمة المشتركة</span>
          <span class="text-gray-700">$200.00</span>
        </div>
        <div class="flex justify-between mb-2">
          <span class="text-gray-700">الخصم</span>
          <span class="text-gray-700">$0.00</span>
        </div>
        <div class="flex justify-between mb-2">
          <span class="text-gray-700">صافي الفاتورة</span>
          <span class="text-gray-700">$200.00</span>
        </div>
        <div class="flex justify-between mb-2">
          <span class="text-blue-500">مجموع اضافي المطلوب</span>
          <span class="text-blue-500">$400.00</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InvoiceSection',
  }
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>
  