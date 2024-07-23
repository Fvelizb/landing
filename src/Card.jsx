import React from 'react';

function Card({ title, text, imageUrl, imageAlt, buttonText, buttonLink }) {
  return (
    <div className="card m-1" style={{ width: "20rem" }}>
      {imageUrl && <img src={imageUrl} className="card-img-top" alt={imageAlt} />}
      <div className="card-body">
        <h5 className="card-title">Producto {title}</h5>
        <p className="card-text">{text}</p>
        <a href={buttonLink} className="btn btn-primary">Find out more!</a>
      </div>
    </div>
  );
}

export default Card;