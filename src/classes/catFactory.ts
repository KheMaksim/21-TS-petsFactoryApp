import IAnimalFactory from "../interfaces/IAnimalFactory";
import Animal from "../abstracts/animal";
import Cat from "./cat";

export default class CatFactory implements IAnimalFactory {
	createAnimal(animalName: string, age: number): Animal {
		return new Cat(animalName, age);
	}
}