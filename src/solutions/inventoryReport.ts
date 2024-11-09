import { InventoryReport, StockStatus } from '../models/InventoryReport';
import { Product } from '../models/Product';
import { STOCK_LIMITS } from '../utils/constants';


export function generateInventoryReport(products: Product[]): InventoryReport[] {
    return products.map(product => {
        // Determinar el estado del stock usando un operador ternario anidado
        const status: StockStatus =
            product.stock < STOCK_LIMITS.LOW ? 'Low Stock' :
            product.stock <= STOCK_LIMITS.MEDIUM ? 'In Stock' :
            'Enough Stock';

        return {
            name: product.name,
            category: product.category,
            currentStock: product.stock,
            status
        };
    });
}
