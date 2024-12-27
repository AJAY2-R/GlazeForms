import { Type } from "@angular/core";
import { ButtonComponent, GlazeComponent, GridComponent, TextblockComponent, TextboxComponent } from "@glaze/components";

export const COMPONENTS: Record<string, Type<GlazeComponent>> = {
    "grid": GridComponent,
    "button": ButtonComponent,
    "textbox": TextboxComponent,
    "textblock": TextblockComponent
}
