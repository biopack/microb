import { ParameterExpense } from "./ParameterExpense";
export declare class ParameterBag extends ParameterExpense {
    set(key: string, value: any): void;
    add(key: string, value: any): void;
    remove(key: string): void;
}
