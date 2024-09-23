<template>
    <footer dir="rtl" class="bg-white lg:py-20 py-8 px-4 sm:px-6 lg:px-8 mt-40">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <!-- Logo, Description, and Social Media Icons -->
          <div class="mb-6 md:mb-0 text-center md:text-right">
            <img src="../assets/logo.png" alt="" class="h-20 mb-2">
            <p class="text-sm text-gray-600 max-w-md mb-4">منصة تفاعلية رائدة في تقديم الإيرادات الرقمية للعديد من الأصول والمنتجات</p>
            
            <!-- Social Media Icons -->
            <div class="flex justify-center md:justify-start space-x-4">
              
              <a href="#" class="text-gray-400 hover:text-blue-600 ml-2">
                <i class="fa-brands fa-facebook fa-xl"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-blue-600 ml-2">
                <i class="fa-brands fa-x-twitter fa-xl"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-blue-600 ml-2">
                <i class="fa-brands fa-instagram fa-xl"></i>
              </a>
            </div>
          </div>
  
          <!-- Quick Links -->
          <div class="mb-6  md:mb-0 text-center md:text-right">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">روابط سريعة</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-600 hover:text-blue-600">الشروط والأحكام</a></li>
              <li><a href="#" class="text-gray-600 hover:text-blue-600">سياسة الخصوصية</a></li>
              <li><a href="#" class="text-gray-600 hover:text-blue-600">سياسة الإرجاع</a></li>
              <li><a href="#" class="text-gray-600 hover:text-blue-600">سياسة الشحن</a></li>
            </ul>
          </div>
  
          <!-- Contact Us -->
          <div class="text-center md:text-right">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">تواصل معنا</h3>
            <p class="text-gray-600 mb-2">تواصل معنا عبر الواتس اب</p>
            <p class="text-gray-600">Info@Mazaodin.Com</p>
          </div>
        </div>
  
        <!-- Payment Methods and Business Registration -->
        <div class="mt-8 flex flex-col items-center">
          <img src="../assets/center.png" alt="" class="h-11 mb-2 ">
          <div class="flex space-x-4 mb-4">
            <img src="../assets/footer/mada.png" alt="mada" class="h-6 ml-2">
            <img src="../assets/footer/apple.png" alt="apple" class="h-6">
            <img src="../assets/footer/master-card.png" alt="Mastercard" class="h-6">
            <img src="../assets/footer/paypal.png" alt="payPay" class="h-6">
            <img src="../assets/footer/visa.png" alt="visa" class="h-6">
          </div>
          <p class="text-sm text-gray-600">جميع الحقوق محفوظة لمنصة مزاودين ©2024</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>