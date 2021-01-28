import { Layout } from 'antd'
import TreeTable from '../../components/TreeTable'
const { Content } = Layout

export default function BasicLayout() {
  return (
    <Layout style={{ height: '100vh' }}>
      <Layout>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className='site-layout-background'
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: '#fff',
            }}>
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
            />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
