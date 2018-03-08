
import type {Thing} from 'Something';

import {OtherThing} from 'Something';

type Foo<T, A> = {
  bar: (arg: T<A>) => void,
  foo: mixed[],
  baz: { [key: string]: string }
};
