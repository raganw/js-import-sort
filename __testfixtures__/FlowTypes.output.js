import { OtherThing } from 'Something';

import type { Thing } from 'Something';

type Foo<T, A> = {
  bar: T<A>
};
