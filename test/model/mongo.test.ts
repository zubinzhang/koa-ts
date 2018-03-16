import { expect } from 'chai';
import { mongoModel } from '../../src/model';
import * as moment from 'moment';

describe('mongo测试：', () => {
  it('create:', async () => {
    const data = await mongoModel.userInfo.create({
      userId: moment().format('X'),
      userName: '单元测试添加',
      group: 1,
    });
    expect(data).to.a('object');
  });

  it('findOne:', async () => {
    const data = await mongoModel.userInfo.findOne();

    expect(data).to.a('object');
  });
});
