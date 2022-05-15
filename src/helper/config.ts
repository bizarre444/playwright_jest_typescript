module.exports = {
    url: 'https://www.ka-stage.ml/',
    selectors: {
        parentPage: {
            path: "parents/",
            title: "Best Parenting Website from Kids Academy",
            title_tag: ".parents__hero-top-title"
        },
        teachersPage: {
            path: "teachers/",
            title: "Hybrid learning platform for PK-3: in class, at home or both",
            title_tag: ".what-is-section__right-title"
        },
        learningPage: {
            path: "learning-resources/",
            title: "Kids Academy Learning Resources",
            title_tag: ".learning-resources__main-title",
            worksheet_tab: {
                path: "free-preschool-kindergarten-worksheets/",
                name: "worksheets",
                tag: "text='Printable worksheets'",
                text: "Free & Fun Worksheets for Kids",
                title_tag: ".learning-resources__primary-title"
            },
            game_tab: {
                path: "learning-games/",
                name: "games",
                tag: "text='Learning games'",
                text: "Learning Games for Kids",
                title_tag: ".learning-resources__primary-title"
            },
            video_tab: {
                url: "learning-videos/",
                name: "video",
                tag: "text='Educational videos'",
                text: "Free Learning Videos for Kids",
                title_tag: ".learning-resources__primary-title"
            },
            lesson_tab: {
                url: "lessons/",
                name: "lesson",
                tag: "body > div.content > div.learning-resources > div:nth-child(1) > div > div > div.learning-resources-tabs__wrapper > ul > li.learning-resources-tabs__item._active > a",
                text: "Free Online Learning Lessons for Kids",
                title_tag: '[data-selector="lessons-title-default"]'
            }
        },
        blogPage: {
            path: "storytime/",
            title: "Blog",
            title_tag: ".page-title__text"
        },
        mainPage: {
            title: "With Kids Academy, All Eyes Are Glued on Learning!",
            title_tag: ".home-main-section__title"
        },
        login: {
            email: "qa.parent2021@gmail.com",
            password: "123456QA",
        }
    }
}