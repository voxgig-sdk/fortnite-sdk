
import { Context } from './Context'


class FortniteError extends Error {

  isFortniteError = true

  sdk = 'Fortnite'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  FortniteError
}

