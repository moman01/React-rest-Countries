import './App.css';
import Countreies from './components/Countries/Countreies';

function App() {
  return (
    <div className="App">
     <Countreies></Countreies>
      
    </div>
  );
}


// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then(res => res.json())
//       .then(data=>setCountries(data))
//   },[])
//   return (
//     <div>
//       <h1>Visiting Rest Countries !!!</h1>
//       <h3>Available Countries :{countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population} capital={country.capital} ></Country>)
//       }
//     </div>
//   )
// }

// function Country(props) {
//   return (
//     <div>
//       <h2>Name:{props.name}</h2>
//       <h3>Population:{props.population}</h3>
//       <h5>Capital:{props.capital}</h5>
     
//     </div>
//   )
// }

export default App;
