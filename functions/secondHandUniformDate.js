exports.handler = function (event, context, callback) {





    callback(null, {
        statusCode: 200,
        headers: callbackHeaders,
        body: nextDate
    });
}

function getNextDate(){
    var dates = new Array();
    dates.push(new Date("2019-11-29"));
    dates.push(new Date("2019-12-20"));
    dates.push(new Date("2020-01-21"));
    dates.push(new Date("2020-02-28"));
    dates.push(new Date("2020-03-27"));
    dates.push(new Date("2020-05-22"));
    dates.push(new Date("2020-06-19"));
    dates.push(new Date("2020-07-10"));

    var nextDate = "Oh dear - I don't know!";
    var notFoundAndNotEnd = true;
    var index = 0;
    while (notFoundAndNotEnd) {

        var date = dates[i];
        if (date > new Date()) {
            nextDate = date;
            notFoundAndNotEnd = false;
        }
        i++;
        if (i > dates.length) {
            notFoundAndNotEnd = false;
        }
    }

    return nextDate;
}