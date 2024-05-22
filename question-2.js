// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory[0].quantity = 200;
inventory.push({ name: "Orange", price: 20, quantity: 300 });
//console.log(inventory);
let sum = inventory
  .map((item) => {
    return item.price * item.quantity;
  })
  .reduce((acc, curr) => {
    return acc + curr;
  }, 0);
console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต๊อก ${sum} บาท`);
