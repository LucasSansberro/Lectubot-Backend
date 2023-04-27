export class BookReadStatus {
  status: string;
  constructor(status: string) {
    this.status = status;
  }
}
const dnf = new BookReadStatus("DNF");
const reading = new BookReadStatus("Leyendo");
const read = new BookReadStatus("Leído");
const recommended = new BookReadStatus("Recomendado");

export { dnf, reading, read, recommended };
