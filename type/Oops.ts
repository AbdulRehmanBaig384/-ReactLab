class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  
  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  public getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount(1000);

account.deposit(500);

console.log("Balance:", account.getBalance()); //1500



// Abstraction in TypeScript

abstract class Shape {
  
  abstract area(): number; 
}

class Circle extends Shape {
  
  constructor(private radius: number) {
    
    super();
  }

  area(): number {
    
    return Math.PI * this.radius * this.radius;
  }
}



const circle = new Circle(5);

console.log("Circle Area:", circle.area()); // 78.5




// Inheritance


class Person {
  constructor(public name: string, public age: number) {}

  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Student extends Person {
  
  constructor(name: string, age: number, public rollNo: number) {
  
    super(name, age); 
  }

  study(): void {
    
    console.log(`${this.name} is studying`);

    
  }
}

const student = new Student("Abdul", 21, 101);

student.greet();
// Hello, my name is Abdul
student.study(); // Abdul is studying


// Polymorphism

 class Animal {
   
  speak(): void {
    
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak(): void {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  speak(): void {
    console.log("Cat meows");
  }
}

const animals: Animal[] = [new Dog(), new Cat()];
animals.forEach(animal => animal.speak());
// Dog barks
// Cat meows


