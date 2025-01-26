import Link from "next/link"
import { Button } from "./ui/button"


const MessageDisplay = () => {
  return (
    <div className='flex flex-col items-center justify-between gap-4 xl:gap-8'>
        <h2 className='text-md xl:text-2xl font-extralight text-text-950 text-wrap text-center'>
            Delícias que fazem toda diferença no seu evento
        </h2>
        <p className='text-xs md:text-md font-extralight text-text-950 w-[200px] xl:w-[300px] text-center'>
            Qualidade e carinho em cada detalhe
            para momentos que deixam saudades,
            viva momentos únicos com receitas que 
            surpreendem
        </p>
        <div className='flex flex-row items-center justify-around w-full'>
            <Link href={'/cardapio'}>
                <Button size={'sm'} className="text-sm">Cardápio</Button>
            </Link>
            <Link href={'/contatos'}>
                <Button variant={'secondary'} size={'sm'} className="text-sm">Nos contate</Button>
            </Link>
        </div>
    </div>
  )
}

export default MessageDisplay
