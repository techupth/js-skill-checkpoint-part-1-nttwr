// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
const lowestQuantity = function name(item) {
  let quantity = Infinity;
  let name;
  for (let i in item) {
    //console.log(item[i].quantity);
    if (item[i].quantity < quantity) {
      quantity = item[i].quantity;
      name = item[i].name;
    }
  }
  return `สินค้าที่มีจำนวนต่ำที่สุดในคลังคือ ${name} ซึ่งมี ${quantity} ชิ้น`;
};
console.log(lowestQuantity(inventory));
