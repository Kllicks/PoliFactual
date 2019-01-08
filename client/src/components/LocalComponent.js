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
    fetch(
      "https://www.googleapis.com/civicinfo/v2/representatives?address=1554%20line%20st.%2030032&includeOffices=true&key=AIzaSyB3cRW6zO8D3INc-NHDFA-0ck77gQAYpOU",
      { headers: { "Content-Type": "application/json; charset=utf-8" } }
    )
      .then(response => response.json())
      .then(results => {
        let newResults = Object.values(results); // newResults will be json response array of the users civic representives at each elected level of government.
        console.log(newResults);
        let officesArray = newResults[3]; // officesArray equals the names of the office and info about that office for each level of elected government and its
        console.log(officesArray);
        console.log(newResults[4]);
        let personInfoArray = newResults[4]; // personInfoArray is the names and info for the person who currently has been elected to the seat of the newResults array.
        let masterArray = [];
        // console.log(newResults[3][newResults[3].length - 1].divisionId);

        for (let i = 2; i < officesArray.length; i++) {
          let office = officesArray[i];
          office.officialIndices.forEach(index => {
            // console.log(personInfoArray[index]);
            let personInfo = personInfoArray[index];
            let TwitterHandle;
            // console.log(personInfo.address);
            if (personInfo.address) {
              if (personInfoArray[index].channels) {
                // console.log("fart machine");
                personInfo.channels.forEach(index2 => {
                  // console.log(personInfo.address[0]);
                  if (index2.type === "Twitter") {
                    // console.log("hey buddy!");
                    // console.log(index2.id);
                    let theirTwitterHandle = index2.id;
                    TwitterHandle = theirTwitterHandle;
                    return TwitterHandle;
                  }
                });
              }
              let personOfficeInfo = {
                officeName: office.name,
                personName: personInfo.name,
                address: personInfo.address[0] || undefined,
                party: personInfo.party,
                phoneNumber: personInfo.phones[0],
                twitter: TwitterHandle
              };
              masterArray.push(personOfficeInfo);
            }
          });
        }

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
          <Card style={{ width: "40rem" }}>
            {/* <CardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
              /> */}
            <CardBody className="h-100 w-100">
              <ul key={index}>
                <CardTitle>
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
      <div className="Main">
        <p>{officeNames}</p>
      </div>
    );
  }
}

export default Locals;
