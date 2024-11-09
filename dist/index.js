const products = [
  {
    id: "P001",
    name: "Latam Pro Laptop",
    category: "Electr\xF3nica",
    price: 12e5,
    stock: 15
  },
  {
    id: "P002",
    name: "DesafioPhone X",
    category: "Electr\xF3nica",
    price: 8e5,
    stock: 25
  },
  {
    id: "P003",
    name: "Cafetera De La Casa",
    category: "Electrodom\xE9sticos",
    price: 3e5,
    stock: 8
  },
  {
    id: "P004",
    name: "Zapatillas Desaf\xEDoLatam",
    category: "Deporte",
    price: 8e4,
    stock: 30
  },
  {
    id: "P005",
    name: "Silla Gamer Hola Mundo",
    category: "Muebles",
    price: 45e4,
    stock: 12
  },
  {
    id: "P006",
    name: "Monitor Ultra Pro XXL",
    category: "Electr\xF3nica",
    price: 6e5,
    stock: 18
  },
  {
    id: "P007",
    name: "Teclado Mec\xE1nico Desaf\xEDo",
    category: "Electr\xF3nica",
    price: 15e4,
    stock: 40
  },
  {
    id: "P008",
    name: "Pelota MuyCara",
    category: "Deporte",
    price: 45e3,
    stock: 50
  },
  {
    id: "P009",
    name: "Latam Watch",
    category: "Electr\xF3nica",
    price: 35e4,
    stock: 22
  },
  {
    id: "P010",
    name: "Licuadora Gamer",
    category: "Electrodom\xE9sticos",
    price: 25e4,
    stock: 15
  }
];

const customers = [
  {
    id: "C001",
    name: "Juan P\xE9rez",
    email: "juan.perez@email.com",
    phone: "+56912345678",
    address: "Av. Principal 123, Santiago"
  },
  {
    id: "C002",
    name: "Mar\xEDa Gonz\xE1lez",
    email: "maria.gonzalez@email.com",
    phone: "+56987654321",
    address: "Calle Nueva 456, Vi\xF1a del Mar"
  },
  {
    id: "C003",
    name: "Carlos Rodr\xEDguez",
    email: "carlos.rodriguez@email.com",
    phone: "+56923456789",
    address: "Pasaje Los Pinos 789, Concepci\xF3n"
  },
  {
    id: "C004",
    name: "Ana Silva",
    email: "ana.silva@email.com",
    phone: "+56934567890",
    address: "Av. Libertad 321, Valpara\xEDso"
  },
  {
    id: "C005",
    name: "Pedro Mart\xEDnez",
    email: "pedro.martinez@email.com",
    phone: "+56945678901",
    address: "Calle Del Sol 654, La Serena"
  },
  {
    id: "C006",
    name: "Laura Torres",
    email: "laura.torres@email.com",
    phone: "+56956789012",
    address: "Av. Central 987, Rancagua"
  },
  {
    id: "C007",
    name: "Diego Mu\xF1oz",
    email: "diego.munoz@email.com",
    phone: "+56967890123",
    address: "Pasaje Las Flores 147, Temuco"
  },
  {
    id: "C008",
    name: "Carmen Soto",
    email: "carmen.soto@email.com",
    phone: "+56978901234",
    address: "Calle Principal 258, Antofagasta"
  },
  {
    id: "C009",
    name: "Roberto Vargas",
    email: "roberto.vargas@email.com",
    phone: "+56989012345",
    address: "Av. Marina 369, Iquique"
  },
  {
    id: "C010",
    name: "Patricia Castro",
    email: "patricia.castro@email.com",
    phone: "+56990123456",
    address: "Calle Los Aromos 741, Puerto Montt"
  }
];

const sales = [
  {
    id: "S001",
    productId: "P001",
    customerId: "C001",
    quantity: 2,
    date: /* @__PURE__ */ new Date("2024-01-15")
  },
  {
    id: "S002",
    productId: "P002",
    customerId: "C002",
    quantity: 1,
    date: /* @__PURE__ */ new Date("2024-01-16")
  },
  {
    id: "S003",
    productId: "P001",
    customerId: "C003",
    quantity: 1,
    date: /* @__PURE__ */ new Date("2024-01-17")
  },
  {
    id: "S004",
    productId: "P003",
    customerId: "C004",
    quantity: 3,
    date: /* @__PURE__ */ new Date("2024-01-18")
  },
  {
    id: "S005",
    productId: "P002",
    customerId: "C005",
    quantity: 2,
    date: /* @__PURE__ */ new Date("2024-01-19")
  },
  {
    id: "S006",
    productId: "P004",
    customerId: "C001",
    quantity: 1,
    date: /* @__PURE__ */ new Date("2024-01-20")
  },
  {
    id: "S007",
    productId: "P005",
    customerId: "C006",
    quantity: 4,
    date: /* @__PURE__ */ new Date("2024-01-21")
  },
  {
    id: "S008",
    productId: "P001",
    customerId: "C007",
    quantity: 1,
    date: /* @__PURE__ */ new Date("2024-01-22")
  },
  {
    id: "S009",
    productId: "P006",
    customerId: "C008",
    quantity: 2,
    date: /* @__PURE__ */ new Date("2024-01-23")
  },
  {
    id: "S010",
    productId: "P007",
    customerId: "C009",
    quantity: 3,
    date: /* @__PURE__ */ new Date("2024-01-24")
  }
];

