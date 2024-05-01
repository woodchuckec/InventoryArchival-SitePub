import { Breadcrumb, Layout, Menu, MenuProps, theme } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [{
        key: 'sub',
        label: 'Menu',
        icon: <AppstoreOutlined />,
        children: [
          { key: 'allListings', label: 'See All',  },
          { key: '6', label: 'Option 6' },
        ],
      }];

const HomePage = () => {
      const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    return (
        <Layout style={{minHeight:"100vh"}}>
          <Content style={{ padding: '0 48px' }}>
            <Breadcrumb style={{ justifyContent:"center", margin: '16px 0' }}>
            </Breadcrumb>
            <div
              style={{
                backgroundColor: "black",
                minHeight: "80vh",
                padding: 24,
                borderRadius: borderRadiusLG,
              }}
            >
                <Menu
                  style={{ width: 256 }}
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  mode="inline"
                  items={items}
                />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }} className="footer">
            Not affiliated with Yeezy. Photos from @EnigmaCuration and @library_archv on Instagram and Grailed.
              <br></br>
              2024.
          </Footer>
        </Layout>
    );
} 

export default HomePage;