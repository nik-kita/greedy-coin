import { HandlebarState, UiState } from '@greedy-coin/types';
import { useSelector } from 'react-redux';

export const Handlebar = () => {
  const handlebar = useSelector<UiState>(({ handlebar }) => handlebar) as HandlebarState;

  return <div>
    <hr {...{
      style: {
        border: `10px solid ${handlebar.envColor}`,
        borderRadius: '10px',
      }
    }}/>
    <pre>
      {JSON.stringify(handlebar, null, 4)}
    </pre>
  </div>
}
