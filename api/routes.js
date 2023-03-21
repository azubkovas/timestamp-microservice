var router = require('express').Router()
const daysOfTheWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

router.get('/', (req, res) => {
    var date = new Date()
    res.json({unix: date.getTime(), utc: date.toUTCString()})
})

router.get('/:dateString', (req, res) => {
    var date = new Date(req.params.dateString)
    if(date == 'Invalid Date'){
        var unixTimestamp = parseInt(req.params.dateString)
        date = new Date(unixTimestamp)
        if(date == 'Invalid Date')
        {
            res.json({error: 'Invalid Date'})
        }
        res.json({unix: date.getTime(), utc: date.toUTCString()})
    }
    res.json({unix: date.getTime(), utc: date.toUTCString()})
})

module.exports = router