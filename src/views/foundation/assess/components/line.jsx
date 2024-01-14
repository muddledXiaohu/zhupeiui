
export default {
  props: {
  },
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    add() {
      this.tableData = [...this.tableData, ...[{editor: true}]]
    },
    del(e) {
      console.log(e);
    }
  },
  render() {
    const {tableData} = this
    return (<div>
      <el-form label-position="left" vModel={tableData} class="demo-form-inline">
        <el-table
          data={tableData}
          style="width: 100%">
          <el-table-column
            label="序号"
            width="180"
            {...{scopedSlots: {
              default: props => {
                return (<span>
                  {props.$index+1}
                </span>)
              }
            }}}
          />
          <el-table-column
            label="内容"
            prop="bbb"
            width="400"
            {...{scopedSlots: {
              default: props => {
                return (<el-form-item prop={tableData[props.$index].bbb}>
                  <el-input vModel={tableData[props.$index].bbb} placeholder="请输入内容"></el-input>
                </el-form-item>)
              }
            }}}/>
          <el-table-column
            label="细则"
            prop="cccc"
            {...{scopedSlots: {
              default: props => {
                return (<el-form-item prop={tableData[props.$index].cccc}>
                  <el-input vModel={tableData[props.$index].cccc} placeholder="请输入内容"></el-input>
                </el-form-item>)
              }
            }}}/>
          <el-table-column
            label="分值"
            prop="eeee"
            width="120"
            {...{scopedSlots: {
              default: props => {
                return (<el-form-item prop={tableData[props.$index].eeee}>
                  <el-input vModel={tableData[props.$index].eeee}></el-input>
                </el-form-item>)
              }
            }}}/>
          <el-table-column
            label="操作"
            width="80"
            {
              ...{
                scopedSlots: {
                  default: props => {
                    return (
                      // <el-button
                      //   type="primary"
                      //   size="mini"
                      //   on-click={this.openDialog.bind(this,'edit',props.row)}
                      // >
                      //   编辑
                      // </el-button>
                      <el-button type="text"onClick={()=>this.del(props.$index)}>删除</el-button>
                    )
                  }
                }
              }
            }
          />
        </el-table>
      </el-form>
        <el-button style="width: 100%; border-top: 0" onClick={()=>this.add()}>添加</el-button>
      </div>)
  }
}