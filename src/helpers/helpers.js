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
    let counter = 1;
    let start_date_of_month = moment().format(
            `${e.slice(0, 4)}-${e.slice(5)}-01`
        ),
        end_date_of_month =
            moment().format(`${e.slice(0, 4)}-${e.slice(5)}-`) +
            moment(e).daysInMonth(),
        dayArray = [];
    while (start_date_of_month <= end_date_of_month) {
        dayArray.push({ day: start_date_of_month });
        start_date_of_month = moment(start_date_of_month)
            .add(1, "days")
            .format("YYYY-MM-DD");
        counter = counter + 1;
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

export const isPastDay = (toDay, day) => {
    return toDay
        .format("YYYY-MM-DD")
        .toString()
        .slice(0, 10)
        .replaceAll("-", "") > day.day.replaceAll("-", "")
        ? true
        : false;
};

export const getMarginLeft = (fullDayName) => {
    // debugger;
    switch (fullDayName) {
        case "Monday":
            return { marginLeft: 0 };
        case "Tuesday":
            return { marginLeft: "42px" };
        case "Wednesday":
            return { marginLeft: "84px" };
        case "Thursday":
            return { marginLeft: "126px" };
        case "Friday":
            return { marginLeft: "168px" };
        case "Saturday":
            return { marginLeft: "210px" };
        case "Sunday":
            return { marginLeft: "252px" };
        default:
            break;
    }
};

export const getShortName = (e) => {
    switch (e) {
        case 1:
            return "Mo";
        case 2:
            return "Tu";
        case 3:
            return "We";
        case 4:
            return "Th";
        case 5:
            return "Fr";
        case 6:
            return "St";
        case 7:
            return "Su";

        default:
            break;
    }
};

export const getTitle = (
    box,
    departureMonthIndex,
    calender,
    returnMonthIndex
) => {
    // debugger;
    switch (box) {
        case "departure":
            return departureMonthIndex
                ? `${calender[departureMonthIndex]?.Year} ${calender[departureMonthIndex]?.Month}`
                : `${calender[0]?.Year} ${calender[0]?.Month}`;
        case "return":
            return returnMonthIndex
                ? `${calender[returnMonthIndex]?.Year} ${calender[returnMonthIndex]?.Month}`
                : `${calender[0]?.Year} ${calender[0]?.Month}`;
        default:
    }
};

export const getStyle = (e, departureMonth, calender) => {
    // debugger;

    const currentMonthNum = moment().month(e.Month).format("YYYYMM");
    const departureMonthNum = moment()
        .month(calender[departureMonth].Month)
        .format("YYYYMM");

    const currentYearMonth = `${currentMonthNum}`;
    if (e.Year === "2023") return;
    else if (Number(currentYearMonth) < Number(departureMonthNum)) {
        return {
            opacity: "0.6",
            pointerEvents: "none",
        };
    }
};
