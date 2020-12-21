import { createContext } from 'react';
import GanttStore from './store';
import { DefaultRecordType, Gantt } from './types';

export interface GanttContext<RecordType = DefaultRecordType> {
  prefixCls: string;
  store: GanttStore;
  getBarColor?: (
    record: Gantt.Record<RecordType>
  ) => { backgroundColor: string; borderColor: string };
  showBackToday: boolean;
  showUnitSwitch: boolean;
  onRow?: {
    onClick: (record: Gantt.Record<RecordType>) => void;
  };
  tableIndent: number;
  expandIcon?: ({
    level,
    collapsed,
    onClick,
  }: {
    level: number;
    collapsed: boolean;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  }) => React.ReactNode;
  renderBar?: (
    barInfo: Gantt.Bar<RecordType>,
    { width, height }: { width: number; height: number }
  ) => React.ReactNode;
  renderGroupBar?: (
    barInfo: Gantt.Bar<RecordType>,
    { width, height }: { width: number; height: number }
  ) => React.ReactNode;
  renderBarThumb?: (
    item: Gantt.Record<RecordType>,
    type: 'left' | 'right'
  ) => React.ReactNode;
  onBarClick?: (record: Gantt.Record<RecordType>) => void;
  tableCollapseAble: boolean;
  scrollTop: boolean | React.CSSProperties;
}
const context = createContext<GanttContext>({} as GanttContext);
export default context;
