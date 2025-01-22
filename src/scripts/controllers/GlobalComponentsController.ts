
export class GlobalComponentsController {
    private _isDisposed: boolean = true;

    constructor() {}

    public init(): void {
        if (this._isDisposed) {
            this._isDisposed = false;
        }
    }

    public dispose(): void {
        this._isDisposed = true;
    }
}
