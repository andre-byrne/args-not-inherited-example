This minimal example demonstrates that we lose the Args decorator when we extend a resolver.

If we remove the `ResolveField` decorator for Authors, Blogs (the sub-class) will lose the field too... but so the `ResolveField` decorator works across inheritance as expected. However the `Args` decorator does not seem to.