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

class States extends Component {
  constructor(props) {
    super(props);
    this.state = {
      office: [],
      personOfficeInfo: []
    };
  }

  componentDidMount() {
    fetch(
      "https://www.googleapis.com/civicinfo/v2/representatives?address=line%20st.%2030032&includeOffices=true&key=AIzaSyB3cRW6zO8D3INc-NHDFA-0ck77gQAYpOU",
      { headers: { "Content-Type": "application/json; charset=utf-8" } }
    )
      .then(response => response.json())
      .then(results => {
        // console.log(Object.values(results[3]));
        let newResults = Object.values(results); // newResults will be json response array of the users civic representives at each elected level of government.
        console.log(newResults);
        let officesArray = newResults[3]; // officesArray equals the names of the office and info about that office for each level of elected government and its
        console.log(newResults[3]);
        console.log(newResults[4]);
        let personInfoArray = newResults[4]; // personInfoArray is the names and info for the person who currently has been elected to the seat of the newResults array.
        let masterArray = [];
        console.log(newResults[3][2].divisionId);
        officesArray.forEach(office => {
          if (office.divisionId === newResults[3][2].divisionId) {
            //   console.log(office.name);
            //   console.log(office.officialIndices);
            office.officialIndices.forEach(index => {
              // console.log(personInfoArray[index]);
              let personInfo = personInfoArray[index];
              let TwitterHandle;
              let personEmail = personInfo.emails || null; // if an elected official has an email address add that value to personEmail.
              let personPhoto = personInfo.photoUrl || null; //if an elected official has a photo url add that value to personPhoto
              let personUrl = personInfo.urls || null; // if an elected official has a website (personal or for the department) add that value to personUrl

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
              }
              console.log(office.name);
              let personOfficeInfo = {
                officeName: office.name,
                personName: personInfo.name,
                address: personInfo.address[0],
                party: personInfo.party,
                phoneNumber: personInfo.phones[0],
                twitter: TwitterHandle,
                email: personEmail,
                photo: personPhoto,
                url: personUrl
              };
              masterArray.push(personOfficeInfo);
            });
          }
        });

        this.setState({
          personOfficeInfo: masterArray
        });
      });

    // fetch(
    //   "https://www.googleapis.com/civicinfo/v2/elections?&key=AIzaSyB3cRW6zO8D3INc-NHDFA-0ck77gQAYpOU",
    //   { headers: { "Content-Type": "application/json; charset=utf-8" } }
    // )
    //   .then(response => response.json())
    //   .then(data => console.log(data));
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
                    <div>
                      <img style={{width: '13rem', height: '15rem'}} src={item.photo} alt="" />
                    </div>
                  ) : null}
                  {item.personName ? <div>{item.personName}</div> : null}
                  <br />
                  {item.officeName ? <div>{item.officeName}</div> : null}
                  <br />
                </CardTitle>
                <CardText>
                  {item.address.line1 ? <div>{item.address.line1}</div> : null}
                  {item.address.line2 ? <div>{item.address.line2}</div> : null}
                  {item.address.city ? <div>{item.address.city}</div> : null}
                  {item.address.state ? <div>{item.address.state}</div> : null}
                  {item.address.zip ? <div>{item.address.zip}</div> : null}
                  {item.party ? <div>{item.party}</div> : null}
                  {item.phoneNumber ? <div>{item.phoneNumber}</div> : null}
                  {item.url ? <a href={item.url}>{item.url}</a> : null}
                  {item.email ? (
                    <a href={"mailto:" + item.email}>{item.email}</a>
                  ) : null}
                  {item.twitter ? (
                    <div>
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
                    </div>
                  ) : null}
                  <div />
                </CardText>
              </ul>
              <MDBContainer>
                <MDBBtn size="lg" tag="a" floating social="email">
                  <MDBIcon icon="envelope" />
                </MDBBtn>
              </MDBContainer>
            </CardBody>
          </Card>
        </Col>
      );
    });

    return (
      // <div>
      //   <div>{officeNames}</div>
      <div className="Main">
        <p>{officeNames}</p>
      </div>
    );
  }
}

export default States;
