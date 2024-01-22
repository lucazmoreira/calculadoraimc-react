import React, { useState } from "react";
import "./App.css";

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setImc(imcCalculado.toFixed(2));
    setClassificacao(obterClassificacaoIMC(imcCalculado));
  };

  const obterClassificacaoIMC = (imc) => {
    if (imc < 18.5) {
      return "Magreza";
    } else if (imc < 24.9) {
      return "Normal";
    } else if (imc < 29.9) {
      return "Sobrepeso";
    } else if (imc < 34.9) {
      return "Obesidade Grau I";
    } else if (imc < 39.9) {
      return "Obesidade Grau II";
    } else {
      return "Obesidade Grau III";
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <label>
        Altura (cm):
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </label>
      <label>
        Peso (kg):
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </label>
      <button onClick={calcularIMC}>Calcular IMC</button>
      {imc && (
        <div>
          <p>Seu IMC é: {imc}</p>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;
