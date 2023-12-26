'use client'

import { Button, Datepicker, Dropdown } from 'flowbite-react';
import { useState } from 'react';
import './calculator.css';
import { AiOutlineLoading } from 'react-icons/ai';
import fetchRate, { currencyMap } from '@/utils/api';

const offsetDayMap = {
    ACTUAL: 'actual',
    PREVIOUS: 'previous'
};

const datepickerTheme = {
    root: {
        input: {
            field: {
                input: {
                    colors: {
                        gray: 'bg-white'
                    }
                }
            }
        }
    }
}

export default function Calculator() {
    const [currency, setCurrency] = useState(currencyMap.USD);
    const [offsetDay, setOffsetDay] = useState(offsetDayMap.PREVIOUS);
    const [date, setDate] = useState(new Date());
    const [loading, setLoading] = useState(false);
    const [resultRate, setResultRate] = useState(null);
    const [resultDate, setResultDate] = useState(new Date());

    const onChangeCurrency = value => {
        setCurrency(value);
    }

    const onChangeOffsetDay = value => {
        setOffsetDay(value);
    }

    const onChangeDate = value => {
        setDate(value);
    }

    const onGetRateClick = async value => {
        setResultRate(null);
        setLoading(true);

        const result = await fetchRate(date, currency);

        if (Number.isFinite(result?.rate)) {
            setResultRate(result.rate);
        }

        if (result?.date) {
            setResultDate(new Date(result.date));
        }

        setLoading(false);
    }

    return (
        <div className="calculator flex justify-center flex-col">
            <form className="bg-secondary rounded-3xl p-10 inline-block">
                <span>Enter the date when you received profit:</span>
                <Datepicker theme={datepickerTheme} className="mt-2" defaultDate={ new Date() } maxDate={ new Date() } showTodayButton onSelectedDateChanged={ onChangeDate }/>
                <div className="mt-6">Choose currency of your investment:</div>
                <div className="dropdown flex bg-white rounded-md mt-2">
                    <Dropdown label={ currency } className="flex flex-grow">
                        <Dropdown.Item onClick={ () => onChangeCurrency(currencyMap.USD) }>United States Dollar $</Dropdown.Item>
                        <Dropdown.Item onClick={ () => onChangeCurrency(currencyMap.EURO) }>Euro €</Dropdown.Item>
                        <Dropdown.Item onClick={ () => onChangeCurrency(currencyMap.CAD) }>Canadian Dollar C$</Dropdown.Item>
                        <Dropdown.Item onClick={ () => onChangeCurrency(currencyMap.AUD) }>Australian Dollar A$</Dropdown.Item>
                    </Dropdown>
                </div>

                <div className="mt-6">Choose day the rate should be calculated for:</div>
                <div className="dropdown flex bg-white rounded-md mt-2 text-black">
                    <Dropdown label={ offsetDay === offsetDayMap.ACTUAL ? 'Actual day' : 'Previous day' }>
                        <Dropdown.Item onClick={ () => onChangeOffsetDay(offsetDayMap.PREVIOUS) }>Previous day</Dropdown.Item>
                        <Dropdown.Item onClick={ () => onChangeOffsetDay(offsetDayMap.ACTUAL) }>Actual day</Dropdown.Item>
                    </Dropdown>
                </div>

                <Button processingSpinner={ <AiOutlineLoading className="h-6 w-6 animate-spin" /> } isProcessing={loading} onClick={onGetRateClick} className="bg-primary border-2 text-white mt-6 hover:bg-white hover:text-primary hover:border-primary">Get rate</Button>
            </form>

            <div className="relative h-32">
                {
                    resultRate ? (
                        <div className="absolute mx-auto w-full bg-secondary rounded-3xl p-10 mt-5">
                            <p>On { resultDate.toLocaleDateString('pl-pl') } (previous working day) the exchange rate of { currency.toUpperCase() } to PLN was:</p>
                            <span className="text-3xl text-bold">{ resultRate }</span>
                        </div>
                    ) : null
                }
            </div>
        </div>

    );
}
