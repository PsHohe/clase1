import { StockStatus } from "../models/InventoryReport";

export const getStatusEmoji = (status: StockStatus): string => {
    switch (status) {
        case 'Low Stock':
            return '🔴';
        case 'In Stock':
            return '🟡';
        case 'Enough Stock':
            return '🟢';
    }
};
