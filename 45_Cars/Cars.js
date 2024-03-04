"use strict";
//Written by: Hira Khalid
function storeCarInfo(manufacturer, modelName, ...extras) {
    const carInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extras));
    return carInfo;
}
const car = storeCarInfo('Honda', 'Civic', { color: 'Black' }, { features: ['navigation', 'sunroof'] });
console.log(car);
