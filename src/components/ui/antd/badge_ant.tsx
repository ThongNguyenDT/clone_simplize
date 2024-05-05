import React from 'react';
import { BellFilled } from '@ant-design/icons';
import {Badge} from 'antd';
import { BellOutlined } from "@ant-design/icons";

interface AntdBadgeProps {
  count?: number
  closed? : boolean
}



const AntdBadge: React.FC<AntdBadgeProps> = ({count, closed}) => (
  <Badge count={count} >
    {closed?
      <BellOutlined className={"text-xl text-[--foreground] dark:text-white"}/>
      :<BellFilled className={"text-xl text-gray-500"}/>}
  </Badge>

);

export default AntdBadge;