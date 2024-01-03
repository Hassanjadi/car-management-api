import { Model, ModelObject } from 'objection';

export class carsModel extends Model {
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
    created_at!: Date;
    updated_at!: Date;

    static get tableName() {
        return 'cars';
    }
}

export type Cars = ModelObject<carsModel>;