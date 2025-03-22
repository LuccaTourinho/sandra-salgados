import Link from "next/link"
import { Button } from "./ui/button"


const MessageDisplay = () => {
  return (
    <div className='flex flex-col items-center justify-between gap-4  lg:h-[300px] xl:h-[400px]'>
        <h2 className='text-md md:text-xl lg:text-2xl xl:text-3xl font-extralight text-text-950 text-wrap text-center w-[400px]'>
            Delícias que fazem toda diferença no seu evento
        </h2>
        <p className='text-sm md:text-lg xl:text-xl font-extralight text-text-950 w-[400px] text-center'>
            Qualidade e carinho em cada detalhe
            para momentos que deixam saudades,
            viva momentos únicos com receitas que 
            surpreendem
        </p>
        <div className='flex flex-row items-center justify-around w-full'>
            <Link href={'/cardapio'}>
                <Button size={'sm'} className="text-sm lg:text-lg">Cardápio</Button>
            </Link>
            <Link href={'/contatos'}>
                <Button variant={'secondary'} size={'sm'} className="text-sm lg:text-lg">Nos contate</Button>
            </Link>
        </div>
    </div>
  )
}

export default MessageDisplay
