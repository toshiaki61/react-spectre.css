/* @flow */
import React from 'react';
import classnames from 'classnames';
import noop from 'noop';

function calculateStartAndEnd(
  current: number,
  total: number,
  each: number,
): { start: number, end: number } {
  if (total <= (2 * each) + 5) {
    return { start: 1, end: total };
  } else if (current <= each + 3) {
    return { start: 1, end: (2 * each) + 3 };
  } else if (current >= total - (each + 2)) {
    return { start: total - (2 * each) - 2, end: total };
  }
  return { start: current - each, end: current + each };
}

function pages(current: number, total: number, each: number = 1, skip: string = '...'): Array<{ label: string, value: number }> {
  const page = calculateStartAndEnd(current, total, each);
  const result = [];
  if (page.start > 1) {
    result.push({ label: '1', value: 1 });
  }
  if (page.start > 2) {
    result.push({ label: skip, value: 0 });
  }
  for (let i = page.start; i <= page.end; i += 1) {
    result.push({ label: `${i}`, value: i });
  }
  if (page.end < total - 1) {
    result.push({ label: skip, value: 0 });
  }
  if (page.end < total) {
    result.push({ label: `${total}`, value: total });
  }
  return result;
}

export type ItemProps = {
  label: string,
  current: number,
  value: number,
  disabled?: boolean,
  onClick: (e: Event, value: number) => void,
};
const Item = ({ current, value, label, disabled, onClick }: ItemProps) => {
  const classes = classnames('page-item', {
    disabled,
    active: value === current,
  });
  const linkProp = {};
  if (disabled) {
    linkProp.tabIndex = -1;
  }
  return (
    <li className={classes}>
      <a href="#" {...linkProp} onClick={e => onClick(e, value)}>{label}</a>
    </li>
  );
};
Item.defaultProps = {
  value: 1,
  disabled: false,
  onClick: noop,
};

export type TitleProps = {
  title: string,
  subtitle: string,
  current: number,
  value: number,
  onClick: (e: Event, value: number) => void,
};
const Title = ({ title, subtitle, current, value, onClick }: TitleProps) => {
  const classes = classnames('page-item', {
    'page-prev': current > value,
    'page-next': current < value,
  });
  return (
    <li className={classes}>
      <a href="#" onClick={e => onClick(e, value)}>
        <div className="page-item-subtitle">{subtitle}</div>
        <div className="page-item-title h5">{title}</div>
      </a>
    </li>
  );
};

export type PaginationProps = {
  label: {
    previous: string | React.DOM,
    next: string | React.DOM,
    skip: string | React.DOM,
  },
  total: number,
  current: number,
  each: number,
  title: {
    prev: { title: string, subtitle: string },
    next: { title: string, subtitle: string },
  },
  onClick: (e: Event) => void,
};
const Pagination = ({ label, current, total, each, title, onClick }: PaginationProps) => {
  if (title) {
    return (
      <ul className="pagination">
        <Title
          title={title.prev.title}
          subtitle={title.prev.subtitle}
          current={current}
          value={current - 1}
          onClick={onClick}
        />
        <Title
          title={title.next.title}
          subtitle={title.next.subtitle}
          current={current}
          value={current + 1}
          onClick={onClick}
        />
      </ul>
    );
  }
  const list = pages(current, total, each, label.skip);
  return (
    <ul className="pagination">
      <Item
        current={current}
        label={label.previous}
        disabled={current === 1}
        value={current - 1}
        onClick={onClick}
      />
      {list.map((row, i) => {
        const key = `paging-${i}`;
        return (
          <Item key={key} {...row} current={current} disabled={!row.value} onClick={onClick} />
        );
      })}
      <Item
        current={current}
        label={label.next}
        disabled={current === total}
        value={current + 1}
        onClick={onClick}
      />
    </ul>
  );
};
Pagination.defaultProps = {
  label: { previous: 'Previous', next: 'Next', skip: '...' },
  total: 1,
  current: 1,
  each: 1,
  title: undefined,
  onClick: noop,
};

export default Pagination;
