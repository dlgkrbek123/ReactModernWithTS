import type { FC } from 'react';
import type { ReactDivProps } from '../../components';
import { Div } from '../../components';
import { Icon } from './Icon';

export type ModalProps = ReactDivProps & {
  open?: boolean;
};

export type ModalContentProps = ReactDivProps & {
  closeIconClassName?: string;
  onCloseIconClicked?: () => void;
};

export type ModalActionProps = ReactDivProps & {};

export const Modal: FC<ModalProps> = ({
  open,
  className: _className,
  ...props
}) => {
  const className = [_className, 'modal', open ? 'modal-open' : ''].join(' ');

  return <div {...props} className={className} />;
};

export const ModalContent: FC<ModalContentProps> = ({
  className: _className,
  closeIconClassName: _closeIconClassName,
  children,
  onCloseIconClicked,
  ...props
}) => {
  const showCloseIcon = onCloseIconClicked ? true : false;
  const className = ['modal-box', showCloseIcon && 'relative', _className].join(
    ' '
  );
  const closeIconClassName =
    _closeIconClassName ?? 'btn-primary btn-outline btn-sm';

  return showCloseIcon ? (
    <div {...props} className={className}>
      <Div className="absolute" right="0.5rem" top="0.5rem">
        <Icon
          name="close"
          className={closeIconClassName}
          onClick={onCloseIconClicked}
        />
      </Div>
      {children}
    </div>
  ) : (
    <div {...props} className={className} children={children} />
  );
};

export const ModalAction: FC<ModalActionProps> = ({
  className: _className,
  ...props
}) => {
  const className = ['modal-action', _className].join(' ');
  return <div className={className} {...props}></div>;
};
