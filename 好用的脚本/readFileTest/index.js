const node_xj = require("xls-to-json");
node_xj({
  input: "xls/beijing1.xlsx",  // input xls
  output: "result/beijing1.js", // output json
  sheet: "Sheet1"  // specific sheetname
}, function(err, result) {
  if(err) {
    console.error(err);
  } else {
    console.log(result);
  }
});