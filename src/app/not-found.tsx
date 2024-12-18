import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Página inexistente",
}

export default function NotFound() {
    return (
        <div className="container h-screen mx-auto flex flex-col items-center justify-center text-center gap-2">
            <h2>Página não encontrada</h2>
            <Image
                src={'/imgs/not-found.png'}
                alt="404"
                width={270}
                height={270}
                priority={true}
                title="Página não encontrada"
                className="m-0"
            />
            <Link href={'/'}>Retornar</Link>
        </div>
    )
}