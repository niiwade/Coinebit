import React, {useState} from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import millify from 'millify'
import { Col, Row, Typography, Select } from 'antd'  
import { MoneyCollectOutlined,DollarCircleOutlined, FundOutlined,ExclamationCircleOutlined,StopOutlined,TrophyOutlined} from '@ant-design/icons'
import { useGetCryptoDetailsQuery } from '../services/cryptoApi'

const { Title, Text } = Typography;
const {Option} = Select;

const CryptoDetails = () => {
    const { coinId } = useParams();
    const [timePeriod, setTimePeriod] = useState('7d')
    const [data, isFetching] = useGetCryptoDetailsQuery(coinId);
    
    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y', '10y']
    
    const stats = [
        { title: 'Price to USD', value: `$ ${cryptoDetails.price && millify(cryptoDetails)}` }
        { title: 'Rank', value: cryptoDetails.rank, icon: <NumberOutlined /> },
        { title: '24h Volume', value: `$ ${cryptoDetails.volume && millify(cryptoDetails)}` }
        { title: 'Market Cap', value: `$ ${cryptoDetails.marketcap && millify(cryptoDetails)}` }
        { title: 'All-time-high(daily avg.)', value: `$ ${millify(cryptoDetails.allTimeHigh && millify(cryptoDetails)}` }
    ];

    const genericstats = [
        { title: 'Number of Markets', value: `$ ${cryptoDetails.numberof  && millify(cryptoDetails)}` }
        { title: 'Number of Exchanges', value: cryptoDetails.rank, icon: <NumberOutlined /> },
        { title: 'Approved Supply', value: `$ ${cryptoDetails.volume && millify(cryptoDetails)}` }
        { title: 'Total Supply', value: `$ ${cryptoDetails.marketcap && millify(cryptoDetails)}` }
        { title: 'Circulating Supply', value: `$ ${millify(cryptoDetails.allTimeHigh && millify(cryptoDetails)}` }
    ];
    
    
    return (
        <div>
            
        </div>
    )
}

export default CryptoDetails
