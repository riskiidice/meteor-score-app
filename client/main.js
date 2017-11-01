import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'
import {Tracker} from 'meteor/tracker';

import {Players, calculatePlayerPositions} from './../imports/api/players';
import App from './../imports/ui/App';



Meteor.startup(() => {
  Tracker.autorun(() => {
      let players  =  Players.find({},{
        sort: {
          score: -1
        }
      }).fetch();
      let positionedPlayer = calculatePlayerPositions(players)
      ReactDOM.render(<App title="Score Keep" players={positionedPlayer} />, document.getElementById('app'))
  });
});
