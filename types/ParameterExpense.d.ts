export interface Bag {
    [key: string]: any;
}
export declare class ParameterExpense {
    protected params: Bag;
    constructor(params?: any);
    get(key: string, def?: any): any;
    has(key: string): boolean;
    all(): Bag;
}
