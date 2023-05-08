/* eslint-disable jsx-a11y/anchor-is-valid */
import facebook from "./assets/facebook.png";
import whatsapp from "./assets/whatsapp.png";
import google from "./assets/google.png";
import instagram from "./assets/instagram.png";
import styled from "styled-components";

const RodapeEstilizado = styled.footer`
    height: 100%;
    color: white;
    padding: 1em;
    background-color: var(--azul-escuro);
    text-align: center;
`;

const ListaEstilizada = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 10%;
    margin: 1em auto;
`;

const ItemEstilizado = styled.li`
    list-style-type: none;
`;

const Rodape = () => {
    const listaDeImagens = [
        {
            src: facebook,
            alt: "facebook",
        },
        {
            src: whatsapp,
            alt: "whatsapp",
        },
        {
            src: google,
            alt: "google",
        },
        {
            src: instagram,
            alt: "instagram",
        },
    ];

    return (
        <RodapeEstilizado>
            <ListaEstilizada>
                {listaDeImagens.map((img) => {
                    return (
                        <ItemEstilizado>
                            <a href="#">
                                <img src={img.src} alt={`Logo do ${img.alt}`} />
                            </a>
                        </ItemEstilizado>
                    );
                })}
            </ListaEstilizada>
            <p>2023 © Desenvolvido por Alura | Projeto fictício sem fins comerciais.</p>
        </RodapeEstilizado>
    );
}

export default Rodape;