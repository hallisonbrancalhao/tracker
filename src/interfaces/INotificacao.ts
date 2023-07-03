export enum TipoNotificacao {
  SUCESSO,
  FALHA,
  ATENCAO,
}

export interface INotificacao {
  titulo: string;
  texto: string;
  tipo: TipoNotificacao;
  id: number;
}

export interface Idays {
  id: number;
  days: number;
}
