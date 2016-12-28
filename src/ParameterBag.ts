
import { ParameterExpense } from "./ParameterExpense"

export class ParameterBag extends ParameterExpense {
    set(key: string, value: any): void {
        this.params[key] = value
    }

    add(key: string, value: any): void {
        if(!this.has(key)) this.params[key] = []
        this.params[key].push(value)
    }

    remove(key: string): void {
        if(this.has(key)) delete this.params[key]
    }
}
