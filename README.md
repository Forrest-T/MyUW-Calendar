# MyUW Calendar Scraper (Beta)

Are you a UW student? Do you use a calendar program in your daily life? If so, then this might be the extension for you!

As the title suggests, this Google Chrome extension will download your course schedule from [MyUW](https://my.uw.edu) into a usable iCal format. This format is compatible with the majority of major calendar managers including Google Calendar, Apple Calendar, and Microsoft Outlook. It is a work in progress, and I appreciate any feedback, feature requests, and bug reports that the community provides.

## Prerequisites

The only prerequisite is the latest version of Google Chrome

## Installing

Download a copy of the repository to a local temporary folder

In the google chrome address bar, navigate to ```chrome://extensions```

Make sure to turn on ```Developer Mode``` in the top right corner

Click ```Load Unpacked``` in the top left corner

Navigate to the temporary folder from earlier and select ```myuw-calendar```

## Usage

Navigate to [MyUW](https://my.uw.edu)

Click the app icon, found either to the right of the address bar or in the dropdown menu

Click the ```Scrape!``` button in the dropdown menu

Import schedule.ics to your calendar program of choice!

## Versioning

**The current build a Beta build**. I do not have access to the rules of how MyUW handles data, so I can't guarantee that this tool will work for every schedule. I am able to validate that my schedule is correct, but I am only one data point out of thousands. **I need you(!)** to test this extension yourself, and let me know in the issues tab if something unexpected happens.

## Planned Features

- Automatically remove classes on school holidays. This information is provided through a separate interface, and not included in the first release
- Include teaching schedules for students that are also TAs
- Adding the extension to the chrome web store
- Adding final exam times!
- ??? (suggestions welcome)

## Credits

- [Forrest Timour](github.com/Forrest-T) (Me): Author
- [Travis Krause](https://github.com/nwcell): Created the JavaScript iCal file generator which I graciously borrowed


## License

This project is distributed under the MIT license - see the LICENSE.md file for details.
