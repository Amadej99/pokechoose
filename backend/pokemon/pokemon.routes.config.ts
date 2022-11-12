import express from "express";
import { prisma } from "../prisma/database";

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
    this.name = "PokemonRoutes";
    this.configureRoutes();
  }
  getName() {
    return this.name;
  }
  configureRoutes(): express.Application {
    this.app
      .route(`/pokemon/:id`)
      // .get(async (req: express.Request, res: express.Response) => {
      //   const pokemon = await prisma.pokemon.findUnique({
      //     where: {
      //       id: Number(req.params.id),
      //     },
      //   });
      //   if (pokemon) {
      //     res.status(200).send(pokemon);
      //   } else {
      //     res.status(404).send("Pokemon not found");
      //   }
      // })
      .put((req: express.Request, res: express.Response) => {
        res.status(200).send(`Update pokemon`);
      })
      .delete((req: express.Request, res: express.Response) => {
        res.status(200).send(`Delete pokemon`);
      });

    this.app
      .route(`/pokemon/:id/upvote`)
      .post(async (req: express.Request, res: express.Response) => {
        const pokemon = await prisma.pokemon.update({
          where: {
            id: Number(req.params.id),
          },
          data: {
            votedFor: {
              increment: 1,
            },
          },
        });

        res.status(200).send(pokemon.name + " has been upvoted!");
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

        res.status(200).send(pokemon.name + " has been downvoted!");
      });

    this.app
      .route(`/pokemonCreate`)
      .post(async (req: express.Request, res: express.Response) => {
        req.body.pokemonList.forEach(async (pokemon: Pokemon) => {
          await prisma.pokemon.upsert({
            where: {
              id: pokemon.id,
            },
            update: {},
            create: {
              id: Number(pokemon.id),
              name: pokemon.name,
              image: pokemon.image,
            },
            select: {
              id: true,
              name: true,
              image: true,
            },
          });
        });
        res.status(200).send("Pokemon created");
      });

    this.app
      .route(`/pokemon/results`)
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send(`Return results.`);
      });

    return this.app;
  }
}
