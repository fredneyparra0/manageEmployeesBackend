import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";


@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    dateofBirthday: string;

    @Column()
    countrie: string;

    @Column()
    username: string;

    @Column()
    hiringDate: string;

    @Column()
    state: boolean;

    @Column()
    areaOfWork: string;

    @Column()
    position: string;

    @Column()
    comission: number;

    @Column()
    age: number;

}