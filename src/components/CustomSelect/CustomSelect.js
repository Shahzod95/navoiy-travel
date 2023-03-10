import React from 'react'
import Select from 'react-select'

function CustomSelect({fixedNavbar}) {
    const styles = {
        control: (baseStyles) => ({
            ...baseStyles,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            cursor: 'pointer',
            boxShadow: 'none',
            '&:hover': {
                border: 'none'
            }
        }),
        dropdownIndicator: (baseStyles) => ({
            ...baseStyles,
            color: !fixedNavbar ? '#FFFFFFB2' : '#000000B2',
            padding: 0
        }),
        singleValue: (baseStyles) => ({
            ...baseStyles,
            color: !fixedNavbar ? '#FFFFFFB2' : '#000000B2'
        })
    }
    const options = [
        {value: 'uz', label: 'UZ'},
        {value: 'en', label: 'EN'},
        {value: 'ru', label: 'RU'}
    ]

    return (
        <Select styles={styles} defaultValue={options[0]} components={{
            IndicatorSeparator: () => null
        }
        } isSearchable={false} options={options}/>
    )
}

export default CustomSelect