<template>
  <div class="mt-8">
    <div class="container relative mx-auto flex flex-col gap-3 mb-5">
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
      <h1 class="mb-3 text-2xl font-bold text-primery-dark">
        {{ $t('contact_us') }}
      </h1>

      <div class="flex flex-col gap-6">
        <div class="relative flex flex-col gap-6 lg:flex-row">
          <div class="w-full lg:w-1/2">
            <div>
              <form @submit.prevent="sendForm" class="flex flex-col gap-6">
                <div class="flex flex-col gap-6 sm:flex-row sm:gap-1">
                  <div class="w-full shrink-0 sm:w-1/2">
                    <div class="relative">
                      <div
                        class="relative overflow-hidden rounded border border-gray-400 bg-white"
                      >
                        <input
                          class="py-2 px-6 w-full focus:placeholder:text-white outline-none"
                          type="text"
                          :placeholder="$t('name')"
                          v-model="yourName"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="w-full shrink-0 sm:w-1/2">
                    <div class="relative">
                      <div
                        class="relative overflow-hidden rounded border border-gray-400 bg-white"
                      >
                        <input
                          class="py-2 px-6 w-full focus:placeholder:text-white outline-none"
                          type="text"
                          :placeholder="$t('email')"
                          v-model="yourEmail"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full">
                  <div class="relative">
                    <div
                      class="relative overflow-hidden rounded border border-gray-400 bg-white"
                    >
                      <input
                        class="py-2 px-6 w-full focus:placeholder:text-white outline-none"
                        type="text"
                        :placeholder="$t('subject')"
                        v-model="yourSubject"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="w-full">
                  <div class="relative">
                    <div
                      class="relative overflow-hidden rounded border border-gray-400 bg-white"
                    >
                      <textarea
                        class="w-full py-3 px-6 focus:placeholder:text-white outline-none"
                        type="text"
                        :placeholder="$t('your_message')"
                        cols="30"
                        rows="7"
                        v-model="yourMessage"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    class="inline-block rounded bg-primary px-6 py-2 font-bold text-primery-dark hover:bg-primary-light"
                    type="submit"
                  >
                    {{ $t('send') }}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="w-full lg:w-1/2">
            <div
              class="relative flex h-72 flex-col items-center justify-center"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d202.25582558360085!2d51.434076!3d35.797645!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfcfcf1e9161b2eee!2s8H7HQCXM%2B2JC!5e0!3m2!1sen!2sus!4v1670232556020!5m2!1sen!2sus"
                style="border: 0"
                class="h-full w-full rounded-3xl opacity-80 brightness-100 filter"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <!-- <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12939.179951151129!2d50.981228732403565!3d35.82950540204879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2see!4v1645952091896!5m2!1sen!2see"
                                class="h-full w-full rounded-3xl opacity-80 brightness-100 grayscale filter"
                                style="border: 0" allowfullscreen="" loading="lazy"></iframe> -->
              <div
                class="bottom-10 flex w-full flex-col items-center justify-center gap-1 sm:absolute sm:w-10/12 sm:flex-row sm:gap-4"
              >
                <a
                  href="https://www.google.com/maps/dir//35.797557,51.434043"
                  target="_blank"
                  class="flex-center w-full cursor-pointer gap-2 rounded-3xl bg-white py-2 px-6 text-secondary-dark shadow-md hover:bg-slate-100 sm:w-1/2"
                >
                  <svg class="w-5 h-5 text-primary" viewBox="0 0 48 48">
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.45 5.5a2 2 0 0 0-1.95 2v6.7l28.3 28.3h6.75a2 2 0 0 0 2-2V7.45a2 2 0 0 0-2-1.95Zm22.71 3.89a8.47 8.47 0 0 1 8.45 8.45h0c0 4.92-4 8.75-8.45 13.78c-4.26-4.82-8.1-8.54-8.42-13.16v-.62a8.45 8.45 0 0 1 8.45-8.45Zm0 4.39a4.06 4.06 0 0 0-4.06 4.06h0a4.06 4.06 0 0 0 4.06 4.06h0a4.06 4.06 0 0 0 0-8.12ZM5.5 27.18v13.37a2 2 0 0 0 2 2h13.32Z"
                    />
                  </svg>
                  {{ $t('navigation_with_google') }}
                </a>
                <a
                  href="https://ul.waze.com/ul?ll=35.79739206%2C51.43416882&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                  target="_blank"
                  class="flex-center w-full cursor-pointer gap-2 rounded-3xl bg-white py-2 px-6 text-secondary-dark shadow-md hover:bg-slate-100 sm:w-1/2"
                >
                  <svg class="w-5 h-5 text-primary" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M20.54 6.63c.69.94 1.15 2.04 1.35 3.19c.21 1.25.11 2.52-.31 3.72a7.349 7.349 0 0 1-2 3.06a9.1 9.1 0 0 1-2.26 1.58c.41 1.07-.13 2.27-1.2 2.68c-.24.09-.49.14-.74.14a2.08 2.08 0 0 1-2.07-2h-3.07c-.11 1.14-1.13 2-2.27 1.87c-1.06-.1-1.86-.98-1.88-2.04c.01-.19.04-.39.1-.57a8.37 8.37 0 0 1-4-2.85c-.33-.44-.23-1.07.23-1.41c.18-.14.4-.22.63-.22c.72 0 1-.25 1.17-.63c.24-.72.38-1.47.39-2.23c.03-.53.09-1.05.17-1.57A7.307 7.307 0 0 1 7.5 5c1.66-1.3 3.69-2 5.79-2c1.43 0 2.84.35 4.11 1a8.67 8.67 0 0 1 3.14 2.63m-3.82 10.68c1.78-.81 3.18-2.27 3.87-4.1c1.62-4.94-2.59-9.16-7.3-9.16c-.35 0-.71.02-1.06.07C9.36 4.5 6.4 6.5 5.81 9.5c-.38 2 .19 5.29-2.76 5.29C4 16 5.32 16.93 6.81 17.37c.85-.76 2.16-.68 2.93.18c.11.12.2.25.26.39h3.55c.52-1.02 1.78-1.44 2.8-.9c.15.08.25.17.37.27m-5.75-7c-.58.03-1.09-.41-1.12-1c-.03-.58.42-1.08 1-1.12c.58-.03 1.09.42 1.12 1.06a.999.999 0 0 1-.97 1.04l-.03.02m4.69 0c-.58.03-1.09-.41-1.12-1c-.04-.58.42-1.08 1-1.12c.58-.03 1.09.42 1.12 1.06c.02.55-.41 1.02-1 1.04v.02m-5.95 1.76c-.06-.28.13-.57.41-.62c.28-.05.56.13.62.41a2.501 2.501 0 0 0 2.58 1.74c1.14.06 2.18-.64 2.57-1.72c.14-.26.46-.38.71-.23c.18.1.29.27.29.47c-.19.71-.63 1.33-1.23 1.76c-.69.48-1.5.75-2.34.76h-.11c-1.63.07-3.1-1-3.53-2.58l.03.01Z"
                    />
                  </svg>
                  {{ $t('navigation_with_waze') }}
                </a>
              </div>
            </div>

            <div class="mt-6 flex flex-col gap-2">
              <div class="flex gap-2 text-gray-600 items-start text-lg">
                <span class="flex-center w-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-full  text-primary"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 12q.825 0 1.413-.588Q14 10.825 14 10t-.587-1.413Q12.825 8 12 8q-.825 0-1.412.587Q10 9.175 10 10q0 .825.588 1.412Q11.175 12 12 12Zm0 7.35q3.05-2.8 4.525-5.088Q18 11.975 18 10.2q0-2.725-1.738-4.463Q14.525 4 12 4Q9.475 4 7.737 5.737Q6 7.475 6 10.2q0 1.775 1.475 4.062Q8.95 16.55 12 19.35Zm0 2.275q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.363Q4 12.6 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.4-1.8 5.163q-1.8 2.762-5.45 5.987q-.15.125-.35.2q-.2.075-.4.075ZM12 10.2Z"
                    />
                  </svg>
                </span>
                <div v-if="$i18n.locale == 'en'">
                  Unit 1, No 1842, Shariati St, Tehran, Republic of Iran
                </div>
                <div v-else>
                  شریعتی_ بالاتر از پل رومی _ بالاتر از مترو قیطریه _ جنب بانک
                  شهر پلاک ۱۸۴۱_واحد ۱
                </div>
              </div>
              <div
                v-if="$i18n.locale == 'en'"
                class="flex gap-2 text-gray-600 items-start text-lg"
              >
                <span class="flex-center w-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-full  text-primary"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 11q-.425 0-.712-.288Q11 10.425 11 10t.288-.713Q11.575 9 12 9t.713.287Q13 9.575 13 10t-.287.712Q12.425 11 12 11Zm4 0q-.425 0-.712-.288Q15 10.425 15 10t.288-.713Q15.575 9 16 9t.712.287Q17 9.575 17 10t-.288.712Q16.425 11 16 11Zm4 0q-.425 0-.712-.288Q19 10.425 19 10t.288-.713Q19.575 9 20 9t.712.287Q21 9.575 21 10t-.288.712Q20.425 11 20 11Zm-.05 10q-3.225 0-6.287-1.438q-3.063-1.437-5.425-3.8q-2.363-2.362-3.8-5.425Q3 7.275 3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.012.637q-.063.288-.288.513L6.975 10.9q1.05 1.8 2.638 3.375Q11.2 15.85 13.1 17l2.35-2.35q.225-.225.588-.338q.362-.112.712-.062l3.45.7q.35.075.575.337q.225.263.225.613v4.05q0 .45-.3.75t-.75.3ZM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025q.225 1 .65 1.975Zm8.95 8.95q.975.425 1.988.675q1.012.25 2.037.325v-2.2l-2.35-.475ZM6.025 9Zm8.95 8.95Z"
                    />
                  </svg>
                </span>
                <!-- <div>02122218151</div> -->
                <a href="tel:+982122218151">
                  (+98)21 222 18151
                </a>
              </div>
              <div v-else class="grid grid-cols-2 gap-1">
                <div class="flex gap-2 text-gray-600 items-start text-lg">
                  <span class="flex-center w-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-full  text-primary"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 11q-.425 0-.712-.288Q11 10.425 11 10t.288-.713Q11.575 9 12 9t.713.287Q13 9.575 13 10t-.287.712Q12.425 11 12 11Zm4 0q-.425 0-.712-.288Q15 10.425 15 10t.288-.713Q15.575 9 16 9t.712.287Q17 9.575 17 10t-.288.712Q16.425 11 16 11Zm4 0q-.425 0-.712-.288Q19 10.425 19 10t.288-.713Q19.575 9 20 9t.712.287Q21 9.575 21 10t-.288.712Q20.425 11 20 11Zm-.05 10q-3.225 0-6.287-1.438q-3.063-1.437-5.425-3.8q-2.363-2.362-3.8-5.425Q3 7.275 3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.012.637q-.063.288-.288.513L6.975 10.9q1.05 1.8 2.638 3.375Q11.2 15.85 13.1 17l2.35-2.35q.225-.225.588-.338q.362-.112.712-.062l3.45.7q.35.075.575.337q.225.263.225.613v4.05q0 .45-.3.75t-.75.3ZM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025q.225 1 .65 1.975Zm8.95 8.95q.975.425 1.988.675q1.012.25 2.037.325v-2.2l-2.35-.475ZM6.025 9Zm8.95 8.95Z"
                      />
                    </svg>
                  </span>
                  <a href="tel:+982122218151">
                    02122218151
                  </a>
                </div>

                <div class="flex gap-2 text-gray-600 items-start text-lg">
                  <span class="flex-center w-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-full  text-primary"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 11q-.425 0-.712-.288Q11 10.425 11 10t.288-.713Q11.575 9 12 9t.713.287Q13 9.575 13 10t-.287.712Q12.425 11 12 11Zm4 0q-.425 0-.712-.288Q15 10.425 15 10t.288-.713Q15.575 9 16 9t.712.287Q17 9.575 17 10t-.288.712Q16.425 11 16 11Zm4 0q-.425 0-.712-.288Q19 10.425 19 10t.288-.713Q19.575 9 20 9t.712.287Q21 9.575 21 10t-.288.712Q20.425 11 20 11Zm-.05 10q-3.225 0-6.287-1.438q-3.063-1.437-5.425-3.8q-2.363-2.362-3.8-5.425Q3 7.275 3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.012.637q-.063.288-.288.513L6.975 10.9q1.05 1.8 2.638 3.375Q11.2 15.85 13.1 17l2.35-2.35q.225-.225.588-.338q.362-.112.712-.062l3.45.7q.35.075.575.337q.225.263.225.613v4.05q0 .45-.3.75t-.75.3ZM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025q.225 1 .65 1.975Zm8.95 8.95q.975.425 1.988.675q1.012.25 2.037.325v-2.2l-2.35-.475ZM6.025 9Zm8.95 8.95Z"
                      />
                    </svg>
                  </span>
                  <a href="tel:+982122395199">
                    02122395199
                  </a>
                </div>

                <div class="flex gap-2 text-gray-600 items-start text-lg">
                  <span class="flex-center w-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-full  text-primary"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 11q-.425 0-.712-.288Q11 10.425 11 10t.288-.713Q11.575 9 12 9t.713.287Q13 9.575 13 10t-.287.712Q12.425 11 12 11Zm4 0q-.425 0-.712-.288Q15 10.425 15 10t.288-.713Q15.575 9 16 9t.712.287Q17 9.575 17 10t-.288.712Q16.425 11 16 11Zm4 0q-.425 0-.712-.288Q19 10.425 19 10t.288-.713Q19.575 9 20 9t.712.287Q21 9.575 21 10t-.288.712Q20.425 11 20 11Zm-.05 10q-3.225 0-6.287-1.438q-3.063-1.437-5.425-3.8q-2.363-2.362-3.8-5.425Q3 7.275 3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.012.637q-.063.288-.288.513L6.975 10.9q1.05 1.8 2.638 3.375Q11.2 15.85 13.1 17l2.35-2.35q.225-.225.588-.338q.362-.112.712-.062l3.45.7q.35.075.575.337q.225.263.225.613v4.05q0 .45-.3.75t-.75.3ZM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025q.225 1 .65 1.975Zm8.95 8.95q.975.425 1.988.675q1.012.25 2.037.325v-2.2l-2.35-.475ZM6.025 9Zm8.95 8.95Z"
                      />
                    </svg>
                  </span>
                  <a href="tel:+982122395078">
                    02122395078
                  </a>
                </div>
                <div class="flex gap-2 text-gray-600 items-start text-lg">
                  <span class="flex-center w-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-full  text-primary"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 11q-.425 0-.712-.288Q11 10.425 11 10t.288-.713Q11.575 9 12 9t.713.287Q13 9.575 13 10t-.287.712Q12.425 11 12 11Zm4 0q-.425 0-.712-.288Q15 10.425 15 10t.288-.713Q15.575 9 16 9t.712.287Q17 9.575 17 10t-.288.712Q16.425 11 16 11Zm4 0q-.425 0-.712-.288Q19 10.425 19 10t.288-.713Q19.575 9 20 9t.712.287Q21 9.575 21 10t-.288.712Q20.425 11 20 11Zm-.05 10q-3.225 0-6.287-1.438q-3.063-1.437-5.425-3.8q-2.363-2.362-3.8-5.425Q3 7.275 3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.012.637q-.063.288-.288.513L6.975 10.9q1.05 1.8 2.638 3.375Q11.2 15.85 13.1 17l2.35-2.35q.225-.225.588-.338q.362-.112.712-.062l3.45.7q.35.075.575.337q.225.263.225.613v4.05q0 .45-.3.75t-.75.3ZM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025q.225 1 .65 1.975Zm8.95 8.95q.975.425 1.988.675q1.012.25 2.037.325v-2.2l-2.35-.475ZM6.025 9Zm8.95 8.95Z"
                      />
                    </svg>
                  </span>
                  <a href="tel:+982122207306">
                    02122207306
                  </a>
                </div>
              </div>

              <div class="flex gap-2 text-gray-600 items-start text-lg">
                <span class="flex-center w-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-full  text-primary"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 22q-2.05 0-3.875-.788q-1.825-.787-3.187-2.15q-1.363-1.362-2.15-3.187Q2 14.05 2 12q0-2.075.788-3.887q.787-1.813 2.15-3.175Q6.3 3.575 8.125 2.787Q9.95 2 12 2q2.075 0 3.887.787q1.813.788 3.175 2.151q1.363 1.362 2.15 3.175Q22 9.925 22 12v1.45q0 1.475-1.012 2.512Q19.975 17 18.5 17q-.9 0-1.675-.4t-1.275-1.05q-.675.675-1.587 1.063Q13.05 17 12 17q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12v1.45q0 .725.45 1.137q.45.413 1.05.413q.6 0 1.05-.413q.45-.412.45-1.137V12q0-3.275-2.363-5.638Q15.275 4 12 4Q8.725 4 6.362 6.362Q4 8.725 4 12t2.362 5.637Q8.725 20 12 20h5v2Zm0-7q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Z"
                    />
                  </svg>
                </span>
                <div>info@carizanin.com</div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-1 flex flex-col gap-4 border-t pt-6 text-gray-500">
          <!-- <div>
                        ﭘﺸﺘﯿﺒﺎﻧﯽ ﺑﯿﺴﺎن ﺳﯿﺮ در ﺗﻤﺎم ﻃﻮل ﻫﻔﺘﻪ، ﺑﻪ ﺻﻮﺮﺗ 24 ﺳﺎﻋﺘﻪ ﭘﺎﺳﺨﮕﻮی ﺷﻤﺎ در
                        زﻣﯿﻨﻪ ﻫﺎی ﻣﺨﺘﻠﻒ از ﺟﻤﻠﻪ: وﯾﺰﺎﯾ ﺗﮏ و ﮔﺮوﻫﯽ، ﺑﻠﯿﻂ ﻫﻮاﭘﯿﻤﺎ، رزرو ﻫﺘﻞ و
                        ﺗﻮر و... ﻣﯽ ﺑﺎﺷﺪ.
                    </div>
    
                    <div>
                        ﺑﯿﺴﺎن‌ﺳﯿﺮ ﯾﮑﯽ از ﻣﻤﺘﺎزﺗﺮﯾﻦ ﺷﺮﮐﺖ‌ﻫﺎی اراﺋﻪ ﺧﺪﻣﺎت ﮔﺮدﺷﮕﺮی ﻣﯽ‌ﺑﺎﺷﺪ و
                        ﺑﻪ‌ﺧﻮد ﻣﯽ‌ﺑﺎﻟﯿﻢ ﮐﻪ ﻫﻤﻪ روﺰﻫ ﺑﻪ ﺗﻌﺪاد ﻣﺸﺘﺮﯾﺎن وﻓﺎدارﻣﺎن اﻓﺰوﺪﻫ ﻣﯽ‌ﺷﻮد
                    </div> -->
        </div>
      </div>
    </div>
    <FooterSection />
  </div>
