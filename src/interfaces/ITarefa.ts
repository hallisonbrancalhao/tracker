import { Idays } from "./INotificacao";
import IProjeto from "./IProjeto";

export default interface ITarefa {
  duracaoEmSegundos: number;
  descricao: string;
  projeto: IProjeto;
}

export interface IEvent extends Idays {
  name: string;
  dutation: string;
}
