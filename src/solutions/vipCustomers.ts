import { Customer } from '../models/Customer';
import { Product } from '../models/Product';
import { Sale } from '../models/Sale';
import { VIP_THRESHOLD } from '../utils/constants';

export interface VIPCustomer extends Customer {
    totalPurchases: number;
}

export function findVIPCustomers(
    customers: Customer[],
    sales: Sale[],
    products: Product[]
): VIPCustomer[] {
    // Calcular el total de compras por cliente
    const customerPurchases = customers.map(customer => {
        // Obtener todas las ventas del cliente
        const customerSales = sales.filter(sale =>
            sale.customerId === customer.id
        );

        // Calcular el total de compras del cliente
        const totalPurchases = customerSales.reduce((total: number, sale) => {
            const product = products.find(p => p.id === sale.productId);
            if (product) { // Compra de un producto válido
                return total + (product.price * sale.quantity);
            }
            return total;
        }, 0);

        return {
            ...customer, // spread del objeto original
            totalPurchases
        };
    });

    // Filtrar solo los clientes VIP
    const vipCustomers = customerPurchases
        .filter(customer => customer.totalPurchases >= VIP_THRESHOLD)
        // Ordenar por monto de compras
        .sort((a, b) => b.totalPurchases - a.totalPurchases);

    return vipCustomers;
}
