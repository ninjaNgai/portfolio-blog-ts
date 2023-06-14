import { Container, Heading } from '@chakra-ui/react';
import { events } from 'constants/events';
import EventCard from './event-card';

const Events = () => {
  return (
    <Container maxW={'5xl'} py={12}>
      <Heading marginTop={'2rem'} marginBottom={'1rem'}>
        Events
      </Heading>
      {events.map((event) => (
        <EventCard key={event.heading} {...event} />
      ))}
    </Container>
  );
};

export default Events;
