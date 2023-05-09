import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import IProficional from "../../types/IProficional";
import IConsulta from "../../types/IConsulta";
import useDadosGrafico from "./useDadosGrafico";

interface Props {
    proficionais?: IProficional[] | null;
    consultas?: IConsulta[] | null;
}

interface IDados {
    nome: string;
    consultas: number;
}

export default function Grafico({ consultas, proficionais }: Props) {
    let dados: Array<IDados> =  useDadosGrafico({proficionais, consultas});

    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart layout="vertical" data={dados} margin={{ top: 25, right: 40, left: 40, bottom: 20 }}>
                <XAxis type="number"></XAxis>
                <YAxis type="category" dataKey="none"></YAxis>
                <Bar dataKey="consultas" fill="#083860" barSize={30}></Bar>
            </BarChart>
        </ResponsiveContainer>
    );
}
