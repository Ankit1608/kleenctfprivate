import React, { Component } from "react";
import Datepicker from "react-datepicker";
import "./CTFPrivateForm.css";
import "../../node_modules/react-datepicker/dist/react-datepicker.css";

class CTFPrivateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0,
      startDate: null,
      endDate: null,
    };
  }

  handledes(e) {
    this.setState({ length: e.target.value.length });
  }
  handleChangeStartDate(date) {
    this.setState({ startDate: date });
  }
  handleChangeEndDate(date) {
    this.setState({ endDate: date });
  }
  render() {
    return (
      <div className="ctfprivateform-maincontainer">
        <div className="ctfprivateform-container">
          <div className="ctfprivateform-padding">
            <div className="ctfprivateform-textcontainer">
              <p className="ctfprivateform-heading">Want to organize a CTF ?</p>
              <p className="ctfprivateform-description">
                Organize a CTF @university @events or @companies. We Offer
                custome made
              </p>
              <p className="ctfprivateform-description">
                challenges as well as your choice from our machine library
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p className="ctfprivateform-datetext">START DATE :</p>
                <Datepicker
                  style={{ flex: 1 }}
                  required
                  selected={this.state.startDate}
                  onChange={(date) => this.handleChangeStartDate(date)}
                  className="Datepicker pa2"
                  minDate={new Date()}
                  placeholderText="Select a date"
                  calendarClassName="rasta-stripes"
                  showYearDropdown
                  scrollableMonthYearDropdown
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p className="ctfprivateform-datetext">END DATE :</p>
                <Datepicker
                  style={{ flex: 1 }}
                  required
                  selected={this.state.endDate}
                  onChange={(date) => this.handleChangeEndDate(date)}
                  className="Datepicker pa2"
                  minDate={new Date()}
                  placeholderText="Select a date"
                  calendarClassName="rasta-stripes"
                  showYearDropdown
                  scrollableMonthYearDropdown
                />
              </div>
            </div>

            <div className="ctfprivateform-dropdowncontainer">
              <div className="ctfprivateform-dropdown1">
                <p className="ctfprivateform-datetext">NO OF PEOPLE</p>

                <select name="noOfPeople">
                  <option value="5">1-5</option>
                  <option value="20">1-20</option>
                  <option value="50">1-50</option>
                  <option value="100">1-100</option>
                </select>
              </div>
              <div className="ctfprivateform-dropdown1">
                <p className="ctfprivateform-datetext">KIND OF CTF</p>

                <select name="kindOfCTF">
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>
            </div>
            <div className="ctfprivateform-ctfstyle-container">
              <p className="ctfprivateform-datetext">STYLE OF CTF</p>

              <select name="kindOfCTF">
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
            <div className="ctfprivateform-ctfstyle-container">
              <p className="ctfprivateform-datetext">CTF DESCRIPTION</p>
              <input type="text" maxLength="500" onChange={this.handledes} />
              <p className="ctfprivateform-datetext">{this.state.length}/500</p>
            </div>
            <div className="ctfprivateform-bottom">
              <p className="ctfprivateform-bottom1">Cancel</p>
              <p className="ctfprivateform-bottom2">SEND REQUEST</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CTFPrivateForm;
