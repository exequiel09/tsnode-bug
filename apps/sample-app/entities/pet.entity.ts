import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { PetGender } from '@ts-node-bug/sample-lib';

@Entity()
export class Pet {

  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({
    type: 'varchar',
    length: 150,
  })
  name: string;

  @Column({
    type: 'enum',
    enum: PetGender,
    default: PetGender.Male,
  })
  gender: PetGender;

  constructor(partial: Partial<Pet>) {
    Object.assign(this, partial);
  }

  toString() {
    return this.name;
  }

}


