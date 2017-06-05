import expect from 'expect.js';

import {DateRange, DateRangeCreate} from '../../src/date-range';

import  dateMath  from 'date-arithmetic';
import  fecha  from 'fecha';


describe('#date Math', function () {

    it('should range create with startOf,endOf', function () {

        const date = new Date(2011, 2, 5);
        let range1 = DateRangeCreate(dateMath.startOf(date, 'day'), dateMath.endOf(date, 'day'))

        let startExpect = fecha.format(range1.start, 'YYYY-MM-DD HH:mm:ss') === '2011-03-05 00:00:00'
        let endExpect = fecha.format(range1.end, 'YYYY-MM-DD HH:mm:ss') === '2011-03-05 23:59:59'
        expect(startExpect && endExpect).to.be(true);
    });
});