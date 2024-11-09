import { Product } from '../models/Product';
import { ProductSales } from '../models/ProductSales';
import { Sale } from '../models/Sale';


export const findTopSellingProducts = (products: Product[], sales: Sale[]): Product[] => {
    // Paso 1: Agrupa y suma las ventas por producto
    const salesByProduct: ProductSales[] = sales.reduce((acc: ProductSales[], sale) => {
        const existingProduct = acc.find(item => item.productId === sale.productId);

        if (existingProduct) { // Si existe el producto en el array, suma las ventas
            existingProduct.totalSales += sale.quantity;
        } else { // Si no existe el producto en el array, lo agrega
            acc.push({
                productId: sale.productId,
                totalSales: sale.quantity
            });
        }

        return acc;
    }, []); // El array comienza vacío

    // Paso 2: Ordena los productos por cantidad de ventas con el método sort
    const sortedSales = salesByProduct.sort((a, b) => b.totalSales - a.totalSales);

    // Paso 3: Obtiene los 3 productos más vendidos simplemente recortando los 3 primeros elementos
    const topThreeProducts = sortedSales
        .slice(0, 3) // Toma los primeros 3
        .map(salesData => {
            const product = products.find(p => p.id === salesData.productId);
            return product!;
        });

    return topThreeProducts;
}
