
type PersonBirthday = {
    name: string,
    month: string;
    day: number;
    year: number;
} 

function birth( person: PersonBirthday ) {
    return `Hello! my name is ${person.name}, I was born in ${person.month} ${person.day}, ${person.year}.`
}

console.log(birth({name: "Douglas", month: "May", day: 5, year: 1991}));