import { Tipopessoa } from "../enum/tipopessoa";

export class Cliente {

    id!: number;

    tipoPessoa!: Tipopessoa;

    cpfCnpj?: string;

    nome!: string;
    nomeFantasia?: string;

    cep!: string;
    endereco!: string;
    bairro!: string;
    cidade!: string;
    numero!: string;

    telefone?: number;
    telefoneFixo?: number;
    email!: string;

}