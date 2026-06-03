import React from 'react'  
import { Typography, Row, Col } from 'antd'  
const { Title, Paragraph } = Typography

export default function StadiumSanctuary() {  
  return (  
    <div className="bg-black text-white min-h-screen">  
      {/* Header Section: Tucked Serif Header (Maybourne Pattern) */}  
      <section className="pt-24 px-12 relative overflow-hidden">  
        <div className="absolute top-24 left-12 z-10">  
          <Title className="!text-white !font-serif !text-7xl !mb-0 !italic">  
            The Stadium  
          </Title>  
          <Title className="!text-white !font-serif !text-7xl !mt-[-10px] !ml-20">  
            Sanctuary  
          </Title>  
        </div>  
          
        {/* High-Contrast Hero Visual */}  
        <div className="w-full h-[80vh] flex justify-end">  
          <img   
            src="https://cdn.marblism.com/Vx_LJO1XIwc.webp"   
            alt="Stadium Sanctuary"  
            className="w-3/4 h-full object-cover grayscale-[30%] contrast-[1.2]"  
          />  
        </div>  
      </section>

      {/* Content Grid: Asymmetrical Magazine Layout */}  
      <section className="px-12 py-32">  
        <Row gutter={[80, 80]} align="top">  
          <Col span={10}>  
            <div className="sticky top-24">  
              <Paragraph className="!text-gray-400 !text-lg !uppercase !tracking-widest !mb-8">  
                The Pulse of Performance  
              </Paragraph>  
              <Paragraph className="!text-white !text-2xl !font-light !leading-relaxed">  
                An immersive suite designed for the elite athlete and the high-stakes spectator.   
                Absolute privacy meeting the roar of the crowd.  
              </Paragraph>  
            </div>  
          </Col>  
            
          <Col span={14}>  
            <div className="space-y-32">  
              {/* Secondary Details Image */}  
              <div className="bg-[#1a1a1a] p-12 aspect-[4/5] flex items-center justify-center">  
                 <span className="text-gray-600 italic">Additional "Brass & Shadow" assets loading...</span>  
              </div>  
                
              <div className="pl-24">  
                <Title level={3} className="!text-white !font-serif !italic !mb-8">  
                  Redefining the Box  
                </Title>  
                <Paragraph className="!text-gray-300 !text-lg">  
                  Every surface is textured to absorb the chaos of the exterior while reflecting the   
                  intensity of the performance within. Brass accents catch the floodlights, casting   
                  shadows that define the space as a fortress of focus.  
                </Paragraph>  
              </div>  
            </div>  
          </Col>  
        </Row>  
      </section>  
    </div>  
  )  
}  
