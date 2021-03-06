// ics generator, created by Travis Krause - https://github.com/nwcell/ics.js
let import1 = 'var saveAs=saveAs||function(e){"use strict";if(typeof e==="undefined"||typeof navigator!=="undefined"&&/MSIE [1-9]\\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,a=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},i=/constructor/i.test(e.HTMLElement)||e.safari,f=/CriOS\\/[\\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},s="application/octet-stream",d=1e3*40,c=function(e){var t=function(){if(typeof e==="string"){n().revokeObjectURL(e)}else{e.remove()}};setTimeout(t,d)},l=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var o=e["on"+t[r]];if(typeof o==="function"){try{o.call(e,n||e)}catch(a){u(a)}}}},p=function(e){if(/^\\s*(?:text\\/\\S*|application\\/xml|\\S*\\/\\S*\\+xml)\\s*;.*charset\\s*=\\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279),e],{type:e.type})}return e},v=function(t,u,d){if(!d){t=p(t)}var v=this,w=t.type,m=w===s,y,h=function(){l(v,"writestart progress write writeend".split(" "))},S=function(){if((f||m&&i)&&e.FileReader){var r=new FileReader;r.onloadend=function(){var t=f?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;");var n=e.open(t,"_blank");if(!n)e.location.href=t;t=undefined;v.readyState=v.DONE;h()};r.readAsDataURL(t);v.readyState=v.INIT;return}if(!y){y=n().createObjectURL(t)}if(m){e.location.href=y}else{var o=e.open(y,"_blank");if(!o){e.location.href=y}}v.readyState=v.DONE;h();c(y)};v.readyState=v.INIT;if(o){y=n().createObjectURL(t);setTimeout(function(){r.href=y;r.download=u;a(r);h();c(y);v.readyState=v.DONE});return}S()},w=v.prototype,m=function(e,t,n){return new v(e,t||e.name||"download",n)};if(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob){return function(e,t,n){t=t||e.name||"download";if(!n){e=p(e)}return navigator.msSaveOrOpenBlob(e,t)}}w.abort=function(){};w.readyState=w.INIT=0;w.WRITING=1;w.DONE=2;w.error=w.onwritestart=w.onprogress=w.onwrite=w.onabort=w.onerror=w.onwriteend=null;return m}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content);if(typeof module!=="undefined"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!=="undefined"&&define!==null&&define.amd!==null){define("FileSaver.js",function(){return saveAs})}';
let import2 = 'var ics=function(e,t){"use strict";{if(!(navigator.userAgent.indexOf("MSIE")>-1&&-1==navigator.userAgent.indexOf("MSIE 10"))){void 0===e&&(e="default"),void 0===t&&(t="Calendar");var r=-1!==navigator.appVersion.indexOf("Win")?"\\r\\n":"\\n",n=[],i=["BEGIN:VCALENDAR","PRODID:"+t,"VERSION:2.0"].join(r),o=r+"END:VCALENDAR",a=["SU","MO","TU","WE","TH","FR","SA"];return{events:function(){return n},calendar:function(){return i+r+n.join(r)+o},addEvent:function(t,i,o,l,u,s){if(void 0===t||void 0===i||void 0===o||void 0===l||void 0===u)return!1;if(s&&!s.RRULE){if("YEARLY"!==s.freq&&"MONTHLY"!==s.freq&&"WEEKLY"!==s.freq&&"DAILY"!==s.freq)throw"Recurrence rrule frequency must be provided and be one of the following: \'YEARLY\', \'MONTHLY\', \'WEEKLY\', or \'DAILY\'";if(s.until&&isNaN(Date.parse(s.until)))throw"Recurrence rrule \'until\' must be a valid date string";if(s.interval&&isNaN(parseInt(s.interval)))throw"Recurrence rrule \'interval\' must be an integer";if(s.count&&isNaN(parseInt(s.count)))throw"Recurrence rrule \'count\' must be an integer";if(void 0!==s.byday){if("[object Array]"!==Object.prototype.toString.call(s.byday))throw"Recurrence rrule \'byday\' must be an array";if(s.byday.length>7)throw"Recurrence rrule \'byday\' array must not be longer than the 7 days in a week";s.byday=s.byday.filter(function(e,t){return s.byday.indexOf(e)==t});for(var c in s.byday)if(a.indexOf(s.byday[c])<0)throw"Recurrence rrule \'byday\' values must include only the following: \'SU\', \'MO\', \'TU\', \'WE\', \'TH\', \'FR\', \'SA\'"}}var g=new Date(l),d=new Date(u),f=new Date,S=("0000"+g.getFullYear().toString()).slice(-4),E=("00"+(g.getMonth()+1).toString()).slice(-2),v=("00"+g.getDate().toString()).slice(-2),y=("00"+g.getHours().toString()).slice(-2),A=("00"+g.getMinutes().toString()).slice(-2),T=("00"+g.getSeconds().toString()).slice(-2),b=("0000"+d.getFullYear().toString()).slice(-4),D=("00"+(d.getMonth()+1).toString()).slice(-2),N=("00"+d.getDate().toString()).slice(-2),h=("00"+d.getHours().toString()).slice(-2),I=("00"+d.getMinutes().toString()).slice(-2),R=("00"+d.getMinutes().toString()).slice(-2),M=("0000"+f.getFullYear().toString()).slice(-4),w=("00"+(f.getMonth()+1).toString()).slice(-2),L=("00"+f.getDate().toString()).slice(-2),O=("00"+f.getHours().toString()).slice(-2),p=("00"+f.getMinutes().toString()).slice(-2),Y=("00"+f.getMinutes().toString()).slice(-2),U="",V="";y+A+T+h+I+R!=0&&(U="T"+y+A+T,V="T"+h+I+R);var B,C=S+E+v+U,j=b+D+N+V,m=M+w+L+("T"+O+p+Y);if(s)if(s.RRULE)B=s.RRULE;else{if(B="RRULE:FREQ="+s.freq,s.until){var x=new Date(Date.parse(s.until)).toISOString();B+=";UNTIL="+x.substring(0,x.length-13).replace(/[-]/g,"")+"000000Z"}s.interval&&(B+=";INTERVAL="+s.interval),s.count&&(B+=";COUNT="+s.count),s.byday&&s.byday.length>0&&(B+=";BYDAY="+s.byday.join(","))}(new Date).toISOString();var H=["BEGIN:VEVENT","UID:"+n.length+"@"+e,"CLASS:PUBLIC","DESCRIPTION:"+i,"DTSTAMP;VALUE=DATE-TIME:"+m,"DTSTART;VALUE=DATE-TIME:"+C,"DTEND;VALUE=DATE-TIME:"+j,"LOCATION:"+o,"SUMMARY;LANGUAGE=en-us:"+t,"TRANSP:TRANSPARENT","END:VEVENT"];return B&&H.splice(4,0,B),H=H.join(r),n.push(H),H},download:function(e,t){if(n.length<1)return!1;t=void 0!==t?t:".ics",e=void 0!==e?e:"calendar";var a,l=i+r+n.join(r)+o;if(-1===navigator.userAgent.indexOf("MSIE 10"))a=new Blob([l]);else{var u=new BlobBuilder;u.append(l),a=u.getBlob("text/x-vCalendar;charset="+document.characterSet)}return saveAs(a,e+t),l},build:function(){return!(n.length<1)&&i+r+n.join(r)+o}}}console.log("Unsupported Browser")}};';

