import { useTranslations } from 'next-intl';
import React, { Dispatch, SetStateAction, useState } from 'react'

type SlideNavigatorProps = {
    setActiveComponent: Dispatch<SetStateAction<string>>
}

const SlideNavigator = ({ setActiveComponent }: SlideNavigatorProps) => {
    const t = useTranslations("Slider")
    const [activeIndex, setActiveIndex] = useState(0);
    const buttonsArr = [t('about'), t('work'), t('portfolio')];

    const showActiveComponent = (text: string, index: number) => {
        setActiveComponent(text);
        setActiveIndex(index);
    };
    return (
        <div className="w-full fixed bottom-1 md:bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2 sm:space-x-3 md:space-x-5 p-2 text-dark dark:text-white dark:bg-dark rounded-xl">
            {buttonsArr.map((btnArr, index) => (
                <button
                    key={index}
                    onClick={() => showActiveComponent(btnArr, index)}
                    className={`px-1 py-[2px] md:px-3 md:py-1 rounded-lg transition-all duration-500 ${index === activeIndex ? "bg-buttons p-1" : ""
                        }`}
                >
                    {btnArr}
                </button>
            ))}
        </div>
    );
};

export default SlideNavigator