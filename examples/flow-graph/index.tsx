import { Divider, Tooltip } from 'antd';
import React from 'react';

import FlowItemDetailPanel from './flow-item-detail-panel';
import FlowItemPanel from './flow-item-panel';
import styles from './index.less';
import { Action } from './model/action/action';
import { ControlEnd } from './model/control/control-end';
import { ControlFork } from './model/control/control-fork';
import { ControlJoin } from './model/control/control-join';
import { ControlStart } from './model/control/control-start';
import { RuleRule } from './model/rule/rule-rule';
import { StrategyChild } from './model/strategy/strategy-child';
import { EditorCommand } from '@/common/constants';
import GGEditor, { Flow, Command, EditableLabel } from '@/index';
import { upperFirst } from 'lodash';
import IconFont from 'examples/component-command/IconFont';
import ReactDOM from 'react-dom';

GGEditor.setTrackable(false);
const FLOW_COMMAND_LIST = [
  EditorCommand.Undo,
  EditorCommand.Redo,
  '-',
  EditorCommand.Copy,
  EditorCommand.Paste,
  EditorCommand.Remove,
  '-',
  EditorCommand.ZoomIn,
  EditorCommand.ZoomOut,
];

interface Props {}

const StrategyFlowGraph: React.FC<Props> = () => {
  return (
    <GGEditor className={styles.editor}>
      <div className={styles.editorHd}>
        {FLOW_COMMAND_LIST.map((name, index) => {
          if (name === '-') {
            return <Divider key={`D-${name}-${index}`} type="horizontal" />;
          }

          return (
            <Command key={`C-${name}-${index}`} name={name}>
              <Tooltip title={upperFirst(name)}>
                <IconFont type={`icon-${name}`} />
              </Tooltip>
            </Command>
          );
        })}
      </div>
      <FlowItemPanel />
      <Flow
        className={styles.editorBd}
        data={{ nodes: [], edges: [] }}
        graphConfig={{
          defaultNode: {
            type: 'bizFlowNode',
          },
          defaultEdge: {
            type: 'bizFlowEdge',
          },
        }}
        customModes={(mode, behaviors) => {
          console.info(mode);
          console.info(behaviors);
          if ('zoom-canvas' in behaviors) {
            delete behaviors['zoom-canvas'];
          }
          return behaviors;
        }}
      />
      {ControlStart.RegisterNode}
      {ControlEnd.RegisterNode}
      {ControlFork.RegisterNode}
      {ControlJoin.RegisterNode}
      {RuleRule.RegisterNode}
      {Action.RegisterNode}
      {StrategyChild.RegisterNode}
      <FlowItemDetailPanel />
    </GGEditor>
  );
};

class Index extends React.Component {
  render() {
    return <StrategyFlowGraph />;
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
// export default StrategyFlowGraph;
