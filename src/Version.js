import React, { useState, useEffect } from "react";
import { Layout, Breadcrumb } from 'antd';

import { Table } from "antd";

const { Content } = Layout;

function Version() {


  const [versions, setversions] = useState([]);
  
  useEffect(() => {
      fetch('/version').then(response => {
          if (response.ok){
            return response.json();
          }
        }).then(versions=>setversions(versions))
  }, []);

  const columns=[
    {
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: 'Component',
      dataIndex: 'component',
    },
    {
      title: 'Version',
      dataIndex: 'version',
    },
    {
      title: 'Environment',
      dataIndex: 'environment',
      filters: [
        { text: 'dev', value: 'dev'},
        { text: 'uat', value: 'uat'},
        { text: 'prod', value: 'prod'},
      ],
      onFilter: (value, record) => record.environment.indexOf(value) === 0
    },
    {
      title: 'Health',
      dataIndex: 'health',
      filters: [
        { text: 'green', value: 'green'},
        { text: 'red', value: 'red'},
      ],
      onFilter: (value, record) => record.health.indexOf(value) === 0
    },
  ];



  return (
    <Layout className="layout">
    <Content style={{ padding: '0 10px' }}>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
      <Breadcrumb.Item>Component version</Breadcrumb.Item>
    </Breadcrumb>
    <div className="Version">
      <div className="Version-header">
        <h2> Component Version</h2>
        <Table dataSource={versions} 
        rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' :  'table-row-dark'}
        columns={columns} 
        pagination={false}/>
      </div>
    </div>
    </Content>
    </Layout>
  );
}

export default Version;


//https://gist.github.com/sebinbabu/4d0df261190b48d5afa42d84a4c3c8a3