import { ExtendableError } from '../core';
import User from './user.model';

export class SetupError extends ExtendableError {}

/**
 * Creates a user account.
 *
 * @param {object} user Authenticated user or null if no user is authenticated.
 * @param {object} args Arguments passed in by Swagger middleware.
 */
export const createUser = async (user, args) => {
  const setupMode = (await User.count() === 0);

  // If the server doesn't have any users yet, allow the creation of an admin
  // user while no user is authenticated. Ensure the created user has the role
  // "admin".
  if (setupMode) {
    if (args.user.role !== 'admin') {
      return Promise.reject(new SetupError('First user must have the role "admin".'));
    }
    return User.create(args.user);
  }

  return Promise.resolve();
};
