import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Card({cart,setCart,productTitle,price,priceChange,sale}) {
    let [toggle, setToggle] = useState(true)
    const applyStrikeThrough = productTitle === 'Special Item' || productTitle === 'Sale Item';
    const showStars = productTitle === 'Popular Item' || productTitle === 'Special Item';

    
  return (
    <div className="col mb-5">
       
    <div className="card h-100">
      
        <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem"}}>{sale}</div>
      
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
    
        <div className="card-body p-4">
            <div className="text-center">
              
                <h5 className="fw-bolder">{productTitle}</h5>
             
                <span className={applyStrikeThrough ? 'text-muted text-decoration-line-through' : 'text-muted'}>{price}</span>
                {priceChange}
            </div>
        </div>
        {showStars && (
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className="text-warning" />
              ))}
            </div>
          </div>
        )}
       
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
            {productTitle === 'Fancy Product' ? (
              <button className="btn btn-outline-dark" onClick={() => {}}>
                View Options
              </button>
            ) : (
              toggle ? (
                <button
                  className="btn btn-outline-dark"
                  onClick={() => {
                    setCart(cart + 1);
                    setToggle(!toggle);
                  }}
                >
                  Add to cart
                </button>
              ) : (
                <button
                  className="btn btn-outline-dark"
                  onClick={() => {
                    setCart(current => current - 1);
                    setToggle(current => !current);
                  }}
                >
                  Remove from cart
                </button>
              )
            )}
            </div>
    </div>
</div>
</div>
  )
        }


export default Card