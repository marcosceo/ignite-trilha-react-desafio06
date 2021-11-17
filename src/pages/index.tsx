import api from '../services/api'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { TravelType } from '../components/TravelType'
import { Divider } from '../components/Divider'
import { Carousel } from '../components/Carousel'

import type { GetStaticProps, NextPage } from 'next'

interface Data {
    id: number
    image: string
    title: string
    description: string
    countries: number
    languages: number
    cities: number
    bio: string
}

interface HomeProps {
  data: Data[]
}

const Home = ({data}: HomeProps) => {
    
  return (
    <>
    <Header />
    <Banner />
    <TravelType />
    <Divider />
    <Carousel continents={ data } />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await api.get('/continents')
  const data= res.data
  return {
    props: {
      data
    }
  }

}

export default Home
