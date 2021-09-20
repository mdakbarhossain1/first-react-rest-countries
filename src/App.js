
import './App.css';
import Countries from './components/Countries/Countries';



function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
} 


/* 

<Countries></Countries>

function Countries(){
const [countries,setCountries] = useState([])

useEffect(()=>{
  fetch('https://restcountries.eu/rest/v2/all')
  .then(res => res.json())
  .then(data => setCountries(data))
},[])
// console.log(countries)
  return(
    <div>
      <h2>Traveling Around The World</h2>
      <h4>Countries Available: {countries.length}</h4>
      {
        countries.map(country =><Country name= {country.name} flag={country.flag} capital={country.capital}></Country>)
      }
    </div>
  )
}

function Country(props){
  return(
    <div>
      <h2>Name: {props.name}</h2>
      <p>Capital: {props.capital}</p>
      <img src={props.flag} alt="" />
    </div>
  )
}


 */

export default App;
