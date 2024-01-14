
export default {
  props: {
  },
  data() {
    return {
      tableData: [
        {
          year: '三年制',
          yearname:'第一年',
          cccc:550,
        },
      ]
    }
  },

  methods: {
  },
  render() {
    const { tableData } = this
    return (<div>
      <el-form label-position="left" vModel={tableData} class="demo-form-inline">
        <el-table
          data={tableData}
          height="80vh"
          style="width: 100%">
          <el-table-column
            align="center"
            header-align="center"
            label="带教老师奖金"
            width="440"
          >
            <el-table-column
              align="center"
              header-align="center"
              prop="year"
              label="年制"
              width="220" />
            <el-table-column
              align="center"
              header-align="center"
              prop="yearname"
              label="基数名称"
              width="220" />
          </el-table-column>
          <el-table-column
            align="center"
            header-align="center"
            label="省级"
            prop="cccc"
            {...{
              scopedSlots: {
                default: props => {
                  return (<el-form-item prop={`tableData${[props.$index]}.cccc`}>
                      <el-input-number style="width:100%" size="small" vModel={tableData[props.$index].cccc}></el-input-number>
                  </el-form-item>)
                }
              }
            }} />
        </el-table>
      </el-form>
    </div>)
  }
}