# ng2-ReadableTime
Readable Time Pipe for Angularjs2 - Converts sec to MM:SS

A simple pipe that takes a value in seconds and converts it to a MM:SS format.

Usage Example:

Download the file and place in /appname/app/pipes

In the js for the page where you wish to use the pipe:
```javascript
import {ReadableTime} from '../../pipes/readableTime';
```
In your @Page section add the pipe:
```javascript
@Page({
  templateUrl: 'build/pages/page1/page1.html',
  pipes: [ReadableTime]
})
```
In your HTML template:
```angularjs2
{{ valueInSeconds | readableTime }}
```
for a value of 90 seconds will display:

01:30

