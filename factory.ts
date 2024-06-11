// Product Interface
// This defines an interface named Vehicle with a single method drive(). 
// Any class that implements this interface must provide an implementation of the drive method.

interface Vehicle {
    drive(): void;
}
// This defines a Car class that implements the Vehicle interface. The drive method logs "Driving a car!" to the console.
// Concrete Products
class Car implements Vehicle {
    public drive(): void {
        console.log("Driving a car!");
    }
}
// This defines a Truck class that implements the Vehicle interface. The drive method logs "Driving a truck!" to the console.
class Truck implements Vehicle {
    public drive(): void {
        console.log("Driving a truck!");
    }
}
// This defines a Bike class that implements the Vehicle interface. The drive method logs "Riding a bike!" to the console.
class Bike implements Vehicle {
    public drive(): void {
        console.log("Riding a bike!");
    }
}
// This defines an abstract class VehicleFactory with an abstract method createVehicle. 
// The createVehicle method takes a string type as an argument and returns a Vehicle object. 
// Concrete subclasses of VehicleFactory must provide an implementation for the createVehicle method.
abstract class VehicleFactory {
    abstract createVehicle(type: string): Vehicle;
}


// Concrete Creator
class ConcreteVehicleFactory extends VehicleFactory {
    public createVehicle(type: string): Vehicle {
        switch (type) {
            case 'car':
                return new Car();
            case 'truck':
                return new Truck();
            case 'bike':
                return new Bike();
            default:
                throw new Error("Vehicle type " + type + " cannot be created");
        }
    }
}

// Client code
const factory = new ConcreteVehicleFactory();
const car = factory.createVehicle('car');
car.drive();

const truck = factory.createVehicle('truck');
truck.drive();

const bike = factory.createVehicle('bike');
bike.drive();
