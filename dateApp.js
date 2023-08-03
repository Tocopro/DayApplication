/*---------------------when the find button is clicked this function is called --------------------- */
function dateFinder()
{
    /*---------------------initializing the key value pairs --------------------- */
    let now_date = new Date();
    let day_of_week = {1:"Sunday", 2:"Monday", 3:"Tuesday", 4:"Wednesday", 5:"Thursday", 6:"Friday", 7:"Saturday"};
    let monthYear = {"january": 11, "february":12, "march":1, "april":2, "may":3, "june":4, "july":5,
    "august":6, "september":7, "october":8, "november":9, "december":10};
    //let month_of_year = {1:0, 2:3, 3:3, 4:6, 5:1, 6:4, 7:6, 8:2, 9:5, 10:0, 11:3, 12:5};
    //let monthsYear = ["january", "february", "march", "april", "may", "june", "july",
    //"august", "september", "october", "november", "december"];
    let year = now_date.getFullYear();
    year = year % 100;
/*---------------------the function will retrieve the text value from the input boxes and use a formula to calculate
the actual day the date fell in --------------------- */
   
  

    
    let month = document.getElementById("monthInput").value;
    month = month.toLowerCase();
    
    let day = document.getElementById("dayInput").value;
    
    let monthCode = monthYear[month];
    monthCode = parseInt(monthCode);
    day = parseInt(day);
    let findDay = (day + Math.floor((2.6 * monthCode) - 0.2) - (2 * 20) + year
     + Math.floor((year / 4) + (20 / 4))) % 7;
    console.log(day_of_week[findDay]);
   

      
    
  
    
   
   
    
    
}

function clearFields()
{
    document.getElementById("dayInput").value = "";
    document.getElementById("monthInput").value = "";
}