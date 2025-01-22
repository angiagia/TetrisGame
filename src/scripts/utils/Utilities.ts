export default class Utilities {
    private static _instance: Utilities;

    private constructor() {}

    public static getInstance(): Utilities {
        if (!Utilities._instance) {
            Utilities._instance = new Utilities();
        }
        return Utilities._instance;
    }

    public static async init(): Promise<void> {
        try {
            console.log('Utilities: Khởi tạo thành công');
        } catch (error) {
            console.error('Utilities: Lỗi khởi tạo:', error);
            throw error;
        }
    }
}
