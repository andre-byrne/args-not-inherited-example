import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { AuthorsResolver } from 'src/authors/authors.resolver';
import { Blog } from './models/blog.model';

@Resolver((of) => Blog)
export class BlogsResolver extends AuthorsResolver {
  constructor() {
    super();
  }

  @Query((returns) => Blog)
  async blog(@Args('id', { type: () => Int }) id: number) {
    return { id };
  }
}
