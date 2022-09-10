<template>
    <div class="container mx-auto mt-5 flex flex-col gap-10">
        <div class="flex">
            <div class="w-4/12">
                <div class="rounded border-4 border-gray-400 w-full aspect-square">
                    <img src="https://dummyimage.com/400x400" alt="" />
                </div>
            </div>
            <div class="w-8/12 text-left py-4">
                <h1 class="capitalize text-5xl text-gray-700 font-bold">din6921</h1>
                <h3 class="capitalize text-2xl text-gray-600 font-bold">
                    پیچ آلن فولادی
                </h3>
                <h3 class="capitalize text-2xl text-gray-600 font-bold">
                    hexagon Socket Cheese HeadScrows
                </h3>
            </div>
        </div>

        <div class="flex gap-4">
            <div class="w-3/12">
                <div class="rounded border-2 border-gray-300 flex flex-col gap-2 p-2">
                    <div>
                        <label for="diameter">قطر</label>
                        <select v-model="TVDiameter" class="w-full" name="diameter" id="diameter">
                            <option v-for="i in TDiameter" :key="i" :value="i">{{ i }}</option>
                        </select>
                    </div>
                    <div>
                        <label for="length">طول</label>
                        <select v-model="TVLength" class="w-full" name="length" id="length">
                            <option v-for="i in TLength" :key="i" :value="i">{{ i }}</option>
                        </select>
                    </div>

                    <div v-if="details">
                        <div class="mt-6">moshakhasat</div>
                        <div class="flex border-t border-gray-200 py-2">
                            <span class="text-gray-500">وزن</span>
                            <span class="mr-auto text-gray-900">{{ details.Weight }}</span>
                        </div>
                        <div class="flex border-t border-gray-200 py-2">
                            <span class="text-gray-500">تعداد در کیلوگرم</span>
                            <span class="mr-auto text-gray-900"> {{ details.QuantityPerKg }} </span>
                        </div>

                        <div class="flex border-t border-gray-200 py-2">
                            <span class="text-gray-500">آچارخور</span>
                            <span class="mr-auto text-gray-900"> {{ details.Wrench }} </span>
                        </div>

                        <div class="flex border-t border-gray-200 py-2">
                            <span class="text-gray-500">ارتفاع گل</span>
                            <span class="mr-auto text-gray-900"> {{ details.TotalHeight }} </span>
                        </div>

                    </div>
                </div>
            </div>
            <div class="w-9/12">
                <div class="rounded border-2 border-gray-300 w-full">
                    <img src="https://dummyimage.com/600x400/fff/ccc" alt="" />
                </div>
            </div>
        </div>


        <div>adasdad</div>
    </div>
</template>

<script lang="ts" setup>
import { useQuery } from '@vue/apollo-composable/dist'
import PRODUCT from '@/apollo/query/product.gql'
import { ProductQuery } from '@/types/types'
import { ref, Ref, computed, watch } from '@nuxtjs/composition-api'
import { emptyArray } from '@/data/utils'

const TLength: Ref<string[]> = ref([])
const TDiameter: Ref<string[]> = ref([])
const TVLength: Ref<string> = ref("")
const TVDiameter: Ref<string> = ref("")
const TErr = ref(false)
// const dataTable : Ref<{[key : string] : string}> = ref({})
let dataTable: { [key: string]: string }[] = []
const details: Ref<null | { [key: string]: string }> = ref(null)

const { onResult: onResultTable } = useQuery<ProductQuery>(PRODUCT)

watch([TVLength, TVDiameter], () => {

    try {
        const x = dataTable.find(i => Object.entries(i)[0][1] === TVLength.value)!;
        const y = Object.entries(x).find(i => i[0] === TVDiameter.value)![1]
        const z = y.split(":")

        details.value = {
            Weight: z[0],
            QuantityPerKg: z[1],
            Wrench: z[2],
            TotalHeight: z[3]
        }

    } catch (error) {
        console.log(error)
        details.value = null
    }
})


onResultTable(async (r) => {

    if (r.data.post?.table?.table?.mediaItemUrl) {
        try {
            const f = await (
                await fetch(r.data.post?.table?.table?.mediaItemUrl)
            ).arrayBuffer()
            const { read, utils } = await import('xlsx')
            const wb = read(f)
            const data = utils.sheet_to_json<{ [key: string]: string }>(wb.Sheets[wb.SheetNames[0]])

            dataTable = data

            emptyArray(TLength.value)
            emptyArray(TDiameter.value)


            for (let i = 0; i < Object.entries(data[0]).length; i++)
                if (i !== 0)
                    TDiameter.value.push(Object.entries(data[0])[i][0]);


            data.forEach((i) => {
                TLength.value.push(Object.entries(i)[0][1])
            })

            TVDiameter.value = TDiameter.value[0];
            TVLength.value = TLength.value[0];

        } catch (error) {

            console.error(error)
            TErr.value = true
        }
    }
    else
        TErr.value = true


})
</script>
