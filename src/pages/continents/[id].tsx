import { Header } from '../../components/Header'
import { ContinentBanner } from '../../components/ContinentBanner'
import { Info } from '../../components/Info'
import { CardConteiner } from '../../components/CardConteiner'
import type { GetStaticPaths, GetStaticProps } from 'next'
import api from '../../services/api'

interface Continent {
  id: number
  image: string
  title: string
  description: string
  countries: number
  languages: number
  cities: number
  bio: string
}

interface City {
  id: number
  title: string
  country: string
  image: string
  flag: string
}

interface Data {
  continent: Continent,
  citiesDescription: City[]
}

const Continent= ({continent, citiesDescription}: Data) => {
  
  return (
    <>
    <Header />
    <ContinentBanner title={continent.title} image={continent.image} />
    <Info bio={continent.bio} countries={continent.countries} languages={continent.languages} cities={continent.cities} />
    <CardConteiner cities={citiesDescription}/>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await api.get('/continents')
  const continents = res.data
  const paths = continents.map((continent: Continent) => ({
    params: { id: continent.id.toString() }
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const continentResponse = await api.get(`/continents/${params?.id}`)
  const continent= continentResponse.data

  const citiesResponse= await api.get(`/cities?continentId=${params?.id}`)
  const citiesDescription= citiesResponse.data

  return {
    props: {
      continent,
      citiesDescription
    } 
  }
}

export default Continent