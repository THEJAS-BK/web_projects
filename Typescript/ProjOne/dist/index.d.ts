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
//# sourceMappingURL=index.d.ts.map