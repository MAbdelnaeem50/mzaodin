<template>
    <div dir="rtl" class="w-full mx-auto bg-white p-6 rounded-lg mt-8">
        <h2 class="text-lg font-bold text-blue-600 mb-4 text-right"> التقييم</h2>
      <!-- Container for profile and rating section -->
      <div class="flex justify-between items-start mb-4">
      
        <!-- Profile section (right side) -->
        <div class="flex items-center space-x-2 space-x-reverse">
          <img 
            src="../../../assets/avatar.png" 
            alt="محمد خالد" 
            class="w-10 h-10 rounded-full object-cover"
          />
          <div class="text-right">
            <p class="font-semibold">محمد خالد</p>
            <p class="text-sm text-gray-500">منذ شهر</p>
          </div>
        </div>
  
        <!-- Rating section (left side) -->
        <div>
          <div class="flex items-center bg-yellow-100 bg-opacity-70 rounded-3xl px-4 py-2">
            <span class="text-yellow-500 text-2xl ml-2">★</span>
            <span class="text-2xl font-bold">4.8</span>
          </div>
        </div>
      </div>
  
      <!-- Review content -->
      <p class="text-gray-700 text-right">
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى...
      </p>

    </div>
  </template>
  
  <script>
  export default {
    name: 'UserReviewComponent',
    // You can add any necessary component logic here
  }
  </script>
  
  <style scoped>
  /* Add any component-specific styles here if needed */
  </style>
  