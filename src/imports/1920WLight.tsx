import svgPaths from "./svg-c81mhs62el";
import imgImweb2309LogoBlack2X360Png from "figma:asset/eb3725daaab9adcba213c0f77279034cf252ba62.png";
import imgImage from "figma:asset/0b415a08e9cc7d1d66c2c2d01525ba4566096114.png";
import img57Bd974802Ea2Png from "figma:asset/d27c914e6cde71111fdd97e5b8af32ac1eb86726.png";
import imgOverlay from "figma:asset/72e3750f693701e3c1944f076a630a8c43c8fcb9.png";

function List() {
  return (
    <div className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[40px] leading-[0] left-[1500.47px] not-italic right-[40px] text-[15px] text-right text-white top-[20px]" data-name="List">
      <div className="-translate-y-1/2 absolute flex flex-col h-[18px] justify-center right-[296.22px] top-[20px] w-[68.31px]">
        <p className="leading-[24px] whitespace-pre-wrap">경력 발자취</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[18px] justify-center right-[198.11px] top-[20px] w-[68.31px]">
        <p className="leading-[24px] whitespace-pre-wrap">삶의 발자취</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[18px] justify-center right-[112.91px] top-[20px] w-[55.4px]">
        <p className="leading-[24px] whitespace-pre-wrap">나아갈 길</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[18px] justify-center right-[14.8px] top-[20px] w-[68.31px]">
        <p className="leading-[24px] whitespace-pre-wrap">나의 이야기</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[80px] left-0 top-0 w-[1920px]" data-name="Container">
      <List />
    </div>
  );
}

