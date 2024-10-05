import { Router, Request, Response } from 'express';
import { existUser, readUsers, readUsersWithHobby } from './user.controller';

// INIT ROUTES
const userRoutes = Router();

// DECLARE ENDPOINT FUNCTIONS
async function GetUsers(request: Request, response: Response) {
	const users = await readUsers();

	return response.status(200).json({
		message: 'Success.',
		users: users,
	});
}

async function GetUsersWithHobby(request: Request, response: Response) {
	const { type } = request.query;

	if (!type || typeof type !== 'string') {
		return response.status(400).json({
			error: 'Error.',
			users: {},
		});
	}

	const users = await readUsersWithHobby(type);

	return response.status(200).json({
		message: 'Success.',
		users: users,
	});
}

async function GetUserExistence(request: Request, response: Response) {
	const params = request.query;
	let id;

	try {
		if (params.id && typeof params.id === 'string') {
			id = parseInt(params.id);
		} else {
			return response.status(400).json({
				error: 'Add a valid ID.',
				data: '',
			});
		}
	} catch (error) {
		console.log(`Error. ${error}`);
		return response.status(500).json({
			error: 'Error.',
			data: '',
		});
	}

	const users = await existUser(id);

	return response.status(200).json({
		message: 'Success.',
		users,
	});
}

// DECLARE ENDPOINTS
userRoutes.get('/', GetUsers);
userRoutes.get('/hobby', GetUsersWithHobby);
userRoutes.get('/exists', GetUserExistence);

// EXPORT ROUTES
export default userRoutes;
