import { InventoryReport } from "../models/InventoryReport";
import { extendString } from "./extendString";
import { getStatusEmoji } from "./getStatusEmoji";

export function formatInventoryReport(report: InventoryReport): string {
    return `${getStatusEmoji(report.status)} ${extendString(report.name, 25)} - ${extendString(report.category, 20)} - Stock:${report.currentStock}`;
}
