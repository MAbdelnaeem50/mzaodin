<template>

    <form @submit.prevent="updatePassword">
        <div class="grid gap-6 mb-6 md:grid-cols-2 grid-cols-1">
            <div class="mb-6 lg:col-span-2">
                <input type="password" id="password"
                class=" appearance-none  rounded-lg w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                placeholder="كلمة المرور القديمة" required />
            </div>
            <div class="mb-6">
                <input type="password" id="password"
                class=" appearance-none  rounded-lg w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                placeholder="كلمة المرور الجديدة" required />
            </div>
            <div class="mb-6">
                <input type="password" id="confirm_password"
                class=" appearance-none  rounded-lg w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                placeholder="تاكيد كلمة المرور الجديدة" required />
            </div>
        </div>
        <div class="flex justify-center items-center h-full">
            <div class="w-full max-w-md px-4">
                <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-300">
                    تعديل كلمة المرور
                </button>
            </div>
        </div>

        <!-- Success Modal -->
        <div v-if="showModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div class="bg-white lg:p-40 p-10 rounded-lg shadow-xl justify-center">
                <h2 class="text-2xl font-bold mb-10 text-center">تم تحديث كلمة المرور بنجاح</h2>
                <div class="flex justify-center">
                    <i class="fa-solid fa-circle-check text-center text-blue-600 text-8xl mb-10"></i>
                </div>
                <router-link to="/login">
                <button @click="closeModal" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                    تسجيل الدحول
                </button>
            </router-link>
            </div>
        </div>
    </form>

</template>

<script>
export default {
    data() {
        return {
            showModal: false,
        }
    },
    methods: {
        updatePassword() {
            // Add your password update logic here
            // If successful, show the modal
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        }
    }
}
</script>

<style></style>