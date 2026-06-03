import React from 'react'  
import { Typography, Row, Col } from 'antd'  
const { Title, Paragraph } = Typography

export default function CinematicSanctuary() {  
  return (  
    <div className="bg-black text-white min-h-screen">  
      <section className="pt-24 px-12 relative overflow-hidden">  
        <div className="absolute top-24 left-12 z-10">  
          <Title className="!text-white !font-serif !text-7xl !mb-0 !italic">The Cinematic</Title>  
          <Title className="!text-white !font-serif !text-7xl !mt-[-10px] !ml-20">Sanctuary</Title>  
        </div>  
        <div className="w-full h-[80vh] flex justify-end">  
          <img src="https://cdn.marblism.com/QS08Ye5-snV.webp" alt="Cinematic Sanctuary" className="w-3/4 h-full object-cover grayscale-[20%] contrast-[1.1]"/>  
        </div>  
      </section>  
      <section className="px-12 py-32">  
        <Row gutter={[80, 80]}>  
          <Col span={10}>  
            <div className="sticky top-24">  
              <Paragraph className="!text-gray-400 !text-lg !uppercase !tracking-widest !mb-8">Designed for Stillness</Paragraph>  
              <Paragraph className="!text-white !text-2xl !font-light !leading-relaxed">  
                Curated for storytelling and absolute immersion. A theater where the world outside ceases to exist.  
              </Paragraph>  
            </div>  
          </Col>  
          <Col span={14}>  
            <div className="pl-24 pt-40">  
              <Title level={3} className="!text-white !font-serif !italic !mb-8">Visual Silence</Title>  
              <Paragraph className="!text-gray-300 !text-lg">  
                Deep shadows and soft brass highlights frame the narrative. The space is a vacuum of noise, leaving only the rhythm of light and shadow.  
              </Paragraph>  
            </div>  
          </Col>  
        </Row>  
      </section>  
    </div>  
  )  
}  
