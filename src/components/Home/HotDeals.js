import React from 'react';
import deal1 from '../../img/product/hot_deals/deal1.jpg';

export default function HotDeals() {
  return (
    <div>
      <section className='hot_deals_area section_gap'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='hot_deal_box'>
                <img className='img-fluid' src={deal1} alt='' />
                <div className='content'>
                  <h2>Hot Deals of this Month</h2>
                  <p>shop now</p>
                </div>
                <a className='hot_deal_link' href='#'></a>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='hot_deal_box'>
                <img className='img-fluid' src={deal1} alt='' />
                <div className='content'>
                  <h2>Hot Deals of this Month</h2>
                  <p>shop now</p>
                </div>
                <a className='hot_deal_link' href='#'></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
