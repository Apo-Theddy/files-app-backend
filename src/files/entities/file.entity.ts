import { Dir } from "src/dirs/entities/dir.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinTable, JoinColumn } from "typeorm";


@Entity({ name: "File" })
export class File {

    @PrimaryGeneratedColumn({ name: "FileID" })
    FileID: number

    @Column({
        type: "varchar",
        name: "OriginalName",
        nullable: false
    })
    OriginalName: string


    @Column({
        type: "varchar",
        name: "UniqueName",
        nullable: false
    })
    UniqueName: string

    @Column({
        type: "varchar",
        name: "TypeExtension",
        nullable: false
    })
    TypeExtension: string

    @Column({
        type: "varchar",
        name: "Path",
        nullable: false
    })
    Path: string

    @Column({
        type: "int",
        name: "Width",
        nullable: true
    })
    Width?: number

    @Column({
        type: "int",
        name: "Height",
        nullable: true
    })
    Height?: number

    @Column({
        type: "float",
        name: "Size",
        nullable: true,
    })
    Size: number

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
        nullable: true
    })
    DeleteDate?: string

    @ManyToOne(() => Dir, { eager: true, nullable: true })
    @JoinColumn({ name: "DirID" })
    Dir?: Dir
}