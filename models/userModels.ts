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

    static jsonSchema = {
        type: 'object',
        required: ['username', 'email', 'password', 'role'],
        properties: {
          id: { type: 'string' },
          username: { type: 'string', minLength: 1, maxLength: 255 },
          email: { type: 'string', minLength: 1, maxLength: 255 },
          password: { type: 'string', minLength: 1, maxLength: 255 },
          role: { type: 'string', minLength: 0, maxLength: 255 },
        },
    };
}

export type User = ModelObject<userModel>;