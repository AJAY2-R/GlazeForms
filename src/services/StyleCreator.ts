import { getSize, ICoreStyle } from "models/ICore.Properties";
import { IBorder } from "property-editors/components/border-editor/border";

export class StyleCreator {
    static create() {
        return new StyleCreator();
    }

    properties: Record<string, string> = {};

    buildGridTemplate(rows: number, columns: number) {
        this.properties['grid-template-rows'] = this.generateGridTemplate(rows);
        this.properties['grid-template-columns'] = this.generateGridTemplate(columns);
        return this;
    }

    private generateGridTemplate(num: number): string {
        let template = '';
        for (let i = 0; i < num; i++) {
            template += 'auto ';
        }
        return template;
    }

    buildBackground(color?: string) {
        if (color) {
            this.properties['background-color'] = color;
        }
        return this;
    }

    buildBorder(border?: IBorder) {
        if (border) {
            this.properties['border'] = `${getSize(border.width)} ${border.style} ${border.color}`;
            this.properties['border-radius'] = getSize(border.borderRadius);
        }
        return this;
    }

    buildCore(properties: ICoreStyle) {
        return this.buildBackground(properties.backgroundColor)
            .buildBorder(properties.border)
    }
}