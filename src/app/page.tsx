import DefaultLayout from "@/layouts/default/defaultLayout";
import { DownloadOutlined, AlignLeftOutlined, FilterOutlined, MessageOutlined } from '@ant-design/icons';
import { Space, Button, Row, Col, Card, Avatar } from "antd";
import LinearBarChart from "@/components/linearBarChart/linearBarChart";
import IntervalChart from "@/components/intervalChart/intervalChart";


export default function Home() {
  return (
    <DefaultLayout>
      <Row justify='space-between' align="middle">
        <Col span={12}>
          <h1>Covid 19 data charts</h1>
        </Col>
        <Col span={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Space>
            <Button type="default" icon={<DownloadOutlined />}>Export to PDF</Button>
            <Button type="default" icon={<AlignLeftOutlined />}>Notes (3)</Button>
            <Button type="default" icon={<FilterOutlined />}>Filter (9+)</Button>
          </Space>
        </Col>
      </Row>
      <Row>
        <Col span={11}>
          <Card title="Daily proportion of COVID infections relative to the total population" bordered={false}>
            <LinearBarChart />
            <Row justify="space-between" align="middle">
              <Col>
                <Avatar src="https://i.pravatar.cc/150?img=3" />
              </Col>
              <Col>
                <Button type="default" icon={<MessageOutlined />} >3</Button>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={11} offset={2}>
          <Card title="Monthly Death Numbers for the Year 2020" bordered={false}>
            <IntervalChart />
            <Row justify="space-between" align="middle">
              <Col>
                <Avatar src="https://i.pravatar.cc/150?img=3" />
              </Col>
              <Col>
                <Button type="default" icon={<MessageOutlined />} >3</Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </DefaultLayout>
  )
}
