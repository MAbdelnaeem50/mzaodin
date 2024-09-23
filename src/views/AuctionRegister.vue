<template>
    <div dir="rtl">
        <NavBar />
        <div class="lg:px-10 lg:w-1/2 mx-auto border-2 border-gray-300 mt-10 py-10 rounded-2xl">
            <div class="flex justify-center items-center">
                <h1 class="text-xl font-bold mb-2 text-blue-500">التسجيل في المزاد</h1>
            </div>
            <form @submit.prevent="submitForm">
                <div class="grid gap-4 mb-6 grid-cols-1">
                    <div>
                        <input type="text"
                            class="appearance-none rounded-lg w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline"
                            placeholder="مبلغ الاشتراك الفردي" required />
                    </div>
                    <div>
                        <input type="text"
                            class="appearance-none rounded-lg w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline"
                            placeholder="نيه انطلاق المزاد" required />
                    </div>
                    <div>
                        <input type="text"
                            class="appearance-none rounded-lg w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline"
                            placeholder="غدد الاشتراكات " required />
                    </div>
                    <div>
                        <input type="text"
                            class="appearance-none rounded-lg w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline"
                            placeholder=" محموعة القيمة" required />
                    </div>
                    <div class="">
                        <label for="remember" class=" text-lg font-bold font-medium text-gray-900">تنبيه : المبلغ المدفوع غير قابل للاسترداد وتم التنويه
                        </label>
                    </div>
                    <div class="flex items-start mb-6">
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value=""
                                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                                required />
                        </div>

                        <label for="remember" class="ms-2 text-sm font-medium text-gray-900">الموافقة علي
                            <a href="#" class="text-blue-600 hover:underline">الشروط والأحكام</a>.</label>
                    </div>
                </div>
                <div class="flex justify-center items-center h-full">
                    <div class="w-full max-w-md px-4">
                        <button type="submit"
                            class="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-300">
                            تعديل البيانات
                        </button>
                    </div>
                </div>
            </form>

            <!-- Success Modal -->
            <div v-if="showModal"
                class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
                <div class="bg-white lg:p-40 p-10 rounded-lg shadow-xl justify-center">
                    <h2 class="text-2xl font-bold mb-10 text-center">
                        تم التسجيل في المزاد بنجاح
                    </h2>
                    <div class="flex justify-center">
                        <i class="fa-solid fa-circle-check text-center text-blue-600 text-8xl mb-10"></i>
                    </div>
                    <router-link to="/">
                        <button @click="closeModal"
                            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                            الصفحة الرئيسية
                        </button>
                    </router-link>
                </div>
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
        FooterBar,
    },
    data() {
        return {
            showModal: false,
        };
    },
    methods: {
        submitForm() {

            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
    },
};
</script>
