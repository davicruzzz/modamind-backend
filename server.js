import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// 🔑 SEU ID DE AFILIADO SHOPEE (MUDA SÓ AQUI)
const AFILIADO_ID = 18353990393;

// 🏷️ Marcas e categorias populares na Shopee
const lojas = {
  nike: "https://shopee.com.br/search?keyword=nike",
  adidas: "https://shopee.com.br/search?keyword=adidas",
  puma: "https://shopee.com.br/search?keyword=puma",
  hm: "https://shopee.com.br/search?keyword=hm",
  uniqlo: "https://shopee.com.br/search?keyword=uniqlo",
  marisa: "https://shopee.com.br/search?keyword=marisa",
  bodyglove: "https://shopee.com.br/search?keyword=body%20glove",
  moda_feminina: "https://shopee.com.br/Moda-Feminina-cat.11035639",
  moda_masculina: "https://shopee.com.br/Moda-Masculina-cat.11035638",
  moda_fitness: "https://shopee.com.br/search?keyword=moda%20fitness",
  camisetas: "https://shopee.com.br/search?keyword=camiseta",
  calcas: "https://shopee.com.br/search?keyword=calca",
  vestidos: "https://shopee.com.br/search?keyword=vestido"
};

// 🔍 Rota de teste
app.get("/", (req, res) => {
  res.json({ message: "API de afiliados Shopee rodando 🚀" });
});

// 📦 Lista pública de opções (SEM nome de produto/preço)
app.get("/api/ofertas", (req, res) => {
  const lista = Object.keys(lojas);
  res.status(200).json(lista);
});

// 🔁 Rota genérica de redirecionamento com afiliado
app.get("/api/comprar/:loja", (req, res) => {
  const { loja } = req.params;

  const baseUrl = lojas[loja];

  if (!baseUrl) {
    return res.status(404).json({ error: "Loja ou categoria não encontrada" });
  }

  // Shopee aceita parâmetros de afiliado na URL
  const linkAfiliado = `${baseUrl}?affid=${AFILIADO_ID}`;

  console.log(`Redirecionando para ${loja} com afiliado`);

  res.redirect(linkAfiliado);
});

// 🚀 Inicia o servidor
app.listen(PORT, () => {
  console.log(`✅ API rodando em http://localhost:${PORT}`);
});
