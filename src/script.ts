import Animal from "./abstracts/animal";
import Cat from "./classes/cat";
import CatFactory from "./classes/catFactory";
import Dog from "./classes/dog";
import DogFactory from "./classes/dogFactory";
import FeedStrategy from "./classes/FeedStrategy";
import PlayStrategy from "./classes/PlayStategy";
import HealStrategy from "./classes/HealStrategy";
import * as readlineSync from "readline-sync";

const dog: Animal = new Dog('Mukhtar', 9);
const cat: Animal = new Cat('Leopold', 40);
const dogFactory: DogFactory = new DogFactory();
const catFactory: CatFactory = new CatFactory();
const petsArray: Animal[] = [dog, cat];
while (true) {
	const menu: string = readlineSync.question(`------------------------\nWhat do you want to do?\n1. Show pets list (show)\n2. Create new (create)\n3. Exit (exit)\nAnswer (command or number): `);
	if (menu === '1' || menu.toLowerCase() === 'show') {
		let counter = 0;
		console.log('------------------------');
		for (let i = 0; i < petsArray.length; i++) {
			counter++;
			console.log(`${counter}. ${petsArray[i].animalName},${petsArray[i].age} (${petsArray[i].animalType})`);
		};
		console.log(`${counter + 1}. Exit`);
		const choose: string = readlineSync.question(`Which one do you wanna choose?\nAnswer (enter a number): `);
		if (parseInt(choose) === counter + 1) console.log(`Exited.`);
		else if (parseInt(choose) <= petsArray.length || parseInt(choose) > 0) {
			let choosedAnimal = petsArray[parseInt(choose) - 1];
			console.log(`------------------------\nYou choosed: ${choose}(${choosedAnimal.animalName})`);
			while (true) {
				const action: string = readlineSync.question(`------------------------\nWhat do you want to do?\n1. Play\n2. Feed\n3. Heal\n4. Exit\nAnswer: `);
				if (action === '1' || action.toLowerCase() === 'play') {
					const playStategy = new PlayStrategy(choosedAnimal);
					playStategy.action();
				}
				else if (action === '2' || action.toLowerCase() === 'feed') {
					const feedStrategy = new FeedStrategy(choosedAnimal);
					if (feedStrategy.action() === 'dead') {
						console.log(`This pet is dead.`);
						petsArray.splice(parseInt(choose) - 1, 1);
						break;
					}
				}
				else if (action === '3' || action.toLowerCase() === 'heal') {
					const healStrategy = new HealStrategy(choosedAnimal);
					healStrategy.action();
				}
				else if (action === '4' || action.toLowerCase() === 'exit') {
					console.log(`Exited.`);
					break;
				}
				else console.log(`------------------------\nIncorrect answer.`);
			}
		}
		else console.log(`------------------------\nThis list doesn't have this number.`);
	}
	else if (menu === '2' || menu.toLowerCase() === 'create') {
		const newPet: string = readlineSync.question(`------------------------\nWhich type of pet you wanna create?\n1. Dog\n2. Cat\n3. Exit\nAnswer: `);
		if (newPet === '1') {
			while (true) {
				const animalName: string = readlineSync.question(`------------------------\nName your pet.\nAnswer: `);
				if (animalName === '') console.log(`------------------------\nYou entered a wrong name!`);
				else if (isNaN(parseInt(animalName)) === false) console.log(`------------------------\nName can't be a number!`);
				else {
					const age: string = readlineSync.question(`------------------------\nHow old is your pet?\nAnswer: `);
					if (isNaN(parseInt(age)) === true) console.log(`------------------------\nYou entered an incorrect age!`);
					else {
						petsArray.push(dogFactory.createAnimal(animalName, parseInt(age)));
						console.log(`Pet dog with name ${animalName}, ${age} years old created.`);
						break;
					}
				}
			}
		}
		else if (newPet === '2') {
			while (true) {
				const animalName: string = readlineSync.question(`------------------------\nName your pet.\nAnswer: `);
				if (animalName === '') console.log(`------------------------\nYou entered a wrong name!`);
				else if (isNaN(parseInt(animalName)) === false) console.log(`------------------------\nName can't be a number!`);
				else {
					const age: string = readlineSync.question(`------------------------\nHow old is your pet?\nAnswer: `);
					if (isNaN(parseInt(age)) === true) console.log(`------------------------\nYou entered an incorrect age!`);
					else {
						petsArray.push(catFactory.createAnimal(animalName, parseInt(age)));
						console.log(`Pet cat with name ${animalName}, ${age} years old created.`);
						break;
					}
				}
			}
		}
		else if (newPet === '3' || newPet.toLowerCase() === 'exit') console.log(`Exited.`);
		else console.log(`------------------------\nIncorrect answer.`);
	}
	else if (menu === '3' || menu.toLowerCase() === 'exit') {
		console.log(`Exited.`);
		break;
	}
	else console.log(`------------------------\nIncorrect answer.`);
}