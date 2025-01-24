'use client';

import { Button } from "../ui/button";

const HeaderAccountOptions = () => {
  return (
    <div className="flex items-center justify-center flex-row px-2">
      <Button size={'sm'} className="shadow-line">Entrar</Button>
      <span className="px-2">ou</span>
      <Button variant={'secondary'} size={'sm'} className="shadow-line">Cadastrar</Button>
    </div>
  )
}

export default HeaderAccountOptions
