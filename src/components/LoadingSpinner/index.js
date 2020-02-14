import Styled from 'styled-components';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default Styled(AiOutlineLoading3Quarters)`
  animation: rotate 1s linear infinite;

  @keyframes rotate {
    from {transform: rotate(0deg)}
    to {transform: rotate(359deg)}
  }
`;
