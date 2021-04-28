import React, { Component } from "react";

class SearchRelation extends Component {
  handleChange(event) {
    console.log(event.target.value);
  }
  render() {
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: 1 }}>
              <h6
                style={{
                  fontFamily: "Roboto",
                  fontSize: "15px",
                  fontWeight: "900",
                  marginTop: "40px",
                  marginLeft: "480px",
                  fontColor: "white",
                }}
              >
                Type the Name of the person
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
                    fontSize: "15px",
                    fontWeight: "900",
                    marginTop: "40px",
                    marginLeft: "480px",
                  }}
                >
                  Type the Relation
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
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ flex: 1 }}></div>
                    <div>
                      <label> Family Members </label>
                      <input
                        type="textarea"
                        name="textValue"
                        onChange={this.handleChange}
                        style={{
                          width: "40%",
                          height: "35%",
                          fontFamily: "Roboto",
                          fontWeight: "500",
                          //marginTop: "44px",
                          marginLeft: "100px",
                          paddingRight: "100px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SearchRelation;
