import { ISize } from "models/ICore.Properties";
import { size } from "../size-mapper/size";

export interface IBorder {
    width: ISize;
    style: string;
    color: string;
    borderRadius: ISize; // Temporarily using ISize until IBorderRadius is defined
}

export interface IBorderRadius {
    topLeft: ISize;
    topRight: ISize;
    bottomRight: ISize;
    bottomLeft: ISize;
}

export function border(): IBorder {
    return {
        width: size(),
        style: 'solid',
        color: '#000',
        borderRadius: size()
    };
}