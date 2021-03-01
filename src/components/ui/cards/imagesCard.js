import { Flex, Image } from "@chakra-ui/react";

const ImagesCard = ({
  boxSize = "180px",
  borderRadius = "0.8rem",
  images,
  direction = "row",
}) => {
  return (
    <Flex flexWrap="wrap" flexDirection={direction} justifyContent="center">
      {images.map((img, indx) => (
        <Image
          {...img.margin}
          key={indx}
          boxSize={boxSize}
          borderRadius={borderRadius}
          transform={`rotate(${img.rotation})`}
          src={img.src}
          mx="0.2rem"
          objectFit="cover"
          shadow="2xl"
        />
      ))}
    </Flex>
  );
};

export default ImagesCard;
