export const useGlobalDataStore = defineStore('globalDataStore', {
    state: () => ({
        loading : false,
        loading_data : false,
        cars : [
            {
                id : 1,
                name: 'Toyota Hiace Premio' 
            },
            {
                id : 2,
                name: 'Toyota Hiace Commuter' 
            },
            {
                id : 3,
                name: 'Toyota Innova Reborn' 
            },
            {
                id : 4,
                name: 'Toyota Innova Venturer' 
            },
            {
                id : 5,
                name: 'Toyota Innova Zenix' 
            },
            {
                id : 6,
                name: 'Toyota Fortuner' 
            },
            {
                id : 7,
                name: 'Toyota Alphard' 
            },
            {
                id : 8,
                name: 'Toyota All New Avanza' 
            },
            {
                id : 9,
                name: 'lain-lain' 
            },
        ],
        rentTypes : [
            {
                id: 1,
                name: 'Mobil Saja'
            },
            {
                id: 2,
                name: 'Mobil + Sopir'
            },
            {
                id: 3,
                name: 'Mobil + Sopir + BBM'
            },
            {
                id: 4,
                name: 'All in'
            },
        ],
        name: '',
        phone: '',
        car_selected: '',
        unit_amount: 0,
        rent_selected: '',
        duration: 0,
        destination: '',
        pickup_date: '',
        pickup_time: '',
        pickup_adress: '',
        pickup_map: '',
        dp_img: ''
    }),
})
