import "./App.css";
import Container from "./components/Container";
import Cabecalho from "./components/Cabecalho";
import Titulo from "./components/Titulo";
import Rodape from "./components/Rodape";

function App() {
    return (
        <>
            <Cabecalho />
            <Container>
                <Titulo>Área Administrativa</Titulo>
            </Container>
            <Rodape />
        </>
    );
}

export default App;
