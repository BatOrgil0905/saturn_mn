import React from 'react';
import { NewsOne, NewsTwo, NewsThree, NewsFour, NewsFive, NewsSix, NewsSeven, NewsEight } from '../News';

const SectionThree = () => {
  return (
    <section className='px-[6%] my-6'>
        <h1 className='text-3xl font-normal text-center text-white'>Сүүлийн Мэдээ</h1>
        <div className='flex items-center justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <NewsOne/>
                <NewsTwo/>
                <NewsThree/>
                <NewsFour/>
                <NewsFive/>
                <NewsSix/>
                <NewsSeven/>
                <NewsEight/>
            </div>
        </div>

        <div className="flex items-center justify-center mt-8">
            <button className='text-center my-4 px-6 py-2 rounded-3xl text-white cursor-pointer bg-gradient-to-r from-violet-700 to-blue-700'>
                Илүү их
            </button>
        </div>
    </section>
  )
}

export default SectionThree