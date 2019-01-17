# Polifactual

Polifactual is a web application that informs users on their local, state, and national legislative representatives.

By taking a users address and zipcode, our application can pull in information from the Google Civic Information API to display local, state, and national reps information for the user. National(of course) will be the same for every user.

## Built With

* [React](https://reactjs.org/docs/getting-started.html) -JavaScript library used to create an interactive UI
* [Bootstrap](https://getbootstrap.com/) -HTML, CSS, and JavaScript front-end component library used to create our front-end
* [Node.js](https://nodejs.org/en/about/) -JavaScript framework used for our back-end
* [Express.js](https://expressjs.com/) - Framework used in conjunction with Node.js to speak to our API/PostgreSQL database
* [PostrgreSQL](https://www.postgresql.org/) - Realational database used to store our user information
* [AWS](https://aws.amazon.com/) -Amazon web services used to deploy application

## Images
<img src= "/readme_images/TrelloShot.png" alt= "trello" height="500" width="350">

<img src= "/readme_images/screenshotRegister.png" alt= "Register mobile" height="500" width="350">

## Authors

* Isaac Fonseca
* Helen Harris
* Kyle Sekellick
* Brein Mizell

## License

Copyright 2018 Helen Harris, Isaac Fonseca, Kyle Sekellick, and Brien Mizell

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Future Edits

Adjust footer links/content
- Currently several links in the footer do not redirect to another page. Due to time constraints we have decided to adjust the links after demo day

Comment portions of code that need more clarification and clean up files
 - Several componenets found in the code are class components, when in fact they should be functional components.
 - Several imports in files are not used. Review if they will be used in the future ideas. If not, we will remove them. 
 - Replacing .then with Async and Await

## Acknowledgments

* Chris, Aylin, and Ian for the help debugging!

