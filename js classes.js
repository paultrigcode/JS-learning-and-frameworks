class Car{
	constructor(name,year){
		this.name = name;
		this.year = year;

	}

}

car1 = new Car('corolla','2006');
console.log(car1.name,car1.year);

/* sending parameters to a class ethod */
class Car1{
	constructor(name,year){
		this.name = name;
		this.year = year;
	}
	age(x){
		return x - this.year;
	}

}

myCar = new Car1('toyota','2016');
console.log(myCar.age(2020));

