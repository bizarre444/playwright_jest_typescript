export interface Page {
    url: string;
    title: string;
    title_tag: string;
    navbar_tag: string
}

export interface Login {
    email: string;
    password: string
}

export interface LearningTabs {
    url: string;
    name: string;
    tag_learning: string;
    text_learning: string;
    title_learning_tag: string
}