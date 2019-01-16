import React, { Component } from "react";
import { Timeline } from "react-twitter-widgets";

import { MDBIcon, MDBContainer, MDBBtn } from "mdbreact";
import {
  Button,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
  Col
} from "mdbreact";

class Locals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      office: [],
      personOfficeInfo: []
    };
  }

  componentDidMount() {
    let streetaddress = sessionStorage.getItem("streetaddress"); // streetaddress equals the value that the useradded to the street address from the database.
    let city = sessionStorage.getItem("city");
    let state = sessionStorage.getItem("currentstate");
    let zipcode = sessionStorage.getItem("zipcode");

    const addressUrl = encodeURI(
      `${streetaddress} ${city} ${state} ${zipcode}`
    );
    console.log(addressUrl);

    fetch(
      `https://www.googleapis.com/civicinfo/v2/representatives?address=${addressUrl}&includeOffices=true&key=AIzaSyB3cRW6zO8D3INc-NHDFA-0ck77gQAYpOU`,
      { headers: { "Content-Type": "application/json; charset=utf-8" } }
    )
      .then(response => response.json())
      .then(results => {
        let newResults = Object.values(results); // newResults is the json response array of the users civic representives at each elected level of government.
        console.log(newResults);
        let ocdArray = newResults[2]; // ocdArray equals the names of the ocd divisions returned from the api.
        let officesArray = newResults[3]; // officesArray equals the names of the office and info about that office for each level of elected government and its.
        let personInfoArray = newResults[4]; // personInfoArray is the names and info for the person who currently has been elected to the seat of the newResults array.
        let countyKey = ""; // create a new variable countyKey as an empty sting to accept an upcoming assignment
        let councilKey = ""; // create a new variable councilKey as an empty sting to accept an upcoming assignment
        Object.keys(ocdArray).forEach(element => {
          // for each key in the ocd array make a new array with the value of that key under the following circumspances:
          // if (
          //   (element.includes("county") || element.includes("city")) && // if the key includes the value "county" or the key includes the value "city".
          //   !element.includes("council") // and the key does not inclyde "council"
          // ) {
          //   countyKey = element; // add the value of the key to the countyKey variable.
          // }
          console.log(element);
          if (element.includes("council")) {
            // if the key includes the value council...
            councilKey = element; // add the value of the key to the councilKey variable.
          } else if (element.includes("county") || element.includes("city")) {
            console.log("found a county or city");
            countyKey = element; // add the value of the key to the countyKey variable.
          }
        });
        console.log(councilKey);
        console.log(countyKey);
        console.log("those were the keysz");

        // let localOfficeName = ocdArray[councilKey].name; // this is the name of the office held by the key value that includes council from the above forEach/if statement.
        let indicesArray = [];
        if (councilKey) {
          indicesArray = ocdArray[councilKey].officeIndices;
        }
        // this array will hold the values of the officeIndices that has the value of councilKey from the ocdArray.
        indicesArray = indicesArray.concat(ocdArray[countyKey].officeIndices); // combine each officeIndices in the indices array.
        let wonderfulData = indicesArray.map(index => {
          // create a variable wonderfulData that will map through each index of the indicesArray, then...
          let positionData = { positionName: officesArray[index].name }; // position data will equal the value of name of the corresponding index of the officesArray.
          let positionIndices = officesArray[index].officialIndices; // positionIndices will equal the officalIndices value of the index of that officeArray.
          positionData.people = positionIndices.map(index2 => {
            // positionData.people will map through the values of positionIndices and then...
            return personInfoArray[index2]; //retun the corresponding index from the personInfoArray for each.
          });
          return positionData; // return the positionData || name of that index.
        });

        /////////////////////////////////////////////////
        //
        //  wonderfulData will return an array of objects
        //  each index of the object will have keys with the names of
        //    people: whos value will have another array of objects with info about that person such as address, email, phone number, etc.
        //    positionName: which will have a key value equal to the name of the position.
        //
        /////////////////////////////////////////////////

        console.log(wonderfulData);

        let masterArray = []; //create a new array called masterarray. setting it as an empty array awaiting assignment.

        for (let i = 0; i < wonderfulData.length; i++) {
          // for loop starting at "i" = 0 we will increment "i" by one each time we loop through as long as i less than or equal to the length of the wonderfulData array.
          let office = wonderfulData[i].positionName;
          let personInfo = wonderfulData[i].people[0]; // personInfo equals each index of personInfoArray.

          let TwitterHandle; // establish a TwitterHandle variable.

          let personAddress = personInfo.address ? personInfo.address[0] : null; //personAddress equals each personInfo.address array index 0 or null.
          let phoneNumber = personInfo.phones ? personInfo.phones[0] : null; //personAddress equals each personInfo.address array index 0 or null.

          let personEmail = personInfo.emails || null; // if an elected official has an email address add that value to personEmail.
          let personPhoto = personInfo.photoUrl || null; //if an elected official has a photo url add that value to personPhoto.
          let personUrl = personInfo.urls || null; // if an elected official has a website (personal or for the department) add that value to personUrl.

          wonderfulData.forEach(index => {
            // for each index in offices array.offical indices.

            if (personInfo.channels) {
              // if the index of personInfoArray has a .channels value.
              personInfo.channels.forEach(index2 => {
                // for each index of .channels
                if (index2.type === "Twitter") {
                  // if the key name of that index equals twitter.
                  let theirTwitterHandle = index2.id; //theirTwitterHandle equals the key value of twitter key.
                  TwitterHandle = theirTwitterHandle; // add the value of theirTwitterHandle to TwitterHandle.
                  return TwitterHandle; //return the value of TwitterHandle so it can be accesed outside of the forEach.
                } else {
                  let TwitterHandle = null; // if that index of the personInfoArray.channels does not have a twitter set their TwitterHandle to null.
                  return TwitterHandle; // return the value of TwitterHandle so it can be accesed outside of the forEach.
                }
              });
            }
          });
          // establish a variable named personOfficenfo as an object to hold values we want to used for state.
          let personOfficeInfo = {
            officeName: office,
            personName: personInfo.name,
            address: personAddress,
            officeIndices: office.officialIndices,
            party: personInfo.party,
            phoneNumber: phoneNumber,
            twitter: TwitterHandle,
            email: personEmail,
            photo: personPhoto,
            url: personUrl
          };
          masterArray.push(personOfficeInfo); // push each instance in personOfficeInfo info into masterArray.
        }

        this.setState({
          personOfficeInfo: masterArray
        });
      })
      .catch(function(error) {
        console.log("Looks like there was a problem: \n", error);
      });
  }

  render() {
    let officeNames = this.state.personOfficeInfo.map(function(item, index) {
      // map through the item and index of each item inthis.state.personofficeinfo.
      return (
        <Col>
          <Card style={{ width: "20rem" }}>
            {/* <CardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
              /> */}
            <CardBody className="h-100 w-100">
              <ul key={index}>
                <CardTitle>
                  {item.photo ? (
                    <>
                      <img style={{ width: "13rem", height: "15rem" }} alt="" />
                    </>
                  ) : null}

                  <br />
                  {item.personName ? (
                    <>
                      <a href={item.url}>{item.personName}</a>
                    </>
                  ) : null}
                  <br />
                  {item.officeName ? <>{item.officeName}</> : null}
                  <br />
                </CardTitle>
                <CardText>
                  {item.address ? (
                    <>
                      ({item.address.line1 ? <>{item.address.line1}</> : null}
                      {item.address.line2 ? <>{item.address.line2}</> : null}
                      {item.address.city ? <>{item.address.city}</> : null}
                      {item.address.state ? <>{item.address.state}</> : null}
                      {item.address.zip ? <>{item.address.zip}</> : null})
                    </>
                  ) : null}
                  {item.party && item.party !== "Unknown" ? (
                    <>
                      <>{item.party}</>
                    </>
                  ) : null}
                  {item.phoneNumber ? <>{item.phoneNumber}</> : null}
                  {item.url ? <a href={item.url}>{item.url}</a> : null}
                  {item.twitter ? (
                    <>
                      <Timeline
                        dataSource={{
                          sourceType: "profile",
                          screenName: item.twitter
                        }}
                        options={{
                          username: item.twitter,
                          height: "400",
                          width: "60%"
                        }}
                      />
                    </>
                  ) : null}
                </CardText>
              </ul>
              <MDBContainer>
                {item.email ? (
                  <MDBBtn
                    size="lg"
                    tag="a"
                    floating
                    social="email"
                    href={"mailto:" + item.email}
                  >
                    <MDBIcon icon="envelope" />
                  </MDBBtn>
                ) : null}
              </MDBContainer>
            </CardBody>
          </Card>
        </Col>
      );
    });
    return (
      <div className="Main">
      <br></br>
        <strong><h1>Local Represntatives</h1></strong>
        <>{officeNames}</>
      </div>
    );
  }
}

export default Locals;
