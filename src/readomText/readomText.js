import {useState} from 'react';
import { Timeline, Radio, Row, Col, Input} from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
const { TextArea } = Input;
class Xjsb extends React.Component {
    state = {
        value: '',
    };

    onChange = ({ target: { value } }) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;

        return (
            <>
                {/* <TextArea placeholder="Autosize height based on content lines" autoSize />
          <div style={{ margin: '24px 0' }} /> */}
                <TextArea
                    placeholder="Autosize height with minimum and maximum number of lines"
                    autoSize={{ minRows: 2, maxRows: 6 }}
                />
                {/* <div style={{ margin: '24px 0' }} /> */}
                {/* <TextArea
            value={value}
            onChange={this.onChange}
            placeholder="Controlled autosize"
            autoSize={{ minRows: 3, maxRows: 5 }}
          /> */}
            </>
        );
    }
}

function TimelimeLabelDemo() {
    const [mode, setMode ] = useState('left');
    const [value,setValue] = useState('输入内容');

    const onChange = e => {
        // setMode(e.target.value);
        setValue(e.target.value)
    };

    return (

        <div>
            {/* <Radio.Group
        onChange={onChange}
        value={mode}
        style={{
            marginBottom: 20,
        }}
        >
            <Radio value="left">Left</Radio>
            <Radio value="right">Right</Radio>
            <Radio value="alternate">Alternate</Radio>
        </Radio.Group> */}
            <br />
            <h1 style={{
                textAlign: 'center'
            }}>随笔</h1>
            <br />
            <Row>
                <Col span={12}>
                    <h2 style={{textAlign: 'center'}}>预览</h2>
                    <Timeline mode={mode}>
                        <Timeline.Item label="2015-09-01">Create a services</Timeline.Item>
                        <Timeline.Item label="2015-09-01 09:12:11">Solve initial network problems</Timeline.Item>
                        <Timeline.Item>Technical testing</Timeline.Item>
                        <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
                    </Timeline>
                </Col>
                <Col span={12}>
                    <h2 style={{textAlign: 'center'}}>添加</h2>
                    <Xjsb />
                </Col>
            </Row>
            {/* <Timeline mode={mode}>
            <Timeline.Item label="2015-09-01">Create a services</Timeline.Item>
            <Timeline.Item label="2015-09-01 09:12:11">Solve initial network problems</Timeline.Item>
            <Timeline.Item>Technical testing</Timeline.Item>
            <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
        </Timeline> */}
        </div>
    )
}



function ReadomText() {
    return (
        <div>
            <TimelimeLabelDemo />
        </div>
    )
}

export default ReadomText;