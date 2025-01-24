'use client';


import ThemeSwitcher from "../ThemeSwitcher";
import { Button } from "../ui/button";

const HeaderAccountOptions = () => {
  return (
    <div className="flex items-center justify-around gap-1 flex-row px-2">
      <Button size={'sm'} className="shadow-line">Entrar</Button>
      <span className="px-1">ou</span>
      <Button variant={'secondary'} size={'sm'} className="shadow-line">Cadastrar</Button>
      <ThemeSwitcher />
    </div>
  )
}

export default HeaderAccountOptions
