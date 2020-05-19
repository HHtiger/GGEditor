export enum ControlNode {
  FLOW_START = 'flow-start',
  FLOW_END = 'flow-end',
  FLOW_FORK = 'flow-fork',
  FLOW_JOIN = 'flow-join',
}

export enum RuleNode {
  RULE_RULE = 'rule-rule',
  RULE_TABLE = 'rule-table',
  RULE_TREE = 'rule-tree',
}

export enum ActionNode {
  ACTION = 'action-action',
}

export enum StrategyNode {
  STRATEGY_CHILD = 'strategy-child',
}

export const labeCfg = {
  labelCfg: {
    style: {
      fontStyle: 'bold',
    },
  },
};

export const styleCfg = {
  lineWidth: 2,
};
