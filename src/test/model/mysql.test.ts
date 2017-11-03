import { expect } from 'chai';
import { workModel } from '../../model';

describe('mysql测试：', () => {
  it('findOne:', async () => {
    const data = await workModel.doeworks.findOne({ raw: true, });
    expect(data).to.a('object');
  });
});
