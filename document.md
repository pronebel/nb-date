# nb-date

Fancy date ranges , no moment

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
  - [Node / NPM](#node--npm)
  - [Browser](#browser)
- [Examples](#examples)
  - [Create](#create)
  - [Attributes](#attributes)
  - [Querying](#querying)
    - [Adjacent](#adjacent)
    - [Center](#center)
    - [Contains](#contains)
    - [Overlaps](#overlaps)
    - [Intersect](#intersect)
  - [Manipulation](#manipulation)
    - [Add](#add)
    - [Clone](#clone)
    - [Subtract](#subtract)
  - [Iteration](#iteration)
  - [Compare](#compare)
    - [Equality](#equality)
    - [Difference](#difference)
  - [Conversion](#conversion)
    - [toDate](#todate)
    - [toString](#tostring)
    - [valueOf](#valueof)
- [format,parse](#formatparse)
  - [parse string to Date](#parse-string-to-date)
- [Date Math](#date-math)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Installation


### Node / NPM

Install via npm:

``` sh
npm install --save nb-date
```

**ES6:**

``` js

import { DateRange,DateRangeCreate } from 'date-range';

```

### Browser

``` html

<script src="nb-range.js"></script>
```

``` js
var DateRangeCreate = window.DateRangeCreate;
```




## Examples

### Create

Create a date range:

``` js
const start = new Date(2012, 0, 15);
const end   = new Date(2012, 4, 23);
const range = DateRangeCreate(start, end);
```


Arrays work too:

``` js
const start = new Date(2012, 0, 15);
const end   = new Date(2012, 4, 23);
const dates = [start, end];
const range = DateRangeCreate(dates);
```

You can also create a range from an [ISO 8601 time interval][interval] string:

``` js
const timeInterval = '2015-01-17T09:50:04+00:00/2015-04-17T08:29:55+00:00';
const range = DateRangeCreate(timeInterval);
```


You can also create open-ended ranges which go to the earliest or latest possible date:

``` js
const rangeUntil = DateRangeCreate(null, '2011-05-05');
const rangeFrom = DateRangeCreate('2011-03-05', null);
const rangeAllTime = DateRangeCreate(null, null);
```

*Note:* Dates use a timestamp of 00:00:000 if none is
provided. To ensure your range includes any timestamp for the given end date,
use `.setHours(23,59,59,999)` when constructing a Date object

### Attributes

You can access the start and end moments of the range easily enough:

``` js
const start = new Date(2012, 0, 15);
const end   = new Date(2012, 4, 23);
const range = DateRangeCreate(start, end);

range.start  // date
range.end  // date
```

### Querying

#### Adjacent

Check if two ranges are touching but not overlapping:

``` js
const a = new Date('2016-03-15');
const b = new Date('2016-03-29');
const c = new Date('2016-03-10');
const d = new Date('2016-03-15');

const range1 = DateRangeCreate(a, b);
const range2 = DateRangeCreate(c, d);

range1.adjacent(range2) // true
```

#### Center

Calculate the center of a range:

``` js
const start = new Date(2011, 2, 5);
const end   = new Date(2011, 3, 5);
const dr    = DateRangeCreate(start, end);

dr.center(); // 1300622400000
```


#### Contains

Check to see if your range contains a date/moment:

``` js
const start  = new Date(2012, 4, 1);
const end    = new Date(2012, 4, 23);
const lol    = new Date(2012, 4, 15);
const wat    = new Date(2012, 4, 27);
const range  = DateRangeCreate(start, end);
const range2 = DateRangeCreate(lol, wat);

range.contains(lol); // true
range.contains(wat); // false
```

The `exclusive` options is used to indicate if the end of the range should be
excluded when testing for inclusion:

``` js
range.contains(end) // true
range.contains(end, { exclusive: false }) // true
range.contains(end, { exclusive: true }) // false
```


#### Overlaps

Does it overlap another range?

``` js
range.overlaps(range2); // true
```

Include adjacent ranges:

``` js
const a = new Date('2016-03-15');
const b = new Date('2016-03-20');
const c = new Date('2016-03-20');
const d = new Date('2016-03-25');

const range1 = DateRangeCreate(a, b);
const range2 = DateRangeCreate(c, d);

range1.overlaps(range2)                      // false
range1.overlaps(range2, { adjacent: false }) // false
range1.overlaps(range2, { adjacent: true })  // true
```

#### Intersect

What are the intersecting ranges?

``` js
range.intersect(range2); // [DateRangeCreate(lol, end)]
```

### Manipulation

#### Add

Add/combine/merge overlapping ranges.

``` js
range.add(range2); // [DateRangeCreate(start, wat)]

const range3 = DateRangeCreate(new Date(2012, 3, 1), new Date(2012, 3, 15);
range.add(range3); // [null]
```

#### Clone

Deep clone a range

``` js
const start = new Date(2011, 2, 5);
const end   = new Date(2011, 3, 5);
const dr    = DateRangeCreate(start, end);

const dr2 = dr.clone();
dr2.start.add(2, 'days');

dr2.start.toDate() === dr.start.toDate() // false
```

#### Subtract

Subtracting one range from another.

``` js
range.subtract(range2); // [DateRangeCreate(start, lol)]
```

### Iteration
to see: date-range-help

### Compare

Compare range lengths or add them together with simple math:

``` js
const range1 = DateRangeCreate(new Date(2011, 2, 5), new Date(2011, 3, 15));
const range2 = DateRangeCreate(new Date(1995, 0, 1), new Date(1995, 12, 25));

range2 > range1 // true

range1 + range2 // duration of both ranges in milliseconds

Math.abs(range1 - range2); // difference of ranges in milliseconds
```

#### Equality

Check if two ranges are the same, i.e. their starts and ends are the same:

``` js
const range1 = DateRangeCreate(new Date(2011, 2, 5), new Date(2011, 3, 15));
const range2 = DateRangeCreate(new Date(2011, 2, 5), new Date(2011, 3, 15));
const range3 = DateRangeCreate(new Date(2011, 3, 5), new Date(2011, 6, 15));

range1.isSame(range2); // true
range2.isSame(range3); // false

range1.isEqual(range2); // true
range2.isEqual(range3); // false
```

#### Difference

The difference of the entire range 


``` js
const start = new Date(2011, 2, 5);
const end   = new Date(2011, 5, 5);
const dr    = DateRangeCreate(start, end);

dr.diff();         // 7945200000
```

Optionally you may specify if the difference should be rounded and with unit, please use the lib `diff`

``` js
import {dateRangeDuration} from './diff'
const d1 = new Date(Date.UTC(2011, 4, 1));
const d2 = new Date(Date.UTC(2011, 4, 5, 12));
const range = DateRangeCreate(d1, d2);

dateRangeDuration(range,'days')     // 4
dateRangeDuration(range,'days', false)// 4
dateRangeDuration(range,'days', true)  // 4.5
```

`#duration` is an alias for `#diff` and they may be used interchangeably.

### Conversion

#### `toDate`

Converts the `DateRange` to an `Array` of the start and end `Date` objects.

``` js
const start = new Date(2011, 2, 5);
const end   = new Date(2011, 5, 5);
const dr    = DateRangeCreate(start, end);

dr.toDate(); // [new Date(2011, 2, 5), new Date(2011, 5, 5)]
```

#### `toString`

Converting a `DateRange` to a `String` will format it as an [ISO 8601 time
interval][interval]:

``` js
const start = '2015-01-17T09:50:04+00:00';
const end   = '2015-04-17T08:29:55+00:00';
const range = DateRangeCreate(new Date(start), new Date(end));

range.toString() // '2015-01-17T09:50:04+00:00/2015-04-17T08:29:55+00:00'
```

#### `valueOf`

The difference between the end date and start date in milliseconds.

``` js
const start = new Date(2011, 2, 5);
const end   = new Date(2011, 5, 5);
const range = DateRangeCreate(start, end);

range.valueOf(); // 7945200000
```

## format,parse
If you need date format or parse,please use [fecha] instead of moment


### parse string to Date
[Date String Parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse)
 


## Date Math

If you need Date Math ,please use [date-arithmetic] instead of moment

###best practice
You can create a range from the start until the end of a named interval:
"milliseconds", "seconds", "minutes", "hours", "day", "weekday", "month", "year", "decade", "century"
``` js

// example in /tests/DateMath
import  dateMath  from 'date-arithmetic';

const date = new Date(2011, 2, 5);
let range1 = DateRangeCreate(dateMath.startOf(date, 'day'),dateMath.endOf(date, 'day'))
```









[add]: http://momentjs.com/docs/#/manipulating/add/
[cdnjs]: https://github.com/cdnjs/cdnjs
[cdnjs-moment-range]: https://cdnjs.com/libraries/moment-range
[interval]: http://en.wikipedia.org/wiki/ISO_8601#Time_intervals
[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#Syntaxes_expecting_iterables
[moment]: http://momentjs.com/
[node]: http://nodejs.org/

[fecha]: https://github.com/taylorhakes/fecha
[date-arithmetic]: https://github.com/jquense/date-math
[date.parse]: http://www.cnblogs.com/yingcaiyi/p/4884903.html
[date.parse2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
[date.parse.cn]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
