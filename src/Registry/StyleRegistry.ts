import { Subject } from "rxjs";

export class StyleRegistry {
    private static _styleMap: Map<string, string> = new Map();

    public static addStyle(id: string, style: string): void {
        this._styleMap.set(id, style);
        this.$styleAdded.next(this.getAllStyles());
    }

    public static getStyle(name: string) {
        return this._styleMap.get(name);
    }

    public static getAllStyles() {
        return Object.entries(this._styleMap).join('\n');
    }

    public static $styleAdded = new Subject<string>();
}