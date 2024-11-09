import { products } from './data/products';
import { customers } from './data/customers';
import { sales } from './data/sales';
import { findTopSellingProducts } from './solutions/topSellingProducts';
import { calculateIncomeByCategory } from './solutions/incomeByCategory';
import { formatCurrency } from './utils/formatCurrency';
import { findVIPCustomers } from './solutions/vipCustomers';
import { formatVIPCustomerInfo } from './utils/formatVipCustomerInfo';
import { generateInventoryReport } from './solutions/inventoryReport';
import { formatInventoryReport } from './utils/formatInventoryReport';
import { extendString } from './utils/extendString';


// Solución al requerimiento 1
console.log('===== Se han cargado los siguientes datos =====');
console.log('Productos cargados:', products.length);
console.log('Clientes cargados:', customers.length);
console.log('Ventas cargadas:', sales.length);

// Solución al requerimiento 2
console.log('\n===== Top 3 Productos más vendidos =====');
const topProducts = findTopSellingProducts(products, sales);
topProducts.forEach((product, index) => {
    console.log(`${index + 1}. ${product.name}`);
});

// Solución al requerimiento 3
console.log('\n===== Ingresos por Categoría =====');
const categoryIncomes = calculateIncomeByCategory(products, sales);
Object.entries(categoryIncomes).forEach(([category, income]) => {
    console.log(`${extendString(category, 20)}: ${formatCurrency(income)}`);
});

// Solución al requerimiento 4
console.log('\n===== Clientes VIP =====');
const vipCustomers = findVIPCustomers(customers, sales, products);
if (vipCustomers.length === 0) {
    console.log('No se encontraron clientes VIP');
} else {
    vipCustomers.forEach((customer, index) => {
        console.log(`${index + 1}. ${formatVIPCustomerInfo(customer)}`);
    });
}

// Solución al requerimiento 5
console.log('\n===== Reporte de Inventario =====');
const inventoryReport = generateInventoryReport(products);
inventoryReport.forEach(report => {
    console.log(formatInventoryReport(report));
});
