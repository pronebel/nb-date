#NB-Date for date ranges

nb-date is base from the moment-range. Because the size of the Moment is too big.
If you have more and more complex date process, please use the Moment;
Otherwise, you can use the microJs.

    npm install --save nb-date-range

``` js
 import {DateRange,DateRangeCreate} from 'nb-date-range'
```

the detail use, please see the [Docment](./document.md)

## Other Date MicroJs

### [fecha] 4.9KBs 
If you need `Format` or `Parse`, please use [fecha] instead of moment
``` js
 npm install --save fecha
```

### [date-arithmetic] 5.7KBS

If you need  Date Manipulation,please use [date-arithmetic] instead of moment, here is the [API][date-arithmetic]
``` js
    npm install --save date-arithmetic
```

## Running Tests

Clone this bad boy:

``` sh
git clone https://git@github.com/pronebel/nb-date.git
```

Install the dependencies:

``` sh
npm install
```

Do all the things!

``` sh
npm run test
npm run lint
```



## License

nb-date-range is [UNLICENSED][unlicense].


[fecha]: https://github.com/taylorhakes/fecha
[date-arithmetic]: https://github.com/jquense/date-math
[unlicense]: http://unlicense.org/