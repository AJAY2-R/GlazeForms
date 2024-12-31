export abstract class IPropertyEditor {
    abstract initialize(): void;
    abstract update(value: unknown): void;
    value: unknown;
}