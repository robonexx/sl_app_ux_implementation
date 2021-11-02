# This is an school assignment done in react

The assignment started as a group project at KYH stockholms frontend education. 
UX design process was to do user research, design, testing, and implementation.
Then solo part was the implementation

# The technologies I used

- I used vscode as my programming-editor https://code.visualstudio.com/
- React-router-dom, https://reactrouter.com/web/guides/quick-start
- framer-motion, https://www.framer.com/motion/
- mapbox, https://www.mapbox.com/
- css, (Cascading style sheets)
- styled-components, https://styled-components.com/
- localstorage https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- and json-server https://newbedev.com/javascript-how-to-install-json-server-in-vscode-code-example

# This is an implemantation of UX design in figma to an web app

The subject was sustainable travelling, and then trying to figure out an idea to a new app or an extension to
an existing one.
The goal, designing a simple prototype in Figma, one that everyone in the group could code later

# The idea 

So our idea was a extension to Greater Stockholm local traffic, adding bikes and scooters to compete with other companies who deliver the same.
Here you can see the prototype in figma...
https://www.figma.com/proto/rPnOvgfPEs23B0CQ9S0yLM/Prototype-Main-Group-2-H%C3%A5llbart-Resande?node-id=77%3A53&starting-point-node-id=77%3A53

# The work

We started as a group helping eachother and then continued solo.
This is my take on the app with changes we got from the prototype feedback.
I also done my own test with this solo prototype and got some more feedback from the users
Then after each feedback I tried to implement what I figured was needed

# to try this out

You can download the code and install the node packages, you need to get your own API key from mapbox thou
Clear your localstorage to see all the information some will dissapear after first time usage

Also if you want to check Receipts "köphistorik och kvitton" link/page you need to start a json-server on your editor
On vs code
 json-server --watch ./data/db.json starting on port 3000
 then open up a  new terminal and npm start the project on 3001

# Working and Clickable in the app (guide)

- Firstpage - read and click away modal or
in the navigator click tickets "biljetter"

- on the tickets page you can click "Enkelbiljett"

- On the confirm you ticketspage you can click on the adult "vuxen" counter and it will work (only choose on ticket thou)
Then click pay

- After You will be redirected and get a active ticket on the screen here you can
check ticket or
- Book a bike on the ticket

- On the book bike / scooters ( scooters not working) 
you can choose a bike, red means not available, green is available. choose the bike adress click book vehicle

- Then its just a counter and an option to finnish

THE END! (so far)

Other clickable stuff with json server the receipt page
Also a card on the sl ticket page

# Well thats about it

If you want to contact me here is my email robertwagar@gmail.com




