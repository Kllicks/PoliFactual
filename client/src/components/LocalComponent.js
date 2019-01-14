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
    // let apiRequest1 = fetch(
    //   "https://www.googleapis.com/civicinfo/v2/representatives?address=1554%20line%20st.%2030032&includeOffices=true&key=git",
    //   { headers: { "Content-Type": "application/json; charset=utf-8" } }
    // ).then(response => response.json());

    // let apiRequest2 = fetch(
    //   "http://www.opensecrets.org/api/?method=getLegislators&id=NJ&",
    //   {
    //     headers: { apikey: "cd6516f049350cdb9ffc4264527af56e" }
    //   }
    // ).then(response => response.json());

    // let combinedData = { apiRequest1: {}, apiRequest2: {} };

    // Promise.all([apiRequest1, apiRequest2])
    //   .then(function(values) {
    //     combinedData["apiRequest1"] = values[0];
    //     combinedData["apiRequest2"] = values[1];
    //     return combinedData;
    //   })

    let streetaddress = sessionStorage.getItem("streetaddress");
    console.log(streetaddress);
    let zipcode = sessionStorage.getItem("zipcode");
    console.log(zipcode);

    const addressUrl = encodeURI(`${streetaddress} ${zipcode}`);
    console.log(addressUrl);

    fetch(
      `https://www.googleapis.com/civicinfo/v2/representatives?address=${addressUrl}&includeOffices=true&key=AIzaSyB3cRW6zO8D3INc-NHDFA-0ck77gQAYpOU`,
      { headers: { "Content-Type": "application/json; charset=utf-8" } }
    )
      .then(response => response.json())
      .then(results => {
        let newResults = Object.values(results); // newResults is the json response array of the users civic representives at each elected level of government.
        // let otherResults = Object.values(combinedData.apiRequest2); // otherResults will be json response array of the users civic representives at each elected level of government.
        console.log(newResults);
        // console.log(otherResults);
        let officesArray = newResults[3]; // officesArray equals the names of the office and info about that office for each level of elected government and its
        console.log(officesArray);
        console.log(officesArray[0].divisionId);
        console.log("hi");
        console.log(newResults[4]);
        let personInfoArray = newResults[4]; // personInfoArray is the names and info for the person who currently has been elected to the seat of the newResults array.
        let masterArray = [];
        // console.log(newResults[3][newResults[3].length - 1].divisionId);

        for (let i = 3; i < officesArray.length; i++) {
          let office = officesArray[i];
          office.officialIndices.forEach(index => {
            // console.log(personInfoArray[index]);
            console.log("what is happening?!?!");
            let personInfo = personInfoArray[index];
            let TwitterHandle;
            // console.log(personInfo.address);
            let personEmail = personInfo.emails || null; // if an elected official has an email address add that value to personEmail.
            let personPhoto = personInfo.photoUrl || null; //if an elected official has a photo url add that value to personPhoto
            let personUrl = personInfo.urls || null; // if an elected official has a website (personal or for the department) add that value to personUrl
            console.log(personInfo);
            console.log(personUrl);
            // if (personInfo.address) {
            if (personInfoArray[index].channels) {
              // console.log("fart machine");
              personInfo.channels.forEach(index2 => {
                if (index2.type === "Twitter") {
                  // console.log("hey buddy!");
                  // console.log(index2.id);
                  let theirTwitterHandle = index2.id;
                  TwitterHandle = theirTwitterHandle;
                  return TwitterHandle;
                }
              });

              let personOfficeInfo = {
                officeName: office.name,
                personName: personInfo.name,
                address: personInfo.address[0] || undefined,
                party: personInfo.party,
                phoneNumber: personInfo.phones[0],
                twitter: TwitterHandle,
                email: personEmail,
                photo: personPhoto,
                url: personUrl
              };
              masterArray.push(personOfficeInfo);
            }
          });
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
                      <img
                        style={{ width: "13rem", height: "15rem" }}
                        src={item.photo}
                        alt=""
                      />
                    </>
                  ) : null}
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
                  {item.address.line1 ? <>{item.address.line1}</> : null}
                  {item.address.line2 ? <>{item.address.line2}</> : null}
                  {item.address.city ? <>{item.address.city}</> : null}
                  {item.address.state ? <>{item.address.state}</> : null}
                  {item.address.zip ? <>{item.address.zip}</> : null}
                  {item.party ? <>{item.party}</> : null}
                  {item.phoneNumber ? <>{item.phoneNumber}</> : null}
                  {/* {item.url ? <a href={item.url}>{item.url}</a> : null} */}
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
                        onLoad={() => console.log("Timeline is loaded!")}
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
        <>{officeNames}</>
      </div>
    );
  }
}

export default Locals;
