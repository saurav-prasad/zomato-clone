import React, { useEffect, useState } from 'react'
import Filter from '../../../filter/Filter'
import Deliverycollection from '../deliveryCollection/DeliveryCollection';
import Topbrands from '../deliveryCollection/Topbrands';
import ProductSection from '../../../productListing/productSection/ProductSection';
import './delivery.css'
import { filterItems } from '../../../filter/filterItems';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../../../firebase';

function Delivery({ name }) {

  const [NewData, setNewData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "deliveryProductInfo"));
      let dataArr = []
      querySnapshot.forEach((doc) => {
        dataArr.push({ ...doc.data(), id: doc.id })
      });
      setNewData(dataArr)
    }
    fetchData()
  }, [])

  let productList = NewData

  // filter by rating
  const [ratingFilter, setratingFilter] = useState(0)

  productList = NewData.filter((data) => {
    const b = data?.info?.rating?.rating_text
    return Number(b) > ratingFilter
  })

  const rating = (filterValue) => {
    console.log(productList);
    setratingFilter(filterValue)
  }

  // filter by delivery time
  const [deliveryFilter, setdeliveryFilter] = useState(0)

  productList = deliveryFilter ? productList.sort((x, y) => {
    const xa = x?.order?.deliveryTime.replace(" min", "")
    const ya = y?.order?.deliveryTime.replace(" min", "")
    return Number(xa) - Number(ya)
  }) : productList

  const delivery = (state) => {
    setdeliveryFilter(state)
  }

  return (
    <div>
      <div>
        <div className='filterComponent'>
          <Filter
            deliveryFilter={delivery}
            rating={rating}
            filters={filterItems} />
        </div>
        <Deliverycollection />
        <Topbrands />
        <ProductSection productData={productList} productName='Order food online in Block A, Uttorayon Twp, Siliguri' />
      </div>
    </div>
  )
}

export default Delivery