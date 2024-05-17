import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import hemograma from "../assets/hemograma.svg";
import urina from "../assets/urina.svg";
import radiografia from "../assets/radiografia.svg";
import ultrassomAbs from "../assets/ultrassom-abs.svg";
import audiometria from "../assets/audiometria.svg";
import pezinho from "../assets/pezinho.svg";
import eletrocardiograma from "../assets/eletrocardiograma.svg";
import parasitologo from "../assets/parasitologo.svg";
import ultrassomQuad from "../assets/ultrassom-quadril.svg";
import Model from "react-modal";
import "../styles/Exames.scss";

export default function Exames() {
  const usuario = useRef();
  const senha = useRef();
  const navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editPopupOpen, setEditPopupOpen] = useState(false);
  const [addPopupOpen, setAddPopupOpen] = useState(false);
  const [products, setProducts] = useState([
    { id: 1, imgSrc: hemograma, title: "Hemograma Completo", recommendation: "Recomendação: Jejum de 6 horas", risk: "Risco: Livre de riscos" },
    { id: 2, imgSrc: urina, title: "Coleta de Urina", recommendation: "Recomendação: A primeira urina da manhã", risk: "Risco: Livre de riscos" },
    { id: 3, imgSrc: radiografia, title: "Radiografia de Tórax", recommendation: "Recomendação: Nenhuma específica", risk: "Risco: Exposição pequena a radiação " },
    { id: 4, imgSrc: ultrassomAbs, title: "Ultrassonografia Abdominal", recommendation: "Recomendação: Jejum de 6 horas", risk: "Risco: Livre de riscos" },
    { id: 5, imgSrc: audiometria, title: "Audiometria", recommendation: "Recomendação: Ambiente calmo ", risk: "Risco: Livre de riscos" },
    { id: 6, imgSrc: pezinho, title: "Teste do Pezinho", recommendation: "Recomendação: Realizar no 3º dia após nascimento", risk: "Risco: Livre de riscos" },
    { id: 7, imgSrc: eletrocardiograma, title: "Eletrocardiograma", recommendation: "Recomendação: Ambiente calmo", risk: "Risco: Livre de riscos" },
    { id: 8, imgSrc: parasitologo, title: "Parasitológico", recommendation: "Recomendação: Nenhuma específica", risk: "Risco: Livre de riscos" },
    { id: 9, imgSrc: ultrassomQuad, title: "Ultrassonografia de Quadril", recommendation: "Recomendação: Nenhuma específica", risk: "Risco: Livre de riscos" },
  ]);

  const getUsuario = sessionStorage.getItem("usuario");
  const getSenha = sessionStorage.getItem("senha");

  const handleSubmit = (e) => {
    if (usuario.current.value === "Admin" && senha.current.value === "12345") {
      const token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
      sessionStorage.setItem("usuario", "Admin");
      sessionStorage.setItem("senha", token);
    } else {
      alert("Usuario e senha Inválidos !!!");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("senha");
    alert("Saindo do sistema...");
    navigate("/exames");
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setEditPopupOpen(true);
  };

  const handleDelete = (product) => {
    setProducts((prevProducts) => prevProducts.filter((p) => p !== product));
  };

  const handleCloseEditPopup = () => {
    setEditPopupOpen(false);
  };

  const handleAdd = () => {
    setAddPopupOpen(true);
  };

  const handleCloseAddPopup = () => {
    setAddPopupOpen(false);
  };

  const handleSave = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setAddPopupOpen(false);
  };

  const handleUpdate = () => {
    const index = products.findIndex((p) => p.id === selectedProduct.id);
    if (index === -1) {
      console.error("Produto não encontrado na lista.");
      return;
    }
    const updatedProducts = [...products];
    updatedProducts[index] = selectedProduct;
    setProducts(updatedProducts);
    setEditPopupOpen(false);
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="exames">
        <div className="produtos-group1">
          <div id="tittle-produto">
            <h1>Exames</h1>
            {getUsuario && getSenha ? (
              <>
                <button onClick={handleLogout}>Logout</button>
                <button onClick={handleAdd} className="displayToggle">Cadastrar Exames</button>
              </>
            ) : (
              <button onClick={() => setOpen(true)}>Login</button>
            )}
            <Model isOpen={open}>
              <form onSubmit={handleSubmit}>
                <h1 className="tittle">Sign In</h1>
                <p>
                  USUÁRIO <br />
                  <input type="text" placeholder="Digite seu Usuário" ref={usuario} />
                </p>
                <p>
                  SENHA <br />
                  <input type="password" placeholder="Digite sua senha" ref={senha} />
                </p>
                <button className="btn_enter" type="submit">
                  <strong>ENTRAR</strong>
                </button>
              </form>
              <button onClick={() => setOpen(false)}>close form</button>
            </Model>
          </div>


          <div id="produtos-new">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.imgSrc} alt={product.title} className="img-product" />
                <div id="title">{product.title}</div>
                <div id="recommendation">{product.recommendation}</div>
                <div id="risk">{product.risk}</div>
                {getUsuario && getSenha && (
                  <div className="btn-edit">
                    <button onClick={() => handleEdit(product)} className="btn-prod">Edit</button>
                    <button onClick={() => handleDelete(product)} className="btn-prod">Delete</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {editPopupOpen && (
        <div className="edit-popup-overlay">
          <div className="edit-popup">
            <h2>Editar Produto</h2>
            <label>Titulo:</label>
            <input
              type="text"
              value={selectedProduct.title}
              onChange={(e) =>
                setSelectedProduct((prevProduct) => ({ ...prevProduct, title: e.target.value }))
              }
            />
            <label>Descrição</label>
            <input
              type="text"
              value={selectedProduct.recommendation}
              onChange={(e) =>
                setSelectedProduct((prevProduct) => ({ ...prevProduct, recommendation: e.target.value }))
              }
            />
            <label>Preço:</label>
            <input
              type="text"
              value={selectedProduct.risk}
              onChange={(e) =>
                setSelectedProduct((prevProduct) => ({ ...prevProduct, risk: e.target.value }))
              }
            />
            <button onClick={handleUpdate}>Atualizar</button>
            <button onClick={handleCloseEditPopup}>Cancelar</button>
          </div>
        </div>
      )}

      {addPopupOpen && (
        <div className="edit-popup-overlay">
          <div className="edit-popup">
            <h2>Adicionar produto</h2>
            <label>Imagem em URL:</label>
            <input type="text" id="img" />
            <label>Produto:</label>
            <input type="text" id="title" />
            <label>Recomendação::</label>
            <input type="text" id="recommendation" />
            <label>Risco:</label>
            <input type="text" id="risk" />
            <button
              onClick={() =>
                handleSave({
                  imgSrc: document.getElementById("img").value,
                  title: document.getElementById("title").value,
                  recommendation: document.getElementById("recommendation").value,
                  risk: document.getElementById("risk").value,
                })
              }
            >
              Salvar
            </button>
            <button onClick={handleCloseAddPopup}>Cancelar</button>
          </div>
        </div>
      )}
    </>
  );
}
