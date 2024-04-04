class Person {
    constructor(firstName, lastName, age, gender, interests) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.interests = interests;
    }
  
    // Method to display basic information about the person
    bio() {
      return `${this.firstName} ${this.lastName} is ${this.age} years old. They like ${this.interests.join(', ')}.`;
    }
  
    // Method to greet the person
    greeting() {
      return `Hi! I'm ${this.firstName}.`;
    }
  }
  
// Example usage
  const person1 = new Person('John', 'Doe', 30, 'male', ['reading', 'traveling']);
  console.log(person1.bio()); // John Doe is 30 years old. They like reading, traveling.
  console.log(person1.greeting()); // Hi! I'm John.
 
  
class UberPriceCalculator {
    constructor(baseFare, costPerKm, costPerMin) {
      this.baseFare = baseFare;
      this.costPerKm = costPerKm;
      this.costPerMin = costPerMin;
    }
  
    calculatePrice(distance, time) {
      const distanceCost = distance * this.costPerKm;
      const timeCost = time * this.costPerMin;
      const totalCost = this.baseFare + distanceCost + timeCost;
      return totalCost;
    }
  }
  
  // Example usage
  const calculator = new UberPriceCalculator(5, 1.5, 0.25);
  const distance = 10; // in kilometers
  const time = 20; // in minutes
  const price = calculator.calculatePrice(distance, time);
  console.log(`The estimated Uber price is $${price.toFixed(2)}`);
  