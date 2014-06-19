#!/usr/bin/env node

var interact = require('./')

interact(function(obj, done){
  this.push(obj)
  done()
});
