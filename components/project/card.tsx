import {
  Box,
  Heading,
  Text,
  HStack,
  Stack,
  Img,
  useColorModeValue,
  Divider
} from '@chakra-ui/react';
import ProjectModal from './modal';

export default function ProjectCard({
  heading,
  subheader,
  summary,
  img,
  circaDate,
  position,
  company,
  modalInfo
}) {
  return (
    <>
      <Box
        w={['full', '32rem', '32rem', '50vw']}
        minW={'30rem'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'md'}
        rounded={'md'}
        cursor="pointer"
        p={6}
        mx="auto"
        overflow={'hidden'}
        marginBottom={'1rem'}>
        <HStack spacing={'1rem'}>
          <Img
            objectFit="cover"
            maxW={{ base: '100%', sm: '300px' }}
            marginRight="1rem"
            src={img.src}
            alt={img.alt}
          />
          <Stack>
            <Heading size="md">{heading}</Heading>{' '}
            <Heading
              as="h4"
              size="sm"
              color={useColorModeValue('gray.400', 'white')}
              marginTop={'0.5rem'}>
              {subheader}
            </Heading>
            <Text py="2">{summary}</Text>
            <Heading size="sm" marginTop={'0.5rem'}>
              {position}
            </Heading>
            <Heading size="sm">{company}</Heading>
            <Heading size="sm">{circaDate}</Heading>
            <Divider />
            <ProjectModal
              heading={heading}
              circaDate={circaDate}
              position={position}
              company={company}
              {...modalInfo}
            />
          </Stack>
        </HStack>
      </Box>
    </>
  );
}
