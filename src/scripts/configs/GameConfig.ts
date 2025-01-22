export class GameConfig {
    private static _instance: GameConfig;
    
    private GameID: number;
    private GameName: string;
    private Version: string;

    private constructor() {
        this.GameID = 1;
        this.GameName = 'Demo Tetris';
        this.Version = '1.0.0';
    }

    public static getInstance(): GameConfig {
        if (!GameConfig._instance) {
            GameConfig._instance = new GameConfig();
        }
        return GameConfig._instance;
    }

    public getGameID(): number {
        return this.GameID;
    }

    public getGameName(): string {
        return this.GameName;
    }

    public getVersion(): string {
        return this.Version;
    }
}