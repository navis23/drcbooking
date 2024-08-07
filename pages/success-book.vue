<template>
    <div class="relative">

        <div class="relative px-3 md:px-56 pb-20">
            <div class="flex items-center justify-between py-4">
                <div class="flex gap-x-2 items-center leading-none text-eb-yellow2">
                    <p class="">
                        <Icon name="ph:stack-plus-bold" class="text-3xl" />
                    </p>
                    <h1 class="hidden md:block text-3xl font-bold ">
                        Booking Page DRC
                    </h1>
                </div>
                <div class="flex gap-x-2 items-center leading-none text-eb-yellow2">
                    <h1 class="md:block text-3xl font-bold ">
                        FAREWELL
                    </h1>
                </div>
            </div>
            <div class="flex w-full flex-col items-center justify-center pt-28">
                <div class="my-6 text-center">
                    <h1 class="font-semibold text-3xl text-eb-blue2 leading-none">
                        Proses Booking Sukses
                    </h1>
                    <p class="text-gray-500">
                        Semua proses booking telah anda selesaikan
                    </p>
                </div>

                <div class="w-full max-w-lg transform overflow-hidden rounded-lg bg-eb-white p-6 text-center align-middle shadow outline-none border-none transition-all space-y-2">
                        <h3 class="text-lg">
                            Terimakasih telah melakukan proses booking jadwal di DRC Trans. 
                        </h3>
                        <h3 class="text-lg">
                            Silahkan hubungi nomor admin DRC Trans untuk melakukan konfirmasi booking anda.
                        </h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const previewImage = ref()
const imageChoosed = ref(false)
const globalDataStore = useGlobalDataStore()
const fileInputRef = ref();
const { 
    loading,
    cars,
    rentTypes,
    name,
    phone,
    car_selected,
    unit_amount,
    rent_selected,
    duration,
    destination,
    pickup_date,
    pickup_time,
    pickup_adress,
    pickup_map,
    dp_img,
} = storeToRefs(globalDataStore)


</script>

<style></style>