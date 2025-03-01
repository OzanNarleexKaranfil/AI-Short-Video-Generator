import { Button } from '@/components/ui/button'
import React from 'react'
import Authentication from './Authentication'

function Hero() {
  return (
    <div className='p-10 flex flex-col items-center justify-center mt-24 md:px-20 lg:px-36 xl:px-48'>
        <h2 className='font-bold text-6xl text-center'>
            AI Youtube Short Video Generator
        </h2>
        <p className='mt-4 text-2xl text-center text-gray-500'>
            Yapay zeka saniyeler içinde senaryolar, görseller ve seslendirmeler oluşturur. ⚡ Kolayca etkileyici kısa videolar oluştur, düzenle ve paylaş!
        </p>

        <div className='mt-7 gap-8 flex'>
            <Button size="lg" variant="outline">Keşfet</Button>

            <Authentication>
                <Button size="lg">Hadi Başlayalım</Button>
            </Authentication>
        </div>
    </div>
  )
}

export default Hero