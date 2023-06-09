import Animal from "../abstracts/animal";

export default interface IStrategy {
	animal: Animal;
	action(): void;
}