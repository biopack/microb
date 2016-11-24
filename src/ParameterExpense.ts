
import { isArray, isObject, isUndefined } from "lodash"

export interface Bag {
    [key: string]: any
}

export class ParameterExpense {

    protected params: Bag = {}

    constructor(params?: any){
        if(isObject(params)){
            Object.keys(params).forEach((paramName,index,len) => {
                this.params[paramName] = params[paramName]
            })
        }
    }

    get(key: string, def?: any): any {
        if(!this.has(key) && def !== undefined) return def
        return this.params[key]
    }

    has(key: string): boolean {
        if(this.params[key] === undefined) return false
        return true
    }

    all(): Bag {
        return this.params
    }
}
