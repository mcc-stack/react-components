import { Layout, Menu, Breadcrumb } from 'antd'
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons'
// import TreeTable from "../../components/TreeTable";
// import DndDemo from '../../components/DndDemo'
import TreeTable from '../../components/TreeTable'
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

export default function BasicLayout() {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header className='header'>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
          <Menu.Item key='1'>nav 1</Menu.Item>
          <Menu.Item key='2'>nav 2</Menu.Item>
          <Menu.Item key='3'>nav 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className='site-layout-background'>
          <Menu
            mode='inline'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}>
            <SubMenu key='sub1' icon={<UserOutlined />} title='subnav 1'>
              <Menu.Item key='1'>option1</Menu.Item>
              <Menu.Item key='2'>option2</Menu.Item>
              <Menu.Item key='3'>option3</Menu.Item>
              <Menu.Item key='4'>option4</Menu.Item>
            </SubMenu>
            <SubMenu key='sub2' icon={<LaptopOutlined />} title='subnav 2'>
              <Menu.Item key='5'>option5</Menu.Item>
              <Menu.Item key='6'>option6</Menu.Item>
              <Menu.Item key='7'>option7</Menu.Item>
              <Menu.Item key='8'>option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key='sub3'
              icon={<NotificationOutlined />}
              title='subnav 3'>
              <Menu.Item key='9'>option9</Menu.Item>
              <Menu.Item key='10'>option10</Menu.Item>
              <Menu.Item key='11'>option11</Menu.Item>
              <Menu.Item key='12'>option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className='site-layout-background'
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: '#fff',
            }}>
            {/* <TreeTable /> */}
            {/* <DndDemo /> */}
            <TreeTable
              dataSource={[
                { key: '1', title: 'name1' },
                {
                  key: '2',
                  title: 'name2',
                  children: [
                    { key: '2-1', title: 'name2 - 1' },
                    { key: '2-2', title: 'name2 - 2' },
                    { key: '2-3', title: 'name2 - 3' },
                  ],
                },
                {
                  key: '3',
                  title: 'name3',
                  children: [
                    { key: '3-1', title: 'name3 - 1' },
                    { key: '3-2', title: 'name3 - 2' },
                    {
                      key: '3-3',
                      title: 'name3 - 3',
                      children: [
                        { key: '3-3-1', title: 'name3 - 3 - 1' },
                        { key: '3-3-2', title: 'name3 - 3 - 2' },
                      ],
                    },
                  ],
                },
                {
                  key: '4',
                  title: 'name4',
                },
              ]}
              // dataSource={[
              //   { key: '1', title: 'name1' },
              //   { key: '2', title: 'name2' },
              //   { key: '3', title: 'name3' },
              //   { key: '4', title: 'name4' },
              // ]
              // }
            />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
