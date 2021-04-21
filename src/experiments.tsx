let x = 10;
let today: Date;

today = new Date();

// general format of typescript:
// thing (variable, function, object): type

let variable: string;
let add = function( x: number, y: number ): number {
  return x + y;
};

// establishing types 
// interface
interface Book {
    author: string;
    title: string;
    pageCount: number;
    getAuthor: () => string;
    // sets what can be accepted and what is to be returned
    setAuthor: ( name: string ) => void;
}

// two interfaces
interface Vehicle {
    vin: number;
}

interface LandBased {
    numberOfWheels: number;
}
// use the two interfaces to create one Car type
type Car = Vehicle & LandBased;

// Vehicle (interface) can be a type in another interface
interface someOtherVehicle {
    idInfo: Vehicle;
    name: string;
}

// extending another interface to inheret the elements
interface InheritedCar extends Vehicle {
    numberOfWheels: number;
}

// create your own types
type addFunction = ( x: number, y: number ) => number;

// -------------------------------------------------------
// what's the differences between javascript and the typescript - gets transpiled through build pipeline (transpiler)
// other than typing changes, also 

class customBook implements Book {
  author = '';
  title = '';
  pageCount = 0;
  getAuthor() {
    return this.author;
  }
  // --@ts-ignore-- can be used to ignore things that you don't care about
  setAuthor( name: string ) {
    this.author = name;
  }
}

class Person {
  firstName: string;
  lastName: string;

  constructor( firstName: string, lastName: string ) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// implement that type in a function
let addImplentation: addFunction = ( first, second ) => {
  return first + second;
};


export {};