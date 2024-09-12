import './cards.css';

function Cards()
{
  return (<>
  
            <div className="card">
            <div className="imgBx">
                <img src="https://i.postimg.cc/mZFSS3wj/T-Shirt.png" alt=""></img>
            </div>
            <div className="contentBx">
                <h3>FC-Barcelona <span>T-Shirt</span></h3>
                <h2 className="price">$100.<small>99</small></h2>
                <a href="#" className="buy">Buy Now</a>
            </div>
            </div>
         </>
  );
}

export default Cards