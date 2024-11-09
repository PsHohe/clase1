import { VIPCustomer } from "../solutions/vipCustomers";
import { extendString } from "./extendString";
import { formatCurrency } from "./formatCurrency";

export function formatVIPCustomerInfo(customer: VIPCustomer): string {
    const formattedTotal = formatCurrency(customer.totalPurchases);
    const nameAndEmail = `${customer.name} (${customer.email})`;

    return `${extendString(nameAndEmail, 50)} - Total gastado: ${formattedTotal}`;
}
