import * as React from 'react';
import { CSSProperties } from 'react';
import ReactDOM from 'react-dom/client';
// import { useNavigate } from 'react-router-dom';

interface AlertModalProps {
  title?: string;
  message?: string;
  onConfirm?: () => void;
  onRemove: () => void;
  style?: CSSProperties;
}

class AlertModal extends React.Component<AlertModalProps> {
  render() {
    const { title, message, onConfirm, onRemove } = this.props;
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={onRemove}>
        <div className="bg-white p-8 rounded-lg shadow-lg w-96" onClick={e => e.stopPropagation()}>
          {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
          <div className="mb-4">
            {message ? message : '내용 없음'}
          </div>
          <div className="flex justify-end gap-4">
            <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" onClick={onRemove}>취소</button>
            <button className="px-4 py-2 bg-primary/80 text-white rounded hover:bg-primary/100" onClick={() => {
              onConfirm && onConfirm();
              onRemove();
            }}>확인</button>
          </div>
        </div>
      </div>
    );
  }
}

export interface AlertOption {
  title?: string;
  message?: string;
  onConfirm?: () => void;
  style?: CSSProperties;
}

class AlertBuilder {
  private rootElement?: HTMLDivElement;

  public show = (option: AlertOption) => {
    const { message, title, onConfirm } = option;
    this.removeMessage();
    const divElement = document.createElement('div');
    divElement.className = `alert-container`;
    document.body.appendChild(divElement);
    this.rootElement = divElement;

    const root = ReactDOM.createRoot(this.rootElement);
    root.render(<AlertModal title={title}
                            message={message}
                            onConfirm={onConfirm}
                            onRemove={this.removeMessage} />);
  }

  private removeMessage = () => {
    this.rootElement?.remove();
    this.rootElement = undefined;
  };
}

export const Alert = new AlertBuilder();
