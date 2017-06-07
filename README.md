#NB-Date for date ranges

nb-date is base from the moment-range. Because the size of the Moment is too big.
If you have more and more complex date process, please use the Moment;
Otherwise, you can use the microJs.

    npm install --save nb-date

``` js
 import {DateRange,DateRangeCreate} from 'nb-date/dist/DateRange'
```

the detail use, please see the [Docment](./document.md)



## [fecha] 4.9KBs 
If you need `Format` or `Parse`, please use [fecha] instead of moment
``` js
 npm install --save fecha
```

<table class="table table-striped table-bordered">
  <tbody>
    <tr>
      <th></th>
      <th>Fecha</th>
      <th>Moment</th>
    </tr>
    <tr>
      <td><b>Size (Min)</b></td>
      <td>4.9KBs</td>
      <td>51.5KBs</td>
    </tr>
    <tr>
      <td><b>Date Parsing</b></td>
      <td>&#x2713;</td>
      <td>&#x2713;</td>
    </tr>
    <tr>
      <td><b>Date Formatting</b></td>
      <td>&#x2713;</td>
      <td>&#x2713;</td>
    </tr>
    <tr>
      <td><b>Date Manipulation</b></td>
      <td></td>
      <td>&#x2713;</td>
    </tr>
    <tr>
      <td><b>I18n Support</b></td>
      <td>&#x2713;</td>
      <td>&#x2713;</td>
    </tr>
  </tbody>
</table>

Date Manipulation, you can use [date-arithmetic] 


## [date-arithmetic] 5.7KBS

If you need Manipulation,please use [date-arithmetic] instead of moment, here is the [API][date-arithmetic]
``` js
    npm install --save date-arithmetic
```

## Running Tests

Clone this bad boy:

``` sh
git clone https://git@github.com/gf3/moment-range.git
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

nb-date is [UNLICENSED][unlicense].


[fecha]: https://github.com/taylorhakes/fecha
[date-arithmetic]: https://github.com/jquense/date-math
[unlicense]: http://unlicense.org/