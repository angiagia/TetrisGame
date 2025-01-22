import { ScreenController } from './controllers/ScreenController';
import { PopupController } from './controllers/PopupController';
import { SoundController } from './controllers/SoundController';
import { StorageController } from './controllers/StorageController';

export class PreLoader {
    private static instance: PreLoader;
    
    private constructor() {}

    public static getInstance(): PreLoader {
        if (!PreLoader.instance) {
            PreLoader.instance = new PreLoader();
        }
        return PreLoader.instance;
    }

    public async init(): Promise<void> {
        await this.initControllers();
    }

    public async initControllers(): Promise<void> {
        await ScreenController.init();
        await PopupController.init();
        await SoundController.init();
        await StorageController.init();
    }
}
