'use client';

import { useState } from 'react';

import SliderItem from '@/components/widgets/slider-item';
import SliderThumbnailItem from '@/components/widgets/slider-thumbnail-item';
import Arrows from '@/components/widgets/arrows';

export default function Home() {
  const [itemActive, setItemActive] = useState<number>(1);
  const countItems = 5;

  const onNext = () => {
    setItemActive(itemActive + 1);
    if (itemActive >= countItems) {
      setItemActive(1);
    }
  };

  const onPrevius = () => {
    setItemActive(itemActive - 1);
    if (itemActive === 1) {
      setItemActive(5);
    }
  };

  return (
    <div className='h-screen relative'>
      <ul>
        <SliderItem
          itemActive={itemActive}
          id={1}
          image='/imgs/1.webp'
          brand='Dodge'
          name='Challenger'
          desc='O Dodge Challenger é um potente muscle car com design clássico e alto desempenho, destacando-se pela sua força e estilo impactante.'
        />
        <SliderItem
          itemActive={itemActive}
          id={2}
          image='/imgs/2.webp'
          brand='Dodge'
          name='Camaro'
          desc='O Dodge Camaro é um icônico muscle car com linhas agressivas, desempenho poderoso e uma estética moderna que encanta os amantes da velocidade.'
        />
        <SliderItem
          itemActive={itemActive}
          id={3}
          image='/imgs/3.webp'
          brand='Dodge'
          name='Charger'
          desc='O Dodge Charger é um sedan esportivo com design imponente, desempenho potente e características de alto nível, combinando estilo e velocidade.'
        />
        <SliderItem
          itemActive={itemActive}
          id={4}
          image='/imgs/4.webp'
          brand='Jeep'
          name='Jeep'
          desc='Jeep, sinônimo de aventura off-road. Modelos como o Wrangler e Grand Cherokee oferecem robustez e estilo icônico em cada viagem.'
        />
        <SliderItem
          itemActive={itemActive}
          id={5}
          image='/imgs/5.webp'
          brand='Dodge'
          name='Ram'
          desc='A Dodge Ram é uma robusta caminhonete com desempenho poderoso e interior luxuoso. Com um design imponente, é líder em força e conforto.'
        />
      </ul>
      {/* Botões de seta */}
      <Arrows onClickPrev={() => onPrevius()} onClickNext={() => onNext()} />
      {/* Miniaturas */}
      <ul className='absolute bottom-0 z-10 flex sm:justify-end gap-3 w-full h-[250px] px-14 overflow-y-hidden overflow-x-auto'>
        <SliderThumbnailItem
          itemActive={itemActive}
          image='/imgs/1.webp'
          id={1}
          name='Challenger'
          onClick={() => setItemActive(1)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image='/imgs/2.webp'
          id={2}
          name='Camaro'
          onClick={() => setItemActive(2)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image='/imgs/3.webp'
          id={3}
          name='Charger'
          onClick={() => setItemActive(3)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image='/imgs/4.webp'
          id={4}
          name='Jeep'
          onClick={() => setItemActive(4)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image='/imgs/5.webp'
          id={5}
          name='Ram'
          onClick={() => setItemActive(5)}
        />
      </ul>
    </div>
  );
}
