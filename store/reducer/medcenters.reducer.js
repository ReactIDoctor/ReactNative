import {GET_ALL_MEDCENTERS} from '../actions/medcenters.actions';

const initialState = {
    medcenters:[
        {
            id: 1,
            name: "Медицинский центр \"Gastroclinic\"",
            skills: [
                "Медицинский центр ", " Многопрофильная клиника"
            ],
            location: "ул. Шолом Алейхем, д. 19",
            time: "08:00 - 18:00",
            review: "Отличный медцентр и услужливый персонал.",
            img: "https://idoctor.kz/images/pvYKkfyT1dxsdJ1ajaCarUAdYimNJ0uMdG6icBmh_180x180.png",
            star: 385
        },
        {
            id:2,
            name: "Медицинский Центр \"Тау Сункар\" на Шаляпина\"",
            skills: [
                "Медицинский центр ", " Многопрофильная клиника ", "Стоматология "
            ],
            location: "мкр. Айнабулак-1, 1а",
            time: "08:00 - 18:00",
            review: "Хорошая клиника.Меня все устраивает",
            img: "https://idoctor.kz/images/medcenters/1/24/80XQMwlTyi17VrRKTJF0bvT63ZNyCZKACeBrNIX9.gif",
            star: 114
        },
        {
            id:3,
            name: "Медицинский центр \"РАДА\" на Торайгырова",
            skills: [
                "Медицинский центр ", " Многопрофильная клиника ", "Травмпункт "
            ],
            location: "ул.Торайгырова, 49/1",
            time: "09:00 - 18:00",
            review: "Удобный район, чистая клиника и самое главное вежливый персонал. Я считаю, что врачи в этой клинике- профессионалы",
            img: "https://idoctor.kz/images/medcenters/1/108/B8KJLkMaR827exsBUwooaGj6zBpC1X2jAPEInmuT_180x180.png",
            star: 271
        },
        {
            id:4,
            name: "Центральная семейная поликлиника г. Алматы",
            skills: [
                "Поликлиника", " Центр семейного здоровья", " Глазная клиника"
            ],
            location: "ул. Толе би, д. 249-249а, 1 этаж, Тастак 2",
            time: "08:00 - 20:00 ",
            review: "Здесь недавно, клиника нравится, запись без проблем, прием во время.",
            img: "https://idoctor.kz/images/medcenters/1001/569/3pptrOVV42MPZmFmkARqLZBW7fMLaGWwswu3dhPn_180x180.png",
            star: 14
        },
        {
            id:5,
            name: "Медицинский Центр \"Emirmed\"",
            skills: [
                "Медицинский центр ", " Многопрофильная клиника ", " Глазная клиника"
            ],
            location: "ул. Манаса, 59 (уг. Жандосова)",
            time: "00:00 - 00:00 ",
            review: "Хорошая клиника. Все врачи добрые и отзывчивые",
            img: "https://idoctor.kz/images/AoYyPMH179N7tp6NxO3CqBp5MyKfQd4NWNZJehMH_180x180.png",
            star: 231
        },
        {
            id:6,
            name: "Медицинский Центр \"Авторская Медицина\"",
            skills: [
                "Травмпункт ", " Глазная клиника"
            ],
            location: "ул. Карасай батыра, 152 (уг. Нурмакова)",
            time: "09:00 - 17:00",
            review: "Не так давно я обратилась за помощью к Зинаиде Григорьевне и ни капли не пожалела. Я люблю когда все чётко и по делу, в наше время к",
            img: "https://idoctor.kz/images/medcenters/1/96/JI9qOrf1TuzAfCCStsGtelSEYEWge83ZjkhdvvyO_180x180.png",
            star: 5
        },
        {
            id:7,
            name: "Медицинский центр \"АМИТРУД ДАРИГА\" на Казыбек би",
            skills: [
                " Медицинский центр", "Многопрофильная клиника "
            ],
            location: "ул. Казыбек би, 20Б",
            time: "08:00 - 17:00 ",
            review: "Хорошая клиника. Есть парковка. Есть оплата безнал. Удобно расположен. Есть стационар и врачи все доценты, К.М.Н. и профессора.",
            img: "https://idoctor.kz/images/optimized/shH21wfoVRyQQfvElms0R5V2bFf18DDH4zL7hdnn_180x180-q-85.jpeg",
            star: 1
        },
        {
            id:8,
            name: "Городской центр репродукции человека",
            skills: [
                "Центр планирования семьи", "Мужское и женское здоровье "
            ],
            location: "ул. Жибек-Жолы, 124",
            time: "08:00 - 19:00",
            review: "Врач Опара Н В 💪🏻👍🏻",
            img: "https://idoctor.kz/images/0F0zcwU3viF8msvH95KEZTEn4PbIY5f7iVQXdb5y.gif",
            star: 1
        },
        {
            id:9,
            name: "Медицинский Центр \"Тау Сункар\" на Розыбакиева",
            skills: [
                "Медицинский центр", "Многопрофильная клиника"
            ],
            location: "",
            time: "09:00 - 17:00",
            review: "Врач от бога! Профессионал своего дела💪",
            img: "https://idoctor.kz/images/medcenters/1/295/DkBwbxH5yJZib5cLb9rNJv3BGFdDv4TVlxBCW7FC.gif",
            star: 1
        }
    ]
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_MEDCENTERS:
            return {
                ...state,
                // doctors: action.payload
            };

        default:
            return state;
    }
}

