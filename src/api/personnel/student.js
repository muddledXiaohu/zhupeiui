
import request from '@/utils/request'

// 获取路由
export const getStudentList = (data) => {
  return request({
    url: '/system/student/list',
    method: 'post',
    data
  })
}