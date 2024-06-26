export const products = [
    {
      id: 1,
      name: "Comida para perros Ricocan",
      description: "Bolsa de Comida para perros Ricocan Multisabores en presentación de 15kg",
      price: 120,
      stock: 10,
      category: ["Perros"]
    },
    {
      id: 2,
      name: "Felix Pate Pescado y Atún",
      description: "Pate de sabor pescado y atún para gatos en presentación lata de 156gr",
      price: 7,
      stock: 100,
      category: "Gatos"
    },
    {
      id: 3,
      name: "Felix Pate Salmón",
      description: "Pate de sabor salmón para gatos en presentación lata de 156gr",
      price: 7,
      stock: 150,
      category: "Gatos"
    },
    {
      id: 4,
      name: "Felix Trozos Pescado y Atún",
      description: "Trozos de sabor Pescado y Atún para gatos en presentación lata de 156gr",
      price: 8,
      stock: 200,
      category: "Gatos"
    },
    {
      id: 5,
      name: "Ricocan Pate Sabor Cordero",
      description: "Pate sabor cordero para perros en presentación lata de 256gr",
      price: 8,
      stock: 120,
      category: "Perros"
    },
]

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 1000)
  })
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const productsFilter = products.filter((elem) => {
        let match = false;
        elem.category.find((elem) => {
          if (elem === categoryId) match = true;
        });
        return match;
      });
      resolve(productsFilter);
    }, 1000);
  })
};

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((e) => e.id === parseInt(productId));
      resolve(product)
    }, 1000)
  })
}
