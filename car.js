const car = {
    make: "Toyota",
    model: "Corolla",
    year: 1990,   
};
function isVintageCar (car1)
    {
        var measurement = 2023-car1.year;
        console.log(measurement)
        if (measurement>=30) {
     console.log("the car is vintage");
 }
 else 
 {
    console.log("the car is not vintage");
 }
    }
 console.log(isVintageCar(car));