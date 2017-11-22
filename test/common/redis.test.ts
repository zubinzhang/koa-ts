import { expect } from 'chai';
import { redis } from '../../src/common/redis';

describe('redis test', () => {
  it('set:', async () => {
    await redis.set('test', 'hello', 'EX', 60);
    const data = await redis.get('test');
    expect(data).to.eq('hello');
  });
});
