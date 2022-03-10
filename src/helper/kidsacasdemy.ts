export interface Page {
    url: string;
    title: string;
    title_tag: string;
    navbar_tag: string
}

export interface Login {
    email: string;
    password: string;
    text: string;
    title_tag: string;
    email_input: string;
    password_input: string;
    error: string;
    button: string;
    success_url: string
}

export interface LearningTabs {
    url: string;
    name: string;
    tag_learning: string;
    text_learning: string;
    title_learning_tag: string
}

export interface Registration {
    button_signup: string;
    start_btn: string;
    grade: string;
    subject: string;
    next_btn: string;
    learning_btn: string
}