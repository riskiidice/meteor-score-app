import {Mongo} from 'meteor/mongo';

export const Players = new Mongo.Collection("players");
Players.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});
