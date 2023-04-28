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

export const adventureGenre = new Genre(true, "Aventura y acción");
export const scifiGenre = new Genre(true, "Ciencia ficción");
export const clásicosGenre = new Genre(true, "Clásicos");
export const cuentosGenre = new Genre(true, "Cuentos");
export const fantasyGenre = new Genre(true, "Fantasía");
export const historicGenre = new Genre(true, "Ficción histórica");
export const horrorGenre = new Genre(true, "Horror");
export const poetryGenre = new Genre(true, "Poesía");
export const romanceGenre = new Genre(true, "Romance");
export const theatreGenre = new Genre(true, "Teatro");
export const thrillerGenre = new Genre(true, "Thriller");
export const youngAdultGenre = new Genre(true, "Young Adult");

export const scienceAndTechGenre = new Genre(false, "Ciencia y tecnología");
export const economyGenre = new Genre(false, "Economía");
export const philosophyGenre = new Genre(false, "Filosofía y ensayos");
export const historyGenre = new Genre(false, "Historia");
export const medicineGenre = new Genre(false, "Medicina y salud");
export const psychologyGenre = new Genre(false, "Psicología");
export const literaryTheoryGenre = new Genre(false, "Teoría literaria");
