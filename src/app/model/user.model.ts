export class UserModel {
    id?: number;
    first_name?: string;
    last_name?: string;
    email?: string;
    avatar?: string;
}
export class UserRegister {
    email?: string;
    password?: string;
}
export class ApiResult {
    data: UserModel[]
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
}
export class UserToCreate {
    name: string;
    job: string ;
}