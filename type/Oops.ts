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



