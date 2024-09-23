<template>

    <form @submit.prevent="submitForm">
        <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <input type="text" 
                    class=" appearance-none  rounded-lg w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                    placeholder="اسم المستخدم" required />
            </div>
            <div>
                <input type="text"
                    class=" appearance-none  rounded-lg w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                    placeholder="الاسم الحقيقي" required />
            </div>
            <div>
                <input type="text" 
                    class=" appearance-none  rounded-lg w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                    placeholder="رقم الهاتف" required />
            </div>
            <div>
                <input type="email" 
                    class=" appearance-none  rounded-lg w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                    placeholder="البريد الإلكتروني" required />
            </div>
            <div>
                <input type="text"  
                    class=" appearance-none  rounded-lg w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                    placeholder="البلد" required />
            </div>
            <div>
                <input type="text"  
                    class=" appearance-none  rounded-lg w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                    placeholder="المدينة" required />
            </div>
            <div>
                <input type="text"  
                    class=" appearance-none  rounded-lg w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                    placeholder="الحي" required />
            </div>
            <div>
                <input type="text"  
                    class=" appearance-none  rounded-lg w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                    placeholder="الشارع" required />
            </div>
        </div>
        <div class="flex justify-center items-center h-full">
            <div class="w-full max-w-md px-4">
                <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-300">
                    تعديل البيانات
                </button>
            </div>
        </div>
    </form>

    <!-- Success Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
        <div class="bg-white lg:p-40 p-10 rounded-lg shadow-xl justify-center">
            <h2 class="text-2xl font-bold mb-10 text-center">تم تحديث البيانات بنجاح</h2>
            <div class="flex justify-center">
                <i class="fa-solid fa-circle-check text-center text-blue-600 text-8xl mb-10"></i>
            </div>
            <button @click="closeModal" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                إغلاق
            </button>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            showModal: false
        }
    },
    methods: {
        submitForm() {
            // Here you would typically handle form submission
            // For now, we'll just show the modal
            this.showModal = true
        },
        closeModal() {
            this.showModal = false
        }
    }
}
</script>

<style></style>