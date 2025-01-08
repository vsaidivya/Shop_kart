import React , {useState} from 'react'
import './Productdetails.css'

const Productdetails = (props) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [mainImage, setMainImage] = useState(0);

    const {currproduct} = props
    const product = {
        id: currproduct.id,
        name: currproduct.name,
        category: currproduct.category,
        images: [
          currproduct.image,
          currproduct.image,
          currproduct.image,
          currproduct.image,
        ],
        new_price: currproduct.new_price,
        old_price: currproduct.old_price,
      };

      const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div>
      <div className="product-container">
      <div className="breadcrumb">
        <span>HOME</span>
        <span>›</span>
        <span>SHOP</span>
        <span>›</span>
        <span>{product.category.toUpperCase()}</span>
        <span>›</span>
        <span className="current">{product.name}</span>
      </div>

      <div className="product-details">
        <div className="product-display">
          <div className="product-gallery">

            <div className="thumbnails">
              <div className={`thumbnail ${mainImage === 0 ? 'active' : ''}`}
                onClick={() => setMainImage(0)}>
                <img src={product.images[0]} alt="" />
              </div>

              <div className={`thumbnail ${mainImage === 1 ? 'active' : ''}`}
                onClick={() => setMainImage(1)}>
                <img src={product.images[1]} alt="" />
              </div>

              <div className={`thumbnail ${mainImage === 2 ? 'active' : ''}`}
                onClick={() => setMainImage(2)}>
                <img src={product.images[2]} alt="" />
              </div>

              <div className={`thumbnail ${mainImage === 3 ? 'active' : ''}`}
                onClick={() => setMainImage(3)}>
                <img src={product.images[3]} alt="" />
              </div>
            </div>

            <div className="main-image">
              <img src={product.images[mainImage]} alt={product.name}/>
            </div>
          </div>
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>

          <div className="rating">
            <div className="stars">
              <img src="/Assets/star_icon.png" alt=""/>
              <img src="/Assets/star_icon.png" alt=""/>
              <img src="/Assets/star_icon.png" alt=""/>
              <img src="/Assets/star_icon.png" alt=""/>
              <img src="/Assets/star_dull_icon.png" alt=""/>
            </div>
            <span className="review-count">({product.reviews? product.reviews : 122})</span>
          </div>

          <div className="prices">
            <span className="old-price">{product.old_price}</span>
            <span className="new-price">{product.new_price}</span>
          </div>

          <p className="description">
            A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline
            and short sleeves, worn as an undershirt or outer garment.
          </p>

          <div className="size-selector">
            <h3>Select Size</h3>
            <div className="size-options">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}>
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="add-to-cart">
            ADD TO CART
          </button>

          <div className="product-meta">
            <p className="category">
              <span>Category: </span>
              <span className="value">{product.category.toUpperCase()}, T-Shirt</span>
            </p>
            <p className="tags">
              <span>Tags: </span>
              <span className="value">Modern, Latest</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Productdetails
