import styled, { keyframes } from 'styled-components';
type LoaderType = 'success' | 'error' | 'warning' | 'default';
interface LoaderProps {
    type?: LoaderType;
}
// const animloader = keyframes`
//   0% {
//     transform: scale(0);
//     opacity: 1;
//   }
//   100% {
//     transform: scale(1);
//     opacity: 0;
//   }
// `;

// // Loader 컴포넌트
// export const Loader = styled.span<LoaderProps>`
//     width: 10px;
//     height: 10px;
//     background: ${({ type }) => {
//         switch (type) {
//             case 'success':
//                 return 'green'; // 또는 theme.colors.success 등
//             case 'error':
//                 return 'red'; // 또는 theme.colors.error 등
//             case 'warning':
//                 return 'yellow'; // 또는 theme.colors.warning 등
//             default:
//                 return '#FFF';
//         }
//     }};
//     display: inline-block;
//     border-radius: 50%;
//     box-sizing: border-box;
//     animation: ${animloader} 1s ease-in infinite;
// `;
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
                return 'green'; // 또는 theme.colors.success 등
            case 'error':
                return 'red'; // 또는 theme.colors.error 등
            case 'warning':
                return 'yellow'; // 또는 theme.colors.warning 등
            default:
                return '#FFF';
        }
    }};
    display: inline-block;
    border-radius: 50%;
    box-sizing: border-box;
    animation: ${heartbeat} 1.5s ease-in-out infinite;
`;
