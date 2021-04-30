import React, { Component } from "react";
import AcademyNavbar from "./components/AcademyNavbar";
import SmallFooter from "./components/Smallfooter";
import "./CTFPrivateAccountSettingsPage.css";

class CTFPrivateAccountSettingsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: true,
    };
  }
  handleButton(bool) {
    this.setState({ profile: bool });
  }

  render() {
    return (
      <>
        <AcademyNavbar />
        <div className="ctfprivatesettings-maincontainer">
          <div className="ctfprivatesettings-container">
            <div className="ctfprivatesettings-container-1">
              <p className="ctfprivatesettings-heading">Account</p>
              <p
                className={
                  this.state.profile
                    ? "ctfprivatesettings-textbutton-active"
                    : "ctfprivatesettings-textbutton"
                }
                onClick={() => this.handleButton(true)}
              >
                Profile
              </p>
              <p
                className={
                  this.state.profile
                    ? "ctfprivatesettings-textbutton"
                    : "ctfprivatesettings-textbutton-active"
                }
                onClick={() => this.handleButton(false)}
              >
                Password
              </p>
            </div>
            <div className="ctfprivatesettings-container-2">
              {this.state.profile === true && (
                <div className="ctfprivatesettings-edit-container">
                  <p className="ctfprivatesettings-mainheading">
                    Edit Your Profile{" "}
                  </p>
                  <p className="ctfprivatesettings-headingdes">
                    lorem ipsum dollar {"&"} loremnfdnnfdnkn loewm fjipsum
                    follar {"&"} dollar ewnh
                  </p>
                  <div className="ctfprivatesettings-inputcontainer">
                    <p>Username</p>

                    <input id="usernameinput" type="text" />
                  </div>
                  <div className="ctfprivatesettings-inputcontainer">
                    <p>Email</p>

                    <input id="emailinput" type="email" />
                  </div>

                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div className="ctfprivatesettings-savebutton">
                      Save Changes
                    </div>
                  </div>
                </div>
              )}
              {this.state.profile === false && (
                <div className="ctfprivatesettings-edit-container">
                  <p className="ctfprivatesettings-mainheading">
                    Change Your Password{" "}
                  </p>
                  <p className="ctfprivatesettings-headingdes">
                    Enter your current CTF-private password aloong with a new
                    one to change it
                  </p>
                  <div className="ctfprivatesettings-inputcontainer">
                    <p>Current Password</p>
                    <div>
                      <input id="passwordinput1" type="password" />
                      <p className="ctfprivatesettings-subtext">
                        Your current password
                      </p>
                    </div>
                  </div>
                  <div className="ctfprivatesettings-inputcontainer">
                    <p>New Password</p>
                    <div>
                      <input id="passwordinput2" type="password" />
                      <p className="ctfprivatesettings-subtext">
                        Desired password (atleast 6 characters long)
                      </p>
                    </div>
                  </div>
                  <div className="ctfprivatesettings-inputcontainer">
                    <p>Confirm Password</p>
                    <div>
                      <input id="confirmtext" type="text" />
                      <p className="ctfprivatesettings-subtext">
                        Renter your new password
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <div className="ctfprivatesettings-savebutton">
                      Save Changes
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <SmallFooter />
      </>
    );
  }
}

export default CTFPrivateAccountSettingsPage;
