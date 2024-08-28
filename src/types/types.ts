export interface ITodo {
    id: number,
    text: string;
    completed: boolean;
}

export enum FilterType {
    ALL = 'All',
    ACTIVE = 'Active',
    COMPLETED = 'Completed'
}