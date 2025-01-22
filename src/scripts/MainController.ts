import * as PIXI from 'pixi.js';
import { gsap } from 'gsap';

class Game {
    private app: PIXI.Application;

    constructor() {
        this.app = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: 0x1099bb,
            resolution: window.devicePixelRatio || 1,
        });

        document.body.appendChild(this.app.view as HTMLCanvasElement);

        // Xử lý resize
        window.addEventListener('resize', this.resize.bind(this));
        this.resize();

        // Khởi tạo game
        this.init();
    }

    private resize(): void {
        this.app.renderer.resize(window.innerWidth, window.innerHeight);
    }

    private init(): void {
        // Thêm sprite mẫu
        const sprite = PIXI.Sprite.from('https://pixijs.io/examples/examples/assets/bunny.png');
        sprite.anchor.set(0.5);
        sprite.x = this.app.screen.width / 2;
        sprite.y = this.app.screen.height / 2;
        
        this.app.stage.addChild(sprite);

        // Animation mẫu sử dụng GSAP
        gsap.to(sprite, {
            rotation: Math.PI * 2,
            duration: 2,
            repeat: -1,
            ease: 'none'
        });
    }
}

// Khởi tạo game khi window load
window.onload = () => {
    new Game();
};
