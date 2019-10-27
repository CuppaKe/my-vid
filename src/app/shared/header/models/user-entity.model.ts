export interface UserEntity {
    id: number;
    firstName: string;
    lastName: string;
}

export class User implements UserEntity {
    constructor(public id: number, public firstName: string, public lastName: string) {}
}
