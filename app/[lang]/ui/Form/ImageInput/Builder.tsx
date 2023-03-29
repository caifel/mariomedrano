import { DivButton } from '@ui/Button';
import React from 'react';
import CloseSvg from './img/close.svg';
import { InputProps } from './types';

// eslint-disable-next-line react/display-name
const Builder = React.forwardRef<HTMLInputElement, InputProps>(
  ({ value, name, onChange, ...others }, ref) => {
    const fileNameLength = String(value).length;
    const fileName = fileNameLength > 5 ? `...${String(value).slice(-25)}` : value;
    const handleClose = () => onChange?.(null as any);
    const renderTrigger = () => (
      <label>
        <input
          {...others}
          ref={ref}
          value={value || ''}
          onChange={onChange}
          type="file"
          accept="image/png, image/jpeg, image/webp, image/gif"
          style={{ width: 1, height: 1, opacity: 0, position: 'absolute' }}
        />
        <DivButton outline className="min-w-min">
          {'Select'}
        </DivButton>
      </label>
    );

    const renderInfo = () => (
      <div>
        <small className="font-semibold">{'The limit size of the file is 5 MB'}</small>
        {value ? (
          <div className="mt-1 flex gap-x-1 items-center">
            <small className="text-gray-400">{fileName}</small>
            <button onClick={handleClose}>
              <CloseSvg width="20" className="text-red-600" />
            </button>
          </div>
        ) : (
          <p className="mt-1">
            <small className="text-gray-400">{'"No image selected"'}</small>
          </p>
        )}
      </div>
    );

    return (
      <div className="flex gap-x-4">
        {renderTrigger()}
        {renderInfo()}
      </div>
    );
  }
);

export default Builder;
