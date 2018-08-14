import * as moment from 'moment';

import { mongoModel } from '../../src/model';

describe('mongo测试：', () => {
  it('create:', async () => {
    const data = await mongoModel.userInfo.create({
      userId: moment().format('X'),
      userName: '单元测试添加',
      group: 1,
    });
    expect(data).toBeTruthy();
  });

  it('findOne:', async () => {
    const data = await mongoModel.userInfo.findOne();

    expect(data).toBeTruthy();
  });
});
