import Image from "next/image";
import {useRouter} from "next/router";
import Link from "next/link";


const Poke = ({data}) => {
    const router = useRouter()
   if(router.isFallback){
       return (<p>Loading.....</p>)
   }
    // const img = data.sprites.back_default
    // console.log(img);
    return (
        <div>
            <h1>HI: {data.name}</h1>
            <Image src={data.sprites.back_default} width={350} height={350}/>
        <Link href="/">Go back</Link>
        </div>
    )
}

export default Poke
//
// export const getServerSideProps = async ({params}) =>{
//
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
//     const data = await res.json()
//     console.log(data);
//     return{
//       props: {data}
//     }
// }
export const getStaticProps = async ({params}) => {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    const data = await res.json()
    console.log(data);
    return {
        props: {data}
    }
}

export const getStaticPaths = async () => {
    const paths = [
        {params: {id: '1'}},
        {params: {id: '2'}}
    ]
    return {
        paths: paths,
        fallback: true
    }
}