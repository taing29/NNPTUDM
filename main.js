//câu 1: khai báo constructor function Product
function Product(id, name, price, quantity, category, isAvailable){
    this.id = id;
    this.quantity = quantity;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

//câu 2: tạo mảng products
const products = [
    new Product(1, "Glasses", 199000, 50, "Accessories", true),
    new Product(2, "Scarf", 399000, 30, "Accessories", true),
    new Product(3, "Handbag", 599000, 10, "Accessories", true),

    new Product(4, "Fiction book", 120000, 20, "Book", false),
    new Product(5, "Novel", 150000, 15, "Book", true),
    new Product(6, "Comic", 180000, 0, "Book", false)
];
console.log('Câu 2: tạo mảng products:',products);

//câu 3: tạo mảng mới chỉ chứa: name, price
var product3 = products.map(p =>({
    name: p.name,
    price: p.price
}))
console.log('Câu 3: mảng chỉ chứa name, price:', product3);

//câu 4: lọc các sản phẩm còn hàng
var product4 = products.filter(p => p.quantity > 0)
console.log('Câu 4: lọc các sản phẩm còn hàng:', product4);

//câu 5: kiểm tra ít nhất có sản phẩm có giá trên 30tr
var product5 = products.some(p => p.price > 30000000)
console.log('Câu 5: kiểm tra ít nhất có sản phẩm có giá trên 30tr:', product5);

//câu 6: kiểm tra tất cả sản phẩm thuộc "Accessories" có đang Available hay ko
var product6 = products.filter(x => x.category == 'Accessories')
                       .every(p => p.isAvailable)
console.log('Câu 6: kiểm tra tất cả sản phẩm thuộc "Accessories" có đang Available hay không:', product6);

//câu 7: tính tổng giá trị kho hàng
var product7 = products.reduce((sum, p) => {
    return sum + p.price * p.quantity
}, 0)
console.log('Câu 7: tính tổng giá trị kho hàng:', product7); 

//câu 8: dùng for...of in tên sp - danh mục - trạng thái
console.log('Câu 8: dùng for...of in tên sp - danh mục - trạng thái:'); 
for (const element of products) {
    console.log(element.name, element.category, element.isAvailable);
}

//câu 9: dùng for...in
console.log('Câu 9: dùng for...in:'); 
for (const element of products) {
    for (const key in element) {
        console.log(key + ": " + element[key]);
    }
}

//câu 10: lấy danh sách tên các sản phẩm đang bán và còn hàng
var product10 = products.filter(p => p.isAvailable && p.quantity > 0)
                        .map(p => p.name)
console.log('Câu 10: tên các sản phẩm đang bán và còn hàng:', product10); 