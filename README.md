This minimal example demonstrates that we lose the Args decorator when we extend a resolver.

### Expected

Given the following resolver:

```ts
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
```

If we follow the instructions [here][0] and extend this resolver to simplify create a new resolver:

```ts
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
```

We should expect to have access to the `posts` field on `blog` _and_ we should expect to be able to pass the `language` argument to it.

### Actual

Trying to pass language to the post field on blog is an error, and the argument is not available in the playground.

### Comments

Obviously inheritance works for the rest of the decorators, or else the NestJS tutorials wouldn't work. For example if we remove the `ResolveField` decorator for Authors, Blogs (the sub-class) will lose the field too... but so the `ResolveField` decorator works across inheritance as expected. However the `Args` decorator does not seem to.

[0]: https://docs.nestjs.com/graphql/resolvers#class-inheritance
