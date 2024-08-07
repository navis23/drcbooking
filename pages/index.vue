<template>
    <div>
        <div class="px-3 md:px-56 pb-20">
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
                        _STEP 1
                    </h1>
                </div>
            </div>
            <div class="flex w-full flex-col items-center justify-center">
                <div class="my-6 text-center">
                    <h1 class="font-semibold text-3xl text-eb-blue2 leading-none">
                        Data Booking Baru
                    </h1>
                    <p class="text-gray-500">
                        Masukkan data lengkap booking baru
                    </p>
                </div>
                <div class="w-full max-w-lg transform overflow-hidden rounded-lg bg-eb-white px-6 md:px-16 pt-8 pb-16 text-left align-middle shadow outline-none border-none transition-all space-y-6">

                    <div class="space-y-1">
                        <label class="text-sm font-medium" for="input_nama">Nama Lengkap</label>
                        <input id="input_nama" name="input_nama" type="text" v-model="name" class="p-3 bg-eb-white4 w-full rounded-lg text-eb-blue2 font font-medium placeholder:font-normal placeholder:text-sm  shadow border-none outline-none focus:shadow-lg transition-all duration-300 " placeholder="Masukkan nama lengkap disini...">
                    </div>
                    <div class="space-y-1">
                        <label class="text-sm font-medium" for="input_nama_driver">Nomor Telepon</label>
                        <input id="input_nama_driver" name="input_nama_driver" type="text" v-model="phone" class="p-3 bg-eb-white4 w-full rounded-lg text-eb-blue2 font font-medium placeholder:font-normal placeholder:text-sm  shadow border-none outline-none focus:shadow-lg transition-all duration-300 " placeholder="Masukkan nomor telepon disini...">
                    </div>
                    <div class="space-y-1">
                        <label class="text-sm font-medium" for="input_nama_driver">Jenis Armada</label>
                        <select v-model="car_selected" class="p-3 bg-eb-white4 w-full rounded-lg text-eb-blue2 font font-medium placeholder:font-normal placeholder:text-sm  shadow border-none outline-none focus:shadow-lg transition-all duration-300 ">
                            <option disabled value="">Pilih Armada disini...</option>
                            <option v-for="item in cars" :key="item.id" >{{ item.name }}</option>
                        </select>
                    </div>
                    <div class="space-y-1">
                        <label class="text-sm font-medium" for="input_nama_driver">Jumlah Unit</label>
                        <input id="input_nama_driver" name="input_nama_driver" type="number" v-model="unit_amount" class="p-3 bg-eb-white4 w-full rounded-lg text-eb-blue2 font font-medium placeholder:font-normal placeholder:text-sm  shadow border-none outline-none focus:shadow-lg transition-all duration-300 " placeholder="Masukkan Jumlah disini...">
                    </div>
                    <div class="space-y-1">
                        <label class="text-sm font-medium" for="input_nama_driver">Jenis Sewa</label>
                        <select v-model="rent_selected" class="p-3 bg-eb-white4 w-full rounded-lg text-eb-blue2 font font-medium placeholder:font-normal placeholder:text-sm  shadow border-none outline-none focus:shadow-lg transition-all duration-300 ">
                            <option disabled value="">Pilih tipe sewa disini...</option>
                            <option v-for="item in rentTypes" :key="item.id" >{{ item.name }}</option>
                        </select>
                    </div>
                </div>
                <div class="mt-6 flex items-center justify-between md:justify-center gap-x-4 w-full">
                    <div class="bg-eb-white rounded-lg w-full md:w-auto">
                        <NuxtLink to="/step-two">
                            <ButtonExpand class="second">
                                <p>
                                    Lanjutkan Step 2
                                </p>
                                <p>
                                    <Icon name="ph:arrow-bend-up-right-bold" class="text-xl leading-none" />
                                </p>
                            </ButtonExpand>
                        </NuxtLink>
                    </div>
                    <!-- <div class="bg-eb-white rounded-lg w-full md:w-auto">
                        <ButtonExpand class="main">
                            <p>
                                <Icon name="ph:floppy-disk-bold" class="text-base leading-none" />
                            </p>
                            <p>
                                Simpan Data
                            </p>
                        </ButtonExpand>
                    </div> -->
                    <!-- <div class="bg-eb-white rounded-lg w-full md:w-auto">
                        <ButtonExpand class="danger">
                            <p>
                                <Icon name="ph:x-bold" class="text-base leading-none" />
                            </p>
                            <p>
                                Batalkan
                            </p>
                        </ButtonExpand>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const globalDataStore = useGlobalDataStore()

const { 
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