export interface Subject {
    id: number;
    title_subject : string;
    description_subject : Subject;
    vote : number;
    comments : Comment[];
}
