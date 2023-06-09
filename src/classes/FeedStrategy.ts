import IStrategy from "../interfaces/IStrategy";
import Animal from "../abstracts/animal";

export default class FeedStrategy implements IStrategy {
	animal: Animal;
	constructor(animal: Animal) {
		this.animal = animal;
	}
	random(): number {
		return Math.floor(Math.random() * (10 - 1 + 1) + 1);
	}
	action(): string {
		let randomVar = this.random();
		if (randomVar >= 7) {
			this.animal.moodLevel -= 20;
			this.animal.healthLevel -= 20;
			console.log(`Your pet got poisoned now:\nSatiety level : ${this.animal.satietyLevel},\nMood level : ${this.animal.moodLevel},\nHealth level : ${this.animal.healthLevel}.`);
			if (this.animal.healthLevel <= 0) {
				return 'dead';
			}
			return 'alive';
		}
		else {
			if (this.animal.age > 0 && this.animal.age <= 5) {
				this.animal.satietyLevel += 10;
				this.animal.moodLevel += 10;
				this.animal.healthLevel += 10;
			}
			else if (this.animal.age > 5 && this.animal.age <= 10) {
				this.animal.satietyLevel += 5;
				this.animal.moodLevel += 5;
				this.animal.healthLevel += 5;
			}
			else {
				this.animal.satietyLevel += 2;
				this.animal.moodLevel += 2;
				this.animal.healthLevel += 2;
			}
			if (this.animal.satietyLevel > 100) this.animal.satietyLevel = 100;
			if (this.animal.moodLevel > 100) this.animal.moodLevel = 100;
			if (this.animal.healthLevel > 100) this.animal.healthLevel = 100;
			console.log(`You feed him, now:\nSatiety level : ${this.animal.satietyLevel},\nMood level : ${this.animal.moodLevel},\nHealth level : ${this.animal.healthLevel}.`);
			return 'alive'
		}
	}
}