'use client';

import { useEffect } from "react";
import Image from "next/image";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Mostrar o erro no console
        console.error(error);
    }, [error]);

    return (
        <html lang="en" suppressHydrationWarning>
            <body className="w-full h-full flex flex-col items-center justify-center">
                <h2>Algo deu errado!</h2>
                <Image
                    src={'/imgs/img-for-error.png'}
                    alt="404"
                    width={270}
                    height={270}
                    priority={true}
                    title="Página não encontrada"
                    className="m-0"
                />
                <button onClick={() => reset()}>Tentar novamente</button>
            </body>
        </html>
    );
}
