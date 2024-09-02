export default class CarModel {
  constructor ({id, make, name, logo}) {
    this.id = id
    this.make = make
    this.name = name
    this.logo = logo
  }
  }

export function createCarMake (carModelData) {
  return new CarModel({
    id: carModelData.id,
    make: carModelData.make,
    name: carModelData.name,
    logo: carModelData.logo
  })
}
