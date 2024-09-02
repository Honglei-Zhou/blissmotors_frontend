export default class Car {
  constructor ({id, make, model, cartype, compeitors, features, mpg, msrp, year, images}) {
    this.id = id
    this.make = make
    this.model = model
    this.cartype = cartype
    this.compeitors = compeitors
    this.features = features
    this.mpg = mpg
    this.msrp = msrp
    this.year = year
    this.images = images
  }
    }

export function createCarMake (carData) {
  return new Car({
    id: carData.id,
    make: carData.make,
    model: carData.model,
    cartype: carData.cartype,
    compeitors: carData.compeitors,
    features: carData.features,
    mpg: carData.mpg,
    msrp: carData.msrp,
    year: carData.year,
    images: carData.images
  })
}
