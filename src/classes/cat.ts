import Animal from "../abstracts/animal";

export default class Cat extends Animal {
	public override animalName: string;
	public override age: number;
	public override animalType: string = 'cat';
	constructor(animalName: string, age: number) {
		super();
		this.animalName = animalName;
		this.age = age;
	}
}