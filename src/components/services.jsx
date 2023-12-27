import React from 'react';

function Card({title,description}) {
    return (
        <div className='max-w-[20em] min-h-[15em]  rounded-3xl shadow-xl border-customBrown border-[1px] bg-white p-[2em] space-y-4'>
        <div className="text-customBrown text-lg font-bold">{title}</div>
            <div className="font-customLora">
                {description}
            </div>
        </div>
    )
}

export default function Services() {
  return (
    <div>
        <div className="text-customBrown font-bold font-custom text-xl text-center">OUR SERVICES</div>
        <div className="text-customBlue font-bold text-4xl text-center">Leading Software Company</div>
        <div className='justify-center flex gap-8 my-[2em] mx-[1em] flex-wrap'>
            <Card title={"Website Development"} description={"We provide customized website for your business which help to grow your business, we povide you the website in latest technology with support."}/>
            <Card title={"Mobile App Development"} description={"Mobile App Development Service Application Development for Android, iOS, and Cross-Platform. Mobile applications are trending nowadays, so let's use technology to serve your customer in a better way."}/>
            <Card title={"SEO Service"} description={"We provides SEO services to help businesses maximize their online visibility, drive website traffic, and increase conversions. Our services include keyword research, link building, content creation, and technical optimization."}/>
            <Card title={"Digital Marketing Service"} description={"We provide digital marketing services to help businesses maximize their online visibility, drive website traffic, and increase conversions. Our services include keyword research, link building, content creation, and technical optimization."}/>
            <Card title={"Graphic Designing"} description={"We provide graphic designing services to help businesses maximize their online visibility, drive website traffic, and increase conversions. Our services include keyword research, link building, content creation, and technical optimization."}/>
            <Card title={"UI/UX Design"} description={"UI/UX Design We help you give your customers an awesome time by developing exciting interface for mobile and web applications."} />
            <Card title={"Website Maintenance Service"} description={"Website Maintenance ServiceAre tactics to help keep your website updated and functioning properly."} />
         </div>

    </div>
  );
}
