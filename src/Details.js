import React, { Component } from "react";
import picture from "./pic4.jpg";
class Details extends Component {
  state = {
    members: 0,
  };
  constructor(props) {
    super(props);
    this.incmember = this.incmember.bind(this);
  }

  incmember() {
    this.setState({ members: this.state.members + 1 });
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${picture})`,
          width: "100%",
          height: "100%",
        }}
      >
        <br></br>
        <br></br>
        <div style={{ width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 1 }}>
                <h6
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "30px",
                    fontWeight: "900",
                    marginTop: "40px",
                    marginLeft: "480px",
                    fontColor: "white",
                  }}
                >
                  Name
                </h6>
              </div>
              <div style={{ flex: 1 }}>
                <input
                  className="member-input"
                  style={{
                    width: "40%",
                    height: "35%",
                    fontFamily: "Roboto",
                    fontWeight: "500",
                    marginTop: "44px",
                  }}
                />
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ flex: 1 }}>
                  <h6
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "30px",
                      fontWeight: "900",
                      marginTop: "40px",
                      marginLeft: "480px",
                    }}
                  >
                    Relation
                  </h6>
                </div>
                <div style={{ flex: 1 }}>
                  <input
                    className="member-input"
                    style={{
                      width: "40%",
                      height: "35%",
                      fontFamily: "Roboto",
                      fontWeight: "500",
                      marginTop: "44px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ flex: 1 }}>
                  <h6
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "30px",
                      fontWeight: "900",
                      marginTop: "40px",
                      marginLeft: "480px",
                    }}
                  >
                    Relative Name
                  </h6>
                </div>
                <div style={{ flex: 1 }}>
                  <input
                    className="member-input"
                    style={{
                      width: "40%",
                      height: "25%",
                      fontFamily: "Roboto",
                      fontWeight: "500",
                      marginTop: "44px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            style={{
              marginLeft: "650px",
              height: "40px",
              width: "120px",
              borderRadius: "54px",
            }}
            onClick={this.incmember}
          >
            Add Member
          </button>

          <div
            style={{
              marginLeft: "650px",
              textAlign: "center",
              fontSize: "20px",
              paddingBottom: "20px",
              paddingRight: "20px",
            }}
          >
            Members Added: {this.state.members}
          </div>
        </div>
      </div>
    );
  }
}
export default Details;
