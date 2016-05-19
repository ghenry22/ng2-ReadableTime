import {Injectable, Pipe} from 'angular2/core';

/*
An angular2 pipe.
pass a value in seconds in to get a formatted value in MM:SS returned.
Usage in template: {{ valueInSeconds | readableTime }}
*/

@Pipe({
  name: 'readableTime'
})
@Injectable()
export class ReadableTime {
  /*
    Takes a value in seconds and converts it to a string in MM:SS format
   */
  transform(value, args) {
    var _seconds = value;
    var _args = args;

    var day, format, hour, minute, month, week, year, currentSeconds, currentMinutes;
      _seconds = parseInt(_seconds, 10);
      minute = 60;
      hour = minute * 60;
      day = hour * 24;
      week = day * 7;
      year = day * 365;
      month = year / 12;

      if(isNaN(_seconds)){
        _seconds = 0;
      }
      if(_seconds > 59){
      currentMinutes = Math.floor(_seconds / minute);
      } else {
        currentMinutes = 0;
      }
      if (_seconds > 59){
      currentSeconds = (_seconds - (currentMinutes * 60));
      } else{
        currentSeconds = _seconds;
      }

      format = function(min, sec) {
        var paddedMin, paddedSec;
        if (sec < 10){
          paddedSec = "0"+sec;
        } else{
          paddedSec = sec;};
        if (min < 10){
          paddedMin = "0"+min;
        } else{
          paddedMin = min;
        }
        return ""+paddedMin+":"+paddedSec;
      };

      return format(currentMinutes, currentSeconds);
  }
}
