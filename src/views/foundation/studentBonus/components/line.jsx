
export default {
  props: {
  },
  data() {
    return {
      tableData: [
        {
          year: '三年制',
          yearname:'第一年',
          xh1: 300,
          xh2: 300,
          xh3: 300,
          xh4: 1000,
          cccc:550,
          eeee:0,
          xhaa: 0,
          heji: 2450
        },
        {
          year: '三年制',
          yearname:'第一年',
          xh1: 300,
          xh2: 300,
          xh3: 300,
          xh4: 1000,
          cccc:550,
          eeee:0,
          xhaa: 0,
          heji: 2450
        },
        {
          year: '三年制',
          yearname:'第一年',
          xh1: 300,
          xh2: 300,
          xh3: 300,
          xh4: 1000,
          cccc:550,
          eeee:0,
          xhaa: 0,
          heji: 2450
        },
        {
          year: '三年制',
          yearname:'第一年',
          xh1: 300,
          xh2: 300,
          xh3: 300,
          xh4: 1000,
          cccc:550,
          eeee:0,
          xhaa: 0,
          heji: 2450
        },
        {
          year: '三年制',
          yearname:'第一年',
          xh1: 300,
          xh2: 300,
          xh3: 300,
          xh4: 1000,
          cccc:550,
          eeee:0,
          xhaa: 0,
          heji: 2450
        },
        {
          year: '三年制',
          yearname:'第一年',
          xh1: 300,
          xh2: 300,
          xh3: 300,
          xh4: 1000,
          cccc:550,
          eeee:0,
          xhaa: 0,
          heji: 2450
        },
        {
          year: '三年制',
          yearname:'第一年',
          xh1: 300,
          xh2: 300,
          xh3: 300,
          xh4: 1000,
          cccc:550,
          eeee:0,
          xhaa: 0,
          heji: 2450
        },
        {
          year: '三年制',
          yearname:'第一年',
          xh1: 300,
          xh2: 300,
          xh3: 300,
          xh4: 1000,
          cccc:550,
          eeee:0,
          xhaa: 0,
          heji: 2450
        },
        {
          year: '三年制',
          yearname:'第一年',
          xh1: 300,
          xh2: 300,
          xh3: 300,
          xh4: 1000,
          cccc:550,
          eeee:0,
          xhaa: 0,
          heji: 2450
        },
        {
          year: '三年制',
          yearname:'第一年',
          xh1: 300,
          xh2: 300,
          xh3: 300,
          xh4: 1000,
          cccc:550,
          eeee:0,
          xhaa: 0,
          heji: 2450
        },
        {
          year: '三年制',
          yearname:'第一年',
          xh1: 300,
          xh2: 300,
          xh3: 300,
          xh4: 1000,
          cccc:550,
          eeee:0,
          xhaa: 0,
          heji: 2450
        },
        {
          year: '三年制',
          yearname:'第一年',
          xh1: 300,
          xh2: 300,
          xh3: 300,
          xh4: 1000,
          cccc:550,
          eeee:0,
          xhaa: 0,
          heji: 2450
        },
        {
          year: '三年制',
          yearname:'第一年',
          xh1: 300,
          xh2: 300,
          xh3: 300,
          xh4: 1000,
          cccc:550,
          eeee:0,
          xhaa: 0,
          heji: 2450
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
            label="学员奖金"
            width="240"
          >
            <el-table-column
              align="center"
              header-align="center"
              prop="year"
              label="年制"
              width="120" />
            <el-table-column
              align="center"
              header-align="center"
              prop="yearname"
              label="基数名称"
              width="120" />
          </el-table-column>
          <el-table-column
            align="center"
            header-align="center"
            label="国家"
          >
            <el-table-column
              align="center"
              header-align="center"
              label="住宿"
              prop="xh1"
              {...{
                scopedSlots: {
                  default: props => {
                    return (<el-form-item prop={`tableData${[props.$index]}.xh1`}>
                      <el-input-number size="small" vModel={tableData[props.$index].xh1}></el-input-number>
                    </el-form-item>)
                  }
                }
              }} />
            <el-table-column
              align="center"
              header-align="center"
              label="餐饮"
              prop="xh2"
              {...{
                scopedSlots: {
                  default: props => {
                    return (<el-form-item prop={`tableData${[props.$index]}.xh2`}>
                      <el-input-number size="small" vModel={tableData[props.$index].xh2}></el-input-number>
                    </el-form-item>)
                  }
                }
              }} />
            <el-table-column
              align="center"
              header-align="center"
              label="交通"
              prop="xh3"
              {...{
                scopedSlots: {
                  default: props => {
                    return (<el-form-item prop={`tableData${[props.$index]}.xh3`}>
                      <el-input-number size="small" vModel={tableData[props.$index].xh3}></el-input-number>
                    </el-form-item>)
                  }
                }
              }} />
            <el-table-column
              align="center"
              header-align="center"
              label="考勤"
              prop="xh4"
              {...{
                scopedSlots: {
                  default: props => {
                    return (<el-form-item prop={`tableData${[props.$index]}.xh4`}>
                      <el-input-number size="small" vModel={tableData[props.$index].xh4}></el-input-number>
                    </el-form-item>)
                  }
                }
              }} />
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
                      <el-input-number size="small" vModel={tableData[props.$index].cccc}></el-input-number>
                  </el-form-item>)
                }
              }
            }} />
          <el-table-column
            align="center"
            header-align="center"
            label="市级"
            prop="eeee"
            {...{
              scopedSlots: {
                default: props => {
                  return (<el-form-item prop={`tableData${[props.$index]}.eeee`}>
                    <el-input-number size="small" vModel={tableData[props.$index].eeee}></el-input-number>
                  </el-form-item>)
                }
              }
            }} />
            <el-table-column
              align="center"
              header-align="center"
              label="其他"
              prop="xhaa"
              {...{
                scopedSlots: {
                  default: props => {
                    return (<el-form-item prop={`tableData${[props.$index]}.xhaa`}>
                      <el-input-number size="small" vModel={tableData[props.$index].xhaa}></el-input-number>
                    </el-form-item>)
                  }
                }
            }} />
            <el-table-column
              align="center"
              header-align="center"
              label="合计"
              prop="heji"/>
        </el-table>
      </el-form>
    </div>)
  }
}