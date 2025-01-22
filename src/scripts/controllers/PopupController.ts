import TweenMax from 'gsap';
import { Power2 } from 'gsap';

export class PopupController {
    private static _instance: PopupController;
    private _preLoader: any;
    private _currentPopup: any = null;
    private _listPopup: any[] = [];

    private constructor() {}

    public static getInstance(): PopupController {
        if (!PopupController._instance) {
            PopupController._instance = new PopupController();
        }
        return PopupController._instance;
    }

    public static async init(): Promise<void> {
        try {
            console.log('PopupController: Khởi tạo thành công');
        } catch (error) {
            console.error('PopupController: Lỗi khởi tạo:', error);
            throw error;
        }
    }

    public showPopup(popup: any): void {
        if (this._currentPopup !== popup) {
            if (this._currentPopup) {
                this.hideCurrentPopup();
            }
            
            this._currentPopup = popup;
            this._listPopup.push(popup);
            
            gsap.to(popup, {
                duration: 0.3,
                alpha: 1,
                ease: Power2.easeOut,
                onStart: () => {
                    popup.visible = true;
                }
            });
        }
    }

    public hideCurrentPopup(): void {
        if (this._currentPopup) {
            gsap.to(this._currentPopup, {
                duration: 0.2,
                alpha: 0,
                ease: Power2.easeIn,
                onComplete: () => {
                    this._currentPopup.visible = false;
                    this._currentPopup = null;
                    this._listPopup.splice(this._listPopup.indexOf(this._currentPopup), 1);
                }
            });
        }
    }

    public hideAllPopup(): void {
        while (this._listPopup.length > 0) {
            this.hideCurrentPopup();
        }
    }

    public onResize(event: any): void {
        if (this._currentPopup && this._currentPopup.onResize) {
            this._currentPopup.onResize(event);
        }
    }
}
