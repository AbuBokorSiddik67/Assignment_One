const formatValue = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.toUpperCase() as string;
  } else if (typeof value === "number") {
    return (value * 10) as number;
  } else if (typeof value === "boolean") {
    return !value as boolean;
  }
};




const getLength = (value: string | (string[] | number[])) => {
  if (typeof value === "string") {
    return value.length as number;
  } else if (Array.isArray(value)) {
    return value.length as number;
  }
};




class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}




const filterByRating = (
  value: {
    title: string;
    rating: number;
  }[]
) => {
  return value.filter((item) => item["rating"] >= 4);
};




const filterActiveUsers = (
  value: {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  }[]
) => {
  return value.filter((item) => item["isActive"] === true);
};




interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (book: Book) => {
  return console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
};




const getUniqueValues = (
  value1: number[] | string[],
  value2: number[] | string[]
) => {
  const result = [];
  const checkDuplicate: Record<string | number, boolean> = {};

  for (let i = 0; i < value1.length; i++) {
    const item = value1[i];

    if (!checkDuplicate[item]) {
      result[result.length] = item;
      checkDuplicate[item] = true;
    }
  }

  for (let i = 0; i < value2.length; i++) {
    const item = value2[i];

    if (!checkDuplicate[item]) {
      result[result.length] = item;
      checkDuplicate[item] = true;
    }
  }
  return result as [];
};




const calculateTotalPrice = (
  value: {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }[]
) => {
  const totalPrice = value.reduce((total, item) => {
    const subtotal = item.price * item.quantity;
    const discountPrice = item.discount
      ? subtotal * (1 - item.discount / 100)
      : subtotal;

    return total + discountPrice;
  },0);

  return totalPrice as number;
};
