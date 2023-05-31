import nigeriaElectionWinner from './main.js'; // Importing default export
import { greeting, todaysDate } from './main.js'; // Importing named export
import salutation from './script.js'; // Importing default export



const winner = nigeriaElectionWinner();
console.log(winner); // Output: Peter Obi is a good man


console.log(greeting); // Output: Hello, I am Jedidiah!

const today = todaysDate();
console.log(today); // Output: Current date in the format: YYYY,MM,DD


console.log(salutation + ' I am a Front-end Developer'); // Output: I saulte you my co-web developers! I am a Front-end Developer

