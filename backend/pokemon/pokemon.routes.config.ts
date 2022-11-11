import express from "express";
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
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send(`Return pokemon.`);
      })
      .post((req: express.Request, res: express.Response) => {
        res.status(200).send(`Create pokemon`);
      })
      .put((req: express.Request, res: express.Response) => {
        res.status(200).send(`Update pokemon`);
      })
      .delete((req: express.Request, res: express.Response) => {
        res.status(200).send(`Delete pokemon`);
      });

    this.app
      .route(`/pokemon/results`)
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send(`Return results.`);
      });

    return this.app;
  }
}
