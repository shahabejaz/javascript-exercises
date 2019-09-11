const leapYears = function(year) {
    let isLeapYear = false;
    if(year % 4 == 0) {
        isLeapYear = true;
        if(year % 100 == 0) {
            isLeapYear = false;
            if(year % 400 == 0) {
                isLeapYear = true;
            }
        }
    }
    return isLeapYear;
}

module.exports = leapYears
