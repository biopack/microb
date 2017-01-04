import * as Moment from "moment"
import * as Lodash from "lodash"
//
import { ParameterBag } from "./ParameterBag"

export interface sessionOptions {
    name?: string
    expires?: string | number | null | Moment.Moment
    path?: string
    domain?: string | Array<string>
    secure?: boolean
    httponly?: boolean
}

export class Session extends ParameterBag {

    // private name: string | null   TODO: multiple sessions?
    private expires: number | null
    private path: string | null
    private domain: string | Array<string> | null
    private secure: boolean | null
    private httponly: boolean | null

    setup(options: sessionOptions): Session {
        // this.name = options.name || null
        this.setExpires(options.expires)
        this.setPath(options.path || null)
        this.setDomain(options.domain || null)
        this.setSecure(options.secure || null)
        this.setHttponly(options.httponly || null)
        return this
    }

    // getName(): string | null {
        // return this.name
    // }

    setExpires(expires: undefined | string | number | null | Moment.Moment): Session {
        // unmber = +seconds
        //if(Lodash.isInteger(expires)) this.expires = Moment().add(<number>expires,'seconds')
        if(Lodash.isInteger(expires)) this.expires = <number>expires
        else if(expires instanceof Moment) this.expires = Moment().diff(<Moment.Moment>expires,'seconds')
        else if(Lodash.isString(expires)) this.expires = Moment().diff(Moment(<string>expires),'seconds')
        else this.expires = null
        return this
    }

    setPath(path: string | null): Session {
        this.path = path
        return this
    }

    setDomain(domain: string | Array<string> | null): Session {
        this.domain = domain
        return this
    }

    setSecure(secure: boolean | null): Session {
        this.secure = secure
        return this
    }

    setHttponly(httponly: boolean | null): Session {
        this.httponly = httponly
        return this
    }

    getExpiresUnix(): number | void {
        if(this.getExpires() !== null) return Moment().add(<number>this.getExpires(),'seconds').unix()
    }

    getExpires(): number | null {
        return this.expires
    }

    getPath(): string | null {
        return this.path
    }

    getDomain(): string | Array<string> | null {
        return this.domain
    }

    isSecure(): boolean | null {
        return this.secure
    }

    isHttponly(): boolean | null {
        return this.httponly
    }
}
