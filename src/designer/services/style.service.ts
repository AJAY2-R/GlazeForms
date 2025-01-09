import { IGlazeStyle } from "models/IComponent";

export function getGlazeStyle(properties: Record<string, string>, className?: string, selector?: string): IGlazeStyle {
    return {
        styles: properties,
        className,
        selector
    }
}