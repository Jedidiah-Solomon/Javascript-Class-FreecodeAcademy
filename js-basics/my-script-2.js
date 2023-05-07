const name = 'Samantha';
const country = 'Nigeria';
("Hi, I'm " + name + "and I'm from " + country); //Concatenate way..no spacing will be seen except you add
(`Hi, I'm ${name} and I'm from ${country}`); // Template string way....there will be spacing


// Using the join way
const instagram = '@samanthaming';
const twitter = '@samantha_ming';
const array = ['My handles are ', instagram, twitter];
const tiktok = '@samantaming';
array.push(tiktok); //this makes tiktok to be last
array.join(' '); //the separator is empty space



//customizing it
const instagram = '@samanthaming';
const twitter = '@samantha_ming';
const array = ['My handles are'];
const handles = [instagram, twitter, tiktok].join(', '); // @samanthaming, @samantha_ming, @samanthaming

array.push(handles); // ['My handles are', '@samanthaming, @samantha_ming, @samanthaming']

array.join(' '); // My handles are @samanthaming, @samantha_ming, @samanthaming


//using concat
const instagram = '@samanthaming';
const twitter = '@samantha_ming';
const tiktok = '@samanthaming';
'My handles are '.concat(instagram, ', ', twitter', ', tiktok);
// My handles are @samanthaming, @samantha_ming, @samanthaming


//combing string with array
const instagram = '@samanthaming';
const twitter = '@samantha_ming';
const tiktok = '@samanthaming';
const array = [instagram, twitter, tiktok];
'My handles are '.concat(array);
// My handles are @samanthaming,@samantha_ming,@samanthaming




//If you want it formatted better, we can use join to customize our separator.
const instagram = '@samanthaming';
const twitter = '@samantha_ming';
const tiktok = '@samanthaming';
const array = [instagram, twitter, tiktok].join(', ');
'My handles are '.concat(array);
// My handles are @samanthaming, @samantha_ming, @samanthaming


//One interesting thing about using the + operator when combining strings. 
//You can use to create a new string or you can mutate an existing string by appending to it.
//1. Here we are using + to create a brand new string....Non-Mutative
const instagram = '@samanthaming';
const twitter = '@samantha_ming';
const tiktok = '@samanthaming';
const newString = 'My handles are ' + instagram + twitter + tiktok;


//2. mutative
const instagram = '@samanthaming';
const twitter = '@samantha_ming';
const tiktok = '@samanthaming';
let string = 'My handles are ';
string += instagram + twitter;
// My handles are @samanthaming@samantha_ming

//note: string += instagram + ', ' + twitter + ', ' + tiktok; will give output spacing

// My handles are @samanthaming, @samantha_ming, @samanthaming