import './ExclusiveOffersBar.scss'


function ExclusiveOffersBar() {
   return (
       <>  
       <div className="exOffers">
       <article className="exOffers__main-wrapper">
           <div className="exOffers__wrapper">
           <p className="exOffers__everyday-essentials">Everyday Essential</p>
           </div>
           <div className="exOffers__wrapper">
           <p className="exOffers__travel">Travel</p>
           </div>
           <div className="exOffers__wrapper">
           <p className="exOffers__eStore">eStore</p>
           </div>
           <div className="exOffers__wrapper">
           <p className="exOffers__manage">Manage Your Page</p>
           </div>
          
       </article>
       </div>
       </>
   )
}


export default ExclusiveOffersBar;
