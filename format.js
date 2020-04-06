const StringMask = require('string-mask')
const format = new StringMask('#.##0', { reverse: true })


module.exports = {
    dataFormat(apiResponse) {
        const api = apiResponse.data
        const confirmed = format.apply(api.confirmed.value)
        const deaths = format.apply(api.deaths.value)
        const recovered = format.apply(api.recovered.value)
        const date = Date(api.lastUpdate)

        const pct = ((api.confirmed.value * 100) / 7777777069).toFixed(4) + '%'

        let active = api.confirmed.value - (api.deaths.value + api.recovered.value)
        active = format.apply(active)
        return {active, confirmed, deaths, recovered, pct, date}
    }
}