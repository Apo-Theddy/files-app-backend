import { File } from "src/files/entities/file.entity";
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: "Dir" })
export class Dir {


    @PrimaryGeneratedColumn({ name: "DirID" })
    DirID: number

    @Column({
        type: "varchar",
        name: "DirName",
        nullable: false
    })
    @Index({ unique: true })
    DirName: string


    @Column({
        type: "varchar",
        name: "CreationDate",
        nullable: true,
        default: () => `SYSDATETIME()`
    })
    CreationDate?: string

    @Column({
        type: "varchar",
        name: "DeleteDate",
        nullable: true,
    })
    DeleteDate?: string
}