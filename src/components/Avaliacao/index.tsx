import React from "react";
import IProfissional from "../../types/IProfissional";
import Card from "./Card";
import styled from "styled-components";
import Botao from "../Botao";

const SecaoCard = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`;

export default function Avaliacao({ profissionais }: { profissionais: IProfissional[] | null }) {
    return (
        <>
            <SecaoCard>
                {profissionais?.map((proficional) => {
                    return <Card proficional={proficional} />;
                })}
            </SecaoCard>
            <Botao>Ver mais</Botao>
        </>
    );
}
