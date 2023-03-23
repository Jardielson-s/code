const fs = require('fs')

const { convertForArray, findBestDeliveries, readInputFile } = require('./utils/functions')

const { drones, deliveries} = readInputFile('src/input.txt')

const dronesArray = convertForArray(drones)
const deliveriesArray = convertForArray(deliveries)

console.log(findBestDeliveries(dronesArray, deliveriesArray))