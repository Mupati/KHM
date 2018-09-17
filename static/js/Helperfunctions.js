'use strict'
class Helperfunctions extends Date{

    nextProg() {
        switch(super.getDay()){
            case 0:
                $("#prog").html("<span> Meeting: Sunday, Divine Service @ 7:00am </span>");
                break;
            case 1:
                $("#prog").html("<span> Meeting: Monday, Youth Service @ 5:30pm </span>");
                break;
            case 2:
                $("#prog").html("<span> Meeting: Tomorrow @ 5:30pm </span>");
                break;
            case 3:
                $("#prog").html("<span> Meeting: Wednesday, Bible Study @ 5:30pm </span>");
                break;
            case 4:
                $("#prog").html("<span> Meeting: Tomorrow @ 5:30pm </span>");
                break;
            case 5:
                $("#prog").html("<span> Meeting: Friday, Power Night Service @ 5:30pm </span>");
                break;
            case 6:
                $("#prog").html("<span> Meeting: Tomorrow @ 7:00am </span>");
                break;
        }
    } 
        
}
