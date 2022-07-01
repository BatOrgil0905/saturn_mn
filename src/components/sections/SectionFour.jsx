import React from 'react';
import { InfoOne, InfoTwo, InfoThree } from '../images';

const SectionFour = () => {
  return (
    <section className="px-[6%] my-8">
      <div className="my-24 flex flex-col lg:flex-row items-center justify-around gap-2">
            <InfoOne />
            <div className="flex flex-col text-center lg:text-left w-full lg:w-1/2">
                <h1 className="text-xl lg:text-2xl text-white my-6">Манай сайтын бүх үйлчилгээ ҮНЭГҮЙ</h1>
                <p className="text-[14px] lg:text-[16px] text-gray-200">
                    Saturn.MN сайт нь анх үүсгэн байгуулагдсан цагаас хойш 100% ашгийн бус сайт байсаар ирсэн бөгөөд ямар нэгэн сансар огторгуйтай холбоогүй зар сурталчилгаа, захиалгат мэдээ оруулдаггүй болохыг дуулгахад таатай байна.
                </p>
            </div>
        </div>
        <div className="my-24 flex flex-col-reverse lg:flex-row items-center justify-around gap-2">
            <div className="flex flex-col text-center lg:text-right w-full lg:w-1/2">
                <h1 className="text-xl lg:text-2xl text-white my-6">Танд мэдлэг олгох нь бидний ЗОРИЛГО</h1>
                <p className="text-[14px] lg:text-[16px] text-gray-200">
                   Сансар огторгуй бол хүн бүрийн зайлшгүй мэдэх ёстой зүйлүүдийн нэг билээ. Биднийг тойроод маш олон гариг, од, галактикууд гээд маш олон зүйлс байгааг бид мэднэ. Өөр цаашаа ямар нууцлаг хачирхалтай зүйлс байгаа бол? Тиймээс бидний гол зорилго бол хүн бүрт Одон орон сансар огторгуйн тухай мэдлэг болон сүүлийн үеийн мэдээллэл олгох юм.
                </p>
            </div>
            <InfoThree />
        </div>
        <div className="my-24 flex flex-col lg:flex-row items-center justify-around gap-2">
            <InfoTwo />
            <div className="flex flex-col text-center lg:text-left w-full lg:w-1/2">
                <h1 className="text-xl lg:text-2xl text-white my-6">ХААНААС Ч, ХЭЗЭЭ Ч хандах боломжтой</h1>
                <p className="text-[14px] lg:text-[16px] text-gray-200">
                    Бид хаанаас ч, ямар ч ухаалаг төхөөрөмжөөс ороход ээлтэй байлгахын үүднээс вебсайтынхаа кодчиллыг бүх ухаалаг төхөөрөмж дээр туршин зассан.
                </p>
            </div>
        </div>
    </section>
  );
}

export default SectionFour