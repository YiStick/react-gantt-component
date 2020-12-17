import React, { useContext, useMemo, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';
import Context from '../../context';
import { Gantt } from '../../types';
import './index.less';
interface TaskBarProps {
  data: Gantt.Bar;
}

const TaskBarThumb: React.FC<TaskBarProps> = ({ data }) => {
  const { store, renderBarThumb, prefixCls } = useContext(Context);
  const prefixClsTaskBarThumb = `${prefixCls}-task-bar-thumb`;
  const { translateX: viewTranslateX, viewWidth } = store;
  const { translateX, translateY, label } = data;
  const type = useMemo(() => {
    const rightSide = viewTranslateX + viewWidth;
    const right = translateX;

    return right - rightSide > 0 ? 'right' : 'left';
  }, [translateX, viewTranslateX, viewWidth]);
  const left = useMemo(
    () =>
      type === 'right' ? viewTranslateX + viewWidth - 5 : viewTranslateX + 2,
    [type, viewTranslateX, viewWidth]
  );
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
      store.scrollToBar(data, type);
    },
    [data, store, type]
  );
  return (
    <div
      role="none"
      className={classNames(prefixClsTaskBarThumb, {
        [`${prefixClsTaskBarThumb}-left`]: type === 'left',
        [`${prefixClsTaskBarThumb}-right`]: type === 'right',
      })}
      style={{
        left,
        top: translateY - 5,
      }}
      onClick={handleClick}
    >
      {renderBarThumb ? renderBarThumb(data.record, type) : label}
    </div>
  );
};
export default observer(TaskBarThumb);
