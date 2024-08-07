/** @type {import('tailwindcss').Config} */
export default {
    content: [
            "./components/**/*.{js,vue,ts}",
            "./layouts/**/*.vue",
            "./pages/**/*.vue",
            "./plugins/**/*.{js,ts}",
            "./app.vue",
            "./error.vue",
        ],
    theme: {
        extend: {
            colors: {
                'eb-primary' : '#1C7293',
                'eb-black' : '#1E2D2F', // black v1
                'eb-black2' : '#1E1E24', // black v2
                'eb-black3' : '#272838', // black v3
                'eb-black4' : '#001514', // black v4
                'eb-white' : '#FFFFFC', // white v1
                'eb-white2' : '#FFFBFC', // white v2
                'eb-white3' : '#FBFBFB', // white v3
                'eb-white4' : '#F7F7F2', // white v3
                'eb-white5' : '#FAFAFF', // white v4
                'eb-white6' : '#F7F7FF', // white v5
                'eb-gray' : '#D3D5D4', // gray v1
                'eb-green' : '#86CD82', // green v1
                'eb-green2' : '#0B6E4F', // green v2
                'eb-green3' : '#72ad3e', // green v3
                'eb-green4' : '#00C16A', // green v4
                'eb-blue' : '#5FA8D3', // blue v1
                'eb-blue2' : '#0B4F6C', // blue v2
                'eb-yellow' : '#FFD046', // yellow v1
                'eb-yellow2' : '#7B6506', // yellow v2
                'eb-red' : '#DB3A34', // red v1
                'eb-red2' : '#960200', // red v2
                'eb-purple' : '#AA7BC3', // purple v1
                'eb-purple2' : '#5438DC', // purple v2
                'eb-orange' : '#FF8200', // orange v1
                'eb-choco' : '#68534D', // choco v1
                'eb-dark' : '#18435A', // bluedark v1
            }
        },
    },
    plugins: [],
}

