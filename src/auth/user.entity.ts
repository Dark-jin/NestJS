import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

// 데이터베이스 레벨에서 만약 같은 이름을 가진 유저가 있다면 에러를 던져주는 방법(추천)
@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;
}
