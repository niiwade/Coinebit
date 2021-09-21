import React, {useState} from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import millify from 'millify'
import { Col, Row, Typography, Select } from 'antd'  
import { MoneyCollectOutlined,ThunderboltOutlined,CheckOutlined,DollarCircleOutlined,NumberOutlined  ,FundOutlined,ExclamationCircleOutlined,StopOutlined,TrophyOutlined} from '@ant-design/icons'
import { useGetCryptoDetailsQuery } from '../services/cryptoApi'

const { Title, Text } = Typography;
const {Option} = Select;

const CryptoDetails = () => {
    const { coinId } = useParams();
    const [timePeriod, setTimePeriod] = useState('7d')
    const [data, isFetching] = useGetCryptoDetailsQuery(coinId);
    const cryptoDetails = data?.data?.coin;
    
    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y', '10y']
    
    const stats = [
        { title: 'Price to USD', value: `$ ${cryptoDetails.price && millify(cryptoDetails.price)}`,icon: <DollarCircleOutlined/>},
        { title: 'Rank', value: cryptoDetails.rank, icon: <NumberOutlined /> },
        { title: '24h Volume', value: `$ ${cryptoDetails.volume && millify(cryptoDetails.volume)}`,icon:<ThunderboltOutlined/>},
        { title: 'Market Cap', value: `$ ${cryptoDetails.marketcap && millify(cryptoDetails.marketCap)}`, icon:<DollarCircleOutlined/>},
        { title: 'All-time-high(daily avg.)', value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`,icon:<TrophyOutlined/> }
    ];

    const genericstats = [
        { title: 'Number of Markets', value: cryptoDetails.numberofMarkets, icon:<FundOutlined/> },
        { title: 'Number of Exchanges', value: cryptoDetails.numberofExchanges, icon: <NumberOutlined /> },
        { title: 'Approved Supply', value: cryptoDetails.approvedSupply ? <CheckOutlined/> : <StopOutlined/>,  icon:<ExclamationCircleOutlined/> },
        { title: 'Total Supply', value: `$ ${cryptoDetails.totalSupply}`, icon: <ExclamationCircleOutlined /> },
        { title: 'All-time-high(Circulating Supply)', value: `$ ${millify(cryptoDetails.circulatingSupply)}`,icon:<ExclamationCircleOutlined/> }
    ];
    
    
    return (
        < Col className="coin-detail-container" >
            <Col className="coin-detail-header">
                <Title level={2} className="coin-name">{cryptoDetails.name} ({cryptoDetails.slug}) Price</Title>
                <p>
                    {cryptoDetails.name} live price in USD.
                    View Market Cap, Value Statistics and Supply
                </p>
            </Col>
            <Select defaultValue='7d' className='select-timeperiod' placeholder='Select Time Period'>

            </Select>
       </Col >
    )
}

export default CryptoDetails
