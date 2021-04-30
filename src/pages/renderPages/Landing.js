import React, { Component } from "react";

import CTFPrivateAccountSettingsPage from "../CTFPrivateAccountSettingsPage";
import CTFPrivateCreateTeam from "../CTFPrivateCreateTeam";
import CTFPrivateJoinTeamForm from "../CTFPrivateJoinTeamForm";
import CtfCompetitionLanding from "../CtfCompetitionLanding";
import CTFPrivateJoinTeam from "../CTFPrivateJoinTeam";
import CTFPrivateForm from "../CTFPrivateForm";
import CTFPrivateLanding from "../CTFPrivateLanding";
import MyTeams from "../MyTeams";
import Participated from "../Participated";
import Leaderboard from "../Leaderboard";
import Ctfmainpage from "../Ctfmainpage";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./Landing.css";
class Landing extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={CTFPrivateLanding} />
          <Route
            path="/settings"
            exact
            component={CTFPrivateAccountSettingsPage}
          />
          <Route path="/createteam" exact component={CTFPrivateCreateTeam} />
          <Route path="/jointeam" exact component={CTFPrivateJoinTeamForm} />
          <Route path="/jointeamhostctf" exact component={CTFPrivateJoinTeam} />
          <Route path="/competition" exact component={CtfCompetitionLanding} />
          <Route path="/hostform" exact component={CTFPrivateForm} />
          <Route path="/myteams" exact component={MyTeams} />
          <Route path="/participated" exact component={Participated} />
          <Route path="/leaderboard" exact component={Leaderboard} />
          <Route path="/ctfmain" exact component={Ctfmainpage} />
        </Switch>
      </Router>
    );
  }
}

export default Landing;
/*
        <CTFPrivateAccountSettingsPage />
        <CTFPrivateCreateTeam />
        <CTFPrivateJoinTeamForm />
        <CtfCompetitionLanding />
        <CTFPrivateJoinTeam />
        <CTFPrivateForm />
        <CTFPrivateLanding />
        <MyTeams />
        <Participated />
*/
