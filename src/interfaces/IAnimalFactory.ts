import Animal from "../abstracts/animal";

export default interface IAnimalFactory {
	createAnimal(animalName: string, age: number): Animal;
}