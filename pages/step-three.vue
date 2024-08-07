<template>
    <div class="relative">
        <div v-if="loading" class="absolute z-[99] bg-gray-900 bg-opacity-20 w-full h-full flex justify-center items-center">
            <div class="p-6 rounded-lg shadow bg-white  flex gap-x-2 items-center text-eb-blue2">
                <p class="">
                        <Icon name="svg-spinners:blocks-shuffle-3" class="text-3xl" />
                    </p>
                <p class="font-semibold text-lg ">
                    Menyimpan Data Booking...
                </p>
            </div>
        </div>
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
                        _STEP FINAL
                    </h1>
                </div>
            </div>
            <div class="flex w-full flex-col items-center justify-center">
                <div class="my-6 text-center">
                    <h1 class="font-semibold text-3xl text-eb-blue2 leading-none">
                        Final Data
                    </h1>
                    <p class="text-gray-500">
                        Masukkan data pelengkap anda
                    </p>
                </div>
                <div class="w-full max-w-lg transform overflow-hidden rounded-lg bg-eb-white px-6 md:px-16 pt-3 pb-6 text-left align-middle shadow outline-none border-none transition-all space-y-2 mb-6">
                    <label class="text-sm font-medium" for="input_nama_driver">Upload Bukti Transfer DP anda</label>
                    <div class="space-y-1 grid grid-cols-2 gap-4">
                        <div>
                            <div class="flex items-center justify-center w-full">
                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-28 rounded-lg cursor-pointer bg-eb-white4 hover:shadow-xl transition-all duration-300 shadow">
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                        </svg>
                                        <p class="mb-2 text-xs text-gray-500 dark:text-gray-400"><span class="font-semibold text-xs">Klik disini untuk upload file</span></p>
                                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPEG or JPG</p>
                                    </div>
                                    <input ref="fileInputRef" @input="pickFile" id="dropzone-file" type="file" class="hidden" accept=".jpg, .png, .svg, .jpeg"/>
                                </label>
                            </div> 
                        </div>
                        <div>
                            <p v-if="!imageChoosed" class="text-sm">Preview image, silahkan pilih file terlebih dahulu</p>
                            <img v-if="imageChoosed" :src="previewImage" alt="">
                        </div>
                    </div>
                </div>

                <div class="w-full max-w-lg transform overflow-hidden rounded-lg bg-eb-white px-6 md:px-16 pt-8 pb-16 text-left align-middle shadow outline-none border-none transition-all space-y-2">
                        <h3 class="text-lg font-semibold text-eb-yellow2">
                            PREVIEW BOOKING DATA
                        </h3>
                        <div class="space-y-1">
                            <div>
                                <p class="text-sm text-gray-500">Nama Penyewa</p>
                                <p class="font-semibold">
                                    {{ name }}
                                </p>
                            </div>
                            <div>
                                <p class="text-sm text-gray-500">Telepon Penyewa</p>
                                <p class="font-semibold">
                                    {{ phone }}
                                </p>
                            </div>
                            <div>
                                <p class="text-sm text-gray-500">Jenis Armada</p>
                                <p class="font-semibold">
                                    {{ car_selected }}
                                </p>
                            </div>
                            <div>
                                <p class="text-sm text-gray-500">Jumlah Armada</p>
                                <p class="font-semibold">
                                    {{ unit_amount }} unit
                                </p>
                            </div>
                            <div>
                                <p class="text-sm text-gray-500">Jenis Sewa</p>
                                <p class="font-semibold">
                                    {{ rent_selected }}
                                </p>
                            </div>
                            <div>
                                <p class="text-sm text-gray-500">Durasi Sewa</p>
                                <p class="font-semibold">
                                    {{ duration }} hari
                                </p>
                            </div>
                            <div>
                                <p class="text-sm text-gray-500">Kota Tujuan</p>
                                <p class="font-semibold">
                                    {{ destination }}
                                </p>
                            </div>
                            <div>
                                <p class="text-sm text-gray-500">Waktu Penjemputan</p>
                                <p class="font-semibold">
                                    {{ pickup_date }}, {{ pickup_time }} WIB
                                </p>
                            </div>
                            <div>
                                <p class="text-sm text-gray-500">Alamat Penjemputan</p>
                                <p class="font-semibold">
                                    {{ pickup_adress }}
                                </p>
                            </div>
                            <div>
                                <p class="text-sm text-gray-500">Link Google Map Penjemputan</p>
                                <p class="font-semibold">
                                    <a :href="pickup_map" target="_blank" class="italic underline text-eb-blue2">{{ pickup_map }}</a>
                                </p>
                            </div>
                            <div v-if="imageChoosed">
                                <p class="text-sm text-gray-500">Bukti Transfer DP</p>
                                <p class="font-semibold text-eb-green2">
                                    Berhasil Terupload
                                </p>
                            </div>
                        </div>
                    
                </div>
                <div class="mt-6 flex items-center justify-between md:justify-center gap-x-4 w-full">
                    <div class="bg-eb-white rounded-lg w-full md:w-auto">
                        <NuxtLink to="/step-two">
                            <ButtonExpand class="warning">
                                <p>
                                    <Icon name="ph:arrow-bend-up-left-bold" class="text-xl leading-none" />
                                </p>
                                <p>
                                    Kembali Step 2
                                </p>
                            </ButtonExpand>
                        </NuxtLink>
                    </div>
                    <div class="bg-eb-white rounded-lg w-full md:w-auto">
                        <ButtonExpand @click="saveData" class="main">
                            <p>
                                <Icon name="ph:floppy-disk-bold" class="text-xl leading-none" />
                            </p>
                            <p>
                                Booking Sekarang
                            </p>
                        </ButtonExpand>
                    </div>
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
const client = useSupabaseClient<any>()
const globalDataStore = useGlobalDataStore()

const previewImage = ref()
const imageChoosed = ref(false)
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

const pickFile = () => {
  const input = fileInputRef.value;
  const file = input.files[0];

  if (file) {
    imageChoosed.value = true
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.value = e.target?.result;
    };
    reader.readAsDataURL(file);
  }
};

const goBooking = () => {
    loading.value = true
    setTimeout(() => {
        loading.value = false
        navigateTo('/success-book')
    }, 2000);
}

const saveData = async () => {
    loading.value = true
    const allData = {
        name: name.value,
        phone : phone.value,
        car_selected : car_selected.value,
        unit_amount : unit_amount.value,
        rent_selected : rent_selected.value,
        duration : duration.value,
        destination : destination.value,
        pickup_date : pickup_date.value,
        pickup_time : pickup_time.value,
        pickup_adress : pickup_adress.value,
        pickup_map : pickup_map.value,
        dp_img : dp_img.value,
    }

    const { data: booking, error } = await client
        .from('booking_temp')
        .upsert(allData)
        .select()
    
    console.log(booking)

    setTimeout(() => {
        loading.value = false
        globalDataStore.$reset()
        navigateTo('/success-book')
    }, 2000);

}


</script>

<style></style>