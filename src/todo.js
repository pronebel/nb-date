
export function extendMoment(moment) {
    /**
     * Build a date range.
     */
    moment.range = function range(start, end) {
        const m = this;

        if (INTERVALS.hasOwnProperty(start)) {
            return new DateRange(moment(m).startOf(start), moment(m).endOf(start));
        }

        return new DateRange(start, end);
    };


}
