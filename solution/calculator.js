var characters, x, operator, y, result;

function calculate(command) {
  characters = command.split('');
  while(characters.length > 1) {
    x = characters.shift(); 
    operator = characters.shift(); 
    y = characters.shift(); 
    if(operator === '+') {
      characters.unshift(parseInt(x) + parseInt(y));
    } else if(operator === '-') {
      characters.unshift(parseInt(x) - parseInt(y));
    } else if(operator === '/') {
      characters.unshift(parseInt(x) / parseInt(y));
    } else if(operator === '*') {
      characters.unshift(parseInt(x) * parseInt(y));
    } else if(operator === '^') {
      characters.unshift(Math.pow(parseInt(x), parseInt(y)));
    }
    console.log(characters);
  }
  return characters[0];
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

