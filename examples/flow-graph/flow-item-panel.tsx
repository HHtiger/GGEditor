import { Card, Col, Collapse, Row } from 'antd';
import React from 'react';

import styles from './index.less';
import { Action } from './model/action/action';
import { ControlEnd } from './model/control/control-end';
import { ControlFork } from './model/control/control-fork';
import { ControlJoin } from './model/control/control-join';
import { ControlStart } from './model/control/control-start';
import { RuleRule } from './model/rule/rule-rule';
import { StrategyChild } from './model/strategy/strategy-child';
import ItemPanel from '@/components/ItemPanel';

const { Panel } = Collapse;
const FlowItemPanel = () => (
  <ItemPanel className={styles.editorItem}>
    <Collapse defaultActiveKey={['1', '2', '3', '4']}>
      <Panel header="控制元素" key="1">
        <Row gutter={[16, 16]}>
          <Col span={6}> {ControlStart.Item} </Col>
          <Col span={6}> {ControlEnd.Item} </Col>
          <Col span={6}> {ControlFork.Item} </Col>
          <Col span={6}> {ControlJoin.Item} </Col>
        </Row>
      </Panel>
      <Panel header="规则集" key="2">
        {RuleRule.Item}
        {/* <Row gutter={[16, 16]}>
          <Col span={8}> {RuleRule.Item} </Col>
          <Col span={8}> {ControlEnd.Item} </Col>
          <Col span={8}> {ControlFork.Item} </Col>
        </Row> */}
      </Panel>
      <Panel header="动作元素" key="3">
        {Action.Item}
      </Panel>
      <Panel header="子策略流" key="4">
        {StrategyChild.Item}
      </Panel>
    </Collapse>
  </ItemPanel>
);

export default FlowItemPanel;
