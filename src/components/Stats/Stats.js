import React,{ useState, useEffect } from 'react'
import './Stats.css'
import {
    MenuItem,
    FormControl,
    Select,
    Card,
    CardContent
} from '@material-ui/core'
import InfoBox from './InfoBox'
import Map from './Map'
import Table from './Table'
import { sortData } from './util'
import LineGraph from './LineGraph'
import 'leaflet/dist/leaflet.css'

const Stats = () => {

    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState('worldwide')
    const [countryInfo, setCountryInfo] = useState({})
    const [tableData, setTableData] = useState([])
    const [mapCenter, setMapCenter] = useState({
        lat: 34.80746, lng: -40.4796
    })
    const [mapZoom, setMapZoom] = useState(3)
    const [mapCountries, setMapCountries] = useState([])

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/all')
            .then(response => response.json())
            .then(data => {
                setCountryInfo(data)
            })
    }, [])

    useEffect(() =>{
        const getCountries = async () => {
            await fetch('https://disease.sh/v3/covid-19/countries')
            .then((response) => response.json())
            .then((data) => {
               const countries = data.map((country) => (
                   {
                       name: country.country,
                       value: country.countryInfo.iso3
                   }
               ))
               const sortedData = sortData(data);
               setTableData(sortedData)
               setMapCountries(data)
               setCountries(countries)
            })
        }

        getCountries();
    }, [])

    const onCountryChange = async(e) => {
        const countryCode = e.target.value;
        setCountry(countryCode);

        const url = countryCode === 'worldwide' 
            ? 'https://disease.sh/v3/covid-19/all' 
            : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

            await fetch(url)
                .then(response => response.json())
                .then(data => {
                    setCountry(countryCode)
                    setCountryInfo(data)

                    setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
                    setMapZoom(4)
                })
    }

    return (
        <div className='stats'>
            <div className='stats__left'>
                <div className='stats__header'>
                    <span style={{ border: '0',borderRadius: '20px', background: '#b9f4bc', padding: '5px 20px', fontSize: '1.2em', height: 'fit-content', width:'fit-content', alignItems: 'center'}} className='text-success'>COVID-19 STATS</span>
                    <FormControl className='stats__dropdown'>
                        <Select
                            variant='outlined'
                            value={country}
                            onChange={onCountryChange}
                        >
                            <MenuItem value='worldwide'>Worldwide</MenuItem>
                            {
                                countries.map((country, i) => (
                                    <MenuItem key={i} value={country.value}>{country.name}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </div>
                
                <div className='stats__container'>
                    <InfoBox title="Cases" total={countryInfo.cases} cases={countryInfo.todayCases} />
                    <InfoBox title="Recovered" total={countryInfo.recovered} cases={countryInfo.todayRecovered} />
                    <InfoBox title="Deaths" total={countryInfo.deaths} cases={countryInfo.todayDeaths} />
                </div>
                        
                <Map countries={mapCountries} center={mapCenter} zoom={mapZoom} />
            </div>

            <Card className='stats__right'>
                <CardContent>
                    <h3>Live Cases by Country</h3>
                    <Table countries={tableData} />
                    <h3>Worldwide new cases</h3>
                    <LineGraph />
                </CardContent>
            </Card>
            
        </div>
    )
}

export default Stats
