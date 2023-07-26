import React, { useEffect, useState } from 'react'
import { filterItems } from '../../filter/filterItems'
import Filter from '../../filter/Filter'
import ProductSection from '../../productListing/productSection/ProductSection'
import Collection from '../../collections/Collection'
import { collection, getDocs } from 'firebase/firestore'
import db from '../../../firebase'


function DiningOut() {

  const [NewData, setNewData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "diningoutProductInfo"));
      let dataArr = []
      querySnapshot.forEach((doc) => {
        dataArr.push({ ...doc.data(), id: doc.id })
      });
      setNewData(dataArr)
    }
    fetchData()
  }, [])

  // filter by rating
  const [ratingFilter, setratingFilter] = useState(0)

  let productList = NewData.filter((data) => {
    const b = data?.info?.rating?.rating_text
    return Number(b) > ratingFilter
  })

  const rating = (filterValue) => {
    console.log(productList);
    setratingFilter(filterValue)
  }

  return (
    <div>
      <div>
        <div style={{ backgroundColor: '#f8f8f8', }}>
          <Collection />
        </div>
        <div className='filterComponent'>
          <Filter
            rating={rating}
            filters={filterItems} />
        </div>
        <ProductSection productData={NewData} productName='Order food online in Block A, Uttorayon Twp, Siliguri' />
      </div>
    </div>
  )
}

export default DiningOut