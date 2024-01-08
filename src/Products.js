import { v4 as uuidv4 } from "uuid";

export function getProductData(id) {
  let productData = PRODUCTS.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export const PRODUCTS = [
  {
    id: uuidv4(),
    Name: "Rolex GMT MASTER II Batman",
    Model: "126710BLNR",
    Year: 2022,
    Condition: "New",
    Price: "£12,000",
    img: "./src/assets/Batman.jpg",
  },
  {
    id: uuidv4(),
    Name: "Rolex Daytona Panda",
    Model: "116500LN",
    Year: 2022,
    Condition: "Very Good",
    Price: "£26,950",
    img: "./src/assets/Panda.jpg",
  },
  {
    id: uuidv4(),
    Name: "Rolex Day-Date 40",
    Model: "228235",
    Year: 2021,
    Condition: "Unworn",
    Price: "£41,950",
    img: "./src/assets/Rolex_Day_date.jpeg",
  },
  {
    id: uuidv4(),
    Name: "AP Royal Oak",
    Model: ".O26331STO.1220ST.01",
    Year: 2019,
    Condition: "Very Good",
    Price: "£37,950",
    img: "./src/assets/APROYAL.jpg",
  },
  {
    id: uuidv4(),
    Name: "Cartier Santos 100",
    Model: "WSSA0006",
    Year: 2010,
    Condition: "Worn",
    Price: "£2350",
    img: "./src/assets/Panda.jpg",
  },
  {
    id: uuidv4(),
    Name: "Patek Philippe Nautilus Flyback Chronograph",
    Model: "5980R-001",
    Year: 2020,
    Condition: "Unworn",
    Price: "£92,000",
    img: "./src/assets/Nautilus.jpeg",
  },
];

console.log(PRODUCTS);
