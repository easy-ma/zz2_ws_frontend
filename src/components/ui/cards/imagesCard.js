import { Flex, Image } from "@chakra-ui/react";

const ImagesCard = ({
  m = "0 0.5rem",
  boxSize = "180px",
  borderRadius = "0.8rem",
  images,
}) => {
  return (
    <Flex flexWrap="wrap" justifyContent="center">
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
