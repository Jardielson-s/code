const fs = require('fs')

function convertForArray(objects){
    const array = []
    for (const object in objects) {
      array.push({weight: objects[object].maxWeight, name: object})
    }
    return array
}

function readInputFile(inputFilePath) {
    const input = fs.readFileSync(inputFilePath, 'utf-8');
  
    const [droneLine,deliveryLines] = input.split('\n').map(line => line.trim());

    const drones = droneLine.split(',').reduce((acc, drone, index, dronesArr) => {
      if (index % 2 === 0) {
        acc[drone] = {
          maxWeight: Number(dronesArr[index + 1])
        };
      }
  
      return acc;
    }, {});

    const deliveries = deliveryLines.split(',').reduce((acc, drone, index, dronesArr) => {
        if (index % 2 === 0) {
          acc[drone] = {
            maxWeight: Number(dronesArr[index + 1])
          };
        }
    
        return acc;
      }, {});

    return {
      drones,
      deliveries
    };
}

function findBestDeliveries(drones, deliveries) {
    let solution = []
    deliveries.forEach(delivery => {
      drones.forEach(drone => {
        if(drone.weight >= delivery.weight){
          solution.push({name: drone.name, deliveries: delivery.name})
        }
      })
    })
    return solution
}

module.exports = {
    convertForArray,
    findBestDeliveries,
    readInputFile
}