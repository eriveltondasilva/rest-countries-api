import styles from './styles.module.scss'
import { Link } from 'react-router-dom/dist'
import useGetApiData from '@/hooks/useGetApiData'

function BorderCountries({ borders }) {
    const URL = `https://restcountries.com/v3.1/alpha?codes=${borders?.toString()}`
    const { data, error } = useGetApiData(URL)

    return (
        <div>
            <span>Border Countries:</span>
            <ul className={styles.border_items}>
                {data && !error ? (
                    data.map(country => (
                        <li className={styles.border_item} key={country.cca3}>
                            <Link to={`/country/${country.cca3?.toLowerCase()}`}>
                                {country.name.common}
                            </Link>
                        </li>
                    ))
                ) : (
                    <li className={styles.border_item}>No Borders</li>
                )}
            </ul>
        </div>
    )
}

export default BorderCountries
