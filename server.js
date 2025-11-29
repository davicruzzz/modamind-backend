import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Exemplo de endpoint que retorna links com IDs de afiliado
app.get("/api/ofertas", (req, res) => {
  const data = [
    {
      nome: "Camisa Nike",
      preco: 129.90,
      link: "https://www.nike.com/br/xyz?affid=18353990393"
    },
    {
      nome: "Calça Adidas",
      preco: 199.90,
      link: "https://www.adidas.com.br/abc?affid=SEU_ID"
    }
  ];

  res.json(data);
});

app.listen(3000, () => {
  console.log("API rodando");
});
