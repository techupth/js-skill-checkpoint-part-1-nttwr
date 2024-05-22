// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
const calculateTotalPrice = function (product, code) {
  //console.log(product);
  const totalBeforeDiscount = product
    .map((item) => item.price * item.quantity)
    .reduce((acc, curr) => acc + curr, 0);
  //console.log(totalBeforeDiscount);

  let discount = 1;
  if (code === "SALE20") {
    discount -= 0.2;
  } else if (code === "SALE50") {
    discount -= 0.5;
  }
  //console.log(discount);
  return totalBeforeDiscount * discount;
};

console.log(calculateTotalPrice(products, promotionCode));
