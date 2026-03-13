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
interface Story {
    createStory(): void;
}
declare class Instagram implements TakePhoto, Story {
    camera: string;
    model: string;
    brust: number;
    short: string;
    constructor(camera: string, model: string, brust: number, short: string);
    createStory(): void;
}
declare abstract class TakePhotos {
    cameraMode: string;
    burstSpeed: number;
    constructor(cameraMode: string, burstSpeed: number);
    abstract getSit(): void;
    getReel(): number;
}
declare class NotSoGoodPhot extends TakePhotos {
    cameraMode: string;
    burstSpeed: number;
    constructor(cameraMode: string, burstSpeed: number);
    getSit(): void;
}
declare const score: Array<number>;
declare const names: string[];
declare function getIdentityOne(val: boolean | number): boolean | number;
declare function getIdentityTwo(val: any): any;
declare function identtityThree<Type>(val: Type): Type;
declare function identityFour<T>(val: T): T;
interface bottle {
    brand: string;
    type: string;
}
declare function getSearchProducts<T>(products: T[]): T | undefined;
declare const getMoreSearchProducts: <T>(products: T[], i: number) => T | undefined;
//# sourceMappingURL=index.d.ts.map