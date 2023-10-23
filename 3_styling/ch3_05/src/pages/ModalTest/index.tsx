import { Title, Subtitle } from '../../components';
import { Modal, ModalContent, ModalAction } from '../../theme/daisyui';
import * as D from '../../data';

const ModalTest = () => {
  const open = true;
  const closeClicked = () => alert('closeClicked');
  const acceptClicked = () => alert('acceptClicked');

  return (
    <section className="mt-4">
      <Title>ModalTest</Title>
      <Modal open={open}>
        <ModalContent onCloseIconClicked={closeClicked}>
          <Subtitle>Modal</Subtitle>
          <p className="mt-4 text-justify">{D.randomParagraphs()}</p>
          <ModalAction
            className="w-24 normal-case btn-primary btn-sm mx-auto flex justify-center items-center"
            onClick={acceptClicked}
          >
            Close
          </ModalAction>
        </ModalContent>
      </Modal>
    </section>
  );
};

export default ModalTest;
