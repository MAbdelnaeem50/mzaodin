<template>
<div dir="rtl" class="lg:w-1/2 mx-auto mt-10">
    <div class="flex justify-center items-center mb-10">
                <h1 class="text-xl font-bold mb-2 text-blue-500"> معلومات الشحن </h1>
            </div>
    <form @submit.prevent="submitForm">
        <div class="grid gap-6 mb-4 md:grid-cols-2">
            <div class="lg:col-span-2">
                <input type="text" 
                    class=" appearance-none  rounded-lg w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                    placeholder="محمد خالد " required />
            </div>
            <div>
                <input type="text"
                    class=" appearance-none  rounded-lg w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                    placeholder="904325523452346" required />
            </div>
            <div>
                <input type="email" 
                    class=" appearance-none  rounded-lg w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                    placeholder="khalidmohamed@gmail.com" required />
            </div>
            <div>
                <input type="text" 
                    class=" appearance-none  rounded-lg w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                    placeholder="السعودية" required />
            </div>
            <div>
                <input type="text"  
                    class=" appearance-none  rounded-lg w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                    placeholder="الرياض" required />
            </div>
            <div>
                <input type="text"  
                    class=" appearance-none  rounded-lg w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                    placeholder="اسم الحي" required />
            </div>
            <div>
                <input type="text"  
                    class=" appearance-none  rounded-lg w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                    placeholder="اسم الشارع" required />
            </div>

        </div>
        <div class="flex justify-center items-center h-full">
            <div class="w-full max-w-md px-4">
                <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-300">
                    استمرار
                </button>
            </div>
        </div>
    </form>

</div>

</template>

<script>
export default {
    data() {
        return {
           
        }
    },
    methods: {
       
    }
}
</script>

<style></style>