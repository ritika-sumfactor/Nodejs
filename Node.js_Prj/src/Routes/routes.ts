import express, { Request, Response, Router } from 'express';
import { userRegistration, userlogin, getAllUser, refreshToken } from '../Controller/userController';
import { verifyToken } from '../utils/service.ts';

const router = Router();

router.post('/registerUser', async (req: Request, res: Response) => { res.status(200).send(await userRegistration(req, res)) });

router.post('/userLogin', async (req: Request, res: Response) => { res.status(200).send(await userlogin(req, res)) })

router.get('/getAllUser', verifyToken, async (req: Request, res: Response) => { res.status(200).send(await getAllUser(req, res)) })

router.post('/refreshToken', async (req: Request, res: Response) => { res.status(200).send(await refreshToken(req, res)) })

export default router;