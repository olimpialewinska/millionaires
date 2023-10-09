import { useSpring, animated, useTransition } from "@react-spring/web";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  const close = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (e.target !== e.currentTarget) return;
    onClose();
  };

  const transition = useTransition(isOpen, {
    from: {
      scale: 0,
      opacity: 0,
    },
    enter: {
      scale: 1,
      opacity: 1,
    },
    leave: {
      scale: 0,
      opacity: 0,
    },
  });

  return (
    <>
      {transition(
        (styles, item) =>
          item && (
            <animated.div
              className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center"
              onClick={close}
            >
              <animated.div
                className="bg-white rounded-md shadow-lg p-4 max-h-screen gradient"
                style={styles}
              >
                {children}
              </animated.div>
            </animated.div>
          )
      )}
    </>
  );
};
