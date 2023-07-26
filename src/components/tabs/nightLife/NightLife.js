import React, { useEffect, useState } from 'react'
import { filterItems } from '../../filter/filterItems'
import ProductSection from '../../productListing/productSection/ProductSection'
import Filter from '../../filter/Filter'
import { collection, getDocs } from 'firebase/firestore'
import db from '../../../firebase'

function NightLife() {

  const [NewData, setNewData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "nightlifeProductInfo"));
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

export default NightLife