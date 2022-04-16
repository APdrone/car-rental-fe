import styled from "styled-components";
import tw from "twin.macro";
import carLogoImg from "../../../images/car-logo.png";
import CarLogoDarkImg from "../../../images/car-logo-dark.png";

interface ILogoProps {
  color?: "white" | "dark";
  bgColor?: "white" | "dark";
}

const LogoContainer = styled.div`
  ${tw`
        flex
        items-center
    `}
`;

const LogoText = styled.div`
  ${tw`
        text-xl
        md:text-2xl
        font-bold
        text-black
        m-1  
        `}
  ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)}
` as any;

const Image = styled.div`
  ${tw`
        h-6
        md:h-9
    `}

  img {
    width: auto;
    height: 100%;
  }
`;

const Logo = (props: ILogoProps) => {
  const { color, bgColor } = props;

  return (
    <LogoContainer>
      <Image>
        <img src={bgColor === "dark" ? CarLogoDarkImg : carLogoImg} alt="" />
      </Image>
      <LogoText color={color || "dark"}>YourCar.</LogoText>
    </LogoContainer>
  );
};

export default Logo;
