import styled, { keyframes } from 'styled-components';
type LoaderType = 'success' | 'error' | 'warning' | 'default';
interface LoaderProps {
    type?: LoaderType;
}

const heartbeat = keyframes`
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1.0);
  }
  100% {
    transform: scale(0.5);
  }
`;

export const Loader = styled.span<LoaderProps>`
    width: 10px;
    height: 10px;
    background: ${({ type }) => {
        switch (type) {
            case 'success':
                return 'green';
            case 'error':
                return 'red';
            case 'warning':
                return 'yellow';
            default:
                return '#FFF';
        }
    }};
    display: inline-block;
    border-radius: 50%;
    box-sizing: border-box;
    animation: ${heartbeat} 1.5s ease-in-out infinite;
`;
