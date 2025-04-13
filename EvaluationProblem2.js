
// Vehicle should track all rented vehicles.
// Each vehicle should have methods to rent and returnVehicle.
// Include a static method to list all currently rented vehicles.
// Input:

// // Creating new vehicle entries
// const car1 = new Car("Honda Civic", "Sedan", "Petrol", 5);
// const bike1 = new Bike("Yamaha R15", "Sports", 150);
// const truck1 = new Truck("Tata Ace", "Mini Truck", 1200);

// // Rent and return operations
// car1.rent("Customer001");
// car1.returnVehicle();
// car1.rent("Customer007");

// // Get all rented vehicles
// const rentedVehicles = Vehicle.getRentedVehicles();

// Expected Output:

// [Car] Honda Civic has been rented by Customer007
// Current status: rented

// All rented vehicles: [
//   {
//     model: "Honda Civic",
//     type: "Car",
//     fuelType: "Petrol",
//     rentedBy: "Customer007"
//   }
// ]



 class Vehicle{
    constructor(brand,vehicleType,fuelType,rentedBy){
        this.brand=brand;
        this.vehicleType=vehicleType;
        this.fuelType =fuelType;
        this.rentedBy = rentedBy;
      }

      rentVehicle= function(){
        console.log("this.brand has been rented by a "+this.rentedBy)
      }

      getRentedVehicle = function(VehicleType,brand){
        
      }     
 }

 function Car(){
 let 
 }


let car1 = Car("Customer1","Honda","SUV","Petrol","customer1");
car1.rentVehicle();

