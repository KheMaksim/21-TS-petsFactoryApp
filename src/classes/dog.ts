import Animal from "../abstracts/animal";

export default class Dog extends Animal {
	public override animalName: string;
	public override age: number;
	public override animalType: string = 'dog';
	constructor(animalName: string, age: number) {
		super();
		this.animalName = animalName;
		this.age = age;
	}
}