const findTopSellingProducts = (products, sales) => {
  const salesByProduct = sales.reduce((acc, sale) => {
    const existingProduct = acc.find((item) => item.productId === sale.productId);
    if (existingProduct) {
      existingProduct.totalSales += sale.quantity;
    } else {
      acc.push({
        productId: sale.productId,
        totalSales: sale.quantity
      });
    }
    return acc;
  }, []);
  const sortedSales = salesByProduct.sort((a, b) => b.totalSales - a.totalSales);
  const topThreeProducts = sortedSales.slice(0, 3).map((salesData) => {
    const product = products.find((p) => p.id === salesData.productId);
    return product;
  });
  return topThreeProducts;
};

const calculateIncomeByCategory = (products, sales) => {
  const categoryIncomes = {};
  products.forEach((product) => {
    if (!categoryIncomes[product.category]) {
      categoryIncomes[product.category] = 0;
    }
  });
  sales.forEach((sale) => {
    const product = products.find((p) => p.id === sale.productId);
    if (product) {
      const saleIncome = product.price * sale.quantity;
      categoryIncomes[product.category] += saleIncome;
    }
  });
  const finalIncomes = {};
  Object.entries(categoryIncomes).forEach(([category, income]) => {
    finalIncomes[category] = income;
  });
  return finalIncomes;
};

function formatCurrency(amount) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP"
  }).format(amount);
}

const VIP_THRESHOLD = 1e6;
const STOCK_LIMITS = {
  LOW: 10,
  MEDIUM: 20
};

function findVIPCustomers(customers, sales, products) {
  const customerPurchases = customers.map((customer) => {
    const customerSales = sales.filter(
      (sale) => sale.customerId === customer.id
    );
    const totalPurchases = customerSales.reduce((total, sale) => {
      const product = products.find((p) => p.id === sale.productId);
      if (product) {
        return total + product.price * sale.quantity;
      }
      return total;
    }, 0);
    return {
      ...customer,
      // spread del objeto original
      totalPurchases
    };
  });
  const vipCustomers = customerPurchases.filter((customer) => customer.totalPurchases >= VIP_THRESHOLD).sort((a, b) => b.totalPurchases - a.totalPurchases);
  return vipCustomers;
}

function extendString(str, length) {
  return str.padEnd(length, " ");
}

function formatVIPCustomerInfo(customer) {
  const formattedTotal = formatCurrency(customer.totalPurchases);
  const nameAndEmail = `${customer.name} (${customer.email})`;
  return `${extendString(nameAndEmail, 50)} - Total gastado: ${formattedTotal}`;
}

function generateInventoryReport(products) {
  return products.map((product) => {
    const status = product.stock < STOCK_LIMITS.LOW ? "Low Stock" : product.stock <= STOCK_LIMITS.MEDIUM ? "In Stock" : "Enough Stock";
    return {
      name: product.name,
      category: product.category,
      currentStock: product.stock,
      status
    };
  });
}

const getStatusEmoji = (status) => {
  switch (status) {
    case "Low Stock":
      return "\u{1F534}";
    case "In Stock":
      return "\u{1F7E1}";
    case "Enough Stock":
      return "\u{1F7E2}";
  }
};

function formatInventoryReport(report) {
  return `${getStatusEmoji(report.status)} ${extendString(report.name, 25)} - ${extendString(report.category, 20)} - Stock:${report.currentStock}`;
}

console.log("===== Se han cargado los siguientes datos =====");
console.log("Productos cargados:", products.length);
console.log("Clientes cargados:", customers.length);
console.log("Ventas cargadas:", sales.length);
console.log("\n===== Top 3 Productos m\xE1s vendidos =====");
const topProducts = findTopSellingProducts(products, sales);
topProducts.forEach((product, index) => {
  console.log(`${index + 1}. ${product.name}`);
});
console.log("\n===== Ingresos por Categor\xEDa =====");
const categoryIncomes = calculateIncomeByCategory(products, sales);
Object.entries(categoryIncomes).forEach(([category, income]) => {
  console.log(`${extendString(category, 20)}: ${formatCurrency(income)}`);
});
console.log("\n===== Clientes VIP =====");
const vipCustomers = findVIPCustomers(customers, sales, products);
if (vipCustomers.length === 0) {
  console.log("No se encontraron clientes VIP");
} else {
  vipCustomers.forEach((customer, index) => {
    console.log(`${index + 1}. ${formatVIPCustomerInfo(customer)}`);
  });
}
console.log("\n===== Reporte de Inventario =====");
const inventoryReport = generateInventoryReport(products);
inventoryReport.forEach((report) => {
  console.log(formatInventoryReport(report));
});
