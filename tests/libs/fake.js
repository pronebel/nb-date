import moment from 'moment';
import {DateDiff} from '../../src/date-diff'



export let isSame = function (sdate, input, units) {
    return moment(sdate).isSame(input, units);
}
export let diff = function (sdate,input, units, asFloat) {

    return DateDiff(sdate,input,units,asFloat)
}
export let add = function (sdate,val,units) {
    return moment(sdate).add(val,units).toDate()
}
export let subtract = function (sdate,val,units) {
    return moment(sdate).subtract(val,units).toDate()
}