import { Args, Int, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Author } from './models/author.model';

@Resolver((of) => Author)
export class AuthorsResolver {
  constructor() {}

  @Query((returns) => Author)
  async author(@Args('id', { type: () => Int }) id: number) {
    return { id };
  }

  @ResolveField()
  async posts(@Args('language') language: string) {
    return [{ id: 1 }];
  }
}
