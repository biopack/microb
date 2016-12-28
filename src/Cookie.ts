
import * as Moment from "moment"
import * as Lodash from "lodash"

export class Cookie {

    private name: string
    private value: string
    private expires: Moment.Moment | null
    private path: string
    private domain: string
    private secure: boolean
    private httponly: boolean

    constructor(name: string, value: string, expires?: string | number | null | Moment.Moment, path?: string, domain?: string, secure?: boolean, httponly?: boolean){
        this.name = name
        this.value = value

        if(Lodash.isInteger(expires)) this.expires = Moment().add(<number>expires,'seconds')
        else if(expires instanceof Moment) this.expires = <Moment.Moment>expires
        else if(Lodash.isString(expires)) this.expires = Moment(<string>expires)
        else this.expires = null

        this.path = path || "/"
        this.domain = domain || ""
        this.secure = secure || false
        this.httponly = httponly || true
    }

    getName(): string {
        return this.name
    }

    getValue(): string {
        return this.value
    }

    getExpires(): Moment.Moment | null {
        return this.expires
    }

    getPath(): string {
        return this.path
    }

    getDomain(): string {
        return this.domain
    }

    isSecure(): boolean {
        return this.secure
    }

    isHttponly(): boolean {
        return this.httponly
    }
}
