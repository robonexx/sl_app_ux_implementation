# __SL APP / BIKES__  _(& SCOOTERS )_

<img src="readme/preview.gif" alt="Project image" width="150">



----
</br>

#  __Description:__

This project is an school assignment at KYH Stockholm frontend education. 
The goal was to create a prototype (mvp) in groups using Figma or Adobe XD and then implement the UX design as a solo project to a working application / website.
You could choose which ever way you wanted to implement the design, with or without a frameworks.

</br>


---
</br>

# The idea 

So our idea was an extension to Stockholm Public Transport adding bikes and scooters to compete with other companies who deliver the same options.
Also the subject was sustainable travel, so either do a new idea to an app or work on an existing one. We choose an existing one.
Here you can see the prototype the group did in figma...
https://www.figma.com/proto/rPnOvgfPEs23B0CQ9S0yLM/Prototype-Main-Group-2-H%C3%A5llbart-Resande?node-id=77%3A53&starting-point-node-id=77%3A53

</br>

# The work

My own work I started with the feedback, change all the info we gathered as group but also the feedback I gathered when doing my own testing, some people tried out my webpage in progress, after that I started to work on making it look more like tha actual app. 
Then I got some feedback on the buttons and icons so I tried to change them a bit.
The icons we found on SL´s figma page, also the sizes to styling and fonts.

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

- Local storage not always getting the info after the payments page, a ticket should show up, if it dont re-try
- Button in modal dissapering in safari (sometimes)
- Localstorage not working on One plus mobile phones or edge
- Mapbox Not always rendering properly I had a lot of issues with mapbox
- it did not show up on surge when uploading the project
- had to use older version of react to get it to work
- some issues with renders and such
- icons using fill in  the svg to target color targets wrong paths (easy fix would be using react-icons instead)

</br>

---

</br>

# __THE END!__


## __My Socials__

- Github - [robonexx](https://github.com/robonexx)
- Instagram - [r.o.b_o.n.e](https://www.instagram.com/r.o.b_o.n.e/)
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





