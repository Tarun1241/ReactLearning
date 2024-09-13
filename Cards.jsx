import './cards.css';

function Cards({item})
{
  return (<>
  
            <div className="card">
            <div className="imgBx">
                
                <img src={item.productImage} alt=""></img>
            </div>
            <div className="contentBx">
                <h3>{item.productName} <span>{item.type}</span></h3>
                <h2 className="price">{item.productPrice}.</h2>
                <a href="#" className="buy">Buy Now</a>
            </div>
            </div>
         </>
  );
}

export default Cards