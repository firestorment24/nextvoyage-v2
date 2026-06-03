import React from 'react'  
import { Typography, Row, Col } from 'antd'  
const { Title, Paragraph } = Typography

export default function FortressSanctuary() {  
  return (  
    <div className="bg-black text-white min-h-screen">  
      <section className="pt-24 px-12 relative overflow-hidden">  
        <div className="absolute top-24 left-12 z-10">  
          <Title className="!text-white !font-serif !text-7xl !mb-0 !italic">The Fortress</Title>  
          <Title className="!text-white !font-serif !text-7xl !mt-[-10px] !ml-20">Sanctuary</Title>  
        </div>  
        <div className="w-full h-[80vh] flex justify-end">  
          <img src="https://cdn.marblism.com/hvsJKd2n3Vn.webp" alt="Fortress Sanctuary" className="w-3/4 h-full object-cover contrast-[1.3] brightness-[0.8]"/>  
        </div>  
      </section>  
      <section className="px-12 py-32">  
        <Row gutter={[80, 80]}>  
          <Col span={10}>  
            <div className="sticky top-24">  
              <Paragraph className="!text-gray-400 !text-lg !uppercase !tracking-widest !mb-8">Absolute Security</Paragraph>  
              <Paragraph className="!text-white !text-2xl !font-light !leading-relaxed">  
                Brutalist architecture meets the unyielding cliffside. A sanctuary where privacy is the ultimate luxury.  
              </Paragraph>  
            </div>  
          </Col>  
          <Col span={14}>  
            <div className="pl-24 pt-40">  
              <Title level={3} className="!text-white !font-serif !italic !mb-8">Unyielding Geometry</Title>  
              <Paragraph className="!text-gray-300 !text-lg">  
                Concrete and steel forged into the landscape. This is the physical embodiment of safety, wrapped in the cold elegance of the night.  
              </Paragraph>  
            </div>  
          </Col>  
        </Row>  
      </section>  
    </div>  
  )  
}  