</template>

<script lang="ts" setup>
import Schema from '@/data/schema'

import { useAsync, useContext, ref } from '@nuxtjs/composition-api'
import { validateEmail } from '~/data/utils'
const { $axios } = useContext()
const ctx = useContext()

// const contact7Form = useAsync(() =>
//     $axios.get<Schema.ContactForm7>(
//         '/contact-form-7/v1/contact-forms/176/feedback/schema'
//     )
// )

const yourName = ref('')
const yourEmail = ref('')
const yourSubject = ref('')
const yourMessage = ref('')

const sendForm = async () => {
  if (!validateEmail(yourEmail.value)) {
    // @ts-ignore
    ctx.$notify.error({
      title: ctx.i18n.t('error'),
      message: ctx.i18n.t('wrong_email')
    })

    return
  }

  const form = new FormData()
  form.append('your-name', yourName.value)
  form.append('your-email', yourEmail.value)
  form.append('your-subject', yourSubject.value)
  form.append('your-message', yourMessage.value)

  const options = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }

  try {
    const response = await $axios.post(
      '//api.carizanin.com/wp-json/contact-form-7/v1/contact-forms/176/feedback',
      form,
      options
    )
    console.log(response.data)
    // @ts-ignore
    ctx.$notify.success({
      title: ctx.i18n.t('success'),
      message: ctx.i18n.t('your_message_has_been_successfully_sent')
    })
    yourEmail.value = ''
    yourSubject.value = ''
    yourMessage.value = ''
    yourName.value = ''
  } catch (error) {
    console.log(error)
  }
}
</script>
