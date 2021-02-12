//Assignmeny 1
let country = 'Nigeria';
let continent ='Africa';
let population = 180000;
console.log(country);
console.log(continent);
console.log(population);
//Assignment, don't forget to send link


//Assignment 2
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//Assignment 3
language = 'Yoruba';
//const country = 'Nigeria';
//const continent = 'Africa';

country = 'Nigeria';
console.log(country);
//It says identifier country has already been declared

//Assignment 4;
console.log(population/2);

population++;
console.log(population);

let nigPopulation = 180000000;
let finPopulation = 6000000;
console.log(nigPopulation>finPopulation);

let averagePopulation = 33000000;
console.log(nigPopulation<averagePopulation);

let description= country +' is in '+continent+ ' and its '+nigPopulation+' people speak '+ language;
console.log(description);

//Assignment 5
const description2 = `${country} is in ${continent}, and its ${nigPopulation} million people speak ${language}`;
console.log(description2);

//Assignment 6
if (nigPopulation > 33)
  {console.log(`${country}'s population is above average`);
    } 
else {console.log(`${country}'s population is ${33 - nigPopulation} million below average`,);
    }

//Assignment 7
/*console.log('9' - '5');
console.log('19' - '13' + '17'); 
console.log('19' - '13' + 17); 
console.log('123' < 57); 
console.log(5 + 6 + '4' + 9 - 4 - 2); 

//Assigment 8
const numNeighbours = prompt('How many neighbour countries does your country have?',);
 
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'), );
    
if (numNeighbours === 1) 
  {console.log('Only 1 border!');
    } 
else if (numNeighbours > 1) 
  {console.log('More than 1 border');
    } 
else
  {console.log('No borders');
    }*/

//Assignment 8
if (language === 'english' && nigPopulation < 50 && !isIsland)
 {console.log(`You should live in ${country} :)`);
   }
else {console.log(`${country} does not meet your criteria :(`);
  }
//Assignment 9
switch (language) 
{case 'Chinese':
 case 'Mandarin':
 
 console.log('MOST number of native speakers!'); break;

 case 'Spanish':
    
 console.log('2nd place in number of native speakers'); break;
    
 case 'English':
    
 console.log('3rd place'); break;
    
 case 'Hindu':
    
 console.log('Number 4'); break;
    
 case 'Arabic':

 console.log('5th most spoken language'); break;

 default:
 console.log('Great language too!');
  }

//Assignment 10
console.log(`${country}'s population is ${nigPopulation > 33 ? 'above' :'below'} average`,);