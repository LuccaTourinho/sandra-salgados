'use client';


import ThemeSwitcher from "../ThemeSwitcher";

const HeaderAccountOptions = () => {
  return (
    <div className="flex items-center justify-around gap-1 flex-row px-2 xl:mr-4">
      <ThemeSwitcher />
    </div>
  )
}

export default HeaderAccountOptions
