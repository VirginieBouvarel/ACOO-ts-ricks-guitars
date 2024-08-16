import _ from 'lodash';
console.log(_.shuffle([1,2,3]));

import { Example, ExampleStatus } from './Example';

const example = new Example('id1', 'TS Course', ExampleStatus.Active);
console.log(example);