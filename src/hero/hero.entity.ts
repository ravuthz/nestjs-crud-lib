import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('heroes')
export class Hero {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;
}