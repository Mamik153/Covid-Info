import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

const CountrySelector = ({ handleCountryChange }) => {

    const [ fetchedCountries, setFetchedCountries ] = useState([]);

    useEffect(() => {
                    
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries]);

    //console.log(fetchedCountries);

    return (
        <div>
            <FormControl className='col-4 offset-4 mb-5' style={{ border: '1px solid #abc',  borderRadius: '9px', padding: 'auto 5px'  }}>
                <NativeSelect className=' country-selector' default="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="" style={{ border: 'none' }} className='pl-3'>Global</option>
                    {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountrySelector;