import axios from 'axios'

export const HomeView = () => {

   const fetchExternalDataFromPokemonServer = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
      console.log(response)
   }

   return (
      <div>
         <button onClick={() => fetchExternalDataFromPokemonServer()}>Make the API call</button>
      </div>
   )
}  