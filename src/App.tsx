import "./App.css";
import Container from "./components/Container";
import Cabecalho from "./components/Cabecalho";
import Titulo from "./components/Titulo";
import Rodape from "./components/Rodape";
import Tabela from "./components/Tabela";
import useDadosConsulta from "./useDadosConsulta";
import Grafico from "./components/Grafico";
import useDadosProficional from "./useDadosProficional";
import Avaliacao from "./components/Avaliacao";
import Botao from "./components/Botao";
import Subtitulo from "./components/Subtitulo";

function App() {
    const { dados: consultas, erro: consultasError } = useDadosConsulta();
    const { dados: profissionais, erro: profissionaisError } = useDadosProficional();

    if (consultasError || profissionaisError) {
        console.log("Algo de errado não esta certo...");
    }

    return (
        <>
            <Cabecalho />
            <Container>
                <Titulo>Área Administrativa</Titulo>
                <Botao>Cadastrar especialista</Botao>
                <Titulo imagem="consulta">Consultas do Dia</Titulo>
                <Tabela consultas={consultas} />
                <Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
                <Subtitulo>Dezembro/22</Subtitulo>
                <Grafico consultas={consultas} profissionais={profissionais} />
                <Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
                <Avaliacao profissionais={profissionais} />
            </Container>
            <Rodape />
        </>
    );
}

export default App;
