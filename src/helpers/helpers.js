import moment from "moment";

const MONTHS = () => {
    const months = [];
    const dateStart = moment();
    const dateEnd = moment().add(12, "month");
    while (dateEnd.diff(dateStart, "months") >= 0) {
        months.push(dateStart.format("YYYY-MM"));
        dateStart.add(1, "month");
    }
    return months;
};

const months = MONTHS();

const generateDatesOfAMonth = (e) => {
    let start_date_of_month = moment().format("YYYY-MM-01"),
        end_date_of_month =
            moment().format("YYYY-MM-") + moment(e).daysInMonth(),
        dayArray = [];
    while (start_date_of_month <= end_date_of_month) {
        dayArray.push({ days: start_date_of_month });
        start_date_of_month = moment(start_date_of_month)
            .add(1, "days")
            .format("YYYY-MM-DD");
    }
    return dayArray;
};

export const generateCal = () => {
    const generated = months.map((e, i) => {
        const monthName = e;
        const thisMonthDays = generateDatesOfAMonth(e);
        return { [monthName]: thisMonthDays };
    });
    return generated;
};