/* Parse the WSData object and use it to create an iCal file */
function scraper() {
    if (typeof WSData != 'object') {
        console.error('Unable to access data!');
        console.log('Are you sure you\re on the right page?');
        return;
    }

    let days_long = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
    let days_short = ['SU','MO','TU','WE','TH','FR','SA'];

    // return a list of days that classes are not held, and add the holidays to the calendar
    function parseHolidays(input, cal) {
        let holidays = [];
        for (event of input) {
            // if the event cancels class
            if (event.myuw_categories['breaks'] === true) {
                // date objects for exclusion later
                let date_start = new Date(event.start+'T12:00:00-07:00');
                let date_end = new Date(event.end+'T12:00:00-07:00');
                // simple date string for signaling "all-day" events
                let start = event.start.replace(/([0-9]+)-([0-9]+)-([0-9]+)/,"$2/$3/$1");
                let end = event.start.replace(/([0-9]+)-([0-9]+)-([0-9]+)/,"$2/$3/$1");
                cal.addEvent(event.summary,'holiday',"",start,end);
                // handle multi-day holidays one day at a time
                while (date_start <= date_end) {
                    holidays.push(date_start);
                    date_start = new Date(date_start);
                    date_start.setDate(date_start.getDate()+1);
                }
            }
        }
        return holidays;
    }

    // extract the date (not time) from a JS Date object in ICal-readable format
    function toIcalDate(date) {
        return date.toISOString().substring(0,10).replace(/-/g,'')+'T000000Z';
    }

    // use the ICal EXDATE field to exclude holidays
    function exclude(holidays, begin) {
        // Google Calendar requires that we match the time exactly
        let format = 'T'+('00'+begin.getHours()).slice(-2)
                     +('00'+begin.getMinutes()).slice(-2)
                     +('00'+begin.getSeconds()).slice(-2);
        let ret = 'EXDATE;VALUE=DATE-TIME:';
        for (date of holidays)
            ret += (ret.charAt(ret.length-1)===':'?'':',')
                   +toIcalDate(date).substring(0,8)
                   +format;
        return ret;
    }

    function parseSection(sec, cal, courses, holidays) {
        if (sec.meetings[0].no_meeting === true)
            return;
        let subject = sec.curriculum_abbr;
        if (typeof sec.course_number === 'string')
            subject += ' ' + sec.course_number;
        if (typeof sec.section_id === 'string')
            subject += ' ' + sec.section_id;
        let description = sec.course_title;
        let place = '';
        if (typeof sec.meetings[0].building === 'string')
            place += sec.meetings[0].building + ' ';
        if (typeof sec.meetings[0].room === 'string')
            place += sec.meetings[0].room + ' ';
                                                        // account for time zones
        let begin = new Date(courses.term.first_day_quarter+'T12:00:00-07:00');
        // advance the date to the first day this particular class meets
        for (let i = 0; i < 7; i++) {
            if (sec.meetings[0].meeting_days[days_long[begin.getDay()]] !== true)
                begin.setDate(begin.getDate() + 1);
        }
        begin.setHours(sec.meetings[0].start_time.split(':')[0]);
        begin.setMinutes(sec.meetings[0].start_time.split(':')[1]);
        let end = new Date(begin.toString());
        end.setHours(sec.meetings[0].end_time.split(':')[0]);
        end.setMinutes(sec.meetings[0].end_time.split(':')[1]);
        let last_day = new Date(courses.term.last_day_instruction+'T12:00:00-07:00');
        // +1 offset because DTEND is the first date it DOESN't happen,
        // while MyUW reports the last day it DOES happen
        last_day.setDate(last_day.getDate()+1);
        let last_day_str = toIcalDate(last_day);
        let rrule_str = 'rrule:FREQ=WEEKLY;UNTIL=' +last_day_str +';INTERVAL=1;' +'BYDAY=';
        for (let i = 0; i < 7; i++) {
            if (sec.meetings[0].meeting_days[days_long[i]] === true) {
                rrule_str += rrule_str.charAt(rrule_str.length-1) == '='?'':',';
                rrule_str += days_short[i];
            }
        }
        rrule = { 'RRULE' : rrule_str+'\n'+exclude(holidays, begin) };
        cal.addEvent(subject, description, place, begin.toString(), end.toString(), rrule);
    }

    // callback to fetch calendar events from WSData, which are not always loaded by default
    WSData.fetch_academic_calendar_events(function(){
        let cal = ics();
        let courses = WSData.current_course_data();
        let holidays = parseHolidays(WSData.academic_calendar_data(), cal);
        courses.sections.forEach(section => { parseSection(section,cal,courses, holidays); });
        cal.download('schedule');
        console.log(cal.calendar());

        // TODO: teaching schedule
        let courses_teaching = WSData.current_instructed_course_data();
        // TODO: final exam times
    });
}

/* Insert 'content' as a script into the DOM */
function appendScript(content) {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.textContent = content;
    document.querySelector('body').appendChild(script);
}

// avoid Chrome's "isolated worlds" by creating scripts to inject directly into the DOM.
// (Otherwise we don't have access to WSData)
appendScript(import1);
appendScript(import2);
appendScript('('+scraper.toString()+')();');


console.log('done');