function Imweb2309LogoBlack2X360Png() {
  return (
    <div className="absolute h-[24.08px] left-0 top-[-0.05px] w-[95px]" data-name="imweb_2309_logo_black_2x_360.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.02%] left-0 max-w-none top-[-0.01%] w-full" src={imgImweb2309LogoBlack2X360Png} />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[30px] left-[4.45px] top-[35px] w-[522.91px]" data-name="Link">
      <Imweb2309LogoBlack2X360Png />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[25px] justify-center leading-[0] left-[109.46px] not-italic text-[22px] text-black top-[14.5px] w-[398.65px]">
        <p className="leading-[normal] whitespace-pre-wrap">이 사이트는 아임웹으로 제작되었습니다.</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute bg-[#15181e] h-[49px] left-[531.81px] rounded-[4px] top-[24.16px] w-[180px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[16px] text-center text-white top-[24.5px] w-[100.65px]">
        <p className="leading-[49px] whitespace-pre-wrap">무료 시작하기</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p32be2380} fill="var(--fill-0, #15181E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[17px] left-[849.11px] top-[40.5px] w-[150.89px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-0 not-italic text-[#15181e] text-[16px] top-[8.5px] w-[137.09px]">
        <p className="leading-[normal] whitespace-pre-wrap">{`고객사례 확인하기 `}</p>
      </div>
      <div className="absolute flex items-center justify-center left-[136.89px] size-[14px] top-[2.84px]">
        <div className="-scale-y-100 flex-none">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[100px] left-[460px] right-[460px] top-0" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Alert() {
  return (
    <div className="absolute bg-white bottom-0 h-[100px] left-0 shadow-[0px_-4px_15px_0px_rgba(0,0,0,0.08)] w-[1920px]" data-name="Alert">
      <Container1 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute h-[776.39px] leading-[0] left-[320px] right-[320px] text-center text-white top-[80px]" data-name="Main">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Playfair_Display:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold h-[85px] justify-center left-[calc(50%+0.11px)] text-[64px] top-[357.5px] w-[656.45px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[76.8px]">메인 타이틀을 입력하세요</span>
          <span className="leading-[76.8px] text-[#363636]">&nbsp;</span>
        </p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['NanumGothic:Regular',sans-serif] h-[29px] justify-center left-[calc(50%+0.1px)] not-italic text-[21.9px] top-[460.3px] w-[240.42px]">
        <p className="leading-[28.8px] whitespace-pre-wrap">서브 타이틀을 입력하세요</p>
      </div>
    </div>
  );
}

function Background() {
  return <div className="absolute bg-[#eee] h-[200px] left-[20px] right-[660px] top-[180px]" data-name="Background" />;
}

function Heading() {
  return (
    <div className="absolute font-bold h-[84.31px] leading-[0] left-[660px] right-[20px] top-[190px]" data-name="Heading 4">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Playfair_Display:Bold',sans-serif] h-[27px] justify-center left-0 text-[#5a4633] text-[20px] top-[25.5px] w-[149.816px]">
        <p className="leading-[24px] whitespace-pre-wrap">WHO ARE YOU?</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Playfair_Display:Bold','Noto_Sans_KR:Bold',sans-serif] h-[48px] justify-center left-0 text-[#1d2a3a] text-[36px] top-[62.13px] w-[285.511px]">
        <p className="leading-[43.2px] whitespace-pre-wrap">{`나, 어떤 사람인가요 `}</p>
      </div>
    </div>
  );
}

function Main1() {
  return (
    <div className="absolute h-[560px] left-[320px] right-[320px] top-[856.39px]" data-name="Main">
      <Background />
      <Heading />
      <div className="-translate-y-1/2 absolute flex flex-col font-['NanumGothic:Regular',sans-serif] h-[19px] justify-center leading-[0] left-[660px] not-italic text-[#858585] text-[14.6px] top-[336.81px] w-[128.67px]">
        <p className="leading-[25.6px] whitespace-pre-wrap">내용을 입력해주세요</p>
      </div>
    </div>
  );
}

function Background1() {
  return <div className="absolute bg-[#eee] h-[200px] left-[645px] right-0 top-[216.12px]" data-name="Background" />;
}

function Main2() {
  return (
    <div className="absolute h-[446.13px] left-[590px] right-[40px] top-[2221.58px]" data-name="Main">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Playfair_Display:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold h-[46px] justify-center leading-[0] left-0 text-[#363636] text-[34.3px] top-[155px] w-[389.72px]">
        <p className="leading-[41.15px] whitespace-pre-wrap">{`언론 타이틀을 입력해주세요  `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['NanumGothic:Regular',sans-serif] h-[19px] justify-center leading-[0] left-0 not-italic text-[#363636] text-[14.6px] top-[228.62px] w-[132.68px]">
        <p className="leading-[25.6px] whitespace-pre-wrap">{`내용을 입력해주세요 `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['NanumGothic:Regular',sans-serif] h-[19px] justify-center leading-[0] left-[calc(50%-601.43px)] not-italic text-[15.5px] text-black text-center top-[285.81px] w-[87.14px]">
        <p className="leading-[22.86px] whitespace-pre-wrap">{`See More ->`}</p>
      </div>
      <Background1 />
    </div>
  );
}

function Background2() {
  return <div className="absolute bg-[#eee] h-[200px] left-[645px] right-0 top-[216.13px]" data-name="Background" />;
}

function Main3() {
  return (
    <div className="absolute h-[446.13px] left-[590px] right-[40px] top-[2667.7px]" data-name="Main">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Playfair_Display:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold h-[46px] justify-center leading-[0] left-0 text-[#363636] text-[34.3px] top-[155px] w-[389.72px]">
        <p className="leading-[41.15px] whitespace-pre-wrap">{`봉사 타이틀을 입력해주세요  `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['NanumGothic:Regular',sans-serif] h-[19px] justify-center leading-[0] left-0 not-italic text-[#363636] text-[14.6px] top-[228.63px] w-[132.68px]">
        <p className="leading-[25.6px] whitespace-pre-wrap">{`내용을 입력해주세요 `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['NanumGothic:Regular',sans-serif] h-[19px] justify-center leading-[0] left-[calc(50%-601.43px)] not-italic text-[15.5px] text-black text-center top-[285.82px] w-[87.14px]">
        <p className="leading-[22.86px] whitespace-pre-wrap">{`See More ->`}</p>
      </div>
      <Background2 />
    </div>
  );
}

function Background3() {
  return <div className="absolute bg-[#eee] h-[200px] left-[645px] right-0 top-[216.12px]" data-name="Background" />;
}

function Main4() {
  return (
    <div className="absolute h-[446.13px] left-[590px] right-[40px] top-[3113.83px]" data-name="Main">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Playfair_Display:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold h-[46px] justify-center leading-[0] left-0 text-[#363636] text-[34.3px] top-[155px] w-[389.72px]">
        <p className="leading-[41.15px] whitespace-pre-wrap">{`교육 타이틀을 입력해주세요  `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['NanumGothic:Regular',sans-serif] h-[19px] justify-center leading-[0] left-0 not-italic text-[#363636] text-[14.6px] top-[228.62px] w-[132.68px]">
        <p className="leading-[25.6px] whitespace-pre-wrap">{`내용을 입력해주세요 `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['NanumGothic:Regular',sans-serif] h-[19px] justify-center leading-[0] left-[calc(50%-601.43px)] not-italic text-[15.5px] text-black text-center top-[285.81px] w-[87.14px]">
        <p className="leading-[22.86px] whitespace-pre-wrap">{`See More ->`}</p>
      </div>
      <Background3 />
    </div>
  );
}

function Background4() {
  return <div className="absolute bg-[#eee] h-[200px] left-[645px] right-0 top-[216.13px]" data-name="Background" />;
}

function Main5() {
  return (
    <div className="absolute h-[546.13px] left-[590px] right-[40px] top-[3559.95px]" data-name="Main">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Playfair_Display:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold h-[46px] justify-center leading-[0] left-0 text-[#363636] text-[34.3px] top-[155px] w-[389.72px]">
        <p className="leading-[41.15px] whitespace-pre-wrap">{`사업 타이틀을 입력해주세요  `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['NanumGothic:Regular',sans-serif] h-[19px] justify-center leading-[0] left-0 not-italic text-[#363636] text-[14.6px] top-[228.63px] w-[132.68px]">
        <p className="leading-[25.6px] whitespace-pre-wrap">{`내용을 입력해주세요 `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['NanumGothic:Regular',sans-serif] h-[19px] justify-center leading-[0] left-[calc(50%-601.43px)] not-italic text-[15.5px] text-black text-center top-[285.82px] w-[87.14px]">
        <p className="leading-[22.86px] whitespace-pre-wrap">{`See More ->`}</p>
      </div>
      <Background4 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[82.25px] leading-[0] left-[20px] right-[20px] text-black text-center top-[30px]" data-name="Heading 4">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Playfair_Display:Regular',sans-serif] font-normal h-[24px] justify-center left-[calc(50%+0.16px)] text-[18px] top-[27px] w-[71.87px]">
        <p className="leading-[21.6px] whitespace-pre-wrap">My Story</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Playfair_Display:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold h-[46px] justify-center left-[calc(50%+0.1px)] text-[34.3px] top-[61.12px] w-[283.79px]">
        <p className="leading-[41.15px] whitespace-pre-wrap">{`타이틀을 입력하세요 `}</p>
      </div>
    </div>
  );
}

function Component57Bd974802Ea2Png() {
  return (
    <div className="-translate-x-1/2 absolute h-[451px] left-1/2 top-0 w-[676.5px]" data-name="57bd974802ea2.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img57Bd974802Ea2Png} />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[451px] left-[20px] overflow-clip right-[20px] top-[228.84px]" data-name="Container">
      <Component57Bd974802Ea2Png />
    </div>
  );
}

function Main6() {
  return (
    <div className="absolute h-[880.84px] left-[320px] right-[320px] top-0" data-name="Main">
      <Heading1 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['NanumGothic:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[18.3px] text-black text-center top-[174.25px] w-[143.51px]">
        <p className="leading-[24px] whitespace-pre-wrap">내용을 입력하세요</p>
      </div>
      <Container2 />
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-[#e3ded6] h-[880.84px] left-0 right-0 top-[4106.08px]" data-name="Background">
      <div className="absolute bg-[#e3ded6] inset-0" data-name="Background" />
      <Main6 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.65)] h-[611.78px] left-0 right-0 top-[4986.92px]" data-name="Overlay">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[210.7%] left-0 max-w-none top-[-55.35%] w-full" src={imgOverlay} />
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.65)] inset-0" data-name="Overlay" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[82.25px] leading-[0] left-[20px] right-[20px] text-black top-[100px]" data-name="Heading 4">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Playfair_Display:Regular',sans-serif] font-normal h-[24px] justify-center left-0 text-[18px] top-[27px] w-[78.27px]">
        <p className="leading-[21.6px] whitespace-pre-wrap">My Vision</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Playfair_Display:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold h-[46px] justify-center left-0 text-[34.3px] top-[61.13px] w-[283.79px]">
        <p className="leading-[41.15px] whitespace-pre-wrap">{`타이틀을 입력하세요 `}</p>
      </div>
    </div>
  );
}

function Background6() {
  return <div className="absolute bg-[#eee] h-[200px] left-[20px] right-[20px] top-[232.25px]" data-name="Background" />;
}

function Main7() {
  return (
    <div className="absolute h-[522.25px] left-[320px] right-[320px] top-[5598.7px]" data-name="Main">
      <Heading2 />
      <Background6 />
    </div>
  );
}

export default function Component1920WLight() {
  return (
    <div className="bg-white relative size-full" data-name="1920w light">
      <Container />
      <Alert />
      <div className="absolute inset-[0_0_343.61px_0]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[149.46%] left-0 max-w-none top-[-24.73%] w-full" src={imgImage} />
        </div>
      </div>
      <Main />
      <Main1 />
      <Main2 />
      <Main3 />
      <Main4 />
      <Main5 />
      <Background5 />
      <Overlay />
      <Main7 />
    </div>
  );
}