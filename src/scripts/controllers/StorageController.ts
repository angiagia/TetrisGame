
export class StorageController {
    private _gamePrefix: string = "Tetris";
    private _name: string = "";
    private _isSupportStorage: boolean = true;

    constructor() {}

    public static async init(): Promise<void> {
        console.log('StorageController: Khởi tạo thành công');
    }

    public save(): void {
        if (this._isSupportStorage) {
            // localStorage.setItem(this._name, JSON.stringify(AppInfo.gameSetting));
        }
    }

    public clear(): void {
        if (this._isSupportStorage) {
            localStorage.removeItem(this._name);
        }
    }

    public clearAll(): void {
        if (this._isSupportStorage) {
            localStorage.clear();
        }
    }
}