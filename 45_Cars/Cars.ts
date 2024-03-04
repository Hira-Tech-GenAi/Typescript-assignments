//Written by: Hira Khalid

function storeCarInfo(manufacturer: string, modelName: string, ...extras: { [key: string]: any }[]): object {
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extras)
    };
    return carInfo;
}

const car = storeCarInfo('Honda', 'Civic', {color: 'Black'}, {features: ['navigation', 'sunroof']});
console.log(car);
