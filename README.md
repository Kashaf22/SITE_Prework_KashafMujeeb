# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **KASHAF MUJEEB**

Time spent: **12** hours spent in total

Link to project: (LINK TO THE GAME WINDOW : https://aromatic-glib-dog.glitch.me) , (LINK TO THE CODE WINDOW: https://glitch.com/edit/#!/aromatic-glib-dog)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [X] Player only loses after 2 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [] List anything else that you can get done to improve the app!
- [X] Added a gif background image for better user graphics (the bird background image).
- [X] The background image changes when the user wins or loses the game, showing a gif corresponding to "You win" , or "You lost"
- [X] Player Strikes are shown and updated on the webpage everytime a player makes a mistake. A window alert is also given to the user. 
- [X] Changed the default cursor to grab cursor for better user experience.
- [X] Everytime a user clicks a button , a new gif image linked to that button pops up. 

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

![Gif Final](https://user-images.githubusercontent.com/89542741/160890000-12e2118d-9367-411b-a56f-28dbcda759ad.gif)
![Part2PreWork (1) (1)](https://user-images.githubusercontent.com/89542741/160893144-a6a9b95d-df25-41a1-91fb-973cfd2f24d5.gif)


![](gif3-link-here)
![](gif4-link-here)





## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I used the following websites for this pre-work: 

[Stack Overflow]: For modifying the frequency, Styling, and Syntax Help. 

[w3w schools]: For learning the syntax, adding background images to the Webpage, and learning how to send window alerts to the users. 

[MDN Web], [rapid tables] :  For picking the CSS colors for the background, and text 

[Java Point]: For learning how to change the layout of multiple buttons 

[Codegrepper] : How to align the text in center. 

[delft stack] : For learning how to show a variable from JavaScript in the html file. 

[Codepen.io] : To make functions that can show a new image when a specific button is clicked. 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I encountered the following challenges while creating this submission:  

I) I have never done HTML, CSS, and JavaScript before, so it was a little bit challenging for me to grasp the syntax of these languages. For instance, in CSS I did not know how to hide seven different images before the game is started by the user. Similarly, in JavaScript, I did not know how I can change the webpage background when a function is called. To tackle these syntax challenges, I used the w3w school's website to do their "Try it for yourself" small coding exercises. These exercises were short and super helpful for me to understand how the basic syntax of these languages work. I also used the Stack Overflow community whenever I was stuck on a syntax problem that could not be solved using w3s school’s website. 

II) I also faced a challenge with my code while calling the start and stop function in the HTML file. My start button was not getting replaced with the stop button upon clicking. I debugged for a while and then I referred to the CodePath pre-work snippets. I realized my code had some extra default lines in the HTML file that were not allowing my start button to be replaced by anything else. Once I removed those default lines, my code worked fine. 

III) I faced the hardest challenge while trying to link a unique image to every button. Initially, I could not figure out how to structure my function in a way that will show only one image at a time. I researched online and found a website called Codepen.io. They did something similar, so I took help from there and made five distinct functions for five different buttons and images in my JavaScript file. Once I was done with that, I was only trying to use the title of my image from my assets file to upload the image on the Webpage but after experimenting a bit on my own with the functions I realized the image would not load without a URL link. Lastly, I faced an issue while trying to call my image showing functions in the HTML code. I did not know how I can call two different functions on the onClick method. I was trying to write onClick twice and call a different function each time. That did not work. But then I found an online source that guided me that I can just use “onclick="FunctionA; FunctionB” to implement my logic.  

IV) Lastly, I faced an issue while I was trying to implement my additional feature. I was trying to replace the game button images with win/loose game images once my user wins or loses the game. I had a tough time trying to implement that because my webpage keeps showing the image that is linked to the last button my user pressed. I found an alternative way to implement my feature, every time winGame() or loseGame() function was called in my game, instead of my gameButton images, my background image got updated to win/lose game images. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I have quite a few questions about web-development after doing this pre-work. Firstly, I am curious to know how a website works that has more than one page. Does having more than one page mean we need separate HTML, CSS, and JavaScript files for each webpage or is there a way to write code for all pages of a website in one CSS, HTML, and JavaScript file. Secondly, Other than JavaScript what kind of other programming languages can I use for web-development and which platforms other than Glitch can be used to develop websites. Lastly, how does the role of a full-stack web developer is different from that of front-end or back-end developer?  

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on this project, then I would do the following things:  

I would write a function in JavaScript that would display a new message to the user every time they click a game button. For instance, if they are doing well in the game then every time, they get a cue right my game would display messages like “Well Done!”, “You are super close to winning” etc. In case, if a user is getting wrong cues, then my game would display encouraging messages like “Try it one more time! I know you can get it right etc.”  

I would also add a level bar to my game. The level bar would have various levels to my game and each level would correspond to a certain speed of the game. In that way, at the beginning of the game, my user can select at what speed they want to play the game. For instance, if my user selects level 1 then they would be playing at a slower speed as compared to someone who opted for level 2, 3, or so on. 

I would also try to add a feature where my user can put in their name before starting the game and once the game finishes their score will be saved with that name and it will be added to the user dashboard if they are in a high scoring category.  

I would also spend time trying to clean up my code. As of now, I have five functions in my JavaScript file to show images corresponding to game button. I would try to find a way to merge them into one so that my code looks more sophisticated and professional. 



## Interview Recording URL Link

[My 5-minute Interview Recording] (https://www.youtube.com/watch?v=ajYq4j72nL0)


## License

    Copyright [KASHAF MUJEEB]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
