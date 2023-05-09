import React from "react";
import IProficional from "../../../types/IProfissional";
import { Rating } from "@mui/material";
import styled from "styled-components";

const ContainerEstilizado = styled.div`
    flex: 40%;
    max-width: 100%;
    background-color: #ffffff;
    padding: 1em;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    color: var(--cinza);
    margin: 1em 2em 1em;
`;

const ListaEstilizada = styled.ul`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 0;
`;

const ItemEstilizado = styled.li`
    list-style-type: none;
`;

const ItemInformacoesEstilizado = styled(ItemEstilizado)`
    flex-grow: 1;
`;

const ImagemEstilizada = styled.img`
    border-radius: 100%;
    width: 64px;
    object-fit: cover;
    height: 64px;
    border: 2px solid var(--azul-claro);
    margin-right: 1em;
`;

const ParagrafoNomeEstilizado = styled.p`
    font-weight: 700;
`;

const ParagrafoEstilizado = styled.p`
    margin: 0.5em 0;
    font-size: 14px;
`;

export default function Card({ proficional }: { proficional: IProficional }) {
    return (
        <ContainerEstilizado>
            <ListaEstilizada>
                <ItemEstilizado>
                    <ImagemEstilizada src={proficional.imagem} alt={`Foto de perfil do proficional ${proficional.imagem}`} />
                </ItemEstilizado>
                <ItemInformacoesEstilizado>
                    <ParagrafoNomeEstilizado>{proficional.nome}</ParagrafoNomeEstilizado>
                    <ParagrafoEstilizado>{proficional.especialidade}</ParagrafoEstilizado>
                </ItemInformacoesEstilizado>
                <ItemEstilizado>
                    <Rating name="simple-controlled" value={proficional.nota} readOnly={true} />
                </ItemEstilizado>
            </ListaEstilizada>
        </ContainerEstilizado>
    );
}
