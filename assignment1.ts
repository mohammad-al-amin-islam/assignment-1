function formatString(input:string , toUpper?:boolean):string{
    if(toUpper === false){
        return input.toLowerCase()
    }
    return input.toUpperCase();
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = [];
    for (const array of arrays) {
        result.push(...array);
    }
    return result;
}

class Vehicle{
    private make:string;
    private year:number;

    constructor(make:string,year:number){
        this.make = make;
        this.year = year;
    }
    getInfo():string{
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle{
    private model:string;

    constructor(make:string,year:number,model:string){
        super(make,year);
        this.model = model;
    }
    getModel():string{
        return `Model: ${this.model}`;
    }
}

function processValue(value: string | number): number {
    if(typeof value === 'string'){
        return value.length;
    }
    return value * 2;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }
  let maxPrice = 0;
  let mostExpensiveProduct: Product | null = null;
  for (const product of products) {
    if (product.price > maxPrice) {
      maxPrice = product.price;
      mostExpensiveProduct = product;
    }
  }
  return mostExpensiveProduct;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  }
  return "Weekday";
}


async function squareAsync(n: number): Promise<number>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(n<0){
                reject("Error: Negative number not allowed");
            }
            resolve(n*n);
        },1000);
    })
}
