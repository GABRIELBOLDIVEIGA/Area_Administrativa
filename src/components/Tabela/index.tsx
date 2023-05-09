import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, tableCellClasses, tableRowClasses } from "@mui/material";
import React from "react";
import IConsulta from "../../types/IConsulta";
import styled from "@emotion/styled";

const CelulaEstilizada = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        color: "var(--azul-escuro)",
        fontSize: 18,
        fontWeight: 700,
        fontFamily: "var(--fonte-principal)"
    },
    [`&.${tableCellClasses.body}`]:{
        fontSize: 16,
        fontFamily: "var(--fonte-principal)"
    }
}))

const LinhaEstilizada = styled(TableRow)(() => ({
    [`&:nth-of-type(odd)`]: {
        background: "var(--cinza-claro)",
        align: "right"
    }
}))


export default function Tabela({ consultas }: { consultas: IConsulta[] | null }) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
                <TableHead>
                    <TableRow>
                        <CelulaEstilizada>Data</CelulaEstilizada>
                        <CelulaEstilizada>Horário</CelulaEstilizada>
                        <CelulaEstilizada>Proficional</CelulaEstilizada>
                        <CelulaEstilizada>Especialidade</CelulaEstilizada>
                        <CelulaEstilizada>Paciente</CelulaEstilizada>
                        <CelulaEstilizada>Modalidade</CelulaEstilizada>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {consultas?.map((linha) => {
                        return (
                            <LinhaEstilizada key={linha.id}>
                                <CelulaEstilizada >
                                    {new Date(linha.data).toLocaleDateString()}
                                </CelulaEstilizada>
                                <CelulaEstilizada >
                                    {linha.horario}
                                </CelulaEstilizada>
                                <CelulaEstilizada >
                                    {linha.profissional[0].nome}
                                </CelulaEstilizada>
                                <CelulaEstilizada >
                                    {linha.profissional[0].especialidade}
                                </CelulaEstilizada>
                                <CelulaEstilizada >
                                    {linha.paciente}
                                </CelulaEstilizada>
                                <CelulaEstilizada >
                                    {linha.modalidade}
                                </CelulaEstilizada>
                            </LinhaEstilizada>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
