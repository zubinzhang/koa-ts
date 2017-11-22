import { expect } from 'chai';
import { testModel } from '../../src/model';

describe('mysql测试：', () => {
  it('findOne:', async () => {
    const data = await testModel.test.findOne({ raw: true, });
    expect(data).to.a('object');
  });
});
