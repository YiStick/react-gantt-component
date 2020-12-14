import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Context from '../../context';
import styles from './index.less';

/**
 * 鼠标hover效果模拟
 */
const SelectionIndicator: React.FC = () => {
  const { store } = useContext(Context);
  const { showSelectionIndicator, selectionIndicatorTop, rowHeight } = store;
  return showSelectionIndicator ? (
    <div
      className={styles['selection-indicator']}
      style={{
        height: rowHeight,
        top: selectionIndicatorTop,
      }}
    />
  ) : null;
};
export default observer(SelectionIndicator);
