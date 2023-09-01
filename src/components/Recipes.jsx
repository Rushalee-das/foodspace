import React from 'react'
import {useState} from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import Loading from './Loading'
import Searchbar from './Searchbar'

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('Vegan')
    const [limit, setLimit] = useState(30)
    const [loading, setLoading] = useState( )

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    if(loading)
    {
        return (
            <Loading />
        )
    }
  return (
    <div className='w-full'>
        <div className='w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10'>
            <form className='w-full lg:w-2/4'>
                <Searchbar placeholder='cake, chicken' handleInputChange={handleChange} 
                rightIcon = {
                    <BiSearchAlt2 
                    className='text-gray-600'/>
                }
                />
            </form>
        </div>

        {
            recipes?.length > 0 ? (
                <>
                    <div className='w-full flex flex-wrap gap-10 px-0 lg:px-10 py-10'>
                        {}
                    </div>
                </>
            )
        }
    </div>
  )
}

export default Recipes