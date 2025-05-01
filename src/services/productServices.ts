import productModel from "../models/productModel";

export async function getAllProducts() {
  return await productModel.find();
}

export async function seedInitialProducts() {
    const products = [
        { 
          title: "Wireless Headphones", 
          image: "https://picsum.photos/id/1080/300/300?grayscale&blur=2", 
          price: 89.99, 
          stock: 50 
        },
        { 
          title: "Running Shoes", 
          image: "https://picsum.photos/id/1025/300/300", 
          price: 129.95, 
          stock: 75 
        },
        { 
          title: "Digital Camera", 
          image: "https://picsum.photos/id/250/300/300", 
          price: 449.00, 
          stock: 25 
        },
        { 
          title: "Leather Notebook", 
          image: "https://picsum.photos/id/211/300/300?grayscale", 
          price: 24.99, 
          stock: 200 
        },
        { 
          title: "Bluetooth Speaker", 
          image: "https://picsum.photos/id/160/300/300", 
          price: 69.95, 
          stock: 120 
        },
        { 
          title: "Stainless Steel Watch", 
          image: "https://picsum.photos/id/357/300/300?grayscale", 
          price: 199.50, 
          stock: 30 
        },
        { 
          title: "Yoga Mat", 
          image: "https://picsum.photos/id/311/300/300", 
          price: 39.99, 
          stock: 150 
        },
        { 
          title: "Ceramic Coffee Mug", 
          image: "https://picsum.photos/id/30/300/300", 
          price: 12.99, 
          stock: 300 
        },
        { 
          title: "Wireless Keyboard", 
          image: "https://picsum.photos/id/180/300/300?grayscale", 
          price: 59.95, 
          stock: 80 
        },
        { 
          title: "Portable Power Bank", 
          image: "https://picsum.photos/id/119/300/300", 
          price: 34.99, 
          stock: 200 
        }
      ];

  const existingProducts = await getAllProducts();
  if(existingProducts.length === 0){
    await productModel.insertMany(products)
  }
};
