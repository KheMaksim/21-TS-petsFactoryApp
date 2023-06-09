import IStrategy from "../interfaces/IStrategy";
import Animal from "../abstracts/animal";

export default class HealStrategy implements IStrategy {
	animal: Animal;
	constructor(animal: Animal) {
		this.animal = animal;
	}
	action(): void {
		if (this.animal.age > 0 && this.animal.age <= 5) {
			this.animal.moodLevel += 10;
			this.animal.healthLevel += 10;
		}
		else if (this.animal.age > 5 && this.animal.age <= 10) {
			this.animal.moodLevel += 5;
			this.animal.healthLevel += 5;
		}
		else {
			this.animal.moodLevel += 2;
			this.animal.healthLevel += 2;
		}
		if (this.animal.moodLevel > 100) this.animal.moodLevel = 100;
		if (this.animal.healthLevel > 100) this.animal.healthLevel = 100;
		console.log(`You heal him, now:\nSatiety level : ${this.animal.satietyLevel},\nMood level : ${this.animal.moodLevel},\nHealth level : ${this.animal.healthLevel}.`);
	}
}