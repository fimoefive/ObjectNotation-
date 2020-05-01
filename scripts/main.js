
/*
Use dot notation to access the value of the key "meaning_of_life" in this object

let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};
Now access it with bracket notation using a variable called "meaning": let meaning = "meaning_of_life"
*/


let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};
 
let meaning = hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life;

console.log(meaning);
console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);

let meaning2 = [hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life];
console.log(meaning2);
console.log([hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life]);