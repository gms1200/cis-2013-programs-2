var floatAge,floatDays,intWeeks,floatMonths,intFortnights;
floatAge = parseFloat(prompt("Enter Age"));
floatDays = (floatAge * 365.25);
floatMonths = (floatAge * 12);
intWeeks = (floatDays / 7);
intFortnights = (floatDays / 14);
alert ("Age in Years is " + floatAge);
alert ("Age in Days is " + floatDays);
alert ("Age in Months is " + floatMonths);
alert ("Age in Weeks is " + intWeeks);
alert ("Age in Fortnights " + intFortnights);
