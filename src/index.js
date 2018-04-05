const request = require('request-promise')

module.exports = class {
  constructor (API_KEY) {
    this.API_KEY = API_KEY
  }

  async monitor () {
    this.rbl = `https://www.wienerlinien.at/ogd_realtime/monitor?sender=${this.API_KEY}`

    for (let i = 0; i < arguments.length; i++) {
      this.rbl += `&rbl=${arguments[i]}`
    }

    const res = await request(this.rbl)

    return JSON.parse(res)
  }
}
