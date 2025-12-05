import { Router } from 'express';
import {
  getAllUsers, getUserById, createUser, updateUser, deleteUser,
  searchByName, sortByName, minAgeUser, maxAgeUser, stats
} from '../controllers/userController';

const router = Router();

router.get('/', getAllUsers);
router.get('/search', searchByName); // /api/users/search?name=ana
router.get('/sort', sortByName);     // /api/users/sort?order=asc|desc
router.get('/min', minAgeUser);
router.get('/max', maxAgeUser);
router.get('/stats', stats);
router.get('/:id', getUserById);

router.post('/', createUser); 
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
