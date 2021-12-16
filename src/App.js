import "./App.css";
import Mensaje from "./components/Mensaje";

function Descripcion() {
    return <p>Este es un mensaje del bootcamp fullstack</p>;
}

function App() {
    return (
        <>
            <Mensaje color="red" message="Estamos trabajando" />
            <Mensaje color="green" message="En un curso" />
            <Mensaje color="blue" message="De React" />
            <Descripcion />
        </>
    );
}

export default App;
