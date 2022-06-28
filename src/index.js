import './style.css';

import { PassangerCar, Truck } from './car';
import { Station } from './station';

const open = document.querySelector('.open');
const car = document.querySelector('.car');

const testArray = {
  passangerCar: [
    ['Opel', 'Crossland', 45],
    ['Opel', 'Grandland X', 53],
    ['Mazda', 'cx-5', 55],
    ['BMW', 'M5', 68, 'gas'],
    ['BMW', 'X5', 80],
    ['BMW', 'X5d', 80, 'diesel'],
    ['BMW', 'X3', 65, 'gas'],
    ['BMW', '5', 66],
  ],
  truck: [
    ['MAN', 'TGS', 400],
    ['MAN', 'TGX', 300],
    ['Mercedes-Benz', 'Actros', 450],
    ['Mercedes-Benz', 'Actros L', 650],
    ['Volvo', 'FH16', 700],
    ['Volvo', 'FM', 700],
    ['Volvo', 'FMX', 540],
  ],
};

const getTestCar = () => {
  const typeBool = Math.random() < 0.6;
  const listCar = typeBool ? testArray.passangerCar : testArray.truck;
  const randomCar = listCar[Math.floor(Math.random() * listCar.length)];
  return typeBool ? new PassangerCar(...randomCar) : new Truck(...randomCar);
};

const station = new Station(
  [
    {
      type: 'petrol',
      count: 3,
      speed: 5,
    },
    {
      type: 'diesel',
      count: 2,
      speed: 20,
    },
    {
      type: 'gas',
      count: 1,
      speed: 10,
    },
  ],
  '.app'
);

open.addEventListener('click', () => {
  station.init();
  open.remove();
  car.style.display = 'block';
  car.addEventListener('click', () => {
    station.addCarQueue(getTestCar());
  });
});

// const opel = new PassangerCar()
// const volvo = new Truck()
