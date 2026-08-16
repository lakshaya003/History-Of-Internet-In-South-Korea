# History of Internet in South Korea

An interactive educational website exploring the development and evolution of the Internet in South Korea.

## Overview

This project presents key aspects of South Korea's Internet development through an interactive web interface. It covers the country's Internet timeline, Internet Service Providers (ISPs), Internet usage, major milestones, and the roles of the government and citizens in the development of the country's Internet infrastructure.

The homepage uses dynamic JSON data rendered with Mustache.js to display the site's content and key milestones.

## Features

* Interactive homepage with an introduction to South Korea's Internet development
* Timeline section covering important developments
* Internet Service Provider (ISP) section
* Internet usage information
* Key milestone cards with additional information displayed through modals
* Responsive navigation using Bootstrap
* Dynamic homepage content loaded from `homepage.json`
* Mustache.js templating for dynamic content rendering
* Responsive layout for different screen sizes

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Bootstrap 4.5.2
* Mustache.js
* JSON

## Project Structure

```text
history-of-internet-in-south-korea/
│
├── index.html
├── timeline.html
├── isps.html
├── usage.html
├── homepage.json
├── assets/
│   └── images and other website assets
└── README.md
```

## How It Works

The homepage uses a Mustache template to dynamically generate its content.

When the page loads, JavaScript fetches the data from `homepage.json`, processes it using Mustache.js, and inserts the generated content into the homepage.

The website also uses Bootstrap for responsive layouts, navigation components, cards, buttons and modal windows.

## Running the Website Locally

Clone the repository:

```bash
git clone https://github.com/lakshaya003/History-Of-Internet-In-South-Korea.git
```

Navigate into the project:

```bash
cd History-Of-Internet-In-South-Korea
```

Start a local web server:
```bash
python3 -m http.server 8000
```

Open the website in your browser:
```bash
http://localhost:8000
```

## Project Purpose

This project was developed as part of my Computer Science studies to demonstrate web development, responsive user interface design, JavaScript-based dynamic content rendering, and the use of external web libraries.

## Skills Demonstrated

* Front-end web development
* Responsive UI design
* JavaScript programming
* JSON data handling
* Dynamic content rendering
* HTML/CSS development
* Bootstrap framework
* Mustache.js templating
* Organising and structuring a multi-page website
