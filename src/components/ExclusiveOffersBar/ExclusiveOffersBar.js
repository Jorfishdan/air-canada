import './ExclusiveOffersBar.scss'


function ExclusiveOffersBar({ setIsModalOpen }) {

    function clickHandler() {
        setIsModalOpen(true);
    };

   return (
       <>  
       <div className="exOffers">
       <article className="exOffers__main-wrapper">
           <div className="exOffers__wrapper exOffers__wrapper--active">
           <p className="exOffers__everyday-essentials">Everyday Essentials</p>
           </div>
           <div className="exOffers__wrapper">
           <p className="exOffers__travel">Travel</p>
           </div>
           <div className="exOffers__wrapper">
           <p className="exOffers__eStore">eStore</p>
           </div>
           <div className="exOffers__wrapper" onClick={clickHandler}>
           <p className="exOffers__manage">Manage Your Page</p>
           </div>
          
       </article>
       </div>
       </>
   )
}


export default ExclusiveOffersBar;
