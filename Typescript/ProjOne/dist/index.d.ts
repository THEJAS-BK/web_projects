declare class User {
    email: string;
    private name;
    private userId?;
    protected courseCount: number;
    constructor(email: string, name: string, userId?: number | undefined);
    get getAppleEmail(): string;
    set setCounter(count: number);
    get getCount(): number;
}
declare class SubUser extends User {
    isFam: boolean;
    changeCourse(): void;
}
declare const userOne: User;
interface TakePhoto {
    camera: string;
    model: string;
    brust: number;
}
declare class Instagram implements TakePhoto {
    camera: string;
    model: string;
    brust: number;
    constructor(camera: string, model: string, brust: number);
}
//# sourceMappingURL=index.d.ts.map