import Link from "next/link";

const ListPokemon = ({poke}) => {
    const id = poke.url.split('/').filter(x => x).pop()
    return(
        <li><Link href={`pokemon/${id}`}>{poke.name}</Link></li>
 )
}

export default function Pokemon({poke}) {
    console.log(poke);
    return (
       <div>
           <h1>Pokemon</h1>
           <ul>
               {poke.map(item => <ListPokemon key={item.name} poke={item}/>)}
           </ul>
       </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const data = await res.json()
    return {
        props: {poke: data.results}
    }
}

