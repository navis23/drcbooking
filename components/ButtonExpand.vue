<template>
    <button class="text-center w-full md:w-auto font-anek flex items-center justify-center gap-x-1 font-semibold rounded-lg shadow cursor-pointer transition-all duration-300 py-3 px-4 ease-in-out border-none outline-none leading-none">
        <slot />
    </button>
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
.main {
    @apply bg-eb-blue text-eb-blue2 hover:bg-eb-blue2 hover:text-eb-white bg-opacity-20
}
.second {
    @apply bg-eb-green text-eb-green2 hover:bg-eb-green2 hover:text-eb-white bg-opacity-20
}
.dark {
    @apply text-eb-white bg-eb-dark hover:bg-eb-black
}
.danger {
    @apply bg-eb-red text-eb-red2 hover:bg-eb-red2 hover:text-eb-white bg-opacity-20
}
.warning {
    @apply bg-eb-yellow text-eb-yellow2 hover:bg-eb-yellow2 hover:text-eb-white bg-opacity-20
}
.inverted {
    @apply font-semibold text-eb-blue2 ring ring-eb-primary hover:ring-eb-dark hover:text-eb-white hover:bg-eb-dark
}
.outline {
    @apply bg-eb-white3 text-eb-blue2 hover:text-eb-white hover:bg-eb-blue2
}
.outline-dark {
    @apply hover:ring hover:ring-eb-white
}
.none {
    @apply hover:bg-eb-white4
}
.mono {
    @apply bg-slate-50 text-gray-500 border hover:bg-white hover:text-gray-800
}
</style>