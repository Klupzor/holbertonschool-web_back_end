0x10. ES6 classes
=================

[Metaprogramming ES6](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/#symbolspecies)

Setup
-----

### Install NodeJS 12.11.x

(in your home directory):

```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

```

```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3

```

### Install Jest, Babel, and ESLint

in your project directory:

-   Install Jest using: `npm install --save-dev jest`
-   Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
-   Install ESLint using: `npm install --save-dev eslint`

Tasks
-----

#### 0\. You used to attend a place like this at some point

Implement a class named `ClassRoom`:

-   Prototype: `export default class ClassRoom`
-   It should accept one attribute named `maxStudentsSize` (Number) and assigned to `_maxStudentsSize`

```
> const myClass = new ClassRoom(12)
> myClass._maxStudentsSize
12
>

```

#### 1\. Let's make some classrooms

Import the `ClassRoom` class from `0-classroom.js`.

Implement a function named `initializeRooms`. It should return an array of 3 `ClassRoom` objects with the sizes 19, 20, and 34 (in this order).

```
> const allRooms = initializeRooms();
> allRooms
[
  ClassRoom { _maxStudentsSize: 19 },
  ClassRoom { _maxStudentsSize: 20 },
  ClassRoom { _maxStudentsSize: 34 }
]
>

```

#### 2\. A Course, Getters, and Setters

Implement a class named `HolbertonCourse`:

-   Constructor attributes:
    -   `name` (String)
    -   `length` (Number)
    -   `students` (array of Strings)
-   Make sure to verify the type of attributes during object creation
-   Each attribute must be stored in an "underscore" attribute version (ex: `name` is stored in `_name`)
-   Implement a getter and setter for each attribute.

```
> const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"])
> c1.name
'ES6'
> c1.name = "Python 101"
'Python 101'
> c1.name
'Python 101'
> c1
HolbertonCourse {
  _name: 'Python 101',
  _length: 1,
  _students: [ 'Bob', 'Jane' ]
}
> c1.name = 12
Uncaught TypeError: name must be a String
    at HolbertonCourse.set name [as name] (repl:24:13)
> const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"])
Uncaught TypeError: length must be a Number
    at new HolbertonCourse (repl:7:13)
>

```

#### 3\. Methods, static methods, computed methods names..... MONEY

Implement a class named `Currency`:

-   - Constructor attributes:
    -   `code` (String)
    -   `name` (String)
-   Each attribute must be stored in an "underscore" attribute version (ex: `name` is stored in `_name`)
-   Implement a getter and setter for each attribute.
-   Implement a method named `displayFullCurrency` that will return the attributes in the following format `name (code)`.

```
> const c = new Currency("EUR", "Euro")
> c
Currency { _code: 'EUR', _name: 'Euro' }
> c.displayFullCurrency()
'Euro (EUR)'
>

```

#### 4\. Pricing

Import the class `Currency` from `3-currency.js`

Implement a class named `Pricing`:

-   Constructor attributes:
    -   `amount` (Number)
    -   `currency` (Currency)
-   Each attribute must be stored in an "underscore" attribute version (ex: `name` is stored in `_name`)
-   Implement a getter and setter for each attribute.
-   Implement a method named `displayFullPrice` that returns the attributes in the following format `amount currency_name (currency_code)`.
-   Implement a static method named `convertPrice`. It should accept two arguments: `amount` (Number), `conversionRate` (Number). The function should return the amount multiplied by the conversion rate.

```
> const p = new Pricing(100, new Currency("EUR", "Euro"))
> p
Pricing {
  _amount: 100,
  _currency: Currency { _code: 'EUR', _name: 'Euro' }
}
> p.displayFullPrice()
'100 Euro (EUR)'
> Pricing.convertPrice(100, 1.44)
144
>

```

#### 5\. A Building

Implement a class named `Building`:

-   Constructor attributes:
    -   `sqft` (Number)
-   Each attribute must be stored in an "underscore" attribute version (ex: `name` is stored in `_name`)
-   Implement a getter for each attribute.
-   Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named `evacuationWarningMessage`.
    -   If a class that extends from it does not have a `evacuationWarningMessage` method, throw an error with the message `Class extending Building must override evacuationWarningMessage`

```
> const b = new Building(100);
> b
Building { _sqft: 100 }
> b.sqft
100
>
> class TestBuilding extends Building {}
> const tb = new TestBuilding(100)
Uncaught Error: Class extending Building must override evacuationWarningMessage
    at new Building (repl:6:13)
    at new TestBuilding (repl:1:1)
>

```

#### 6\. Inheritance

Import `Building` from `5-building.js`.

Implement a class named `SkyHighBuilding` that extends from `Building`:

-   Constructor attributes:
    -   `sqft` (Number) (must be assigned to the parent class `Building`)
    -   `floors` (Number)
-   Each attribute must be stored in an "underscore" attribute version (ex: `name` is stored in `_name`)
-   Implement a getter for each attribute.
-   Override the method named `evacuationWarningMessage` and return the following string `Evacuate slowly the NUMBER_OF_FLOORS floors`.

```
> const shb = new SkyHighBuilding(100, 4)
> shb
SkyHighBuilding { _sqft: 100, _floors: 4 }
> shb.evacuationWarningMessage()
'Evacuate slowly the 4 floors'
>

```

#### 7\. Airport

Implement a class named `Airport`:

-   Constructor attributes:
    -   `name` (String)
    -   `code` (String)
-   Each attribute must be stored in an "underscore" attribute version (ex: `name` is stored in `_name`)
-   The default string description of the class should return the Airport `code`.

```
> const a = new Airport("San Francisco", "SFO")
> a
Airport [SFO] { _name: 'San Francisco', _code: 'SFO' }
>

```

#### 8\. Primitive - Holberton Class

Implement a class named `HolbertonClass`:

-   Constructor attributes:
    -   `size` (Number)
    -   `location` (String)
-   Each attribute must be stored in an "underscore" attribute version (ex: `name` is stored in `_name`)
-   When the class is cast into a `Number`, it should return the size.
-   When the class is cast into a `String`, it should return the location.

```
> const hc = new HolbertonClass(12, "Mezzanine")
HolbertonClass { _size: 12, _location: 'Mezzanine' }
> Number(hc)
12
> String(hc)
'Mezzanine'
>

```

#### 9\. Hoisting

Fix this code and make it work.

```
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export class StudentHolberton {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this.holbertonClass;
  }
}

export const listOfStudents = [student1, student2, student3, student4, student5];

```

Result:

```
> import listOfStudents from "./9-hoisting.js";
> listOfStudents
[
  StudentHolberton {
    _firstName: 'Guillaume',
    _lastName: 'Salva',
    _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'John',
    _lastName: 'Doe',
    _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Albert',
    _lastName: 'Clinton',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Donald',
    _lastName: 'Bush',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Jason',
    _lastName: 'Sandler',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  }
]
>

```

#### 10\. Vroom

Implement a class named `Car`:

-   Constructor attributes:
    -   `brand` (String)
    -   `motor` (String)
    -   `color` (String)
-   Each attribute must be stored in an "underscore" attribute version (ex: `name` is stored in `_name`)
-   Add a method named `cloneCar`. This method should return a new object of the class.

Hint: Symbols in ES6

```
> class TestCar extends Car {}
>
> const tc1 = new TestCar("Nissan", "Turbo", "Pink");
> const tc2 = tc1.cloneCar()
>
> tc1
TestCar { _brand: 'Nissan', _motor: 'Turbo', _color: 'Pink' }
> tc1 instanceof TestCar
true
> tc2
TestCar { _brand: 'Nissan', _motor: 'Turbo', _color: 'Pink' }
> tc2 instanceof TestCar
true
> tc1 == tc2
false
>

```
