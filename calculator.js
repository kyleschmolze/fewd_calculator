
function calculate(command) {
  // Your code in here!
  return 12;
}








function gatherInputAndCalculate() {
  var cmd, result;

  // Grab the user input
  cmd = $("input.cmd-input").val();

  // Call the calculate function, store it's return into the result variable
  result = calculate(cmd);

  // Display the caption ("Your function returned:")
  $("p.caption").show();

  // Put the contents of the result variable into the paragraph with class 'output'
  $("p.output").html(result);
}

$(document).ready(function() {
  // Attach a click handler to the anchor with class 'execute'
  // aka. When the user clicks it, call this function.
  $("a.execute").click(gatherInputAndCalculate);
});

