import IProficional from "./IProfissional";

export default interface IConsulta extends IProficional{
    id: number;
    data: string;
    horario: string;
    profissional: Array<IProficional>;
    especialidade: string;
    paciente: string;
    modalidade: string;
}