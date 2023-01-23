# __SL APP / BIKES__  _(& SCOOTERS )_

<img src="readme/preview.gif" alt="Project image" width="150">



----
</br>

#  __Description:__

This project was an school assignment at KYH Stockholm frontend education. 
The goal was to create a prototype (mvp) in groups using Figma or Adobe XD and then implement the UX design as a solo project to a working application / website.
So this is my solo take to the prototype
You could choose which ever way you wanted to implement the design, with or without a frameworks.

</br>


---
</br>

# The idea 

The idea was an extension to Stockholm Public Transport adding bikes and scooters to compete with other companies who deliver the same options.
Also the subject was sustainable travel, so either do a new idea to an app or work on an existing one. We choose an existing one.
Here you can see the prototype the group did in figma...
https://www.figma.com/proto/rPnOvgfPEs23B0CQ9S0yLM/Prototype-Main-Group-2-H%C3%A5llbart-Resande?node-id=77%3A53&starting-point-node-id=77%3A53

</br>

# The work (Implementation)

I started with the feedback, we did a user research on the figma prototype, next up decided which framework to use, how to create it, keep the sl app design and not go to far off the original design, that is used today by SL. 
- React became the choice of framework, to keep learning and become better at the sametime as this project was going forward.

I had some issues during my process to keep the design and to make it look the same as the actual app. 

I decide to keep the app fram instead of also building a website desing, because there is non in sl app, website is separate. 

I then made all changes after the info we gathered as group but also the feedback I gathered when doing my own testing, some people tried out my webpage in progress, after that I started to work on making it look more like tha actual app. 
Feedback on the buttons and icons so made the changes.

The icons we found on SL´s figma page, also the sizes to styling and fonts.

I stumbled on some issues with the responsivness and it could be better, i think I would use mixins in coming projects to make it easier with resposivness instead of a bunch of media queries. 

This is only for tablet and phone, only tested on Samsung 10 and Ipad pro, also on desktop, developer tools.

I learned a lot during my period with this project and what to use in the future when sorking with react. 

</br>

---

# __Languages and Tools:__
[<img align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />][vscode]
[<img align="left" alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />][react-js]
[<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />][html]
[<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />][css]
[<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />][javascript]
</br>

- [react-router-dom]
- [mapbox]  
- [framer-motion]
- [styled-components]
- [json-server]
- ☕

</br>

---
</br>

##  __Preview__


<img src="readme/firstpage.jpg" alt="Project image" width="150"> &nbsp; &nbsp;
<img src="readme/ticketspage.jpg" alt="Project image" width="150"> &nbsp; &nbsp;
<img src="readme/confirming_tickets.jpg" alt="Project image" width="150"> &nbsp; &nbsp;
<img src="readme/payment.jpg" alt="Project image" width="150"> &nbsp; &nbsp;
<img src="readme/validticket.jpg" alt="Project image" width="150"> &nbsp; &nbsp;
<img src="readme/choose_a_vechicle.jpg" alt="Project image" width="150"> &nbsp; &nbsp;
<img src="readme/ongoing_ride.jpg" alt="Project image" width="150"> &nbsp; &nbsp;

</br>

---
</br>


# __To try this out__

(works best on chrome, firefox and samsung mobiles)

You can download or clone the code and install the node packages
Get your own API key from mapbox
Clear your localstorage to see all the information (some will dissapear after first time usage)
(does not work on edge or one plus phones)

Also if you want to check Receipts "köphistorik och kvitton" link/page 
- Start a json-server
(In vs code)
json-server --watch ./data/db.json --port 8000

 then open up a  new terminal and npm start the project on 3000

 </br>
 
 ---

# Working and Clickable in the app (guide)

- Firstpage - read and click away modal or
in the navigator click tickets "biljetter"

- On the tickets page you can click "Enkelbiljett"

- On the confirm you ticketspage you can click on the adult "vuxen" counter and it will work (only choose on ticket thou)
Then click pay

- After You will be redirected and get a active ticket on the screen here you can
check ticket or
- Book a bike on the ticket

- On the book bike / scooters ( scooters not working) 
you can choose a bike, red means not available, green is available. choose the bike adress click book vehicle
Try out medborgarplatsen to see not available, choosing the on:
Katarinavägen 2 A, 116 45 Stockholm,
T-bana: Slussen 

will give the right flow on this prototype/ project

- Then its just a counter and an option to finnish

- When clicking the "Tack och hej" the localstorage will be cleared

Other clickable stuff with json server the receipt page
Also a card on the sl ticket page

</br>

---

# Issues

- Local storage not always getting the info after the payments page, a ticket should show up, if it don't re-try
- Button in modal dissapering in safari (sometimes)?
- Localstorage not working on One plus mobile phones or edge
- Mapbox Not always rendering properly I had a lot of issues with mapbox
- it did not show up on surge when uploading the project
- had to use older version of react to get it to work
- some issues with renders and such
- icons using fill in  the svg to target color targets wrong paths (easy fix would be using react-icons instead)

</br>

---

# - For KYH - 
# The process, my choices, issues i stumbled upon and reflection

When I started with the project my first goal was to decide if I wanted to do this project in pure vanilla js, html, css or React, I decided to continue working in react to learn more and because I started to feel more comfortable using states and the libraries. 

Because this project was supposed to be an extent to SL app I wanted to  make i look like the app, so I also did research by looking at their figma and also the webpage of SL, androind and apple apps, all designs was a bit different wich made it hard to choose wich one to follow, so I kind of merged my vision in to one. 

I then choose to use CSS for styling wich brought its own complications due to it overriding code, if I would have chosen SASS or Styled components I could have made it a bit easier. Wich I will do in the future of my projects. 

I also stumbled upon problems when I tried to do the counters for the tickets, I think I have to learn reducer and context for this part to make it easier, I did a pre ticket function but I diden implement the fully working function on this one. 

My goal was to resemle their app wich I think was hard due to the reason it was different.
It would have been easier if I would have had the figma design for the actual app and not future layouts or icons only. 
But following our ideas from our group work I think I succeeded with some of the design we and reading all the feedback and desing we had planned before cutting stuff out. It was a bit hard to get all the values on their design for me from my phone watching their app, there might be a tool for this but I havent used one yet. 

I hade some trouble with the responsivness on safari, and I think If I would have used mixins in sass instead of mediaqueries with css I might have got this to work better, or used a responsivness library. 

Overall I tried my best to make this implementation and I learned a lot during the process, everything from trying to make my own buttons look like the apps, to using mapbox wich was a struggle to get it to work when pushing it up surge. 

</br>

---

</br>

# __THE END!__


## __My Socials__

- Github - [robonexx](https://github.com/robonexx)
- Linkedin - [Robert Wägar](https://www.linkedin.com/in/robert-w%C3%A4gar-1b4661139/)
- Portfolio - "In the works"

</br>

--- 
</br>

## __Email__
- robertwagar@gmail.com

</br>
---
</br>


[vscode]: https://code.visualstudio.com/
[react-js]: https://reactjs.org/ 
[javascript]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[react-router-dom]: https://reactrouter.com/web/guides/quick-start
[framer-motion]: https://www.framer.com/motion/
[mapbox]: https://www.mapbox.com/
[html]: https://www.w3schools.com/html/
[css]: https://www.w3.org/Style/CSS/Overview.en.html
[styled-components]: https://styled-components.com/
[localstorage]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
[json-server]: https://newbedev.com/javascript-how-to-install-json-server-in-vscode-code-example





