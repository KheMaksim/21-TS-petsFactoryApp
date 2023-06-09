import IAnimalFactory from "../interfaces/IAnimalFactory";
import Animal from "../abstracts/animal";
import Dog from "./dog";

export default class DogFactory implements IAnimalFactory {
	createAnimal(animalName: string, age: number): Animal {
		return new Dog(animalName, age);
	}
}