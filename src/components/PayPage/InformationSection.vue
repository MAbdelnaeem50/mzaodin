<template>
   <div dir="rtl" class="lg:w-1/4 mx-auto bg-white rounded-lg overflow-hidden">
      <div class="px-6 py-4 lg:mt-12">
      <form>
        <div class="mb-4">
          <input type="text" class="w-full px-3 py-2 border rounded-lg border-gray-200" placeholder="1234 5678 9012 3456">
        </div>
        <div class="flex mb-4">
          <div class="w-1/3 ml-2">
            <label class="block text-gray-700">تاريخ الصلاحية</label>
            <input type="text" class="w-full px-3 py-2 border  border-gray-200 rounded-lg" placeholder="شهر">
          </div>
          <div class="w-1/3 ml-2">
            <input type="text" class="w-full px-3 py-2 border  border-gray-200 rounded-lg mt-6  " placeholder="سنة">
          </div>
          <div class="w-1/3 ml-2">
            <label class="block text-gray-700">رمز الامان</label>
            <input type="text" class="w-full px-3 py-2 border  border-gray-200 rounded-lg  " placeholder="123">
          </div>
        </div>
        <div class="flex mb-4">
          <div class="w-1/2 ml-2">
            <label class="block text-gray-700"> الاسم الاول</label>
            <input type="text" class="w-full px-3 py-2 border  border-gray-200 rounded-lg" placeholder="علي">
          </div>
          <div class="w-1/2 ">
            <label class="block text-gray-700">الاسم الثاني</label>
            <input type="text" class="w-full px-3 py-2 border  border-gray-200 rounded-lg   " placeholder="فارس">
          </div>
          
        </div>
       
        <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg">تاكيد الدفع</button>
      </form>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: 'PaymentForm',
  }
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  