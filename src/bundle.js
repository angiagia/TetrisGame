(() => {
    "use strict";

    // Khởi tạo ứng dụng PIXI
    const app = new PIXI.Application({
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0x1099bb,
        resolution: window.devicePixelRatio || 1
    });

    // Thêm canvas vào DOM
    document.body.appendChild(app.view);

    // Xử lý resize
    const resize = () => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', resize);
    resize();

    // Khởi tạo sprite mẫu
    const sprite = PIXI.Sprite.from('https://pixijs.io/examples/examples/assets/bunny.png');
    sprite.anchor.set(0.5);
    sprite.x = app.screen.width / 2;
    sprite.y = app.screen.height / 2;
    app.stage.addChild(sprite);

    // Animation với GSAP
    gsap.to(sprite, {
        rotation: Math.PI * 2,
        duration: 2,
        repeat: -1,
        ease: 'none'
    });
})();
