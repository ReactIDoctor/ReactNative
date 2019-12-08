import {GET_ALL_DOCTORS} from '../actions/doctors.actions';

const initialState = {
    doctors:[
        {
            img: "https://idoctor.kz/images/optimized/xIZVEQRuvtCUYBQwYgO2pYTG4P9VHIaPlguq1L1M_300x300-q-85.jpeg",
            name: "Иргайбаева Гульжахан Ахиновна",
            speacialist: "ОФТАЛЬМОЛОГ (ОКУЛИСТ)",
            experience: "18 лет",
            address: "Алматы ул. Ауэзова, 175",
            medcenter: "Оптика при \"АПТЕКАПЛЮС\"",
            review: 33,
            rating: 5.00,
            price: 2500,
        },
        {
            img: "https://idoctor.kz/images/doctors/1001/762/optimized/9LCQnOhNltPvr0pLHmrTT4pjyHultvIBoqsri4yg_300x300-q-85.jpeg",
            name: "Джумазов Ильяс Масантинович",
            speacialist: "ЛОР (ОТОЛАРИНГОЛОГ)",
            experience: "7 лет",
            address: "",
            medcenter: "Медицинский Центр \"Тау Сункар\" на Розыбакиева",
            review: 63,
            rating: 5.00,
            price: 4000,
        },
        {
            img: "https://idoctor.kz/images/doctors/1/151/optimized/ktwlCVfb6kqmKwlA0T3gkxVKAwmM9dw6o6xwI3jv_300x300-q-85.jpeg",
            name: "Бочаров Глеб Сергеевич",
            speacialist: "ПРОКТОЛОГ  ХИРУРГ",
            experience: "18 ЛЕТ",
            address: "ул. Шевченко, 126 (между Шарипова и Байтурсынова)",
            medcenter: "Университетская клиника КазНМУ им. С.Д. Асфендиярова №3",
            review: 13,
            rating: 4.48,
            price: 8000,
        },
        {
            img: "https://idoctor.kz/images/doctors/1001/1177/optimized/Q2Ixka6qzRBOvW5gAweg7wFiySAe3jynqSvl14UA_300x300-q-85.jpeg",
            name: "Сагиндыкова Алия Абхановна",
            speacialist: "НЕВРОЛОГ (НЕВРОПАТОЛОГ) ",
            experience: "12 ЛЕТ",
            address: "Алматы ул. Сатпаева, 56 (уг. Айманова)",
            medcenter: "Стоматологическая клиника \"DM Dental\"",
            review: 219,
            rating: 4.99,
            price: 5000,
        },
        {
            img: "https://idoctor.kz/images/gdQMG9NyDtJ2UCE75WdUcwBaLur54W2xJduUhwWL_300x300.png",
            name: "Ким Зинаида Григорьевна",
            speacialist: "КАРДИОЛОГ  АРИТМОЛОГ",
            experience: "32 ГОДА",
            address: "ул. Карасай батыра, 152 (уг. Нурмакова)",
            medcenter: "Медицинский Центр \"Авторская Медицина\"",
            review: 28,
            rating: 4.98,
            price: 7000,
        },
        {
            img: "https://idoctor.kz/images/doctors/31001/30552/optimized/2d9023fa37d38ec393de232e41950dd4_300x300-q-85.jpg",
            name: "Муратали Данияр Нуржанулы",
            speacialist: "ПСИХОЛОГ",
            experience: "2 ГОДА",
            address: "",
            medcenter: "Кабинет психолога",
            review: 15,
            rating: 5.00,
            price: 10000,
        },

        {
            img: "https://idoctor.kz/images/doctors/31001/30557/optimized/yYe8lsDSF0p7ElB6i6OIAOBzVnxu5Z0cI82rVZEn_300x300-q-85.jpeg",
            name: "Берикбаева Алия Алпысхановна",
            speacialist: "ПЕДИАТР  УЗИ-СПЕЦИАЛИСТ ",
            experience: "9 ГОДА",
            address: "ул. Кашгарская, 69/102",
            medcenter: "Клиника \"Век\"",
            review: 8,
            rating: 5.00,
            price: 6000,
        }
    ]
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_DOCTORS:
            return {
                ...state,
                // doctors: action.payload
            };

        default:
            return state;
    }
}

