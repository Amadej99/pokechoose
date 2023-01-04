import express from 'express';
import { prisma } from '../prisma/database';

type Pokemon = {
  id: number;
  name: string;
  image: string;
};
export class PokemonRoutes {
  app: express.Application;
  name: string;

  constructor(app: express.Application) {
    this.app = app;
    this.name = 'PokemonRoutes';
    this.configureRoutes();
  }
  getName() {
    return this.name;
  }
  configureRoutes(): express.Application {
    this.app
      .route(`/pokemon/:id`)
      .put((req: express.Request, res: express.Response) => {
        res.status(200).send(`Update pokemon`);
      })
      .delete((req: express.Request, res: express.Response) => {
        res.status(200).send(`Delete pokemon`);
      });

    this.app
      .route(`/pokemon/:id1/:id2`)
      .get(async (req: express.Request, res: express.Response) => {
        const pokemon = await prisma.pokemon.findMany({
          where: {
            id: { in: [Number(req.params.id1), Number(req.params.id2)] },
          },
        });

        res.status(200).send([pokemon[0], pokemon[1]]);
      });

    this.app
      .route(`/pokemon/rate`)
      .post(async (req: express.Request, res: express.Response) => {
        const pokemon = await prisma.pokemon.update({
          where: {
            id: Number(req.body.upvote),
          },
          data: {
            votedFor: {
              increment: 1,
            },
          },
        });

        const pokemon2 = await prisma.pokemon.update({
          where: {
            id: Number(req.body.downvote),
          },
          data: {
            votedAgainst: {
              increment: 1,
            },
          },
        });

        res.status(200).send(pokemon.name + ' has been upvoted!');
      });

    this.app
      .route(`/pokemon/:id/downvote`)
      .post(async (req: express.Request, res: express.Response) => {
        const pokemon = await prisma.pokemon.update({
          where: {
            id: Number(req.params.id),
          },
          data: {
            votedAgainst: {
              increment: 1,
            },
          },
        });

        res.status(200).send(pokemon.name + ' has been downvoted!');
      });

    this.app
      .route(`/pokemon/results`)
      .get(async (req: express.Request, res: express.Response) => {
        const pokemon = await prisma.pokemon.findMany({
          where: {
            OR: [
              {
                votedFor: {
                  gt: 0,
                },
              },
              {
                votedAgainst: {
                  gt: 0,
                },
              },
            ],
          },
          take: 20,
        });

        pokemon.sort((a, b) => {
          if (
            b.votedFor / (b.votedFor + b.votedAgainst) -
              a.votedFor / (a.votedFor + a.votedAgainst) ==
            0
          )
            return b.votedFor - a.votedFor;
          else
            return (
              b.votedFor / (b.votedFor + b.votedAgainst) -
              a.votedFor / (a.votedFor + a.votedAgainst)
            );
        });

        res.status(200).send(pokemon);
      });

    return this.app;
  }
}
