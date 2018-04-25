export interface UserInterface {
    'id'?: number;
    'username'?: string;
    'fullname': string;
    'no_telepon'?: string;
    'jenis_kelamin'?: string;
    'alamat'?: string;
    'permission'?: string;
}

export class User implements UserInterface {
    id: number;
    username: string;
    fullname: string;
    no_telepon: string;
    jenis_kelamin: string;
    alamat: string;
    permission: string;
    constructor(data?: UserInterface) {
        Object.assign(this, data);
    }
}
