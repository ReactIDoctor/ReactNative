import {GET_ARTICLES} from '../action/articles.action';

const initialState = {
    articles:[
        {
            img: "https://idoctor.kz/manager/images/optimized/66ab2ae3244c7798fa09321a6f3e29bd_540x320-q-85.jpg",
            title: "Как снизить вероятность рака?",
            date: "15 ОКТ 2019"
        },
        {
            img: "https://idoctor.kz/manager/images/optimized/8b996d94e43248cadc907ad1d4c4c97c_540x320-q-85.jpg",
            title: "После употребления новых препаратов 10 тысяч жителей Казахстана излечились от гепатита B...",
            date: "10 ОКТ 2019"
        },
        {
            img: "https://idoctor.kz/manager/images/optimized/7154a8b9facae401b4ba51533d39517f_540x320-q-85.jpg",
            title: "10 фактов о раке — ВОЗ",
            date: "03 ОКТ 2019"
        },
        {
            img: "https://idoctor.kz/manager/images/optimized/21c57a3ee38751bd60c2d18be9ccb787_540x320-q-85.jpg",
            title: "Мир глазами человека с инсультом",
            date: "30 СЕН 2019"
        },
        {
            img: "https://idoctor.kz/manager/images/optimized/9aafe68bc948416140ff332a174a1f51_540x320-q-85.jpg",
            title: "Что такое рак?",
            date: "27 СЕН 2019"
        },
        {
            img: "https://idoctor.kz/manager/images/optimized/256a10d6a95bd091a8c2b3f6afc13534_540x320-q-85.jpg",
            title: "В Алматы хирурга взяли под стражу через два года после смертельной липосакции",
            date: "24 СЕН 2019"
        },
        {
            img: "https://idoctor.kz/manager/images/optimized/e2cbb2b61c59f751d5f8c03af445ce33_540x320-q-85.jpg",
            title: "Ученым удалось доказать еще одну опасность татуировок",
            date: "03 СЕН 2019"
        },
        {
            img: "https://idoctor.kz/manager/images/optimized/dacd469c7a59b8a1f8cf5db959103d19_540x320-q-85.jpg",
            title: "5 поликлиник Алматы с устаревшим оборудованием",
            date: "28 АВГ 2019"
        }
    ]
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLES:
            return {
                ...state,
                // articles: action.payload
            };

        default:
            return state;
    }
}

