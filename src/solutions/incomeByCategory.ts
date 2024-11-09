import { CategoryIncomes } from '../models/CategoryIncomes';
import { Product } from '../models/Product';
import { Sale } from '../models/Sale';


export const calculateIncomeByCategory = (products: Product[], sales: Sale[]): CategoryIncomes => {
    // Inicializamos el objeto
    const categoryIncomes: CategoryIncomes = {};

    // Inicializamos las categorías con valor 0
    products.forEach(product => {
        if (!categoryIncomes[product.category]) { // Si la categoría no existe, la inicializamos
            categoryIncomes[product.category] = 0;
        }
    });

    // Ingresos por cada venta
    sales.forEach(sale => {
        // Encontramos el producto correspondiente a la venta
        const product = products.find(p => p.id === sale.productId);

        if (product) {
            // Calculamos el ingreso de esta venta
            const saleIncome = product.price * sale.quantity;

            // Sumamos el ingreso a la categoría correspondiente con +=
            categoryIncomes[product.category] += saleIncome;
        }
    });

    // Creamos un objeto final con los resultados
    const finalIncomes: CategoryIncomes = {};
    Object.entries(categoryIncomes)
        .forEach(([category, income]) => {
            finalIncomes[category] = income;
        });

    return finalIncomes;
}
