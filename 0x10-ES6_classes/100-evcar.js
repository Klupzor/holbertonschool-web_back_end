import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const carClone = new (
      Object.getPrototypeOf(Car))(this._brand, this._motor, this._color);
    carClone._range = this._range;
    return carClone;
  }
}
