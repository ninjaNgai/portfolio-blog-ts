import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Heading,
  Text
} from '@chakra-ui/react';

const getBody = ({ projectType, body, body2, techStack, projectAccomplishments }) => {
  switch (projectType) {
    case 'THESIS':
      return (
        <>
          <b>Abstract</b>
          <Text marginBottom={'1rem'}>{body}</Text>
          {body && <Text marginBottom={'1rem'}>{body2}</Text>}
        </>
      );
    case 'INTERNSHIP':
      return (
        <>
          <b>What is the application about?</b>
          <Text marginBottom={'1rem'}>{body}</Text>
          <b>What part of the application was I involved in?</b>
          <Text marginBottom={'1rem'}>{body2}</Text>
          <b>What frameworks and technologies were used in the application?</b>
          <Text marginBottom={'1rem'}>{techStack}</Text>
          {projectAccomplishments && (
            <>
              <b>Project Accomplishments</b>
              <Text marginBottom={'1rem'} marginLeft={'1rem'}>
                <ul>
                  {projectAccomplishments.map((accomplishment) => (
                    <li key={accomplishment}>{accomplishment}</li>
                  ))}
                </ul>
              </Text>
            </>
          )}
        </>
      );
    case 'INTERNSHIP_2016':
      return (
        <>
          <b>What was the objective for this project?</b>
          <Text marginBottom={'1rem'}>{body}</Text>
          <b>What was the tech stack for this project?</b>
          <Text marginBottom={'1rem'}>{techStack}</Text>
          <b>Project Accomplishments</b>
          <Text marginBottom={'1rem'} marginLeft={'1rem'}>
            <ul>
              {projectAccomplishments.map((accomplishment) => (
                <li key={accomplishment}>{accomplishment}</li>
              ))}
            </ul>
          </Text>
        </>
      );
    default:
      return <></>;
  }
};

export default function ProjectModal({
  heading,
  body,
  body2,
  circaDate,
  position,
  company,
  techStack,
  projectAccomplishments,
  link,
  linkTitle,
  slidesLink,
  youtubeLink,
  projectType
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Read more</Button>

      <Modal isOpen={isOpen} onClose={onClose} size={'3xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{heading}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {getBody({
              projectType,
              body,
              body2,
              techStack,
              projectAccomplishments
            })}
            <Heading size="sm" marginTop={'0.5rem'}>
              {position}
            </Heading>
            <Heading size="sm">{company}</Heading>
            <Heading size="sm" marginBottom={'1rem'}>
              {circaDate}
            </Heading>
            {link && (
              <Button as={'a'} href={link} target={'_blank'} marginRight={'0.5rem'}>
                {linkTitle}
              </Button>
            )}
            {slidesLink && (
              <Button as={'a'} href={slidesLink} target={'_blank'} marginRight={'0.5rem'}>
                Slides
              </Button>
            )}
            {youtubeLink && (
              <Button as={'a'} href={youtubeLink} target={'_blank'} marginRight={'0.5rem'}>
                YouTube
              </Button>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
