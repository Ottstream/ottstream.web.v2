import React from 'react';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { LinkedListItem, LinkedListsType } from './types';
import { Link } from 'react-router-dom';
const Breadcrumbs: React.FC<{ lists: LinkedListsType }> = ({ lists }) => {
  return (
    <AntdBreadcrumb>
      {lists.map((elem: LinkedListItem, index: number) => (
        <AntdBreadcrumb.Item key={index}>
          <Link to={elem.link}>{elem.title}</Link>
        </AntdBreadcrumb.Item>
      ))}
    </AntdBreadcrumb>
  );
};

export default Breadcrumbs;
