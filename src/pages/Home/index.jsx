import styles from './styles.module.scss'
import { useState } from 'react'
import useGetApiData from '@/hooks/useGetApiData'

// components
import SearchBar from '@/components/SearchBar'
import Filter from '@/components/Filter'
import CountryCard from '@/components/CountryCard'

export default function Home() {
    const [filterByRegion, setFilterByRegion] = useState('')
    const URL = 'https://restcountries.com/v3.1/all'
    const { data } = useGetApiData(URL)

    return (
        <div className={`container`}>
            <div className={styles.row}>
                <SearchBar />
                <Filter onSelectRegion={region => setFilterByRegion(region)} />
            </div>

            <div className={styles['countries-grid']}>
                {filterByRegion === ''
                    ? data &&
                      data.map(
                          ({
                              name: { common: name },
                              flags: { svg: flag },
                              capital: capital,
                              region,
                              population
                          }) => {
                              const props = { flag, name, capital, region, population }
                              return <CountryCard {...props} key={name} />
                          }
                      )
                    : data
                          .filter(country => country.region === filterByRegion)
                          .map(
                              ({
                                  name: { common: name },
                                  flags: { svg: flag },
                                  capital,
                                  region,
                                  population
                              }) => {
                                  const props = { flag, name, capital, region, population }
                                  return <CountryCard {...props} key={name} />
                              }
                          )}
            </div>
        </div>
    )
}
