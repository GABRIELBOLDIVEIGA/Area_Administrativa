import IConsulta from "../../types/IConsulta";
import IProfissional from "../../types/IProfissional";

interface IDados {
    nome: string;
    consultas: number;
}

interface Props {
    profissionais?: IProfissional[] | null;
    consultas?: IConsulta[] | null;
}

const useDadosGrafico = ({ profissionais: proficionais, consultas }: Props) => {
    // let dados: Array<IDados> = [];
    let dados: IDados[] = [];

    if (proficionais && consultas) {
        dados = proficionais.map((proficional) => ({
            nome: proficional.nome,
            consultas: consultas.filter((consulta) => consulta.profissional.some((prof) => prof.nome === proficional.nome)).length,
        }));
    }

    return dados;
};

export default useDadosGrafico;
