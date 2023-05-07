const submitName = (event) => {
    event.preventDefault();
    const name_input = document.getElementById('name_input');
    debugger;
    const name = name_input.value;
    const character_array = name.split("");
    const reversed_characters_array = character_array.reverse();
    const reversed_name = reversed_characters_array.join("");
    document.getElementById('reversed_name').innerHTML = reversed_name;
}


//-------------------Rewrite the same code above as:-----------------------------//

/* 
function submitName(event) {
    event.preventDefault();
    const name_input = document.getElementById('name_input');
    console.log(name_input);
    const name = name_input.value;
    console.log(name);
    const character_array = name.split("");
    //console.log(character_array);
    const reversed_characters_array = character_array.reverse();
    console.log(reversed_characters_array);
    const reversed_name = reversed_characters_array.join("");
    console.log(reversed_name);
    document.getElementById('reversed_name').innerHTML = reversed_name;

  }*/
  