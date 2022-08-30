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
        dayArray.push({ day: start_date_of_month });
        start_date_of_month = moment(start_date_of_month)
            .add(1, "days")
            .format("YYYY-MM-DD");
    }
    return dayArray;
};

const getMonthName = (e) => {
    let monthName;
    switch (e.slice(5)) {
        case "01":
            monthName = "January";
            break;
        case "02":
            monthName = "February";
            break;
        case "03":
            monthName = "March";
            break;
        case "04":
            monthName = "April";
            break;
        case "05":
            monthName = "May";
            break;
        case "06":
            monthName = "June";
            break;
        case "07":
            monthName = "July";
            break;
        case "08":
            monthName = "August";
            break;
        case "09":
            monthName = "September";
            break;
        case "10":
            monthName = "October";
            break;
        case "11":
            monthName = "November";
            break;
        case "12":
            monthName = "December";
            break;
        default:
            break;
    }
    return monthName;
};

export const generateCal = () => {
    const generated = months.map((e, i) => {
        const Year = e.slice(0, 4);
        const monthName = getMonthName(e);
        const thisMonthDays = generateDatesOfAMonth(e);
        return { Year, Month: monthName, thisMonthDays };
    });
    return generated;
};
