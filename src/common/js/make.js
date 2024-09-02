
export default class CarMake {
  constructor ({id, name, logo, category}) {
    this.id = id
    this.name = name
    this.logo = logo
    this.category = category
  }
}

export function createCarMake (carMakeData) {
  return new CarMake({
    id: carMakeData.id,
    name: carMakeData.name,
    logo: carMakeData.logo,
    category: carMakeData.category
  })
}
