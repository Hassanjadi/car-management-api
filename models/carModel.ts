import { Model, ModelObject } from 'objection';

export class carModel extends Model {
    id!: string;
    plate!: string;
    manufacture!: string;
    model!: string;
    image!: string;
    rentPerDay!: number;
    capacity!: number;
    description!: string;
    availableAt!: Date;
    transmission!: string;
    available!: boolean;
    type!: string;
    year!: number;
    options!: string[];
    specs!: string[];
    createdBy!: string;
    updatedBy!: string;
    deletedBy!: string;

    static get tableName() {
        return 'car';
    }
}

export type Cars = ModelObject<carModel>;