import { Container, Alert } from 'react-bootstrap';

function ErrorMessage({ text }: { text: string }) {
  return (
    <Container>
      <Alert variant="danger">{text}</Alert>
    </Container>
  );
}

export default ErrorMessage;
