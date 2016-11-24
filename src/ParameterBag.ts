
import { ParameterExpense } from "./ParameterExpense"

export class ParameterBag extends ParameterExpense {
    set(key: string, value: any): void {
        this.params[key] = value
    }
}
