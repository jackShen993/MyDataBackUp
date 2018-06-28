const node_xj = require("xls-to-json");
node_xj({
  input: "xls/index.xlsx",  // input xls
  output: "result/index.js", // output json
  sheet: "Sheet1"  // specific sheetname
}, function(err, result) {
  if(err) {
    console.error(err);
  } else {
    console.log(result);
  }
});