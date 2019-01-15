import { Timeline } from "react-twitter-widgets";
import React, { Component } from "react";


// import Styles from '../styles/National.css';


import { MDBIcon, MDBContainer, MDBBtn, MDBRow, MDBCol, MDBCollapse } from "mdbreact";

import { MDBCardImage, MDBCardTitle, MDBCardText, MDBCardFooter,  MDBTooltip } from "mdbreact";

import {
  Button,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
  Col
} from "mdbreact";

import {
  MDBCard,
  MDBCardUp,
  MDBCardBody,
  MDBAvatar,
  MDBRotatingCard
  } from "mdbreact";
import { spacing } from "material-ui/styles";


class Nationals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // flipped1: false,
      office: [],
      personOfficeInfo: []
    };
  }

  // handleFlipping = id => {
  //   const cardId = `flipped${id}`;
  //   this.setState({ [cardId]: !this.state[cardId] });
  // }
  

  componentDidMount() {
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
        // console.log(Object.values(results[3]));
        let newResults = Object.values(results); // newResults will be json response array of the users civic representives at each elected level of government.
        let officesArray = newResults[3]; // officesArray equals the names of the office and info about that office for each level of elected government and its
        console.log(newResults[3]);
        console.log(newResults[4]);
        let personInfoArray = newResults[4]; // personInfoArray is the names and info for the person who currently has been elected to the seat of the newResults array.
        let masterArray = [];
        // console.log(newResults[3][0].divisionId);

        officesArray.forEach(office => {
          if (office.divisionId === newResults[3][0].divisionId) {
            //   console.log(office.name);
            //   console.log(office.officialIndices);
            office.officialIndices.forEach(index => {
              // console.log(personInfoArray[index]);
              let personInfo = personInfoArray[index];
              //   console.log("hi");
              //   console.log(personInfoArray[index].channels);
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
              console.log(TwitterHandle);
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
    
    let officeNames = this.state.personOfficeInfo.map((item, index) => {
      
      return (
        <section className="text-center">
        <MDBRow>
        <MDBCol lg="3" md="10" className="mb-lg-0 mb-4">
          <MDBCard ecommerce>
              {item.photo ? (
                <MDBCardImage
                  cascade
                  top 
                  style={{width: '18.5rem', height: '18rem' }} src={item.photo} alt="" />
              ) : null}
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="text-muted">
                <h5>{item.personName ? <><a href={item.url}>{item.personName}</a></> : null}</h5>
              </a>
              <MDBCardTitle>
                <strong>
                {item.officeName ? <>{item.officeName}</> : null}
                </strong>
              </MDBCardTitle>
              <hr/>
              <MDBCardText>
                <strong> Address: </strong>
              {item.address.line1 ? <>{item.address.line1}</> : null}
             <br/>
             {item.address.line2 ? <>{item.address.line2}</> : null}
          <br/>
             {item.address.city ? <>{item.address.city}</> : null}
              <text> , </text>
             {item.address.state ? <>{item.address.state}</> : null}
          <text> </text>
             {item.address.zip ? <>{item.address.zip}</> : null}
             <br/>
             <strong>Party: </strong>
             {item.party ? <>{item.party}</> : null}
             <br/>
             <strong>Phone Number: </strong>
             {item.phoneNumber ? <>{item.phoneNumber}</> : null}
             <br/>
             <strong>Twitter: </strong>
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
              </MDBCardText>
              <MDBCardFooter className="px-1">
                  {item.email ? (
                    <span className="float-right">
                    <MDBBtn size="lg" tag="a" floating social="email" href={"mailto:" + item.email}>
                    <MDBIcon icon="envelope" />
                  </MDBBtn>
                  </span>
                  ) : null}
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
        </section>
      );
    });

    return (
      <div>
        <>{officeNames}</>
      </div>
    );
  }
}

export default Nationals;
