export const projects = {

    // ltt = Languages, Technologies, and Tools

    TRIPCO: {
        name: "TripCo",
        ltt: "Java, JavaScript, SQL, React",
        text: " Developed as a mobile, single page application, TripCo allows a user to build a trip " +
            "anywhere in the world. Similar to Google Maps, users can search a database for locations and " +
            "see their selections populate on a map. Users then have other tools such as optimizing their " +
            "trip or saving it for later. Using team-based agile software engineering practices and test " +
            "driven development, this application was developed alongside four other students over the " +
            "course of a semester."
    },

    AWGET: {
        name: "AWGET",
        ltt: "C, Sockets, TCP/UDP",
        text: "AWGET stands for Anonymous Web Get, which is a file downloader that hides your " +
            "identity. Similar to an ONION router or TOR network, AWGET traverses a series of " +
            "anonymization \"stepping-stones\". These stepping-stones act as both a server and client, " +
            "they either download the requested file or pass the request along to the next stone. " +
            "Once the last stone has been reached, the file is downloaded and is passed back through " +
            "the same series of steps. Thus, maintaining your anonymity."
    },

    TWITTER: {
        name: "Twitter Bot",
        ltt: "C++, Python, Tweepy, Raspberry Pi",
        text: "This bot runs an autonomous twitter account on a Raspberry Pi running a NOOBS operating system. The bot " +
            "continuously checks its own twitter account for new mentions. These tweets would specify a location for " +
            "the bot to obtain current weather conditions for. The bot would then use API calls to fetch the data and " +
            "tweet the current forecast information back to that twitter user. This project was designed and developed " +
            "alongside three other students over the course of a semester."
    },

    TRAIL: {
        name: "Trail and Weather Report",
        ltt: "Python, Beautiful Soup, Qt",
        text: "Stemming from my passion of trail running, this application reports the latest local trail" +
            " and weather conditions. Instead of checking multiple websites for this information, this " +
            "application combines them all into one easy to read graphical user interface. The trail " +
            "conditions are scrapped from the county website while the weather forecast is obtained with API " +
            "calls to NOAA. This helps to save me time and make sure I'm prepared in the morning before " +
            "I go run."
    },

    PORTFOLIO: {
        name: "Portfolio",
        ltt: "JavaScript, React, CSS, HTML",
        text: "That portfolio happens to be this website! After working on the TripCo project I felt " +
            "inspired to learn more about web design. I figured what better way to learn than by making my own " +
            "website. And what better website to make than one that expresses who I am! This was my " +
            "first personal web project so it took some time to figure everything out, but overall, I had a ton of fun " +
            "making it. Feel free to check out the source code on my github and let me know what you think."
    },

    LIBRARY: {
        name: "Library Database",
        ltt: "SQL, MariaDB, Java, JDBC",
        text: "This project allowed me to design and implement a database from scratch. The database " +
            "would accommodate the records of a library and its corresponding needs. Developed with SQL and utilizes " +
            "a series of base and relationship tables. This included a table of books, authors, publishers, members, " +
            "checkouts, and more. Tables were created and filled by parsing text documents and converting them into " +
            "dump files. A simple GUI was implemented to allow a user to query the database and manipulate their " +
            "corresponding results."
    },

}