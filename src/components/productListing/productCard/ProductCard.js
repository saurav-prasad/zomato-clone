import React from 'react'
import './productCard.css'
import { Zoom } from 'react-awesome-reveal'
import StarIcon from '@mui/icons-material/Star';

function ProductCard({ productData }) {
  // card data
  const name = productData?.info?.name ?? ""
  const image = productData?.info?.image?.url ?? ""
  const rating = productData?.info?.rating?.rating_text ?? ""
  Number(rating)
  const ratingColor = productData?.info?.rating?.rating_color ?? ""
  const cfo = productData?.info?.cfo?.text ?? ""
  const cuisine = productData?.info?.cuisine?.map((item) => item.name).slice(0, 2) ?? []
  const deliveryTime = productData?.order?.deliveryTime ?? ""
  const offers = productData?.bulkOffers ?? []
  const bottomContainer = productData?.bottomContainers[0] ?? []
  const goldText = productData?.gold?.text
  const goldValue = productData?.gold?.offerValue
  const proOff = offers.length > 1 ? offers[1] : offers.length === 1 ? offers[0] : null
  // console.log(typeof Number(rating));

  return (
    <div className='cursorPointer cardContainer'>

      {/* card image */}
      <Zoom cascade duration={200} triggerOnce={true}>
        <div className='cardImageBox'>
          <img className='cardImage' src={image} alt="" />
          <div className='cardImageOffers'>{proOff?.text}</div>
          {goldText &&
            <div className='cardImageGoldOffersBox flexCenter cardImageOffers'>
              <img src="https://b.zmtcdn.com/data/o2_assets/9b1ff9e19b7fadea6c6a57e081a1f5ac1687776279.png" className='goldImage' alt="" />
              <span className='goldOffersText'>{goldText}
                <span className='goldValue'> {goldValue}</span>
              </span>
            </div>
          }
        </div>
      </Zoom>

      {/* card details */}
      <div className='cardDetail flexCenter'>
        {/* first sub-box */}
        <div className='flexCenter cardBox'>
          <div className='cardProductName'>
            {name?.length < 21 ? name : `${name?.slice(0, 20)}...`}
          </div>
          {/* cardProductRatingBox */}
          <div className='cardProductRatingBox flexCenter' style={{ backgroundColor: `#${ratingColor}` }}>
            <div className='cardRating'>{rating}</div>
            <div className='starIcon flexCenter'><StarIcon className='star' /></div>
          </div>
        </div>
        {/* second sub-box */}
        <div className='flexCenter cardBox'>
          {/* cuisines */}
          <div className='cuisineBox'>
            {cuisine?.length && cuisine.map((data, index) => <span className='cuisine'>{data}{cuisine?.length === index + 1 ? "" : ", "}</span>)}
          </div>
          <div className='cfo'>{cfo}</div>
        </div>
        {/* third sub-box */}
        <div className='flexCenter cardBox'>
          <div className='deliveryTime'>{deliveryTime}</div>
        </div>
        {
          bottomContainer &&
          <div>
            {/* line */}
            < div className='bottomLine' />
            {/* bottom container */}
            <div className="cardBox flexCenter bottomBox">
              <img src={bottomContainer?.image?.url} alt="" className="bottomImage" />
              <div className="bottomName">{bottomContainer?.text}</div>
            </div>
          </div>
        }
      </div>
    </div >
  )
}

export default ProductCard