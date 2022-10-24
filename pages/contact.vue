<template>
    <main>

        <div class="container relative mx-auto flex flex-col gap-3 my-8" dir="rtl">
            <!-- Breadcrumb -->
            <!-- <div class="flex justify-center sm:justify-start">
                <span class="breadcrumb inline-flex items-center gap-2 rounded-lg bg-white py-1 px-2">
                    <a href="" class="flex-center breadcrumb__peer gap-2"> بیسانسیر </a>
                    <a href="" class="flex-center breadcrumb__peer breadcrumb__item gap-2">
                        <img src="img/tours/chav-left.svg" class="breadcrumb__chevron transition-all duration-300" />
                        تور
                    </a>
                    <a href="" class="flex-center breadcrumb__peer breadcrumb__item gap-2">
                        <img src="img/tours/chav-left.svg" class="breadcrumb__chevron transition-all duration-300" />
                        ترکیه
                    </a>
                    <span class="flex-center breadcrumb__peer breadcrumb__item gap-2">
                        <img src="img/tours/chav-left.svg" class="breadcrumb__chevron transition-all duration-300" />
                        استانبول
                    </span>
                </span>
            </div> -->
            <h1 class="mb-3 text-2xl font-bold text-primery-dark">ارتباط با ما</h1>
    
            <div class="flex flex-col gap-6">
                <div class="relative flex flex-col gap-6 lg:flex-row">
                    <div class="w-full lg:w-1/2">
                        <div>
                            <form @submit.prevent="sendForm" class="flex flex-col gap-6">
                                <div class="flex flex-col gap-6 sm:flex-row sm:gap-1">
                                    <div class="w-full shrink-0 sm:w-1/2">
                                        <div class="relative">
                                            <span
                                                class="absolute top-0 right-5 z-20 -translate-y-1/2 transform bg-white p-1 text-xs">
                                                نام
                                            </span>
                                            <div
                                                class="relative overflow-hidden rounded-3xl border border-gray-400 bg-white">
                                                <input class="py-2 px-6 w-full focus:placeholder:text-white" type="text"
                                                    placeholder="" v-model="yourName" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full shrink-0 sm:w-1/2">
                                        <div class="relative">
                                            <span
                                                class="absolute top-0 right-5 z-20 -translate-y-1/2 transform bg-white p-1 text-xs">
                                                ایمیل شما
                                            </span>
                                            <div
                                                class="relative overflow-hidden rounded-3xl border border-gray-400 bg-white">
                                                <input class="py-2 px-6 w-full focus:placeholder:text-white" type="text"
                                                    placeholder="" v-model="yourEmail" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="relative">
                                        <span
                                            class="absolute top-0 right-5 z-20 -translate-y-1/2 transform bg-white p-1 text-xs">
                                            موضوع
                                        </span>
                                        <div class="relative overflow-hidden rounded-3xl border border-gray-400 bg-white">
                                            <input class="py-2 px-6 w-full focus:placeholder:text-white" type="text"
                                                placeholder="" v-model="yourSubject" />
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="relative">
                                        <span
                                            class="absolute top-0 right-5 z-20 -translate-y-1/2 transform bg-white p-1 text-xs">
                                            پیام شما
                                        </span>
                                        <div class="relative overflow-hidden rounded-3xl border border-gray-400 bg-white">
                                            <textarea
                                                class="w-full py-3 px-6 focus:placeholder:text-white focus-visible:outline-none"
                                                type="text" placeholder="" cols="30" rows="7"
                                                v-model="yourMessage"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        class="inline-block rounded-3xl bg-primery px-4 py-2 font-bold text-primery-dark shadow-xl hover:bg-yellow-200"
                                        type="submit">
                                        ارسال
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2">
                        <div class="relative flex h-72 flex-col items-center justify-center">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12939.179951151129!2d50.981228732403565!3d35.82950540204879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2see!4v1645952091896!5m2!1sen!2see"
                                class="h-full w-full rounded-3xl opacity-80 brightness-100 grayscale filter"
                                style="border: 0" allowfullscreen="" loading="lazy"></iframe>
                            <div
                                class="bottom-10 flex w-full flex-col items-center justify-center gap-1 sm:absolute sm:w-10/12 sm:flex-row sm:gap-4">
                                <a href="#"
                                    class="flex-center w-full cursor-pointer gap-2 rounded-3xl bg-white py-2 px-6 text-secondary-dark shadow-md hover:bg-slate-100 sm:w-1/2">
                                    <img src="svg/google-map.svg" alt="" />
                                    مسیریابی با ویز
                                </a>
                                <a href="#"
                                    class="flex-center w-full cursor-pointer gap-2 rounded-3xl bg-white py-2 px-6 text-secondary-dark shadow-md hover:bg-slate-100 sm:w-1/2">
                                    <img src="svg/waze.svg" alt="" />
                                    مسیریابی با گوگل
                                </a>
                            </div>
                        </div>
    
                        <div class="mt-6 flex flex-col gap-2">
                            <div class="flex gap-2 text-gray-600">
                                <span class="flex-center w-10">
                                    <img class="object-contain" src="svg/location.svg" alt="" />
                                </span>
                                <div>
                                    خیابان شهید بهشتی،خیابان مهناز(صابونچی)،پلاک 58،طبقه 3،واحد 5
                                </div>
                            </div>
                            <div class="flex gap-2 text-gray-600">
                                <span class="flex-center w-10">
                                    <img class="object-contain" src="svg/phone-black.svg" alt="" />
                                </span>
                                <div>43000030</div>
                            </div>
                            <div class="flex gap-2 text-gray-600">
                                <span class="flex-center w-10">
                                    <img class="object-contain" src="svg/email.svg" alt="" />
                                </span>
                                <div>info@bisanseir.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-1 flex flex-col gap-4 border-t pt-6 text-gray-500">
                    <div>
                        ﭘﺸﺘﯿﺒﺎﻧﯽ ﺑﯿﺴﺎن ﺳﯿﺮ در ﺗﻤﺎم ﻃﻮل ﻫﻔﺘﻪ، ﺑﻪ ﺻﻮﺮﺗ 24 ﺳﺎﻋﺘﻪ ﭘﺎﺳﺨﮕﻮی ﺷﻤﺎ در
                        زﻣﯿﻨﻪ ﻫﺎی ﻣﺨﺘﻠﻒ از ﺟﻤﻠﻪ: وﯾﺰﺎﯾ ﺗﮏ و ﮔﺮوﻫﯽ، ﺑﻠﯿﻂ ﻫﻮاﭘﯿﻤﺎ، رزرو ﻫﺘﻞ و
                        ﺗﻮر و... ﻣﯽ ﺑﺎﺷﺪ.
                    </div>
    
                    <div>
                        ﺑﯿﺴﺎن‌ﺳﯿﺮ ﯾﮑﯽ از ﻣﻤﺘﺎزﺗﺮﯾﻦ ﺷﺮﮐﺖ‌ﻫﺎی اراﺋﻪ ﺧﺪﻣﺎت ﮔﺮدﺷﮕﺮی ﻣﯽ‌ﺑﺎﺷﺪ و
                        ﺑﻪ‌ﺧﻮد ﻣﯽ‌ﺑﺎﻟﯿﻢ ﮐﻪ ﻫﻤﻪ روﺰﻫ ﺑﻪ ﺗﻌﺪاد ﻣﺸﺘﺮﯾﺎن وﻓﺎدارﻣﺎن اﻓﺰوﺪﻫ ﻣﯽ‌ﺷﻮد
                    </div>
                </div>
            </div>
        </div>
        <FooterSection />
    </main>
</template>

<script lang="ts" setup>
import Schema from '@/data/schema'

import { useAsync, useContext, ref } from '@nuxtjs/composition-api'
const { $axios } = useContext()

// const contact7Form = useAsync(() =>
//     $axios.get<Schema.ContactForm7>(
//         '/contact-form-7/v1/contact-forms/176/feedback/schema'
//     )
// )

const yourName = ref("mahdiyar anari");
const yourEmail = ref("a.mahdiyar7@yahoo.com");
const yourSubject = ref("something wrong");
const yourMessage = ref("asdasd asd asdf ");

const sendForm = async () => {
    const form = new FormData();
    form.append("your-name", yourName.value);
    form.append("your-email", yourEmail.value);
    form.append("your-subject", yourSubject.value);
    form.append("your-message", yourMessage.value);

    const options = {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    };

    try {

        const response = await $axios.post('//api.carizanin.com/wp-json/contact-form-7/v1/contact-forms/176/feedback', form ,options)
        console.log(response.data)
        alert("DONR")
    } catch (error) {
        console.log(error)
    }
}


</script>
