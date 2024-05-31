import { useState } from 'react'

import { Input } from '../input'
import { faq } from './data/faq'

export const FaqSection = () => {
  const [expendedIndex, setExpendedIndex] = useState(null)

  return (
    <section className="border-b-8 border-highlight-flix border-opacity-50">
      <div className="max-w-5xl m-auto flex flex-col items-center py-16 px-4 ">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Perguntas frequentes
        </h2>
        {faq &&
          faq.map((item, index) => (
            <div key={item.id}>
              <div
                className="bg-highlight-flix md:text-2xl px-8 py-4 flex justify-between items-center border-b border-black-flix cursor-pointer transition hover:bg-border-flix hover:bg-opacity-40"
                onClick={() =>
                  setExpendedIndex(index === expendedIndex ? null : index)
                }
              >
                <h3>{item.title}</h3>
                <p className="text-4xl">
                  {index === expendedIndex ? '×' : '+'}
                </p>
              </div>
              <div
                className={`bg-highlight-flix md:text-2xl overflow-hidden mb-2 ${index === expendedIndex ? 'h-full' : 'h-0'}`}
              >
                {item.additional ? (
                  <>
                    <p className="p-6">{item.description}</p>
                    <p className="p-6">{item.additional}</p>
                  </>
                ) : (
                  <p className="p-6">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        <div className="mt-6 grid gap-4">
          <p className="text-lg md:text-xl text-center">
            Quer assistir? Informe seu email para criar ou reiniciar sua
            assinatura.
          </p>
          <Input />
        </div>
      </div>
    </section>
  )
}
