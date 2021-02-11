export interface Comment {
    id?: number;
    description : string;
    vote : number;
    comments : Comment[];
}
