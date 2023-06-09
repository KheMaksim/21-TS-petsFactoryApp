import IStrategy from "../interfaces/IStrategy";
import Animal from "../abstracts/animal";

export default class PlayStrategy implements IStrategy {
	animal: Animal;
	constructor(animal: Animal) {
		this.animal = animal;
	}
	action(): void {
		if (this.animal.age > 0 && this.animal.age <= 5) {
			if (this.animal.satietyLevel <= 0) {
				console.log(`Pet can't play, he's hungry.`);
				return;
			}
			this.animal.satietyLevel -= 2;
			this.animal.moodLevel += 10;
			this.animal.healthLevel += 10;
		}
		else if (this.animal.age > 5 && this.animal.age <= 10) {
			if (this.animal.satietyLevel <= 0) {
				console.log(`Pet can't play, he's hungry.`);
				return;
			}
			this.animal.satietyLevel -= 5;
			this.animal.moodLevel += 5;
			this.animal.healthLevel += 5;
		}
		else {
			if (this.animal.satietyLevel <= 0) {
				console.log(`Pet can't play, he's hungry.`);
				return;
			}
			this.animal.satietyLevel -= 10;
			this.animal.moodLevel += 2;
			this.animal.healthLevel += 2;
		}
		if (this.animal.satietyLevel > 100) this.animal.satietyLevel = 100;
		else if (this.animal.satietyLevel < 0) this.animal.satietyLevel = 0;
		if (this.animal.moodLevel > 100) this.animal.moodLevel = 100;
		else if (this.animal.moodLevel < 0) this.animal.moodLevel = 0;
		if (this.animal.healthLevel > 100) this.animal.healthLevel = 100;
		else if (this.animal.healthLevel < 0) this.animal.healthLevel = 0;
		console.log(`You played with him, now:\nSatiety level : ${this.animal.satietyLevel},\nMood level : ${this.animal.moodLevel},\nHealth level : ${this.animal.healthLevel}.`);
	}
}