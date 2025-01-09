import { InjectionToken } from "@angular/core";

export function getUID(): string {
    const getRandomLetters = (length: number): string => {
        const chars = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    };
    const randomPart = getRandomLetters(8);
    const timestampPart = Date.now()
        .toString(36)
        .replace(/\d/g, (d) => String.fromCharCode(97 + parseInt(d, 10)));
    return `${randomPart}${timestampPart}`;
}

export const COMPONENT_ID = new InjectionToken<string>('COMPONENT_ID');