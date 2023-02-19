import { Box, Heading, Text, Stack, Img, useColorModeValue, Divider } from '@chakra-ui/react';
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
      <Stack
        spacing={2}
        direction={['column', 'row']}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'md'}
        rounded={'md'}
        cursor="pointer"
        mx="auto"
        overflow={'hidden'}
        marginBottom={'1rem'}>
        <Box>
          <Img
            objectFit="cover"
            maxW={{ base: '100%', sm: '300px' }}
            marginRight="1rem"
            src={img.src}
            alt={img.alt}
          />
        </Box>
        <Box flex="1" padding="1rem">
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
        </Box>
      </Stack>
    </>
  );
}
