// Product Interface
// This defines an interface named Vehicle with a single method drive(). 
// Any class that implements this interface must provide an implementation of the drive method.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// This defines a Car class that implements the Vehicle interface. The drive method logs "Driving a car!" to the console.
// Concrete Products
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving a car!");
    };
    return Car;
}());
// This defines a Truck class that implements the Vehicle interface. The drive method logs "Driving a truck!" to the console.
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck!");
    };
    return Truck;
}());
// This defines a Bike class that implements the Vehicle interface. The drive method logs "Riding a bike!" to the console.
var Bike = /** @class */ (function () {
    function Bike() {
    }
    Bike.prototype.drive = function () {
        console.log("Riding a bike!");
    };
    return Bike;
}());
// This defines an abstract class VehicleFactory with an abstract method createVehicle. 
// The createVehicle method takes a string type as an argument and returns a Vehicle object. 
// Concrete subclasses of VehicleFactory must provide an implementation for the createVehicle method.
var VehicleFactory = /** @class */ (function () {
    function VehicleFactory() {
    }
    return VehicleFactory;
}());
// Concrete Creator
var ConcreteVehicleFactory = /** @class */ (function (_super) {
    __extends(ConcreteVehicleFactory, _super);
    function ConcreteVehicleFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteVehicleFactory.prototype.createVehicle = function (type) {
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
    };
    return ConcreteVehicleFactory;
}(VehicleFactory));
// Client code
var factory = new ConcreteVehicleFactory();
var car = factory.createVehicle('car');
car.drive();
var truck = factory.createVehicle('truck');
truck.drive();
var bike = factory.createVehicle('bike');
bike.drive();
//# sourceMappingURL=factory.js.map