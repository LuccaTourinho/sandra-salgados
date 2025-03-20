'use client';

import Image from "next/image";

interface AvaliationTrioProps {
    id: number;
    img: string;
    name: string;
    avaliation: string;
}

interface IAppProps {
    Values: AvaliationTrioProps[];
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className='flex flex-row items-center justify-between h-full w-full gap-0.5 md:gap-2 2xl:gap-8'>
        {
            props.Values.map((value, index) => (
                <div key={index} className='flex flex-col items-center justify-center gap-2 border-4 border-text-950 h-full w-full rounded-lg p-2'>
                    <div className="relative w-full h-[50%] flex justify-center items-center">
                        <Image
                            src={value.img}
                            alt={value.name}
                            layout="fill"
                            objectFit="contain"
                            className="rounded-lg"
                        />
                    </div>
                    <h3 className="text-xs sm:text-sm md:text-lg font-semibold  text-primary-700 text-center">
                        {value.name}
                    </h3>
                    <p className="text-xs lg:text-sm text-text-950 text-center">
                        {value.avaliation}
                    </p>
                </div>
            ))
        }
    </div>
  );
};

export default App;

