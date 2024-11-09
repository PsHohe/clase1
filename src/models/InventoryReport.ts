export type StockStatus = 'Low Stock' | 'In Stock' | 'Enough Stock';

export interface InventoryReport {
    name: string;
    category: string;
    currentStock: number;
    status: StockStatus;
}
