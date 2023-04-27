import { Schema } from "mongoose";

export class Genre {
  fiction: boolean;
  name: string;

  constructor(fiction: boolean, name: string) {
    this.fiction = fiction;
    this.name = name;
  }
}

export const genreSchema = new Schema<Genre>({
  fiction: {
    type: Boolean,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const adventureGenre = new Genre(true, "Aventura y acción");
const scifiGenre = new Genre(true, "Ciencia ficción");
const clásicosGenre = new Genre(true, "Clásicos");
const cuentosGenre = new Genre(true, "Cuentos");
const fantasyGenre = new Genre(true, "Fantasía");
const historicGenre = new Genre(true, "Ficción histórica");
const horrorGenre = new Genre(true, "Horror");
const poetryGenre = new Genre(true, "Poesía");
const romanceGenre = new Genre(true, "Romance");
const theatreGenre = new Genre(true, "Teatro");
const thrillerGenre = new Genre(true, "Thriller");
const youngAdultGenre = new Genre(true, "Young Adult");

const scienceAndTechGenre = new Genre(false, "Ciencia y tecnología");
const economyGenre = new Genre(false, "Economía");
const philosophyGenre = new Genre(false, "Filosofía y ensayos");
const historyGenre = new Genre(false, "Historia");
const medicineGenre = new Genre(false, "Medicina y salud");
const psychologyGenre = new Genre(false, "Psicología");
const literaryTheoryGenre = new Genre(false, "Teoría literaria");
