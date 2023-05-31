// Variable for named export
export const greeting = 'Hello, I am Jedidiah!';

// Function for named export
export function todaysDate() {
  const date = new Date();
  const todaysTimeDate = date.getFullYear() + ',' + (date.getMonth() + 1) + ',' + date.getDate();
  console.log('This is a named function.');
  return todaysTimeDate;
}

// Function for default export
function nigeriaElectionWinner() {
  let mandateObi = 'Peter Obi is a good man';
  console.log('This is a default function.');
  return mandateObi;
}

//export { todaysDate, greeting };       //Use this method to export many named exports at once.

export default nigeriaElectionWinner;
