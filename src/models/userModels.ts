import { Model, ModelObject } from 'objection';

export class userModel extends Model {
    id!: string;
    username!: string;
    email!: string;
    password!: string;
    role!: string;

    static get tableName() {
        return 'user';
    }
}

export type User = ModelObject<userModel>;