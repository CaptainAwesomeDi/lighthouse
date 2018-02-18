var talkingCalendar = function(date) {
        // Your code here
        var year = '';
        var month= '' ;
        var day = '';
        for (var i = 0; i <= 3; i++) {
            year += date[i];
        }
        for (var i = 5; i <= 6; i++) {
            month += date[i];
        }
        for (var i = 8; i <= 9; i++) {
            day += date[i];
        }

        if (month === '01') {month = 'January ';} 
        else if (month === '02') { month = 'Febuary '; } 
        else if (month === '03') { month = 'March '; } 
        else if (month === '04') { month = 'April '; } 
        else if (month === '05') { month = 'May '; } 
        else if (month === '06') { month = 'June '; } 
        else if (month === '07') { month = 'July '; } 
        else if (month === '08') { month = 'August '; } 
        else if (month === '09') { month = 'September '; } 
        else if (month === '10') { month = 'October '; } 
        else if (month === '11') { month = 'November '; } 
        else {month = 'December ';}

        if (day === '01') {day = '1st, ';} 
        else if (day === '02') { day = '2nd, '; } 
        else if (day === '03') { day = '3rd, '; } 
        else if (day === '04') { day = '4th, '; } 
        else if (day === '05') { day = '5th, '; } 
        else if (day === '06') { day = '6th, '; } 
        else if (day === '07') { day = '7th, '; } 
        else if (day === '08') { day = '8th, '; } 
        else if (day === '09') { day = '9th, '; } 
        else if (day === '10') { day = '10th, '; } 
        else if (day === '11') { day = '11th, '; } 
        else if (day === '12') { day = '12th, '; } 
        else if (day === '13') { day = '13th, '; } 
        else if (day === '14') { day = '14th, '; } 
        else if (day === '15') { day = '15th, '; }
        else if (day === '16') { day = '16th, '; } 
        else if (day === '17') { day = '17th, '; } 
        else if (day === '18') { day = '18th, '; } 
        else if (day === '19') { day = '19th, '; } 
        else if (day === '20') { day = '20th, '; } 
        else if (day === '21') { day = '21st, '; } 
        else if (day === '22') { day = '22nd, '; } 
        else if (day === '23') { day = '23rd, '; } 
        else if (day === '24') { day = '24th, '; } 
        else if (day === '25') { day = '25th, '; }
        else if (day === '26') { day = '26th, '; }  
        else if (day === '27') { day = '27th, '; }  
        else if (day === '28') { day = '28th, '; }  
        else if (day === '29') { day = '29th, '; }  
        else if (day === '30') { day = '30th, '; }  
        else {day = '31st, ';}

        return (month + day + year);
      }

        console.log(talkingCalendar("2017/12/02"));
        console.log(talkingCalendar("2007/11/11"));
        console.log(talkingCalendar("1987/08/24"));