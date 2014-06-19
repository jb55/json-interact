var through = require('through2').obj;
var json = require('JSONStream');

module.exports = function(fn, opts) {
  opts = opts || {};
  var jsonLine = opts.jsonLine == null ? false : opts.jsonLine;
  process.stdin
  .pipe(json.parse(jsonLine))
  .pipe(through(function(obj, enc, done){
    fn.call(this, obj, done);
  }))
  .pipe(json.stringify(jsonLine))
  .pipe(process.stdout);
};
