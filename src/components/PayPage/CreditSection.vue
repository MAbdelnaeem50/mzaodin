<template>
    <div dir="rtl" class="lg:w-1/4 mx-auto bg-white rounded-lg overflow-hidden">
        <div class="flex justify-center items-center mt-12">
        <h1 class="text-xl font-bold mb-2 text-blue-500">
           معلومات الدفع
        </h1>
      </div>
      <div class="px-6 py-4 lg:mt-12">
        <h2 class="text-xl font-bold mb-4">حدد البطاقة</h2>
        <div class="grid grid-cols-2 gap-4">
          <label class="relative flex items-center justify-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer">
            <input type="radio" name="paymentMethod" value="visa_mastercard" class="absolute top-6 right-4">
            <img src="../../assets/footer/visa.png" alt="Visa/Mastercard" class="h-8">
          </label>
          <label class="relative flex items-center justify-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer">
            <input type="radio" name="paymentMethod" value="paypal" class="absolute top-6 right-4">
            <img src="../../assets/footer/paypal.png" alt="PayPal" class="h-8">
          </label>
          <label class="relative flex items-center justify-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer">
            <input type="radio" name="paymentMethod" value="apple" class="absolute top-6 right-4">
            <img src="../../assets/footer/apple.png" alt="Apple Pay" class="h-8">
          </label>
          <label class="relative flex items-center justify-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer">
            <input type="radio" name="paymentMethod" value="mada" class="absolute top-6 right-4">
            <img src="../../assets/footer/mada.png" alt="Mada" class="h-8">
          </label>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'PaymentMethods',
}
</script>

<style scoped>
/* Add any additional styles here */
</style>
