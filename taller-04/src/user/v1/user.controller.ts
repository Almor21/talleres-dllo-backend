import readUserAction from './read.user.action';
import { UserType } from './user.model';

// DECLARE CONTROLLER FUNCTIONS
async function readUsers(): Promise<UserType[]> {
	const users = await readUserAction();

	return users;
}

async function readUsersWithHobby(type: string): Promise<UserType[]> {
	const users = await readUserAction();

	return users.filter((user) => user.hobbies.includes(type));
}

async function existUser(id: number): Promise<boolean> {
	const users = await readUserAction();

	return users.some((user) => user.id === id);
}

// EXPORT CONTROLLER FUNCTIONS
export { readUsers, readUsersWithHobby, existUser };
