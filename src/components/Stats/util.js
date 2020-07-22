import React from 'react'
import numeral from 'numeral'
import { Circle, Popup } from 'react-leaflet'

const caseTypeColors = {
    cases: {
        hex: '#CC1034',
        multiplier: 800,
    },
    recovered: {
        hex: '#7DD71D',
        multiplier: 1200,
    },
    deaths: {
        hex: '#FB4443',
        multiplier: 2000,
    }
}

export const sortData = (data) => {
    const sortedData = [...data];
    return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
}

export const showDataOnMap = (data, casesType='cases') => {
    return(
        data.map(country => (
            <Circle
                center={[country.countryInfo.lat, country.countryInfo.long]}
                fillOpacity={0.4}
                color={caseTypeColors[casesType].hex}
                fillColor={caseTypeColors[casesType].hex}
                radius={
                    Math.sqrt(country[casesType]) * caseTypeColors[casesType].multiplier
                }
            >
                <Popup>
                    <h1>IM A POPUP</h1>
                </Popup>
            </Circle>
        ))
    )
}