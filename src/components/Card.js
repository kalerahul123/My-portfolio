import { Heading, HStack, Image, Text, Stack } from "@chakra-ui/react";
import { Card, Divider,ButtonGroup, Button,CardBody, CardFooter } from '@chakra-ui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const CustomCard = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Card maxW='sm'>
      <Image
          src= {imageSrc}
          borderRadius = "md"
        />
      <CardBody>
        <Stack mt='1' spacing='1'>
          <Heading size='md'>{title}</Heading>
          <Text color={'GrayText'}>
              {description} 
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Text>See more &nbsp;<FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
