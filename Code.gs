function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}

//GET DATA FROM GOOGLE SHEET AND RETURN AS AN ARRAY
function getData() {
  var spreadSheetId = "17pncF5NN3pmI3xdqmBK9Lgf8kY3CmJxV_DV7d9bY6rI"; //CHANGE
  var dataRange = "form!B2:E"; //CHANGE

  var range = Sheets.Spreadsheets.Values.get(spreadSheetId, dataRange);
  var values = range.values;

  return values;
}



function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}
