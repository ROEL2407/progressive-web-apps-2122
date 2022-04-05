# Frontend-Applications

### Table of contents
Assignment<br />
[Where is this repository for?](https://github.com/ROEL2407/Rijksmuseum_overzicht#where-is-this-repository-for)<br />
[What's the goal of this repository?](https://github.com/ROEL2407/Rijksmuseum_overzicht#whats-the-goal-of-this-repository)

Project<br />
[Usage](https://github.com/ROEL2407/Rijksmuseum_overzicht#usage)<br />
[Example images](https://github.com/ROEL2407/Rijksmuseum_overzicht#example-images)<br />
[Installation](https://github.com/ROEL2407/Rijksmuseum_overzicht#installation)<br />
[Online version](https://github.com/ROEL2407/Rijksmuseum_overzicht#online-version)<br />
[Activity Diagram](https://github.com/ROEL2407/Rijksmuseum_overzicht#activity-diagrams)<br />
[Rubric](https://github.com/ROEL2407/Rijksmuseum_overzicht#rubric)<br />
[Commits](https://github.com/ROEL2407/Rijksmuseum_overzicht#commits)<br />
[Resources](https://github.com/ROEL2407/Rijksmuseum_overzicht#resources)<br />
[License](https://github.com/ROEL2407/Rijksmuseum_overzicht#license)

## Where is this repository for?
This repository is for my lessons from the minor Web Development from the HvA. 

## What's the goal of this repository?
In this repository I've made a overview of art object from the Rijksmuseum. My goal of this repo is to learn JavaScript more and understand it a bit better.

## Usage
With this application you can look through some of the art objects Rijksmuseum has to offer. You can get more information about the pieces and make your own perspectives on it. (note: as of now the search function doesn't work).

## Example images
<img src="https://github.com/ROEL2407/Rijksmuseum_overzicht/blob/main/wiki_images/voorbeeld_overzicht.PNG">
<img src="https://github.com/ROEL2407/Rijksmuseum_overzicht/blob/main/wiki_images/voorbeeld_detail.PNG">

## Installation
Clone this repository to your own device:
```console
git clone https://github.com/ROEL2407/progressive-web-apps-2122.git
```
Then, in the terminal do:
```console
npm install
```
This project uses Nodemon. Because of hosting problems you need to change the npm start script from "node" to "nodemon"

## Online version
If you don't want to download everything, there's an online version for you [here](https://pwa-rijksmuseum-roel.herokuapp.com/).

## Client side vs Server side rendering
This project is based on my project for the subject Web App From Scratch. Rendering is loading the page. This can be done on your own device (client side) or on the server (server side). The biggest differences in my opinion is that server side loads the page faster and isn't effected by the option in the browser to disable JavaScript.

## Critical render path optimalisations
I also had time to take a look at optimalisations for the critical render path. 2 good optimalisations were not necessary for me as I don't have a situation where they are needed. These were as least as possible client side JavaScript as I don't have any aymore because I made it all server side JS. The other one was the css font-display for loading in extern fonts. I don't have use for that either as I don't load an external font.

As for the optimalisations I have done, I've made a list:
- Installed the Express Compression package
- Changed my images to responsive images
- Minifying my HTML and CSS

Before the changes my page loaded in 1.49s and had a score of 96 on performance in lighthouse.

After these changes, I have made the loading of the page 1.26 seconds and the score is 99.

## Activity Diagram(s)



## Commits
In this repo I will commit my work. To make this more visible for myself and others I've added little headers to the commit titles:
* Created = a file is created
* Updated = updated a file or piece of code
* Delete = deleted a file

## Resources
### Credits
* Our teachers at the minor Web Development.
* My fellow students who've helped me resolving some problems and learning me new types of tricks.
* Stackoverflow for giving me the answer that I could tweak or that helped me understand my problem in the code better.  
<hr />

## License
Usage is provided under the [MIT License](https://github.com/ROEL2407/Rijksmuseum_overzicht/blob/main/LICENSE). See LICENSE for the full details.
