import { Component, inject, Injector, input, InputSignal, ViewContainerRef, OnChanges } from '@angular/core';
import { IGlazeProperty } from 'decorators/builderComponent';
import { IPropertyEditor } from 'models/IPropertyEditor';
import { EDITOR_CONTEXT } from 'property-editors/propertyEditors';
import { PropertyEditorMapRegistry } from 'Registry/PropertyEditorMapRegistry';
import { RenderService } from 'services/render.service';

@Component({
  selector: 'gl-property-editor',
  imports: [],
  templateUrl: './property-editor.component.html',
  styleUrl: './property-editor.component.scss'
})
export class PropertyEditorComponent implements OnChanges {
  name: InputSignal<string> = input.required<string>();
  context: InputSignal<IGlazeProperty> = input.required<IGlazeProperty>();
  viewContainerRef = inject(ViewContainerRef);
  renderService = inject(RenderService);

  ngOnChanges() {
    this.renderEditor();
  }

  private renderEditor() {
    const component = PropertyEditorMapRegistry.instance.get(this.name());
    const injector = Injector.create({
      providers: [
        { provide: EDITOR_CONTEXT, useValue: this.context() }
      ]
    })
    this.renderService.renderComponent<IPropertyEditor>(this.viewContainerRef, component, injector);
  }

}
