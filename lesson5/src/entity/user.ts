import {
    Column, Entity, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';

import { CommonFields } from './commonFields';
import { IPost, Post } from './post';
import { IComment, Comment } from './comment';

export interface IUser {
	firstName: string;
	lastName: string;
	age?: number;
	phone: string;
	email: string;
	password: string;
	posts: IPost[];
	comments: IComment[];
}

@Entity('Users', { database: 'okten' })
export class User extends CommonFields {
	@PrimaryGeneratedColumn()
	    id: number;

	@Column({
	    type: 'varchar',
	    width: 250,
	    nullable: false,
	})
	    firstName: string;

	@Column({
	    type: 'varchar',
	    width: 250,
	    nullable: false,
	})
	    lastName: string;

	@Column({
	    type: 'int',
	})
	    age?: number;

	@Column({
	    type: 'varchar',
	    width: 250,
	    nullable: false,
	    unique: true,
	})
	    phone: string;

	@Column({
	    type: 'varchar',
	    width: 250,
	    nullable: false,
	    unique: true,
	})
	    email: string;

	@Column({
	    type: 'varchar',
	    width: 250,
	    nullable: false,
	})
	    password: string;

	@OneToMany(() => Post, (post) => post.user)
	    posts: Post[];

	@OneToMany(() => Comment, (comment) => comment.user)
	    comments: Comment[];
}
