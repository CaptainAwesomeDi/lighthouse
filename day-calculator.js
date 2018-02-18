function calculateDayInYear(date) {
    var splitDate = date.split('/');
    var year = Number(splitDate[0]);
    var month = Number(splitDate[1]);
    var day = Number(splitDate[2]);
    var febDays = daysInFeb(year);
    var DAYS_IN_MONTH = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


    if (year && validMonth(month) && validDay(month, day)) {
        console.log(isLeapYear(year));
        console.log(date, "is day", calculateDayNumber(month, day), "of the year", year);
    } else {
        console.log("Invalid date");
    }

    function validMonth(month) {
        return month && month >= 1 && month <= 12;
    }

    function validDay(month, day) {
        return day && day >= 1 && day <= DAYS_IN_MONTH[month - 1];
    }

    function calculateDayNumber(month, day) {
        //console.log(month,day);
        var dayOfYear = 0;
        if (day === 1 && month === 1) {
            return dayOfYear = 1
        } else {
            for (var i = 0; i < month - 1; i++) {
                dayOfYear += DAYS_IN_MONTH[i];
            }
            return dayOfYear + day;
        }

    }



    function daysInFeb(year) {
        if (isLeapYear(year) === true) {
            return 29;
        } else {
            return 28;
        }
    }

    function isLeapYear(year) {
        return isMultiple(year, 400) || !isMultiple(year, 100) && isMultiple(year, 4);
    }
}

function isMultiple(numerator, denominator) {
    return numerator % denominator === 0;
}

var date = process.argv[2];

if (!date) {
    console.log("Please provide a date in the format YYYY/MM/DD");
} else {
    calculateDayInYear(date);
}