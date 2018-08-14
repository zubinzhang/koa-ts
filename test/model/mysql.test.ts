import * as moment from 'moment';

import { testModel } from '../../src/model';

describe('mysql测试：', () => {
  it('create:', async () => {
    const data = await testModel.userinfo.create({
      userId: parseInt(moment().format('X')),
      userName: '单元测试添加',
      group: 1,
    });
    expect(data).toBeTruthy();
  });

  it('findOne:', async () => {
    const data = await testModel.userinfo.findOne({ raw: true });
    expect(data).toBeTruthy();
  });
});
