import { Breadcrumb, Button, DatePicker, Divider, Form, Input, Select, Space, Table, TimePicker, Tabs } from 'antd'
import css from './demo.module.css'
import FormItem from 'antd/es/form/FormItem'
import locale from 'antd/es/date-picker/locale/zh_CN'
import TextArea from 'antd/es/input/TextArea'

const { RangePicker } = DatePicker

export default function Demo() {
    return (
        <div className={css.demo}>
            <header>
                <Breadcrumb
                    items={[
                        { title: '首页' },
                        { title: '年度协议管理' },
                        { title: '二级商协议' },
                        { title: '新增二级商协议' },
                    ]}
                />
                <h2>新增二级商协议</h2>
            </header>

            <Divider
                children={
                    <div className={css.divider}>
                        <div className={css.numberDot}>1</div>
                        <h4>协议主体</h4>
                    </div>
                }
            />

            <Form
                layout='inline'
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    background: 'white',
                    marginInline: '16px',
                    padding: '16px',
                    gap: '12px 0'
                }}
            >
                <FormItem
                    name="customer"
                    label="协议客户"
                    rules={[{ required: true }]}
                >
                    <Select
                        style={{ width: 'fit-content' }}
                        defaultValue={['上海正野医药有限公司']}
                        options={[
                            { value: '上海正野医药有限公司' },
                            { value: '上海无遮科技有限公司' }
                        ]}
                    />
                </FormItem>

                <FormItem
                    name="satus"
                    label="协议状态"
                >
                    <Select
                        style={{ width: 'fit-content' }}
                        defaultValue={['正常']}
                        options={[
                            { value: '正常' },
                            { value: '异常' }
                        ]}
                    />
                </FormItem>

                <FormItem
                    label="购进指标"
                >
                    <Select
                        name="purchaseIndicatorType"
                        style={{ width: 'fit-content' }}
                        defaultValue={['金额']}
                        options={[
                            { value: '金额' },
                            { value: '指标二' },
                            { value: '指标三' }
                        ]}
                    />
                    <Input
                        name="purchaseIndicator"
                        style={{ width: 'fit-content', marginLeft: '8px' }}
                        placeholder="输入金额/数量"
                        type='number'
                    />
                </FormItem>

                <FormItem
                    label="纯销指标"
                >
                    <Select
                        name="saleIndicatorType"
                        style={{ width: 'fit-content' }}
                        defaultValue={['金额']}
                    />
                    <Input
                        name="purchaseIndicator"
                        style={{ width: 'fit-content', marginLeft: '8px' }}
                        placeholder="输入金额/数量"
                        type='number'
                    />
                </FormItem>

                <FormItem
                    name="area"
                    label="销售区域"
                >
                    <Select
                        style={{ width: 'fit-content' }}
                        defaultValue={['全国']}
                        options={[
                            { value: '全国' },
                            { value: '地区一' },
                            { value: '地区二' },
                            { value: '地区三' }
                        ]}
                        mode="multiple"
                    />
                </FormItem>

                <FormItem
                    label="签订时间"
                >
                    <DatePicker
                        locale={locale}
                        name="date"
                        placeholder='选择日期'
                    />
                    <TimePicker
                        name="time"
                        placeholder='选择时间'
                        style={{ marginLeft: '8px' }}
                    />
                </FormItem>

                <FormItem
                    label="购进渠道"
                >
                    <Select
                        style={{ width: 'fit-content' }}
                        defaultValue={['指定渠道']}
                        options={[
                            { value: '指定渠道' },
                            { value: '其他' }
                        ]}
                    />
                </FormItem>

                <Table
                    style={{ gridColumn: "1 / 3" }}
                    pagination={false}
                    size='small'
                    dataSource={[
                        {
                            key: '1',
                            code: '8J000090',
                            name: '宁波九州通药业有限公司',
                            address: '浙江省',
                        },
                        {
                            key: '2',
                            code: 'BJ000192',
                            name: '国药控股精华有限公司',
                            address: '浙江省',
                        },
                        {
                            key: '3',
                            code: 'BJ000283',
                            name: '老百姓药业有限公司',
                            address: '浙江省',
                        }
                    ]}
                    columns={[
                        {
                            title: '指定渠道编码',
                            dataIndex: 'code',
                            key: 'code',
                        },
                        {
                            title: '指定渠道名称',
                            dataIndex: 'name',
                            key: 'name',
                        },
                        {
                            title: '所在省',
                            dataIndex: 'address',
                            key: 'address',
                        },
                        {
                            title: '操作',
                            key: 'action',
                            render: () => (
                                <Space size="middle">
                                    <a>选择</a>
                                </Space>
                            ),
                        }
                    ]}
                />
            </Form>

            <Divider
                children={
                    <div className={css.divider}>
                        <div className={css.numberDot}>2</div>
                        <h4>产品策略</h4>
                    </div>
                }
            />

            <div
                style={{
                    display: 'flex',
                    fontSize: '14px',
                    alignItems: 'center',
                    paddingInline: '16px'
                }}
            >
                <Button type='primary' size='small'>添加产品</Button>
                <div style={{ marginLeft: '24px' }}>
                    购进总指标（万元）:
                    <em style={{ fontWeight: '900' }}>¥152.65</em>
                </div>
                <div style={{ marginLeft: '32px' }}>
                    指标按季度分解（万元）:
                    <em style={{ fontWeight: '900' }}>【Q1】¥12.5，【Q2】¥12.5，【Q3】12.5，【Q4】12.5</em>
                </div>
                <div style={{ marginLeft: '24px' }}>
                    纯销总指标（万元）:
                    <em style={{ fontWeight: '900' }}>¥152.65</em>
                </div>
            </div>

            <Form
                layout='inline'
                style={{
                    background: 'white',
                    width: 'calc(100% - 32px)',
                    marginLeft: '16px',
                    padding: '8px 16px',
                    marginTop: '8px',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <FormItem
                    label='产品：'
                    name='product'
                >
                    <Select
                        style={{ width: 'fit-content' }}
                        defaultValue={['选择产品']}
                        options={[
                            { value: '选择产品' },
                            { value: '产品A' },
                            { value: '产品B' },
                            { value: '产品C' }
                        ]}
                    />
                </FormItem>

                <div style={{ color: '#4F8AFE', marginRight: '80px' }}>美复胶丸 24粒/盒</div>

                <FormItem
                    label='协议效期：'
                    name='expiration'
                >
                    <RangePicker
                        locale={locale}
                    />
                </FormItem>

                <Button
                    type='default'
                    size='small'
                    danger
                    style={{ marginLeft: 'auto' }}
                >
                    删除
                </Button>
            </Form>

            <div
                style={{
                    background: 'white',
                    width: 'calc(100% - 32px)',
                    marginLeft: '16px',
                    boxSizing: 'border-box',
                    padding: '8px 16px',
                    marginTop: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Table
                    style={{ width: '100%' }}
                    pagination={false}
                    size='small'
                    dataSource={[{}]}
                    columns={[
                        {
                            title: '协议价（元）',
                            dataIndex: 'xieyiPrice',
                            key: 'xieyiPrice',
                            render: () => (
                                <>
                                    <Input
                                        placeholder='请输入'
                                    />
                                </>
                            )
                        },
                        {
                            title: '票折（元）',
                            dataIndex: 'piaozhePrice',
                            key: 'piaozhePrice',
                            render: () => (
                                <>
                                    <Input
                                        placeholder='请输入'
                                    />
                                </>
                            )
                        },
                        {
                            title: '购进指标量（大单位）',
                            dataIndex: 'inNumberBig',
                            key: 'inNumberBig',
                            render: () => (
                                <>
                                    <Input
                                        placeholder='请输入'
                                    />
                                </>
                            )
                        },
                        {
                            title: '购进指标量（小单位）',
                            dataIndex: 'inNumberSmall',
                            key: 'inNumberSmall',
                            render: () => (
                                <>
                                    <Input
                                        placeholder='请输入'
                                    />
                                </>
                            )
                        },
                        {
                            title: '购进金额（万元）',
                            dataIndex: 'amount',
                            key: 'amount',
                            render: () => (
                                <>
                                    <Input
                                        placeholder='请输入'
                                    />
                                </>
                            )
                        },
                        {
                            title: '纯销指标量（小单位）',
                            dataIndex: 'outNumberSmall',
                            key: 'outNumberSmall',
                            render: () => (
                                <>
                                    <Input
                                        placeholder='请输入'
                                    />
                                </>
                            )
                        },
                        {
                            title: '纯销指标金额（万元）',
                            dataIndex: 'outNumber',
                            key: 'outNumber',
                            render: () => (
                                <>
                                    <Input
                                        placeholder='请输入'
                                    />
                                </>
                            )
                        },
                    ]}
                />

                <Table
                    style={{ width: '100%' }}
                    pagination={false}
                    size='small'
                    dataSource={[{}]}
                    columns={[
                        {
                            title: '分销奖励',
                            dataIndex: 'fenxiaojiangli',
                            key: 'fenxiaojiangli',
                            render: () => (
                                <>
                                    <Input
                                        placeholder='请输入'
                                    />
                                </>
                            )
                        },
                        {
                            title: '费用科目',
                            dataIndex: 'feyongkemu',
                            key: 'feyongkemu',
                            render: () => (
                                <>
                                    <Select
                                        placeholder='请输入'
                                        defaultValue='单选项1'
                                        options={[
                                            { value: '单选项1' },
                                            { value: '单选项2' },
                                            { value: '单选项3' }
                                        ]}
                                    />
                                </>
                            )
                        },
                        {
                            title: '零售配送',
                            dataIndex: 'lingshoupeisong',
                            key: 'lingshoupeisong',
                            render: () => (
                                <>
                                    <Input
                                        placeholder='请输入'
                                    />
                                </>
                            )
                        },
                        {
                            title: '费用科目',
                            dataIndex: 'feiyongkemuA',
                            key: 'feiyongkemuA',
                            render: () => (
                                <>
                                    <Select
                                        mode="multiple"
                                        style={{ flex: 1 }}
                                        defaultValue='单选项1'
                                        options={[
                                            { value: '单选项1' },
                                            { value: '单选项2' },
                                            { value: '单选项3' }
                                        ]}
                                    />
                                </>
                            )
                        },
                        {
                            title: '医疗配送商',
                            dataIndex: 'yiliaopeisongshang',
                            key: 'yiliaopeisongshang',
                            render: () => (
                                <>
                                    <Input
                                        placeholder='请输入'
                                    />
                                </>
                            )
                        },
                        {
                            title: '费用科目',
                            dataIndex: 'feiyongkemuB',
                            key: 'feiyongkemuB',
                            render: () => (
                                <>
                                    <Select
                                        mode="multiple"
                                        style={{ flex: 1 }}
                                        defaultValue='单选项1'
                                        options={[
                                            { value: '单选项1' },
                                            { value: '单选项2' },
                                            { value: '单选项3' }
                                        ]}
                                    />
                                </>
                            )
                        },
                        {
                            title: '自定义7',
                            dataIndex: 'customization7',
                            key: 'customization7',
                            render: () => (
                                <>
                                    <DatePicker
                                        locale={locale}
                                        placeholder='请选择'
                                    />
                                </>
                            )
                        }
                    ]}
                />
            </div>

            <Divider
                children={
                    <div className={css.divider}>
                        <div className={css.numberDot}>3</div>
                        <h4>补充协议</h4>
                    </div>
                }
            />

            <div
                style={{
                    display: 'flex',
                    fontSize: '14px',
                    alignItems: 'center',
                    paddingInline: '16px',
                    height: '40px'
                }}
            >
                <Tabs
                    type="card"
                    items={new Array(3).fill(null).map((_, i) => {
                        const id = String(i + 1);
                        return {
                            label: `补充协议 ${id}`,
                            key: id,
                        }
                    })}
                />
                <Button type='primary' size='small' style={{ marginLeft: 'auto', marginRight: '16px' }}>新增</Button>
            </div>

            <div
                style={{
                    background: 'white',
                    width: 'calc(100% - 32px)',
                    marginLeft: '16px',
                    marginBottom: '32px',
                    boxSizing: 'border-box',
                    padding: '8px 16px',
                    marginTop: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div style={{ display: 'flex', marginBottom: '12px'}}>
                    <div>协议内容：</div>
                    <Button
                        type='default'
                        size='small'
                        danger
                        style={{ marginLeft: 'auto' }}
                    >
                        删除
                    </Button>
                </div>
                <TextArea
                    autoSize={{
                        minRows: 3,
                        maxRows: 5,
                    }}
                    style={{background: '#F5F5F5'}}
                />
            </div>

            <div
                style={{width: '100%', background: 'white'}}
            >
                <Button type='primary' style={{marginLeft: '16px'}}>保存</Button>
            </div>
        </div>
    )
}