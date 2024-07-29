import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/authors/models/post.model';

@ObjectType()
export class Blog {
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(type => [Post])
  posts: Post[];
}