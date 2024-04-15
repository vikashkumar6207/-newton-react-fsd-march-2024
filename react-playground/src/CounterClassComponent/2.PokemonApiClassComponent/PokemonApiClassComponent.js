import { Component } from "react";

class PokemonApiClassComponent extends Component{

    componentDidMount(){
        console.log("component did mount");
        const url = "https://pokeapi.co/api/v2/pokemon/ditto";

        async function fetchData(){
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
        }
        fetchData();
    }
    render(){
        console.log("renser Api");
        return (
            
            <>
            
            <h1>PokemoneClass Component Api</h1>
            </>
        );
    }
}

export default PokemonApiClassComponent;